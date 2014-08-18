function saveMac(){
	var MF=MEGFIFF;
	var txt="";
	txt=MEGFIFF.fileName+"\r\n";
	txt=txt+"Sampling frequency\t" + MF.sfreq + "\r\n";
	txt=txt+"Channel Index\t" + "Good\t" + "Color\r\n";
	for(var i=0;i<MF.numCh;i++) txt=txt+MF.indDis[i] + "\t" + MF.goodCh[i] + "\t" + MF.colors[i] + "\r\n";
	txt=txt+"done\r\n";
	txt=txt+"Start Plot\t"+MF.startPlot+"\r\n";
	txt=txt+"End Plot\t"+MF.endPlot+"\r\n";
	txt=txt+"Scale\t"+MF.finalScale+"\r\n";
	
	if (MF.eventNames.length!=0) {
		txt=txt+"Events\t"+1+"\r\n";
		for (var i=0;i<MF.eventNames.length;i++) {
			for (var j=0;j<MF.eventTimes[i].length;j++) 
				txt=txt+MF.eventNames[i]+"\t"+MF.eventTimes[i][j]+"\r\n";
		}
	}
	txt=txt+"done\r\n";
	uriContent="data:application/octet-stream," + encodeURIComponent(txt);
	newWindow=window.open(uriContent);
}

function loadMac(strData){
	var MF=MEGFIFF,indTab,addGrp;
	var txt=strData.split('\n');
	
	// Check if Macro beongs to file on display
	if(txt[0]==MF.fileName){
		alert('Selected macro does not belong to this file. Select appropriate macro file');
		return;
	}
	
	// Check if data was downsampled. If yes, then downsample
	var data=finalData;
	
	var sfreq=parseFloat(txt[1].match(/\d+\.?\d*/g));
	if (sfreq!=MF.sfreq){
		var smp=data[0].length;
		var dwnfct=parseInt(MF.sfreq/sfreq);
		var newsmp=Math.floor(smp/dwnfct);
		dwnSmpSt(data,dwnfct,newsmp,MF);
	}
	
	// Display same set of Channels and mark them as visible or not visible
	MF.indDis=[];MF.goodCh=[];MF.visible=[];MF.colors=[];
	var lnTxt='',i=0,lineInd=3,lnTxt,i;
	while(txt[lineInd]!="done\r") {
		lnTxt=txt[lineInd].split('\t');
		i=lineInd-3;
		MF.indDis[i]=parseInt(lnTxt[0]);
		MF.goodCh[i]=parseInt(lnTxt[1]);
		MF.colors[i]=lnTxt[2];
		if (MF.goodCh[i]==1) MF.visible[i]=true;
		else MF.visible[i]=false;
		lineInd++;
	}
	
	lineInd++;
	MF.startPlot=parseFloat(txt[lineInd].match(/\d+\.?\d*/g));
	lineInd++;
	MF.endPlot=parseFloat(txt[lineInd].match(/\d+\.?\d*/g));
	lineInd++;
	MF.finalScale=parseFloat(txt[lineInd].match(/\d+\.?\d*/g));
	
	MEG_data=slice2d(data,MF.indDis);
	MEG_data=displayOperations();
	chart.destroy();
	plotData_highChart(MEG_data);
	chart.xAxis[0].setExtremes(MF.startPlot,MF.endPlot);	
	
	
	lineInd++;
	var isEvt=parseFloat(txt[lineInd].match(/\d+\.?\d*/g));
	lineInd++;
	if(isEvt==1){
		while(txt[lineInd]!='done\r') {
			indTab=txt[lineInd].indexOf('\t');
			addGrp= txt[lineInd].substr(0,indTab);
			if (!(addGrp=="" || addGrp.match(/^[0-9a-zA-Z]+$/)==null))  {
				addEventGroup('',addGrp)
				MF.currentTime=parseInt(parseFloat(txt[lineInd].substr(indTab+1).match(/\d+\.?\d*/g))*1000)/1000;
				addEvent(true);
				lineInd++;
			}
		}
		redrawFlags();
	}
}