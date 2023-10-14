
/**
 * 
 * Cookie That Is Automatically Created By DrPanayioths on 2 Agoust 2023 For Ownership 
 */
document.cookie = "dataremember=Created By DrPanayioths; expires=Thu, 18 Dec 3000 01:01:01 UTC";
document.cookie = "dataremember=Data Are Local Saved"





// QR CODE GENERATOR


function qrbuilda() {
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














//  Password Strength Checker A Try Again

var pass = document.getElementById("password");
var passlength = pass.length;

if (passlength < 8) {
  console.log("Password is too short");
} else if (passlength >= 8 && passlength <= 12) {
	console.log("Password is too weak");
} else if (passlength >= 13 && passlength <= 16) {
	console.log("Password is too strong");
} else {
	console.log("Password is strong enough");
}



