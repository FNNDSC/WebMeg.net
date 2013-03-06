function avgParams() {
	// Check if the any data is loaded
	try {
		MEGFIFF;
	}
	catch (err) {
		alert('Please load the file first');
		return;
	}
	
	// Check if user has defined an event type
	if (MEGFIFF.eventNames.length == 0) {
		alert("No event type exists!! Please create an event type first");
		return;
	}
	
	// Check if user has selected an event group
	if (MEGFIFF.currentEventGroup.length == 0) {
		alert("No event type selected!! Select event type and then average.");
		return;
	}
		
	$('div#avgDialog').dialog('open');
};

function startAvg() {
	var prestim = document.getElementById('prestim').value;
	var poststim = document.getElementById('poststim').value;
	if (isNaN(prestim) || isNaN(poststim)) return;
	if(Math.abs(prestim) < 1 || Math.abs(poststim) < 1) return;
	prestim = parseFloat(prestim) / 1000;
	poststim = parseFloat(poststim) / 1000;
	if (poststim < prestim) return;
	MEGFIFF.prestim = prestim;
	MEGFIFF.poststim = poststim;
	$('div#avgDialog').dialog('close');
	localStorage.avg = 1;
	avgWindow = window.open('http://chris/c/html5dragndrop/','avgWindow',"height=600,width=1200");
	var numSam = Math.round(((poststim - prestim) * MEGFIFF.sfreq));
	var indexEvent = MEGFIFF.eventNames.indexOf(MEGFIFF.currentEventGroup);
	MEG_data = finalData.slice(0,MEGFIFF.numChannels);
	var MEG_data2 = new Array(MEGFIFF.numChannels);
	for (var i = 0;i < MEGFIFF.numChannels;i++) {
		MEG_data2[i] = new Array(numSam);
	}
	
	for (var i = 0;i < MEGFIFF.numChannels;i++) {
		for (var j = 0;j < numSam;j++) {
			MEG_data2[i][j] = 0;
		}
	}
	
	for (var i = 0;i < MEGFIFF.eventTimes[indexEvent].length;i++) {
		if (MEGFIFF.eventTimes[indexEvent][i] - prestim >= 0 && MEGFIFF.eventTimes[indexEvent][i] + poststim <= MEGFIFF.dataLength) {
			MEG_data = finalData.slice(0,MEGFIFF.numChannels);
			MEG_data = dataSlicing(MEG_data, MEGFIFF.eventTimes[indexEvent][i] + prestim, MEGFIFF.eventTimes[indexEvent][i] + poststim,MEGFIFF.sfreq);
			for(var j = 0;j < MEGFIFF.numChannels;j++) {
				for (var k = 0; k < numSam;k++) MEG_data2[j][k] += MEG_data[j][k];		
			}
		}
	}
	
	var maxValue = absMax(MEG_data2,1);
	MEG_data2 = normalizeArray(MEG_data2,maxValue);
	MEG_data2 = deMean(MEG_data2);
	avgWindow.MEGFIFF = clone(MEGFIFF);
	//avgWindow.MEGFIFF.fileName = 'D3_responses'
	avgWindow.MEGFIFF.startPlotTime = prestim;
	avgWindow.MEGFIFF.endPlotTime = poststim;
	avgWindow.MEGFIFF.displayDuration = poststim - prestim;
	avgWindow.plotData_highChart = clone(window.plotData_highChart);
	avgWindow.MEGFIFF.plotType = 'butterfly';
	avgWindow.finalData = MEG_data2;
	avgWindow.MEG_data1 = MEG_data2;
	delete MEG_data2;
}