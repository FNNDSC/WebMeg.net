/* Function to initialize parameters for plotting
 */
function chartInitialize(numChannels, sfreq, chNames) {
	// Set initial parameters for plotting
	MEGFIFF.sfreq = sfreq;
	MEGFIFF.startPlotTime = 0; // In seconds
	MEGFIFF.endPlotTime = 10; // In seconds
	MEGFIFF.displayDuration = 10;
	MEGFIFF.numChannels = numChannels;
	MEGFIFF.dataLength = finalData[0].length/sfreq;
	MEGFIFF.numBadChannels = [];
	MEGFIFF.badChannels = [];
	for (var i = 0;i < chNames.length;i++){
		MEGFIFF.badChannels[i] = 0
	}
	
	MEGFIFF.chNames = chNames;
	MEGFIFF.firstGood = []; // Index of first good channel
	MEGFIFF.userSelection = []; // Stores series selected by the user
	
	MEGFIFF.visible = [];
	for (var i = 0;i < MEGFIFF.numChannels;i++) {
		MEGFIFF.visible[i] = true;
	}
	MEGFIFF.colors = []; // Colors to be used for plotting
	for (var i = 0;i < MEGFIFF.numChannels;i++) {
		MEGFIFF.colors[i] = '#1E90FF';
	}
	
	MEGFIFF.goodChannels = [];
	for (var i = 0;i < MEGFIFF.numChannels;i++) {
		MEGFIFF.goodChannels[i] = 1;
	}
	
	MEGFIFF.width = this.window.innerWidth * 1;
	MEGFIFF.height = this.window.innerHeight * 0.9;
	
	MEGFIFF.numEvent = 0; // Number of different events
	MEGFIFF.eventNames = [];
	MEGFIFF.currentEventGroup = [];
	MEGFIFF.currentEvent = [];
	MEGFIFF.eventTimes = new Array();
	MEGFIFF.eventIdGroup = new Array();
	MEGFIFF.plotType = 'butterfly';
	MEGFIFF.LA = false;
	MEGFIFF.HA = false;
	MEGFIFF.BPA = false;
	MEGFIFF.BRA = false;
	MEGFIFF.LP = [];
	MEGFIFF.HP = [];
	MEGFIFF.BP = [];
	MEGFIFF.BR = [];
	MEGFIFF.dispTopo = false;
}