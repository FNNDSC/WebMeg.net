// Function to filter the data
function fltData(data,srate,locut,hicut, revfilt) {
	var chan, frames=data[0].length, fv, idxl, idxh, smData, tmp,appendArr=[],im=[];
	
	if (frames==undefined) {
		chan=1;
		frames=data.length;
	} 
	else chan=data.length;

	fv=new Array(frames);
	for (var i=0;i<frames;i++) fv[i]=i*srate/frames;

	if (locut==0) idxl=0;
	else {
		var combo=absMax(subValue(fv.slice(),locut),1,0);
		idxl=combo[1];
	}
	
	if (hicut==0) idxh=Math.ceil(fv.length/2.0);
	else {
		var combo=absMax(subValue(fv.slice(),hicut),1,0);
		idxh=combo[1];
	}
	
	var N=frames;
	N--;
	N|=N>>1;   // Divide by 2^k for consecutive doublings of k up to 32,
	N|=N>>2;   // and then or the results.
	N|=N>>4;
	N|=N>>8;
	N|=N>>16;
	N++; 

	//for(var i=0;i<N-frames;i++) appendArr[i]=0;
	for(var i=0;i<frames;i++) im[i]=0;

	for (var i=0;i<chan;i++) {
		if (chan==1) {
			tmp=data.slice();//.concat(appendArr);
		}
		else tmp=data[i].slice();//.concat(appendArr);
		
		var tmp1=im.slice();
		transform(tmp,tmp1);
		if(revfilt==1) {
			for (var j=idxl+1;j<idxh;j++) {tmp[j]=tmp1[j]=0;}
			for (var j=Math.ceil(frames/2)-2;j<N;j++) {tmp[j]=tmp1[j]=0;}
		}
		else {
			for(var j=0;j<=idxl;j++) {tmp[j]=tmp1[j]=0;}
			for(var j=frames-idxl-2;j<frames;j++){tmp[j]=tmp1[j]=0;}
			for(var j=idxh;j<frames;j++){tmp[j]=tmp1[j]=0;}
		}
		inverseTransform(tmp,tmp1);
		if (chan>1) {for(var j=0;j<frames;j++) data[i][j]=2*tmp[j]/frames;}
		else { for(var j=0;j<frames;j++) data[j]=2*tmp[j]/frames;}
	}
	return data;
}
