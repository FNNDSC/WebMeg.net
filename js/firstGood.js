/* Determine the index of first good channel
*/

function firstGood() {
	for(var i = 0;i < MEGFIFF.numChannels;i++) {
		if(MEGFIFF.goodChannels[i] == 1) return i;
	}
}