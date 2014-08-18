/* Function to initialize parameters for plotting
 */
function chartInitialize(numChannels, sfreq, chNames) {
	var MF=MEGFIFF;

	// Set initial parameters for plotting
	MF.sfreq=sfreq;
	MF.startPlot=0;
	MF.endPlot=10*sfreq;
	MF.dataLength=finalData[0].length/sfreq;
	
	MF.chNames=new Array();
	for (var i=0;i<MF.numCh;i++) MF.chNames[i]=chNames[i];
	
	MF.userSelection=[]; // Stores series selected by the user
	
	MF.visible=[];
	for (var i=0;i<MF.numCh;i++) MF.visible[i]=true;
	
	MF.colors = []; // Colors to be used for plotting
	for (var i=0;i<MF.numCh;i++) MF.colors[i]='#1E90FF';
	
	MF.goodCh=[];
	for (var i=0;i<MF.numCh;i++) MF.goodCh[i]=1;
	
	MF.indDis=[];
	for (var i=0;i<chNames.length;i++) MF.indDis[i]=-1;
	for (var i=0;i<MF.numCh;i++) MF.indDis[i]=i;

	MF.width=this.window.innerWidth*1;
	MF.height=this.window.innerHeight*0.9;
	
	MF.numEvent=0; // Number of different events
	MF.eventNames=[];
	MF.currentEventGroup=[];
	MF.currentEvent=[];
	MF.eventTimes=new Array();
	MF.eventIdGroup=new Array();
	MF.plotType='butterfly';
	MF.dispTopo=false;
	MF.numTopoPoints=5;
	MF.scale=1;
	MF.chSlt=0;
	MF.butterAmp=0;
	MF.strTick=0;
	MF.avgDis=false;
	MF.prestim=0;
}