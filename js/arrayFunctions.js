/* Function to compute maximum value in a 2d array
 * Input : 
 * arrayVal : 1d or 2d object
 * type  : 1 for absolute maximum and 0 for true maximum
 
 * Output :
 * maxNum : Maximum number of the array
*/ 
 
function absMax(arrayVal,type) {
    
    // Check for correct number of arguments
    if (arguments.length > 2 || arguments.length < 1) {
        return NaN;
    }
    
    // if array is of inappropriate type
    if (Object.prototype.toString.call(arrayVal) != "[object Array]") {
        return NaN;
    }
    
    // Default maximum to be found
    if (arguments.length == 1) {
        type = 1;
    }
    
    var maxNum = 0;
    if (type == 1 && arrayVal[0].length != undefined) {
        var numObjects = arrayVal.length;
        for (var i = 0;i < numObjects;i++) {
            var numElements = arrayVal[i].length;
            for (var j = 0;j < numElements;j++) {
                if (Math.abs(arrayVal[i][j]) > maxNum) maxNum = Math.abs(arrayVal[i][j]);
            }
        }
    }
    else if (type == 0 && arrayVal[0].length != undefined) {
        var numObjects = arrayVal.length;
        for (var i = 0;i < numObjects;i++) {
            var numElements = arrayVal[i].length;
            for (var j = 0;j < numElements;j++) {
                if (arrayVal[i][j] > maxNum) maxNum = arrayVal[i][j];
            }
        }
    }
    
    else if (type == 1 && arrayVal[0].length == undefined) {
        var numElements = arrayVal.length;
        for (var i = 0;i < numElements;i++) {
                if (Math.abs(arrayVal[i]) > maxNum) maxNum = Math.abs(arrayVal[i]);
            }
    }
    
    else if (type == 0 && arrayVal[0].length == undefined) {
        var numElements = arrayVal.length;
        for (var i = 0;i < numElements;i++) {
                if (arrayVal[i] > maxNum) maxNum = arrayVal[i];
            }
    }
    return maxNum;
}
        

/* Function to compute the mean of all channels and 
 * remove the mean.
 * Input : 
 * arrayVal : 1d or 2d array
 * Output : 
 * arrayVal : Demeaned array
 */

function deMean(arrayVal) {
	// Check for correct number of arguments
    if (arguments.length != 1) {
        return NaN;
    }
    
 // if array is of inappropriate type
    if (Object.prototype.toString.call(arrayVal) != "[object Array]") {
        return NaN;
    }
    
    
    
    if (arrayVal[0].length != undefined) {
    	var numChannels = arrayVal.length;
    	var meanArray = new Float64Array(numChannels);
    	for (var i = 0;i < arrayVal.length;i++) {
    		var numSamples = arrayVal[i].length;
    		for (var j = 0;j < numSamples;j++) {
    			meanArray[i] = meanArray[i] + arrayVal[i][j];
    		}
    		meanArray[i] = meanArray[i]/numSamples;
    	}
    	
    	for (var i = 0;i < arrayVal.length;i++) {
    		var numSamples = arrayVal[i].length;
    		for (var j = 0;j < numSamples;j++) {
    			arrayVal[i][j] = arrayVal[i][j] - meanArray[i];
    		}
    	}	
    }
    else {
    	var meanArray = 0;
    	var numSamples = arrayVal.length;
		for (var j = 0;j < numSamples;j++) {
			meanArray = meanArray + arrayVal[j];
		}
		meanArray = meanArray/numSamples;
		for (var j = 0;j < numSamples;j++) {
			arrayVal[j] = arrayVal[j] - meanArray;
		}
    }
    return arrayVal;
}

/* Function to normalize the array
 * Input : 
 * arrayVal : 1d or 2d Arrayfunction 
 * Output :
 * arrayVal : Normalized array
 */
 function normalizeArray(arrayVal, maxVal) {
    // Check for correct number of arguments
    if (arguments.length != 2) {
        return NaN;
    }
    
    // if array is of inappropriate type
    if (Object.prototype.toString.call(arrayVal) != "[object Array]") {
        return NaN;
    }
    
    if (Object.prototype.toString.call(maxVal) != "[object Number]") {
        return NaN;
    }
    
    if (arrayVal[0].length == undefined) {
        var numElements = arrayVal.length;
        for (var i = 0;i < numElements;i++) {
            arrayVal[i] = arrayVal[i]/maxVal;
        }
    }
    
    else {
        var numObjects = arrayVal.length;
        for (var i = 0;i < numObjects;i++) {
            var numElements = arrayVal[i].length;
            for (var j = 0;j < numElements;j++) {
                arrayVal[i][j] = arrayVal[i][j]/maxVal;
            }
        }
    }
    
    return arrayVal;
}
 
 // Transpose
 Array.prototype.transpose=function(){var a=this,w=a.length?a.length:0,h=a[0]instanceof Array?a[0].length:0;if(h===0||w===0){return[]}var i,j,t=[];for(i=0;i<h;i++){t[i]=[];for(j=0;j<w;j++){t[i][j]=a[j][i]}}return t};if(typeof jQuery!=='undefined'){jQuery.transpose=function(o){if(o instanceof Array){return o.transpose()}}}
 
 /* Function to reshape a linear array into rows x columns array
  * Inputs: 
  * data : Linear data to be reshaped
  * rows : Numbers of rows in the reshaped array
  * columns : Number of columns in the reshaped array
  * Output:
  * rdata : Reshaped data
  */

 function reshape(data,rows,columns) {
 	var i = 0;
 	var rdata = new Array();
 	for (var r = 0;r < rows;r++) {
 		rdata[r] = new Array(columns);
 	}

 	for (var c = 0;c < columns; c++) {
 		for (var r = 0;r < rows; r++) {
 			rdata[r][c] = data[i];
 			i = i + 1;
 		}
 	}
 	return rdata;
 }
 
 /* Function to slice the data as needed
  * Inputs : 
  * arrayVal : array to be sliced
  * Output :
  * arrayVal : Sliced array
  */
 function dataSlicing(arrayVal, startPlotTime, endPlotTime,sfreq) {
 	for (var i = 0;i < arrayVal.length;i++) {
 			arrayVal[i] = arrayVal[i].slice(Math.round(startPlotTime * sfreq), Math.round(endPlotTime * sfreq));
 	}
 	return arrayVal;
 }
 
 // Check if array is empty
 function isEmpty(val){
	    return (val === undefined || val == null || val.length <= 0) ? true : false;
	}
 
 // Find length of object
 function lengthObject(a) {
		var count = 0;

		for (i in a) {
			if (a.hasOwnProperty(i)) {
				count++;
			}
		}
		return count;
	}
