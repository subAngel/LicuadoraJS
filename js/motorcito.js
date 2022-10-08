var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");
const sonidoLicuadora = document.getElementById("blender-sound");
const sonidoBoton = document.getElementById("blender-button-sound");

function controlarLicudora() {
	if (estadoLicuadora == "apagada") {
		estadoLicuadora = "encendida";
		hacerBrr();
		licuadora.classList.add("active");
	} else {
		estadoLicuadora = "apagada";
		hacerBrr();
		licuadora.classList.remove("active");
	}
}

function hacerBrr() {
	if (sonidoLicuadora.paused) {
		sonidoLicuadora.play(); //
		sonidoBoton.play();
	} else {
		sonidoBoton.play();
		sonidoLicuadora.pause();
		sonidoLicuadora.currentTime = 0;
	}
}
