/**
 * Initialize our dropzone.
 */
function initialize_dragndrop() {

  // drag enter and drag leave
  document.body.addEventListener("dragenter", on_drag_enter, false);
  document.body.addEventListener("dragleave", on_drag_leave, false);
  document.getElementById('fileSelector').addEventListener('change', handleFileSelection, false); // Add an onchange event listener for the <input id="fileSelector"> element.
  document.getElementById('eventSelector').addEventListener('change', loadEvents, false); // Add an onchange event listener for the <input id="fileSelector"> element.
  
  // on drop
  document.body.addEventListener("drop", on_drop, false);
  
//on mousescroller
  document.body.addEventListener("mousewheel", mousescroll, false);
  
};

/**
 * Callback whenever a file is pulled into the browser window.
 */
function on_drag_enter() {

  var _dropzone = document.getElementById('dropzone');
  _dropzone.style.display = 'block';
  
};

/**
 * Callback whenever a file is moved out of the browser window.
 */
function on_drag_leave() {

  var _dropzone = document.getElementById('dropzone');
  _dropzone.style.display = 'none';
  
};

/**
 * Callback whenever a file is released over the browser window.
 */
function on_drop(event) {

  // avoid further processing by the browser
  event.stopPropagation();
  event.preventDefault();
  
  // grab the file list
  var _filelist = event.dataTransfer.files;  
  // hide the box
  on_drag_leave();
  
  // Return if user dragged more than one file 
  if (_filelist.length != 1) {
      console.log('Drag only one file please');
      return;
  }
        
  load_files(_filelist);
};

function mousescroll(event) {
	if (event.wheelDelta < 0) {
	//plotData();
	}
	else {
		//plotData();
    }
}

function handleFileSelection(evt) {    
    var files = evt.target.files; // The files selected by the user (as a FileList object).
    load_files(files);
  } // handleFileSelection

function loadEvents(evt) {    
	var files = evt.target.files;
    var file = files[0];           
    var reader = new FileReader();
    reader.onload = function() {
      event = addLoadEvents(this.result);            
    }
    reader.readAsText(file)
  } // handleFileSelection

window.onkeydown = function(e) {
    if (e.keyCode == 40) { // Down key
    	if (MEGFIFF.plotType == 'raster') {
        	MEGFIFF.scale = 1 / 2;
        	MEGFIFF.finalScale = MEGFIFF.finalScale * MEGFIFF.scale;
    		MEG_data1 = rasterPlot(MEG_data1);
    	}
    	else {
    		var temp = Math.abs((MEGFIFF.minRaster < MEGFIFF.maxRaster)?MEGFIFF.minRaster:MEGFIFF.maxRaster);
    		MEGFIFF.minRaster = MEGFIFF.minRaster - 0.2 * temp;
    		MEGFIFF.maxRaster = MEGFIFF.maxRaster + 0.2 * temp;
    	}
    	chart.destroy();
    	plotData_highChart(MEG_data1);
    }
    
    if (e.keyCode == 38) { // Up key
    	if (MEGFIFF.plotType == 'raster') {
    		MEGFIFF.scale = 2;
        	MEGFIFF.finalScale = MEGFIFF.finalScale * MEGFIFF.scale;
    		MEG_data1 = rasterPlot(MEG_data1);
    	}
    	else {
    		var temp = Math.abs((MEGFIFF.minRaster < MEGFIFF.maxRaster)?MEGFIFF.minRaster:MEGFIFF.maxRaster);
    		MEGFIFF.minRaster = MEGFIFF.minRaster + 0.2 * temp;
    		MEGFIFF.maxRaster = MEGFIFF.maxRaster - 0.2 * temp;
    	}
    	chart.destroy();
    	plotData_highChart(MEG_data1);
    }
    
    if (e.keyCode == 46) { // Delete key
        if(isEmpty(MEGFIFF.userSelection)) {
        	alert('No Channels selected to delete');
        }
        else {
        	for (var i = 0;i < MEGFIFF.userSelection.length;i++) {
        		MEGFIFF.visible[MEGFIFF.userSelection[i]] = false;
        	}
        	MEGFIFF.scale = 1;
        	chart.destroy();
        	plotData_highChart(MEG_data1);
        }
    }
    if (e.keyCode == 39) { // Right key
    	var disLen = MEGFIFF.displayDuration;
    	if (MEGFIFF.endPlotTime + disLen < MEGFIFF.dataLength) {
    		MEGFIFF.startPlotTime = MEGFIFF.startPlotTime + disLen; 
    		MEGFIFF.endPlotTime = MEGFIFF.endPlotTime + disLen;
    	}
    	else {
    		MEGFIFF.endPlotTime = MEGFIFF.dataLength;
    		MEGFIFF.startPlotTime = MEGFIFF.endPlotTime - disLen;
    	}
    	if (MEGFIFF.plotType == 'raster') {
    		delete MEG_data1;
        	MEG_data = finalData.slice(0,MEGFIFF.numChannels);
    		MEG_data1 = displayOperations();
    		chart.destroy();
    		plotData_highChart(MEG_data1);
    	}
    	else {
    		butterflyPlot();
    	}
    	
    }
    
    
    if (e.keyCode == 37) { // Left key
    	var disLen = MEGFIFF.displayDuration;
    	if (MEGFIFF.startPlotTime - disLen > 0) {
    		MEGFIFF.startPlotTime = MEGFIFF.startPlotTime - disLen; 
    		MEGFIFF.endPlotTime = MEGFIFF.endPlotTime - disLen;
    	}
    	else {
    		MEGFIFF.endPlotTime = disLen;
    		MEGFIFF.startPlotTime = 0;
    	}
    	if (MEGFIFF.plotType == 'raster') {
    		delete MEG_data1;
        	MEG_data = finalData.slice(0,MEGFIFF.numChannels);
    		MEG_data1 = displayOperations();
    		chart.destroy();
    		plotData_highChart(MEG_data1);
    	}
    	else {
    		butterflyPlot();
    	}
    }
    
    
    if (e.keyCode == 33) { // Page Up key
    	if (MEGFIFF.endPlotTime + MEGFIFF.displayDuration < MEGFIFF.dataLength) {
    		MEGFIFF.startPlotTime = MEGFIFF.startPlotTime + MEGFIFF.displayDuration; 
    		MEGFIFF.endPlotTime = MEGFIFF.endPlotTime + MEGFIFF.displayDuration;
    	}
    	else {
    		MEGFIFF.endPlotTime = MEGFIFF.dataLength;
    		MEGFIFF.startPlotTime = MEGFIFF.endPlotTime - MEGFIFF.displayDuration;
    	}
    	if (MEGFIFF.plotType == 'raster') {
        	MEG_data = finalData.slice(0,MEGFIFF.numChannels);
    		MEG_data1 = displayOperations();
    		chart.destroy();
    		plotData_highChart(MEG_data1);
    	}
    	else {
    		butterflyPlot();
    	}
    }
    
    
    if (e.keyCode == 34) { // Page Down key
    	if (MEGFIFF.startPlotTime - 10 > 0) {
    		MEGFIFF.startPlotTime = MEGFIFF.startPlotTime - MEGFIFF.displayDuration; 
    		MEGFIFF.endPlotTime = MEGFIFF.endPlotTime - MEGFIFF.displayDuration;
    	}
    	else {
    		MEGFIFF.endPlotTime = MEGFIFF.displayDuration;
    		MEGFIFF.startPlotTime = 0;
    	}
    	if (MEGFIFF.plotType == 'raster') {
        	MEG_data = finalData.slice(0,MEGFIFF.numChannels);
    		MEG_data1 = displayOperations();
    		chart.destroy();
    		plotData_highChart(MEG_data1);
    	}
    	else {
    		butterflyPlot();
    	}
    }
    
    
    if (e.which == 82 && e.ctrlKey) { // Press Crtl + R for adding Event type
    	e.preventDefault();
    	addEventGroup(e);
    }
    
    if (e.which == 69 && e.ctrlKey) { // Press Crtl + e for adding Event
    	e.preventDefault();
    	addEvent();
    }
    
    if (e.which == 68 && e.ctrlKey) { // Press Ctrl + d for deleting Event
    	e.preventDefault();
    	deleteEvent();
    }
    
    if (e.which == 70 && e.ctrlKey) { // Press Ctrl + f for deleting event group currently selected
    	e.preventDefault();
    	deleteEventGroup();
    }
    
    if (e.which == 66 && e.ctrlKey) { // Press Ctrl + b for superimposing data
    	e.preventDefault();
    	butterflyPlot();
    }
    
    if (e.which == 67 && e.ctrlKey) { // Press Ctrl + c for time series data
    	seriesPlot();
    }
}

// Resize the window
window.onresize = function(e) {
	try {
		MEGFIFF.width = this.window.innerWidth * 1;
		MEGFIFF.height = this.window.innerHeight * 0.9;
		chart.destroy();
		plotData_highChart(MEG_data1);
	}
	catch(err) {};
}

function checkData() {
	// Check if the any data is loaded
	try {
		MEGFIFF;
	}
	catch (err) {
		alert('Please load the file first');
		return 0;
	}
}



