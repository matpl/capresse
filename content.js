
const body = document.querySelector("body");
const overflowCheck = setInterval(() => {
	if (body.style.overflow) {
		body.setAttribute("style", "");
		clearInterval(overflowCheck);
		const limitDiv = document.querySelector(".brz_msg_wall_body").parentElement;
		limitDiv.style.display = "none";
	}
}, 500);