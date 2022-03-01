function respo_navBar() {
var x = document.getElementById("my_navbar-purple");
if (x.className === "navbar") {
	x.className += " responsive";
} else {
	x.className = "navbar";
}
}
