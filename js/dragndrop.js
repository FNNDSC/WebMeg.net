/**
 * Initialize dropzone or manual selection.
 */
function initialize_dragndrop() {

	// drag enter and drag leave
	MEGFIFF = [];
	myTimer = undefined;

	MEGFIFF.coordX=0;
	MEGFIFF.coordY=0;

	var dropZone = document.getElementById('drop_zone');
	dropZone.addEventListener('dragover', handleDragOver, false);
	dropZone.addEventListener('drop', on_drop, false);
	dropZone.addEventListener('dragleave', on_drag_leave, false);
	dropZone.addEventListener('dragenter', on_drag_enter, false);
	
	var nondropZone = document.getElementById('nondrop_zone');
	nondropZone.addEventListener('dragover', handleNonDrop, false);
	
	// Select file manually
	document.getElementById('fileSelector').addEventListener('change', handleFileSelection, false);
	
	// Select event file
	document.getElementById('eventSelector').addEventListener('change', loadEvents, false); 
	
	// Select macro file
	document.getElementById('macSelector').addEventListener('change', macSelect, false);
	
	//on mousescroller
	document.body.addEventListener("mousewheel", mousescroll, false);
	
	document.onmousemove=function(e) {
		   var e=e||window.event;
		   MEGFIFF.coordX=e.pageX||e.clientX+document.body.scrollLeft;
		}
};

/**
 * Callback whenever a file is moved into the div
 */ 
function handleDragOver(evt) {
	evt.stopPropagation();
	evt.preventDefault();
	this.style.opacity='0.8';
	evt.dataTransfer.dropEffect = 'copy';
}

/**
 * Callback whenever a file is moved into the div
 */ 
function on_drag_enter(evt) {
	evt.stopPropagation();
	evt.preventDefault();
	$('#drop_zone').css('opacity',0.8);
}

function handleNonDrop(evt) {
	evt.stopPropagation();
	evt.preventDefault();
	evt.dataTransfer.dropEffect = 'none';
}
/**
 * Callback whenever a file is moved out of the div
 */
function on_drag_leave(evt) {
	  // avoid further processing by the browser
	  evt.stopPropagation();
	  evt.preventDefault();
	  $('#drop_zone').css('opacity',0.4)
};

/**
 * Callback whenever a file is released on the div
 */
function on_drop(evt) {
	// avoid further processing by the browser
	evt.stopPropagation();
	evt.preventDefault();

	// grab the file list
	var _filelist = evt.dataTransfer.files;  

	// Return if user dragged more than one file 
	if (_filelist.length != 1) {
		alert('Drag only one file please');
		return;
	}
	load_files(_filelist);
};

function mousescroll(event) {
	if (event.wheelDelta < 0) moveLeft();
	else moveRight();
}

function handleFileSelection(evt) {    
    var files = evt.target.files; // The files selected by the user (as a FileList object).
    load_files(files);
  } // handleFileSelection

function loadEvents(evt) {    
	var files=evt.target.files;
    var file=files[0];           
    var reader=new FileReader();
    reader.onload=function() {
      event=addLoadEvents(this.result);            
    }
    reader.readAsText(file)
  } 

function macSelect(evt) {
	var files=evt.target.files;
    var file=files[0];           
    var reader=new FileReader();
    reader.onload=function() {
      loadMac(this.result);            
    }
    reader.readAsText(file)
  } 

window.onkeydown=function(e) {
	var MF=MEGFIFF;
    if (e.keyCode==38 || e.keyCode==40) { // Up and Down Key
    	if (MF.plotType=='raster') {
    		if (e.keyCode==40) MF.scale=MF.scale/2;
    		else MF.scale=2*MF.scale;
    	}
    	else {
    		if(e.keyCode==38) MF.butterAmp=1;
    		else MF.butterAmp=-1;
    	}
    	var delayTime=1000; // in ms
	    if (myTimer) clearTimeout(myTimer);
	    myTimer=setTimeout('scale();',delayTime);
    }

    if (e.keyCode==46) { // Delete key
        if(isEmpty(MF.userSelection)) alert('No Channels selected to delete');
        else {
        	var temp, temp1;
        	MF.numCh-=MF.userSelection.length;
        	for (var i=0,j=MF.userSelection.length;i<j;i++) {
        		temp=MF.allChs.indexOf(MF.userSelection[i]);
        		MF.indDis[temp]=-1;
        		temp1=MF.chNames.indexOf(MF.userSelection[i]);
        		MF.chNames.splice(temp1,1);
        		MF.colors.splice(temp1,1);
        		MF.goodCh.splice(temp1,1);
        		if (MF.plotType=="butterfly") MEG_data.splice(temp1,1);
        	}

        	if (MF.plotType=="raster") {
        		MEG_data=slice2d(finalData,MF.indDis);
        		MEG_data=displayOperations();
        	}
        	GFP(MEG_data);
        	redraw();
        	MF.userSelection=[];
        }
    }
    
    if (e.keyCode==39) moveRight();
        
    if (e.keyCode==37) moveLeft();
    
    if (e.which==82 && e.ctrlKey) { // Press Ctrl + r for adding Event type
    	e.preventDefault();
    	addEventGroup(e);
    }
    
    if (e.which==69 && e.ctrlKey) { // Press Ctrl + e for adding Event
    	e.preventDefault();
    	addEvent();
    }
    
    if (e.which==68 && e.ctrlKey) { // Press Ctrl + d for deleting Event
    	e.preventDefault();
    	deleteEvent();
    }
    
    if (e.which==70 && e.ctrlKey) { // Press Ctrl + f for deleting event group currently selected
    	e.preventDefault();
    	deleteEventGroup();
    }
    
    if (e.which==66 && e.ctrlKey) { // Press Ctrl + b for superimposing data
    	e.preventDefault();
    	butterflyPlot();
    	extremesPlot();
    }
    
    if (e.which==67 && e.ctrlKey) seriesPlot();// Press Ctrl + c for time series data
    	
    if (e.which==107) { // Press + to add channels
    	if(MF.indDis[MF.indDis.length-1]+1<MEGFIFF.allChs.length) {
        	MF.numCh++;
    		MF.indDis.push(MF.indDis[MF.indDis.length-1]+1)
			MEG_data=slice2d(finalData,MF.indDis);
			MF.goodCh.push(1);
			MF.chNames.push(MF.allChs[MF.numCh-1]);
			MF.colors.push("#1E90FF");
			MEG_data=displayOperations();
			redraw();
    	}
    }
    
    if (e.which==109) { // Press - to subtract channels
    	if(MF.indDis[MF.indDis.length-1]+1>1) {
    		MF.numCh--;
    		MF.indDis.pop(MF.indDis[MF.indDis.length-1]+1)
			MEG_data=slice2d(finalData,MF.indDis);
			MEG_data=displayOperations();
			MF.goodCh.pop();
			MF.chNames.pop();
			MF.colors.pop();
			MEG_data=displayOperations();
			redraw();
    	}
    }
}

// Resize the window

window.onresize=function(e){
	clearTimeout(this.id);
    this.id = setTimeout(doneResizing, 500);
};

function doneResizing(){
	try {
		MEGFIFF.width=this.window.innerWidth * 1;
		MEGFIFF.height=this.window.innerHeight * 0.9;
		redraw();
	}
	catch(err) {};
}
   
function checkData(){
	// Check if the any data is loaded
	try {MEG_data;}
	catch (err) {
		alert('Please load the file first');
		return 0;
	}
}

function moveLeft(){
	var MF=MEGFIFF;
	var disLen=chart.xAxis[0].getExtremes().max-chart.xAxis[0].getExtremes().min;
	if (MF.startPlot-disLen>0) {
		MF.startPlot=MF.startPlot - disLen; 
		MF.endPlot=MF.endPlot - disLen;
	}
	else {
		MF.endPlot=disLen;
		MF.startPlot=0;
	}
	if (MF.plotType=='raster') extremesPlot();
	else butterflyPlot();
}

function moveRight(){
	var MF=MEGFIFF;
	var disLen=chart.xAxis[0].getExtremes().max-chart.xAxis[0].getExtremes().min;
	if (MF.endPlot+disLen < chart.xAxis[0].getExtremes().dataMax) {
		MF.startPlot = MF.startPlot + disLen; 
		MF.endPlot = MF.endPlot + disLen;
	}
	else {
		MF.endPlot = chart.xAxis[0].getExtremes().dataMax;
		MF.startPlot = MF.endPlot - disLen;
	}
	if (MF.plotType == 'raster') extremesPlot()
	else butterflyPlot();
}

function scale(){
	var MF=MEGFIFF;
	if (MF.plotType=='raster') {
    	MEG_data=slice2d(finalData,MF.indDis);
		MEG_data=displayOperations();
	}
	else {
	    	if (MF.minRaster==undefined) defineButter();
	    	var temp=Math.abs((MF.minRaster < MF.maxRaster)?MF.minRaster:MF.maxRaster)*MF.butterAmp;
	    	MF.minRaster=MF.minRaster + 0.2 * temp;
	    	MF.maxRaster=MF.maxRaster - 0.2 * temp;
	}
	redraw();
}
