var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var image4 = document.getElementById('image4');
var image5 = document.getElementById('image5');
var image6 = document.getElementById('image6');
var image7 = document.getElementById('image7');
var image8 = document.getElementById('image8');






function image1Function() {
	document.getElementById('image1').hidden = false;
	document.getElementById('image2').hidden = true;
	document.getElementById('image3').hidden = true;
}








function clickFunction(id) {
	if ( == 'image1') {
		image1Function();
	} else if (id == 'image2') {
		hamdiaFunction();
	} else if (id == 'image3') {
		ziadFunction();
	}
}