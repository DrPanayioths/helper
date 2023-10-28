
// Cookie That Is Automatically Created By DrPanayioths on 2 Agoust 2023 For Ownership 

document.cookie = "dataremember=Created By DrPanayioths; expires=Thu, 18 Dec 3000 01:01:01 UTC";



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

function passwordareyouok() {
	const passwordInput = document.getElementById("passwordInput");
	const passworddinami = document.getElementById("passwordStrength");
	const password = passwordInput.value;


	if (password.length < 6) {
		passwordStrength.textContent = "Weak 🔓";
	} else if (password.length < 8) {
		passwordStrength.textContent = "Good 👍";
	} else if (password.length < 12) {
		passwordStrength.textContent = "Strong 💪";
	} else {
		passwordStrength.textContent = "Super 🚀";
	}
}



// UUID For Everyone Yea Yea

function generateUUID() {
    const hexChars = '0123456789abcdef';
    const getRandomHex = (length) => {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += hexChars.charAt(Math.floor(Math.random() * 16));
        }
        return result;
    };
    return (
        getRandomHex(8) + '-' +
        getRandomHex(4) + '-' +
        '4' + getRandomHex(3) + '-' +
        hexChars.charAt(Math.floor(Math.random() * 4) + 8) + getRandomHex(3) + '-' +
        getRandomHex(12)
    );
}

const uuid = generateUUID();
document.cookie = "ID: " + uuid;

 // Function to check if the user is on a mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
   function redirectIfMobile() {
    if (isMobileDevice()) {
    window.location.href = 'https://drpanayioths.github.io/helper/Mobile/notavailable.html';
     }
   }
   window.onload = redirectIfMobile; 
   

// Downlight

var i = 0;
function loader() {
  if (i == 0) {
    i = 1;
    var bar = document.getElementById("lightthedown");
    var width = 1;
    var wait = setInterval(frame, 10);
    function frame() {
    if (width >= 100) {
    clearInterval(wait);
    i = 0;
    } else {
    width++;
    bar.style.width = width + "%";
      }
    }
  }
}

window.onload = loader;




