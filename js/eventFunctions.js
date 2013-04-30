// Function to add the event in a group
function addEvent() {
	
	var check = checkData(); if (check == 0) return;

	// Check if user has defined an event type
	if (MEGFIFF.eventNames.length == 0) {
		alert("No event type exists!! Please create an event type first");
		return;
	}
	
	// Check if user has selected an event group
	if (MEGFIFF.currentEventGroup.length == 0) {
		alert("No event type selected!! Select event type and then add event.");
		return;
	}
	
	var currentGroupIndex = MEGFIFF.eventNames.indexOf(MEGFIFF.currentEventGroup);
	
	/// Check if event with same type and time exists
	if (MEGFIFF.eventIdGroup[currentGroupIndex] > 0) {
		for (var i = 0;i < MEGFIFF.eventTimes[currentGroupIndex].length;i++) {
			if (Math.abs(MEGFIFF.currentTime - MEGFIFF.eventTimes[currentGroupIndex][i]) < 0.00001) {
				return;
			}
		}
	}
	MEGFIFF.eventIdGroup[currentGroupIndex]++;
	
	
	// Add unordered list if there is no event for that type else just add event
	if (MEGFIFF.eventTimes[currentGroupIndex].length == 0) {
		$("#" + MEGFIFF.currentEventGroup).append('<ul style="width:100px;padding"><li id = "' + MEGFIFF.currentEventGroup   + '_' + MEGFIFF.eventIdGroup[currentGroupIndex] + '" style="background-color:#8A2EB2;width:100px;left:0;height:28px" onclick="javascript:selectEvent(this.id)"><a href="#"><span style="color:#a9a9a9;">' + MEGFIFF.currentTime + 's' + '</span></a></li></ul>')
	}
	else {
		$("#" + MEGFIFF.currentEventGroup + " li:eq(" + (MEGFIFF.eventTimes[currentGroupIndex].length - 1) + ")").after('<li id = "' + MEGFIFF.currentEventGroup + '_' + MEGFIFF.eventIdGroup[currentGroupIndex] + '" style="background-color:#8A2EB2;width:100px;left:0;height:28px" onclick="javascript:selectEvent(this.id)"><a href="#"><span style="color:#a9a9a9;">' + MEGFIFF.currentTime + 's' + '</span></a></li>')	
	}
	MEGFIFF.eventTimes[currentGroupIndex][MEGFIFF.eventTimes[currentGroupIndex].length] = MEGFIFF.currentTime;
	MEGFIFF.currentEvent = MEGFIFF.currentEventGroup + '_' + MEGFIFF.eventIdGroup[currentGroupIndex];
	if ((MEGFIFF.currentTime >= MEGFIFF.startPlotTime) && (MEGFIFF.currentTime < MEGFIFF.endPlotTime)) {
	chart.addSeries({type : 'flags',data:[{x : (MEGFIFF.currentTime - MEGFIFF.startPlotTime)*MEGFIFF.sfreq,title : MEGFIFF.currentEventGroup}],shape:'squarepin',states:{hover:{fillColor:'#395C84'}},y:-chart.plotHeight,lineColor:'red'})	
	}
	 
	var eventList = $('#' + MEGFIFF.currentEventGroup + ' > ul > li');
	// Switch colors of other events to default background
	for (var i = 0;i < eventList.length;i++) {
		if (MEGFIFF.currentEvent != eventList[i].id) {
			$("#" + eventList[i].id).css('background-color',"#2d2d2d");
		}
	}
	sortEvents(); // Reorder the menu
	
};

//  Sort the events in ascending order and reorder the menu accordingly
function sortEvents() {
	var currentGroupIndex = MEGFIFF.eventNames.indexOf(MEGFIFF.currentEventGroup);
	var eventsSort = new Array(MEGFIFF.eventTimes[currentGroupIndex].length);
	for (var i = 0;i < eventsSort.length;i++) {
		eventsSort[i] = MEGFIFF.eventTimes[currentGroupIndex][i];
	}
	
	var tmp = new Array(eventsSort.length);
	var myList = $('#' + MEGFIFF.currentEventGroup + ' li');
	
	MEGFIFF.eventTimes[currentGroupIndex].sort(function(a,b){return a-b});
	
	var ul = document.getElementById(MEGFIFF.currentEventGroup).children[1];
	var sortIndex;
	for (var i = 0;i < eventsSort.length;i++) {
		sortIndex = eventsSort.indexOf(MEGFIFF.eventTimes[currentGroupIndex][i]);
		tmp[i] = myList[sortIndex];
	}
	
	for (var i = 0;i < eventsSort.length;i++) {
		ul.appendChild(tmp[i]);
	}
}
	

/* This function is to add the event by the user and update the list on the menu bar
 */
function addEventGroup(e, addGroup) {
	
	var check = checkData(); if (check == 0) return;

	
	// Prompt the user for new event name
	if (arguments.length == 1) {
		var addGroup = prompt("Enter new event type","Event" + MEGFIFF.numEvent);
	}
	
	if (addGroup == null) {
		return;
	}
	
	if (addGroup == "" || addGroup.match(/^[0-9a-zA-Z]+$/) == null)  {
		alert("Empty name or contains special characters. Try naming again")
		return;
	}
	
	
	
	// If same name exists, complain to the user 
	for (var i = 0;i < MEGFIFF.numEvent;i++) {
		if (addGroup == MEGFIFF.eventNames[i]) {
			if (arguments.length == 1) {
				alert ('Same event name exists!! Choose a different name.')
			}
			return;
		}
	}
	var numLi = $("#eventAddGroup li").length;
	// Add event type to the list
	$("#eventAddGroup > ul").append('<li id = "' + addGroup + '" style="background-color:#8A2EB2;width:180px;left:0;height:28px" onclick="javascript:selectGroup(this.id)"><a href="#"><span style="color:#a9a9a9;">' + addGroup + '</span></a></li>')
	
	// Update event information
	MEGFIFF.numEvent++;
	MEGFIFF.eventNames[MEGFIFF.numEvent - 1] = addGroup;
	MEGFIFF.eventTimes[MEGFIFF.numEvent - 1] = new Array();
	MEGFIFF.eventIdGroup[MEGFIFF.numEvent - 1] = 0;
	MEGFIFF.currentEventGroup = addGroup;
	
	// Switch the background color of the rest of event types
	for (var i = 0;i < MEGFIFF.numEvent;i++ ) {
		if (MEGFIFF.eventNames[i] != addGroup) {
			$("#" + MEGFIFF.eventNames[i]).css('background-color',"#2d2d2d");
		}
	}
	return;
}              

//Function to delete a event in the group

function deleteEvent() {
	
	var check = checkData(); if (check == 0) return;


	// Check if user has defined an event type
	if (MEGFIFF.eventNames.length == 0) {
		alert("No event type exists!! Please create an event type first");
		return;
	}
	
	// Check if user has selected an event group
	if (MEGFIFF.currentEventGroup.length == 0) {
		alert("No event type selected!! Select event type and the event to be deleted.");
		return;
	}
	
	if (MEGFIFF.currentEvent.length == 0) {
		alert("No event selected!! Select the event to be deleted.");
	}
	
	var currentGroupIndex = MEGFIFF.eventNames.indexOf(MEGFIFF.currentEventGroup);
	var eventTime = $('#' + MEGFIFF.currentEvent).text();
	eventTime = parseFloat(eventTime.match(/\d+\.?\d*/g));
	var belongToGroup = MEGFIFF.eventTimes[currentGroupIndex].indexOf(eventTime);
	if(belongToGroup == -1) {alert('Selected event does not belong to selected group.\n To delete select the group corresponding to event');return;}
	var sureDelete = confirm('Delete ' + MEGFIFF.currentEventGroup + ' : ' + eventTime + ' s');
	
	if (sureDelete) {
		$("#" + MEGFIFF.currentEvent).remove();
		var index = MEGFIFF.eventTimes[currentGroupIndex].indexOf(eventTime);
		MEGFIFF.eventTimes[currentGroupIndex].splice(index, 1);
		MEGFIFF.currentEvent = [];
		plotData_highChart(MEG_data1);
		return;
	}
	return;
}

//Function to delete a particular event group

function deleteEventGroup() {
	
	var check = checkData(); if (check == 0) return;
	
	// Check if user has defined an event type
	if (MEGFIFF.eventNames.length == 0) {
		alert("No event type exists to delete!!");
		return;
	}
	
	// Check if user has selected an event group to delete
	if (MEGFIFF.currentEventGroup.length == 0) {
		alert("No group selected. Please select the group to delete");
		return;
	}
	
	var indexEvent = MEGFIFF.eventNames.indexOf(MEGFIFF.currentEventGroup);
	
	// Ask for confirmation
	confirmDelete=confirm("Delete " + MEGFIFF.currentEventGroup + " group containing " + MEGFIFF.eventTimes[indexEvent].length + " events?");
	if(confirmDelete) {
		$("#" + MEGFIFF.currentEventGroup).remove();
		// Update values after deletion of group
		MEGFIFF.eventNames.splice(indexEvent, indexEvent);
		MEGFIFF.eventTimes.splice(indexEvent, indexEvent);
		MEGFIFF.numEvent--;
		MEGFIFF.currentEventGroup = [];
		MEGFIFF.currentEvent = [];
	}
	plotData_highChart(MEG_data1);
	return;		
}

/* This function is used to save the events defined by user
 * Author : Chiran Doshi 
 */
function saveEvents() {
	
	var check = checkData(); if (check == 0) return;

	
	// Check if user has defined an event type
	if (MEGFIFF.eventNames.length == 0) {
		alert("No events exist!! Please define events first");
		return;
	}
	
	var saveTxt = "";
	saveTxt = "Sampling frequency\t" + MEGFIFF.sfreq + "\r\n";
	
	for (var i = 0;i < MEGFIFF.eventNames.length;i++) {
		for (var j = 0;j < MEGFIFF.eventTimes[i].length;j++) {
			saveTxt = saveTxt + MEGFIFF.eventNames[i] + "\t" + MEGFIFF.eventTimes[i][j] + "\r\n";
		}
	}
	
	uriContent = "data:application/octet-stream," + encodeURIComponent(saveTxt);
	newWindow=window.open(uriContent);
}

/* Function used to select a particular event
 */

function selectEvent(evt) {
	
	// Return if selected event is clicked
	if (evt == MEGFIFF.currentEvent) return;
	var group = $('#' + evt).parent().parent().attr('id');
	var eventList = $('#' + group + ' > ul > li');
	
	// Switch colors of other events to default background
	for (var i = 0;i < eventList.length;i++) {
		if (evt != eventList[i].id) {
			$("#" + eventList[i].id).css('background-color',"#2d2d2d");
		}
		else {
			$("#" + eventList[i].id).css('background-color','#8A2EB2');
		}
	}
	MEGFIFF.currentEvent = evt;
	
	// Adjust display based on event clicked
	var timeClick = parseFloat($('#' + evt).text().match(/\d+\.?\d*/g));
	
	if ((timeClick >= MEGFIFF.startPlotTime && timeClick >= MEGFIFF.endPlotTime) || (timeClick <= MEGFIFF.startPlotTime && timeClick <= MEGFIFF.endPlotTime)) {
		MEGFIFF.startPlotTime = Math.round(timeClick) - MEGFIFF.displayDuration/2.0;
		if (MEGFIFF.startPlotTime < 0) MEGFIFF.startPlotTime = 0;
		MEGFIFF.endPlotTime = MEGFIFF.startPlotTime + MEGFIFF.displayDuration; 
		MEG_data = finalData.slice(0,MEGFIFF.numChannels);
		MEG_data1 = displayOperations();
		plotData_highChart(MEG_data1);
	}
}

/* Function to select the group on mouse click 
 */
function selectGroup(evt) {
	
	// Return if the current 
	if (MEGFIFF.currentEventGroup == evt) return;
	
	MEGFIFF.currentEventGroup = evt;
	$("#" + MEGFIFF.currentEventGroup).css('background-color',"#8A2EB2");
	
	// Switch the background color of the rest of event types
		for (var i = 0;i < MEGFIFF.numEvent;i++ ) {
			if (MEGFIFF.eventNames[i] != MEGFIFF.currentEventGroup) {
				$("#" + MEGFIFF.eventNames[i]).css('background-color',"#2d2d2d");
			}
		}
	return
}

function addLoadEvents(strData,strDelimiter) {
	// Check if the any data is loaded
		try {
			MEGFIFF;
		}
		catch (err) {
			alert('Please load the file first');
			return;
		}
		if (strData.length == 0) {
			alert('Empty file!! Please load file containing events');
			return;
		}
		var indexLine, lineString, count = 0, indexTab, evtName ;
		
		do {
			count++;
			indexLine = strData.indexOf('\n');
			lineString = strData.substr(0,indexLine);
			if (count == 1) {
				sfreq = parseFloat(lineString.match(/\d+\.?\d*/g));
				if (sfreq != MEGFIFF.sfreq) {
					alert('Loaded events do not belong to the data due to differing Sampling rates');
					return;
				}
			}
			else {
				indexTab = strData.indexOf('\t');
				addGroup= strData.substr(0,indexTab);
				if (!(addGroup == "" || addGroup.match(/^[0-9a-zA-Z]+$/) == null))  {
					addEventGroup('',addGroup)
					MEGFIFF.currentTime = parseFloat(lineString.substr(indexTab+1,indexLine).match(/\d+\.?\d*/g));
					addEvent();
				}
				
			}
			strData = strData.substr(indexLine+1, strData.length);
		} while (indexLine != -1)
    }


function setTrgParam() {
	//var check = checkData(); if (check == 0) return;
	$('div#evtDlg').dialog('open');
	 var opt,op1;
	for (var i = 0;i < MEGFIFF.allChs.length;i++) {
		opt = document.createElement("option");
		opt1 = document.createElement("option");
		document.getElementById("chList1").options.add(opt);
		opt.text = MEGFIFF.allChs[i];
		document.getElementById("chList2").options.add(opt1);
		opt1.text = MEGFIFF.allChs[i];
	}
	var trg1;
	if (document.getElementsByName('trg1')[0].checked) {
		trg1_t = detectEdge(finalData(MEGFIFF.allChs.indexOf(document.getElementById('chList1').value)));
	}
	var trg2;
	if (document.getElementsByName('trg2')[0].checked) {
		trg2_t = detectEdge(finalData(MEGFIFF.allChs.indexOf(document.getElementById('chList2').value)));
	}
}

function detectEdge(sig) {
	
}

function calParams() {
/*	var r = {mean: 0, variance: 0, deviation: 0}, var t = a.length;
	for(var m, s = 0, l = t; l--; s += a[l]);
	for(m = r.mean = s / t, l = t, s = 0; l--; s += Math.pow(a[l] - m, 2));
	r.deviation = Math.sqrt(r.variance = s / (t - 1))
	return r;*/
}

