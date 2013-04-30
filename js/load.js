function load_files(filelist) {
$('#drop_zone').css('opacity',0);
$('#drop_zone').css('z-index',-1);
	// call the load function with the file list
	var _number_of_files = filelist.length;
	for ( var i = 0; i < _number_of_files; i++) {
		// Check if valid format is provided
		var fileExtension = filelist[i].name.split('.').pop();
		if (fileExtension != "fif" && fileExtension != "edf") {
			alert(fileExtension + ' is not currently supported!!!\n Supported file formats include *_raw.fiff and *.edf');
			return;
		}
		MEGFIFF = [];
		MEGFIFF.fileName = filelist[0].name;
		MEGFIFF.fileType = fileExtension;
		var reader = new FileReader();
		reader.onerror = errorHandler;
		reader.onload = loadHandler(filelist[i]);
		// start reading this file
		reader.readAsArrayBuffer(filelist[i]);
	}

}

//
// the HTML5 File Reader callbacks
//

// setup callback for errors during reading
var errorHandler = function(e) {

	console.log('Error:' + e.target.error.code);

};

// setup callback after reading
var loadHandler = function(file) {

	return function(e) {

		// reading complete
		var _data = e.target.result;
		// all done, start the parsing
		//var w = new Worker(displayGif.js);
		var combo = parse(_data);
		data_info = combo[0];
		finalData = combo[1];
		
		if (MEGFIFF.fileType == 'fif') {
		
		// get the info and the data
		time = combo[2];
		var chs = new Array();
		for (var i = 0;i < 74;i++) {
			chs[i] = data_info.info.chs[i].ch_name;
		}
		
		// Initialize plotting parameters
		chartInitialize(74, data_info.info.sfreq,chs);
		// Slice data to the required data to be plotted
		MEGFIFF.allChs = [];
		for (var i = 0;i < data_info.info.chs.length;i++) {
			MEGFIFF.allChs[i] = data_info.info.chs[i].ch_name;
		}
		MEGFIFF.plotType = 'raster';
		MEG_data = finalData.slice(0,MEGFIFF.numChannels);
		MEG_data1 = dataSlicing(MEG_data,MEGFIFF.startPlotTime,MEGFIFF.endPlotTime,MEGFIFF.sfreq);
		var maxValue = absMax(MEG_data1,1);
		MEGFIFF.scale = Math.pow(10,Math.floor(Math.log(maxValue)/Math.log(10))) / (1e-11);
		MEGFIFF.finalScale = MEGFIFF.scale;
		// Scale data for proper display
		MEG_data1 = displayOperations();
		// Plot the data
		plotData_highChart(MEG_data1);
		
		MEGFIFF.chanLocs = [];
		for (var i = 0;i < MEGFIFF.chNames.length;i++) {
			MEGFIFF.chanLocs.push(new Array());
			MEGFIFF.chanLocs[i][0] = data_info.info.chs[i].loc[0];
			MEGFIFF.chanLocs[i][1] = data_info.info.chs[i].loc[1];
			MEGFIFF.chanLocs[i][2] = data_info.info.chs[i].loc[2];
		}
	}
		
		else if(MEGFIFF.fileType == 'edf') {
			chartInitialize(data_info.ns, data_info.samples[0],data_info.label);
			MEGFIFF.allChs = [];
			for (var i = 0;i < data_info.label.length;i++) {
				MEGFIFF.allChs[i] = data_info.label[i];
			}
			MEGFIFF.scale = 1;
			MEGFIFF.finalScale = MEGFIFF.scale;
			seriesPlot();
		}
		
	};

};
