
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



// UUID Gen

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

// UUID For Each User
var islocalstored = localStorage.getItem("UUID")
function uuidgen()  {
  if (islocalstored) {
  }
  else {
    const uuide = generateUUID();
    localStorage.setItem("UUID", uuide);
  }

}
window.onload = uuidgen()





 // Function to check if the user is on a mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
   function redirectIfMobile() {
    if (isMobileDevice()) {
    window.location.href = 'https://drpanayioths.github.io/helper/Mobile/notavailable.html';
     }
   }
   document.cookie = "UserInfo: " + navigator.userAgent;
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


// CryptoField
// Bitcoine
function bitcola() {


  fetch('https://api.coindesk.com/v1/bpi/currentprice/EUR.json')
  .then(btc => btc.json())
  .then(data => {
    const field = document.getElementById("cryptoshow");
    const convetareto = Math.round(data.bpi.EUR.rate_float * 2) / 1000;
    const cryptoname = document.getElementById("whatcrypto");
    field.textContent = "€ " + convetareto 
    cryptoname.textContent =  "BTC"
    field.style.left = "67px";


  });
  loader();

  }
window.onload = bitcola;

// Etherumoum
function ethelarefile() {
  fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR')
  .then (eth => eth.json())
  .then(data => {

    const price = document.getElementById("cryptoshow");
    const cname = document.getElementById("whatcrypto");
    const pricefinal = Math.round(data.EUR * 1) / 1000;
    price.textContent = "€ " + pricefinal
    cname.textContent =  "ETH"
    price.style.left = "78px";
  });

}


// Weather Display 
function weathercollection() {
  var typecountry = prompt("City To See Weather");
  var linker = 'https://wttr.in/' + typecountry + "?format=4";
  
  fetch(linker)
    .then(response => response.text())
    .then(data => {
      const showka = document.getElementById("respo");
      showka.textContent = data;
    });
  
}

// Chill Music Buttton

function chillradio() {
  const radio = document.getElementById("radiosystems")
  radio.src = "https://coderadio-admin-v2.freecodecamp.org/listen/coderadio/low.mp3"
}




// Radio Per Country

function radiocont() {
  fetch("https://get.geojs.io/v1/ip/country.json")
    .then(count => count.json())
    .then(data => {
      const countrex = data.name;
      const radiosystem = document.getElementById("radiosystems")

      if (countrex === "Greece") {
        radiosystem.src = "https://centova.gr-net.gr/proxy/love/stream"
      }
      else if ( countrex === "United States") {
        radiosystem.src = "https://17573.live.streamtheworld.com/977_HITSAAC_SC?dist=onlineradiobox"
      }
      else if ( countrex === "Netherlands") {
        radiosystem.src = "https://22323.live.streamtheworld.com/TLPSTR01.mp3?dist=radionet"
      }
      else if ( countrex === "Germany") {
        radiosystem.src = "https://icepool.silvacast.com/GAYFM.mp3"
      }
      else if ( countrex === "Cyprus") {
        radiosystem.src = "https://n0e.radiojar.com/c27wx6pdh8vtv?rj-ttl=5&rj-tok=AAABi9Oz2doAjoNWzuaiEHHIpg"
      }
      else if ( countrex === "United Kingdom") {
        radiosystem.src = "https://bigrradio.cdnstream1.com/5164_128"
      }
      else if ( countrex === "Albania")  {
        radiosystem.src = "https://live.top-media.al/tar"
      }
      else if ( countrex  === "Romania") {
        radiosystem.src = "https://astreaming.edi.ro:8443/EuropaFM_aac"
      }
      else if ( countrex === "Turkey") {
        radiosystem.src = "https://25483.live.streamtheworld.com/SUPER2.mp3"
      }
      else if ( countrex === "Russia")  {
        radiosystem.src = "https://rusradio.hostingradio.ru/rusradio96.aacp"
      }













































    });
}

window.onload = radiocont();