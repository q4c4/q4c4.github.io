window.onload = function() {
	for (let i = 0; i < 400; i++) {
		let img = document.createElement("img");
		img.src = "https://raw.githubusercontent.com/th3Ch4OT1C/pokesprite/master/icons/pokemon/unknown.png";

		document.getElementById("holder").appendChild(img);
	}
}