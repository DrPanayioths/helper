function qrbuilda () {
	var idz = document.getElementById("datra");
	var inport = idz.value;
	var linker = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inport;

	var pictu = document.getElementById("qrp");
	pictu.src = linker;

}	



function checkEnter(event) {
	if (event.key === "Enter") {
		event.preventDefault();
		qrbuilda();
	}
}
