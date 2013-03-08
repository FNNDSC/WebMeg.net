/* Functions used to operate on data for display
 */

function displayOperations() {
	MEG_data1 = dataSlicing(MEG_data,MEGFIFF.startPlotTime,MEGFIFF.endPlotTime,MEGFIFF.sfreq);
	if (MEGFIFF.BPA) MEG_data1 = allConv(MEG_data1, MEGFIFF.BP);
	else if (MEGFIFF.LA) MEG_data1 = allConv(MEG_data1, MEGFIFF.LP);
	else if (MEGFIFF.HA) MEG_data1 = allConv(MEG_data1, MEGFIFF.HP);
	if  (MEGFIFF.BRA) MEG_data1 = allConv(MEG_data1, MEGFIFF.BR);

	// Find absolute maximum in a 1-d or 2-d array
	if (MEGFIFF.plotType == 'raster') {
		var maxValue = absMax(MEG_data1,1);
		MEGFIFF.scale = MEGFIFF.finalScale;
		// Normalize the array based on maximum value
		MEG_data1 = normalizeArray(MEG_data1,maxValue);
		MEG_data1 = rasterPlot(MEG_data1);
	}
	return MEG_data1;
};

function rasterPlot(values) {
	var scale = MEGFIFF.scale; // scale to be multiplied with data
	MEGFIFF.firstGood = firstGood(); 
	var dataLength = values[MEGFIFF.firstGood].length;
	// Scale the data correctly
	for (var i = 0;i < MEGFIFF.numChannels;i++) {
		if (MEGFIFF.goodChannels[i] == 1) {
			for (var j = 0;j < dataLength;j++) {
				values[i][j] = values[i][j] * scale;
			}		
		}	
	}

	values = deMean(values);

	for (var i = 0;i < MEGFIFF.numChannels;i++) {
		if (MEGFIFF.goodChannels[i] == 1) {
			for (var j = 0;j < dataLength;j++) {
				values[i][j] = values[i][j] + i;
			}		
		}	
	}
	return values;
};

function changeDuration() {
	var check = checkData(); if (check == 0) return;

	var duration;	
	do {
		duration = prompt("Enter duration of display in s : ",MEGFIFF.displayDuration);
		if (duration == null) {duration = MEGFIFF.displayDuration;}

	}while (isNaN(duration) || (duration > MEGFIFF.dataLength));
	MEGFIFF.displayDuration = parseFloat(duration);
	MEGFIFF.endPlotTime = MEGFIFF.startPlotTime + MEGFIFF.displayDuration;
	MEG_data = finalData.slice(0,MEGFIFF.numChannels);
	MEG_data1 = displayOperations();
	chart.destroy();
	plotData_highChart(MEG_data1);
}

// Function to switch the data display to butterfly plot
function butterflyPlot() {
	MEGFIFF.plotType = 'butterfly';
	MEG_data = finalData.slice(0,MEGFIFF.numChannels);
	MEG_data1 = dataSlicing(MEG_data,MEGFIFF.startPlotTime,MEGFIFF.endPlotTime,MEGFIFF.sfreq);
	if (MEGFIFF.fileType == 'fif') {
		var maxValue = absMax(MEG_data1,1);
		MEG_data1 = normalizeArray(MEG_data1,maxValue);
	}
	chart.destroy();
	plotData_highChart(MEG_data1);
	MEGFIFF.minRaster = chart.yAxis[0].min;
	MEGFIFF.maxRaster = chart.yAxis[0].max;
}

// Function to swtich the display to raster plot
function seriesPlot() {
	MEGFIFF.plotType = 'raster';
	MEG_data = finalData.slice(0,MEGFIFF.numChannels);
	MEG_data1 = displayOperations();
	try{chart.destroy();}catch(err){};
	plotData_highChart(MEG_data1);
}

function fltData() {
	var check = checkData(); if (check == 0) return;
	document.appform.samplerate.value = MEGFIFF.sfreq;
	$('div#fltDlg').dialog('open');


	FIR = {
			calculateLowpass: function(sampleRate, filterOrder, cutoffFrequency) {
		var cutoffRadians = 2 * Math.PI * cutoffFrequency / sampleRate;
		var sum = 0;
		var h = [];    // h[] will be the impulse response or kernel of the filter
		for (i=0; i<=filterOrder; i++) {
			if ( i-filterOrder/2 == 0 ) { 
				h[i] = cutoffRadians;
			}
			else {
				// This is the basic sinc function calculation
				h[i] = Math.sin(cutoffRadians * (i-filterOrder/2)) / (i-filterOrder/2);
				// And here we apply the Hamming window
				// The explanation is here:
				// http://www.dspguide.com/ch16/1.htm
				h[i] *= (0.54 - 0.46 * Math.cos(2*Math.PI*i/filterOrder));
			};
		};
		// Normalize the filter kernel for unity gain at DC
		for (i=0; i<=filterOrder; i++) {
			sum = sum + h[i];
		};
		for (i=0; i<=filterOrder; i++) {
			h[i] /= sum;
		};
		return h;
	},

	invertSpectrum: function(h) {
		var i;
		for (i=0; i<h.length; i++) {
			h[i] = -h[i];
		}
		h[(h.length-1)/2] += 1.0;
		return h;
	},

	DFT: function(signal) {
		var rex = []; // real part of the frequency domain
		var imx = []; // imaginary part of the frequency domain
		var mag = [];
		var phase = [];
		var n = signal.length;
		var m = n/2;
		var i = 0;
		var k = 0;
		for (k=0; k<=m; k++) {
			rex[k] = 0;
			imx[k] = 0;
		};
		for (k=0; k<=m; k++) {
			for (i=0; i<n; i++) {
				rex[k] += signal[i] * Math.cos(2*Math.PI*k*i/n);
				imx[k] -= signal[i] * Math.sin(2*Math.PI*k*i/n);
			};
		};

		for (k=0; k<=m; k++) {
			mag[k] = Math.sqrt(rex[k]*rex[k]+imx[k]*imx[k]);
			if (rex[k] == 0.0) rex[k] = 1e-20;
			phase[k] = Math.atan2(rex[k],imx[k]);
		};
		return {"rex": rex, "imx": imx, "mag": mag, "phase": phase};
	},
	calculateHighpass: function(sampleRate, filterOrder, cutoffFrequency) {
		return FIR.invertSpectrum(FIR.calculateLowpass(sampleRate,
				filterOrder, cutoffFrequency));
	},
	calculateBandreject: function(sampleRate, filterOrder, cutoff1, cutoff2) {
		return FIR.addArrays(
				FIR.calculateLowpass(sampleRate, filterOrder, cutoff1),
				FIR.calculateHighpass(sampleRate, filterOrder, cutoff2));
	},
	calculateBandpass: function(sampleRate, filterOrder, cutoff1, cutoff2) {
		return FIR.invertSpectrum(FIR.calculateBandreject(sampleRate, filterOrder,
				cutoff1, cutoff2));
	},
	addArrays: function(a1, a2) {
		var i;
		var a = [];
		for (i=0; i<a1.length; i++) {
			a[i] = a1[i] + a2[i];
		};
		return a;
	},
	arrayOfZeros: function(n) {
		var i;
		var a = [];
		for (i=0; i<n; i++) {
			a[i] = 0.0;
		};
		return a;

	},
	formatBasicDSP: function(samplerate, filterorder, 
			cutoff1, cutoff2, filtertype, h) {
		var resultString = "";
		var i;
		resultString += "samplerate=" + samplerate + "\n";
		resultString += "# samplerate: " + samplerate;        resultString += " " + FIR.filtertype;
		resultString += " order: " + filterorder;
		resultString += " cutoffs: " + cutoff1 + " " + cutoff2 +"\n";
		resultString += "# " +  FIR.makeURL(document.appform.elements, window.location.href + "\n");
		resultString += "out=fir(in";
		for (i=0; i<h.length; i++) {
			// Round the coefficients because BasicDSP has
			// a limit on line length.
			resultString += "," + FIR.roundNumber(h[i], 7);
		};
		resultString += ")\n";
		return resultString;
	},
	formatRaw: function(h) {
		var resultString = "";
		var i;
		for (i=0; i<h.length; i++) {
			resultString += h[i] + "\n";
		};
		return resultString;
	},

	calculateFilter: function(samplerate, filterorder, 
			cutoff1, cutoff2, filtertype) {
		if (filtertype[0].checked) {      // low-pass
			FIR.filtertype = "low-pass";
			return FIR.calculateLowpass(samplerate, filterorder, cutoff1);
		}
		else if (filtertype[1].checked) { // high-pass
			FIR.filtertype = "high-pass";
			return FIR.calculateHighpass(samplerate, filterorder, cutoff1);
		}
		else if (filtertype[2].checked) { // band-reject
			FIR.filtertype = "band-reject";
			return FIR.calculateBandreject(samplerate, filterorder,
					cutoff1, cutoff2);
		}
		else {                            // band-pass
			FIR.filtertype = "band-pass";
			return FIR.invertSpectrum(FIR.calculateBandreject(samplerate,
					filterorder, cutoff1, cutoff2));
		};
	},
	graphdata: function(d, where) {
		var i;
		var g = [];
		for (i=0; i<d.length; i++) {
			g.push([i, d[i]]);
		};
		$(function () {
			$.plot($(where), [ g ]);
		});
	},
	graphfr: function(samplerate, d, where) {
		var i;
		var g = [];
		for (i=0; i<d.length; i++) {
			g.push([samplerate*(i/(d.length-1)/2),

			        20* Math.LOG10E*Math.log(d[i])]);
		};
		$(function () {
			$.plot($(where), [ { data: g, label: "dB" } ], 
					{ yaxis: {tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Amplitude";}},
				xaxis: {tickFormatter: function(val, axis) { return val < axis.max ? val.toFixed(2) : "Frequency";}}
					});
		});
	},
	makeURL: function(elements, baseURL) {
		var outURL = baseURL.split("?")[0];
		var i;
		for (i=0; i<elements.length; i++) {
			if (elements[i].name=="filtertype") {
				if (elements[i].checked) {
					outURL += (i==0 ? "?" : "&") + elements[i].name + "=" + elements[i].value;};
			}
			else {
				outURL += (i==0 ? "?" : "&") + elements[i].name + "=" + elements[i].value;
			};
		};
		return outURL;
	},

	roundNumber: function(rnum, rlength) { // Arguments: number to round, number of decimal places
		return Math.round(rnum*Math.pow(10,rlength))/Math.pow(10,rlength);
	},
	isDefined: function(object, variable)
	// from http://jehiah.cz/archive/javascript-isdefined-function
	{
		return (typeof(eval(object)[variable]) == "undefined") ? false: true;
	},
	init: function(url, form) {
		var i;
		var j;
		var k;
		var v;
		var args;
		var argsx;
		if (url.indexOf("?") != -1) {
			args = url.split("?")[1];
			argsx = args.split("&");
			for (i=0; i<argsx.length; i++) {
				k = argsx[i].split("=")[0];
				v = argsx[i].split("=")[1];
				if ( FIR.isDefined(form,k) ) {
					if (k=="filtertype") {
						for (j=0; j<4; j++) {
							if (form.filtertype[i+j-2].value==v) {
								form.filtertype[i+j-2].checked=true;
							}
							else {
								form.filtertype[i+j-2].checked=false;                            
							};
						};
					}
					else {
						form[k].value = v;
					}
				};
			};
		};
	},
	go: function() {
		var highcutoff = document.appform.highcutoff.value;
		var lowcutoff = document.appform.lowcutoff.value;
		var notchval = document.appform.notchval.value;
		var samplerate = document.appform.samplerate.value;
		var filterorder = document.appform.filterorder.value;
		var h = [];var h1 = [];
		MEGFIFF.BPA = false;MEGFIFF.BRA = false;MEGFIFF.LA = false;MEGFIFF.HA = false;
		if (filterorder < 0) {alert("Filter order expected to be positive");return}

		if ((document.appform.lowactive.checked == true) && (document.appform.highactive.checked== true)) {
			if (lowcutoff < 0) return;
			if (highcutoff > samplerate/3.0) {alert("High Cutoff expected less than Sample Rate/3");return;}
			h = FIR.invertSpectrum(FIR.calculateBandreject(samplerate,
					filterorder, lowcutoff, highcutoff));
			MEGFIFF.BP = h;
			MEGFIFF.BPA = true;
		}

		else if ((document.appform.lowactive.checked == true)) {
			if (lowcutoff < 0) return;
			h = FIR.calculateLowpass(samplerate, filterorder, lowcutoff);
			MEGFIFF.LP = h;
			MEGFIFF.BPA = false;
			MEGFIFF.LA = true;
		}

		else if ((document.appform.highactive.checked == true)) {
			if (highcutoff > samplerate/3.0) {alert("High Cutoff expected less than Sample Rate/3");return;}
			h = FIR.calculateHighpass(samplerate, filterorder, highcutoff);
			MEGFIFF.HP = h;
			MEGFIFF.BPA = false;
			MEGFIFF.LA = false;
			MEGFIFF.HA = true;
		}

		if ((document.appform.notchactive.checked == true)) {
			if (notchval < 0 || notchval > samplerate/3.0) {alert("Value expected between 0 and Sample Rate/3");return;}

			h1 = FIR.calculateBandreject(samplerate, filterorder,
					notchval - 2, notchval+2);
			MEGFIFF.BR = h1;
			MEGFIFF.BRA = true;
		}
		var fr = FIR.DFT(h.concat(FIR.arrayOfZeros(h.length*1)));
		FIR.graphdata(h,"#impulseresponse");
		FIR.graphfr(document.appform.samplerate.value, fr.mag, "#frequencyresponse");
		MEG_data = finalData.slice(0,MEGFIFF.numChannels);
		MEG_data1 = displayOperations();
		chart.destroy();
		plotData_highChart(MEG_data1);
	}
	};
	FIR.go();
}

function allConv(x,h) { 
	var y = [];
	if (x[0][0] == undefined) x = conv(x,h);
	else {
		for (var i = 0;i < x.length;i++) {
			y[i] = conv(x[i],h);
		}
	}
	return y;
}

function conv(x,h) {
	var m = x.length; 
	var n = h.length;
	var temp = [];
	for (var i = 0;i < n;i++) temp[i] = 0;
	x = x.concat(temp);
	temp = [];
	var y= [];
	for (var i = 0;i < m;i++) temp[i] = 0;
	h=h.concat(temp);
	
	var temp1 = n+m-1;
	for (var i = 0;i < temp1; i++) { 
		y[i] = 0;
		for (var j = 0;j < m;j++) {
			if(i-j+1>0) { 
				y[i]=y[i]+x[j]*h[i-j+1]; 
			}
		}
	}
	return y.splice(h-1,m);
}

function topoPlotInitialize() {
	var canvas1 = document.getElementById('canvas1');
	if (canvas1.getContext) {
		$('div#topoDlg').dialog('open');
		MEGFIFF.dispTopo = true;
		var ctx = canvas1.getContext("2d");
		ctx.fillStyle="rgb(0,0,0)";
		var mul = 3;
		heatmap = h337.create({"element":document.getElementById("heatmapArea"), "radius":10, "visible":true});
	
		for (var i = 0;i < MEGFIFF.chNames.length;i++) {
			if (MEGFIFF.badChannels[i] == 0) {
			ctx.beginPath();
			var x = (data_info.info.chs[i].loc[0] * 1000 * mul)+ canvas1.width/2.0;
			var y = (data_info.info.chs[i].loc[1] * 1000 * mul) + canvas1.width/2.0;
			ctx.arc(x,y,3,0,Math.PI*2, true);
			ctx.fill();
			ctx.fillText(MEGFIFF.chNames[i], x - 5, y - 5);
			heatmap.store.addDataPoint(x,y,Math.random());
			}
		}
		
	}
	
  }

function topoPlot() {
	clearTopo();
	var mul = 3;
	for (var i = 0;i < MEGFIFF.chNames.length;i++) {
		if (MEGFIFF.badChannels[i] == 0) {
			var x = (data_info.info.chs[i].loc[0] * 1000 * mul)+ canvas1.width/2.0;
			var y = (data_info.info.chs[i].loc[1] * 1000 * mul) + canvas1.width/2.0;
		heatmap.store.addDataPoint(x,y,Math.random());
		}
	}
}

function clearTopo () {
	var clearTopo = document.getElementsByTagName('canvas')[1];
	var ctx2 = clearTopo.getContext("2d");
	ctx2.clearRect(0,0,500,500);
}


		