function celesteFunction() {
	document.getElementById('image1').hidden = false;

}








function clickFunction(id) {
	if ( == 'image1') {
		celesteFunction();
	} else if (id == 'image2') {
		hamdiaFunction();
	} else if (id == 'image3') {
		ziadFunction();
	}
}