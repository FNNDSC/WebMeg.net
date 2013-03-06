/* Function to read the edf file format. The script is converted from Matlab script to javascript.
 * The script is coded 8/27/09 by Brett Shoelson, PhD in Matlab and converted to JS by Chiran Doshi, M.S. 
 * 
 * Input : _scanner : Object corresponding to the data file
 * 
 *  Output : combo : Array containing hdr info and data
 */
function edfReader(_scanner) {
	var hdr = [];
	var record = [];
	
	_scanner._littleEndian=true // Data is in litte Endian form
	
	// Get edf version
	var temp = '';
	hdr.ver = _scanner.scan('uchar',8);
	var loopIndex = hdr.ver.length;
	for (var i = 0;i < loopIndex;i++) temp = temp + String.fromCharCode(hdr.ver[i]);
	hdr.ver = parseFloat(temp);
	
	// Get patient name
	temp = '';
	hdr.patientID = _scanner.scan('schar',80);
	loopIndex = hdr.patientID.length;
	for (var i = 0;i < loopIndex;i++) temp = temp + String.fromCharCode(hdr.patientID[i]);
	hdr.patientID = temp.trim();
	
	// Get record ID
	temp = '';
	hdr.recordID = _scanner.scan('schar',80);
	loopIndex = hdr.recordID.length;
	for (var i = 0;i < loopIndex;i++) temp = temp + String.fromCharCode(hdr.recordID[i]);
	hdr.recordID = temp.trim();
	
	// Get start date (dd.mm.yy)
	temp = '';
	hdr.startDate = _scanner.scan('schar',8);
	loopIndex = hdr.startDate.length;
	for (var i = 0;i < loopIndex;i++) temp = temp + String.fromCharCode(hdr.startDate[i]);
	hdr.startDate = temp.trim();
	
	// Get start time (hh.mm.ss)
	temp = '';
	hdr.startTime = _scanner.scan('schar',8);
	loopIndex = hdr.startTime.length;
	for (var i = 0;i < loopIndex;i++) temp = temp + String.fromCharCode(hdr.startTime[i]);
	hdr.startTime = temp.trim();
	
	// Get number of bytes
	temp = '';
	hdr.bytes = _scanner.scan('schar',8);
	loopIndex = hdr.bytes.length;
	for (var i = 0;i < loopIndex;i++) temp = temp + String.fromCharCode(hdr.bytes[i]);
	hdr.bytes = parseFloat(temp);
	
	temp = _scanner.scan('uchar',44); // reserved
	
	// Get length of data
	temp = '';
	hdr.records = _scanner.scan('char',8);
	loopIndex = hdr.records.length;
	for (var i = 0;i < loopIndex;i++) temp = temp + String.fromCharCode(hdr.records[i]);
	hdr.records = parseFloat(temp);
	
	// Get number of segments
	temp = '';
	hdr.duration = _scanner.scan('char',8);
	loopIndex = hdr.duration.length;
	for (var i = 0;i < loopIndex;i++) temp = temp + String.fromCharCode(hdr.duration[i]);
	hdr.duration = parseFloat(temp);
	
	
	// Get number of channels
	temp = '';
	hdr.ns = _scanner.scan('char',4);
	loopIndex = hdr.ns.length;
	for (var i = 0;i < loopIndex;i++) temp = temp + String.fromCharCode(hdr.ns[i]);
	hdr.ns = parseFloat(temp);
	
	// Get channel labels
	var name='';
	hdr.label = [];
	for (var i = 0;i < hdr.ns;i++) {
		temp = '';
		name = _scanner.scan('char',16);
		loopIndex = name.length;
		for (var j = 0;j < loopIndex;j++) temp = temp + String.fromCharCode(name[j]);
		name = temp.trim();
		hdr.label[i] = name;
	}
	
	// Get transducers
	hdr.transducers = [];
	for (var i = 0;i < hdr.ns;i++) {
		temp = '';
		name = _scanner.scan('char',80);
		loopIndex = name.length;
		for (var j = 0;j < loopIndex;j++) temp = temp + String.fromCharCode(name[j]);
		name = temp.trim();
		hdr.transducers[i] = name;
	}
	
	// Get units
	var name='';
	hdr.units = [];
	for (var i = 0;i < hdr.ns;i++) {
		temp = '';
		name = _scanner.scan('char',8);
		loopIndex = name.length;
		for (var j = 0;j < loopIndex;j++) temp = temp + String.fromCharCode(name[j]);
		name = temp.trim();
		hdr.units[i] = name;
	}
	
	// Get physical minimum
	var name='';
	hdr.physicalMin = [];
	for (var i = 0;i < hdr.ns;i++) {
		temp = '';
		name = _scanner.scan('char',8);
		loopIndex = name.length;
		for (var j = 0;j < loopIndex;j++) temp = temp + String.fromCharCode(name[j]);
		name = parseFloat(temp);
		hdr.physicalMin[i] = name;
	}
	
	// Get physical maximum
	var name='';
	hdr.physicalMax = [];
	for (var i = 0;i < hdr.ns;i++) {
		temp = '';
		name = _scanner.scan('char',8);
		loopIndex = name.length;
		for (var j = 0;j < loopIndex;j++) temp = temp + String.fromCharCode(name[j]);
		name = parseFloat(temp);
		hdr.physicalMax[i] = name;
	}
	
	// Get digital minimum
	var name='';
	hdr.digitalMin = [];
	for (var i = 0;i < hdr.ns;i++) {
		temp = '';
		name = _scanner.scan('char',8);
		loopIndex = name.length;
		for (var j = 0;j < loopIndex;j++) temp = temp + String.fromCharCode(name[j]);
		name = parseFloat(temp);
		hdr.digitalMin[i] = name;
	}
	
	// Get digital maximum
	var name='';
	hdr.digitalMax = [];
	for (var i = 0;i < hdr.ns;i++) {
		temp = '';
		name = _scanner.scan('char',8);
		loopIndex = name.length;
		for (var j = 0;j < loopIndex;j++) temp = temp + String.fromCharCode(name[j]);
		name = parseFloat(temp);
		hdr.digitalMax[i] = name;
	}
	
	// Get preFilter
	var name='';
	hdr.preFilter = [];
	for (var i = 0;i < hdr.ns;i++) {
		temp = '';
		name = _scanner.scan('char',80);
		loopIndex = name.length;
		for (var j = 0;j < loopIndex;j++) temp = temp + String.fromCharCode(name[j]);
		name = temp.trim();
		hdr.preFilter[i] = name;
	}
	
	// Get samples
	var name='';
	hdr.samples = [];
	for (var i = 0;i < hdr.ns;i++) {
		temp = '';
		name = _scanner.scan('char',8);
		loopIndex = name.length;
		for (var j = 0;j < loopIndex;j++) temp = temp + String.fromCharCode(name[j]);
		name = parseFloat(temp);
		hdr.samples[i] = name;
	}
	
	for (var i = 0;i < hdr.ns;i++) {
		name = _scanner.scan('char',32); // reserved
	}
	
	var scaleFac = new Array();
	for (var i = 0;i < hdr.ns;i++) {
		scaleFac[i] = (hdr.physicalMax[i] - hdr.physicalMin[i])/(hdr.digitalMax[i] - hdr.digitalMin[i]);
	}
	
	var dc = new Array();
	for (var i = 0;i < hdr.ns;i++) {
		dc[i] = hdr.physicalMax[i] - scaleFac[i] * hdr.digitalMax[i];
	}
	
	var tmpdata = new Array(hdr.ns);
	for (var i = 0;i < hdr.ns;i++) {
		tmpdata[i] = new Array();
	}
	var numSam;
	var indexVal = 0;
	for (var i = 0;i < hdr.records;i++) {
		for (var j = 0;j < hdr.ns;j++) {
			numSam = hdr.samples[j];
			temp = _scanner.scan('sshort',numSam);
			for (var k = 0;k < numSam;k++) {
				tmpdata[j][indexVal + k] = temp[k] * scaleFac[j] + dc[j];
			}	
		}
		indexVal = numSam + i * numSam;
	}
		
	return [hdr,tmpdata];
}


