function avgParams() {
	var MF=MEGFIFF;
	// Check if the any data is loaded
	try {MF;}
	catch (err) {
		alert('Please load the file first');
		return;
	}
	
	// Check if user has defined an event type
	if (MF.eventNames.length == 0) {
		alert("No event type exists!! Please create an event type first");
		return;
	}
	
	// Check if user has selected an event group
	if (MF.currentEventGroup.length == 0) {
		alert("No event type selected!! Select event type and then average.");
		return;
	}
		
	$('div#avgDialog').dialog('open');
};

function startAvg() {
	var MF=MEGFIFF;
	var prestim=document.getElementById('prestim').value;
	var poststim=document.getElementById('poststim').value;
	if (isNaN(prestim) || isNaN(poststim)) return;
	if(Math.abs(prestim)<1 || Math.abs(poststim)<1) return;
	prestim=parseFloat(prestim)/1000;
	poststim=parseFloat(poststim)/1000;
	if (poststim<prestim) return;
	MF.prestim=prestim;
	MF.poststim=poststim;
	$('div#avgDialog').dialog('close');
	//localStorage.avg=1;
	//avgWindow=window.open(window.location.href,'avgWindow',"height=600,width=1200");
	var numSam=Math.round(((poststim-prestim) * MF.sfreq)) - 1;
	var indexEvent=MF.eventNames.indexOf(MF.currentEventGroup);
	var temp=slice2d(finalData,MF.indDis);
	MEG_data=[];
	for (var i=0;i<MF.numCh;i++) MEG_data[i]=new Array(numSam);
	
	for (var i=0;i<MF.numCh;i++) {
		for (var j=0;j<numSam;j++) MEG_data[i][j]=0;
	}
	
	for (var i=0;i<MF.eventTimes[indexEvent].length;i++) {
		if (MF.eventTimes[indexEvent][i]+prestim >= 0 && MF.eventTimes[indexEvent][i]+poststim<MF.dataLength) {
			temp1=dataSlicing(temp, MF.eventTimes[indexEvent][i]+prestim, MF.eventTimes[indexEvent][i]+poststim,MF.sfreq);
			for(var j=0;j<MF.numCh;j++) {
				for (var k=0;k<numSam;k++) MEG_data[j][k] += temp1[j][k];		
			}
		}
	}
	
	var combo=absMax(MEG_data,1,1);
	MEG_data=normalizeArray(MEG_data,combo[0]);
	MEG_data=deMean(MEG_data);
	MF.startPlot=0;
	MF.endPlot=numSam;
	MF.disWid=numSam;
	MF.avgDis=true;
	MF.disName='Avg_'+MF.currentEventGroup;
	MF.plotType='butterfly';
	GFP(MEG_data);
	plotData_highChart(MEG_data);
	
/*	avgWindow.MF=clone(MF);
	//avgWindow.MF.fileName='D3_responses'
	avgWindow.MF.startPlotTime=prestim;
	avgWindow.MF.endPlotTime=poststim;
	avgWindow.MF.fileName='Avg_'+MF.currentEventGroup;
	//avgWindow.MF.dataLength=(poststim-prestim) * 1000;
	avgWindow.MF.displayDuration=poststim-prestim;
	avgWindow.plotData_highChart=clone(window.plotData_highChart);
	avgWindow.MF.plotType='butterfly';
	avgWindow.finalData=MEG_data2;
	avgWindow.MEG_data=MEG_data2;
	delete MEG_data2;*/
}