function changePhoto(var dir) {
	var mainImage = document.getElementById("mainImage");
	switch(dir) {
		case left:
			mainImage.setAttribute("src","./ressources/photo/");
		break;
		case right:
			mainImage.setAttribute("src","./ressources/photo/");
		break;
		default:
			console.log("Error : can only change the picture to the left or to the right");
		break;
	}
}