let marker = document.querySelector("#Marker");
let item = document.querySelectorAll(".MenuLink");

function indicator(e) {
	marker.style.left = e.offsetLeft + "px";
	marker.style.width = e.offsetWidth + "px";
}

item.forEach((link) => {
	link.addEventListener("click", (e) => {
		indicator(e.target);
	});
});
