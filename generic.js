
// Cookie That Is Automatically Created By DrPanayioths on 2 Agoust 2023 For Ownership 

document.cookie = "dataremember=Created By DrPanayioths; expires=Thu, 18 Dec 3000 01:01:01 UTC";



// Flag System For Countrys

function flager() {

  fetch('https://get.geojs.io/v1/ip/country.json')
.then(flage => flage.json())
.then(data => {
  const countryname = document.getElementById('countre');
  
  countryname.style.fontSize = "18px";
  countryname.style.textAlign = "center";
  countryname.style.outline = "none";
  countryname.value = data.name;
});
}

window.onload = flager();

// QR CODE GENERATOR

function qrbuilda() {
	const idz = document.getElementById("datra");
	const inport = idz.value;
	const linker = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inport;
  const back_qr = document.getElementById("back_bqr");
  const qr_code = document.getElementById("qrp");
	const pictu = document.getElementById("qrp");

  if (inport === null || inport === "") {
    alert("Enter URL or Text Before Creating QR");
  } else {
    pictu.src = linker;
    qr_code.style.animationName = "smooth_qr";
    back_qr.style.animationName = "smooth_qr";
  }

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
	const password = passwordInput.value;
  const symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const numbers = /[0123456789]+/;
  const passwordStrength = document.getElementById("passwordStrength");

  if (password.length != "0") {
    if (password.length < 6) {
      passwordStrength.textContent = "Weak 🔓";
      passwordStrength.style.right = "80px";
    } else if (password.length < 8) {
      passwordStrength.textContent = "Good 👍";
      passwordStrength.style.right = "80px";
    } else if (password.length < 12 && symbols.test(password) ) {
      passwordStrength.textContent = "Strong 💪";
      passwordStrength.style.right = "80px";
    } else if (password.length < 18 && symbols.test(password) && numbers.test(password) ) {
      passwordStrength.textContent = "Super 🚀";
      passwordStrength.style.right = "80px";
    }
  } else {
    passwordStrength.textContent = "⚠️Type A Password⚠️";
    passwordStrength.style.right = "40px";
  }
}

function hidePassword() {
  const input_field = document.getElementById("passwordInput");

  if (input_field.type === "password") {
    input_field.type = "text";
  } 
  else {
    input_field.type = "password";
  }}


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
var islocalstored = localStorage.getItem("UUID");
function uuidgen()  {
  if (islocalstored) {
  }
  else {
    const uuide = generateUUID();
    localStorage.setItem("UUID", uuide);
  }

}
window.onload = uuidgen();





 // Function to check if the user is on a mobile device
 function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
 function redirectIfMobile() {
  if (isMobileDevice()) {
  window.location.href = 'mobile/mobile.html';
   }
 }
 window.onload = redirectIfMobile();
 window.onload = isMobileDevice();

   

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




// CryptoField
// Bitcoin
function bitcola() {


  fetch('https://api.coindesk.com/v1/bpi/currentprice/EUR.json')
  .then(btc => btc.json())
  .then(data => {
    const field = document.getElementById("cryptoshow");
    const rate = data.bpi.EUR.rate;
    const sliced = rate.slice(0,6);
    field.value = "€ " + sliced;



  });
}
window.onload = bitcola;

// Etherumoum
function ethelarefile() {
  fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR')
  .then(response => response.json())
  .then(data => {
    const price = document.getElementById("cryptoshow");
    const ethPrice = data.EUR.toFixed(2);
    const sliced_1 = ethPrice.slice(0,1); 
    const sliced_2 = ethPrice.slice(1,4);
    price.value = "€ " + sliced_1 + "," + sliced_2;
  })
  .catch(error => {
    console.error('Fetching Price Error:', error);
  });
}



// Weather Display 
function weathercollection() {
  var typecountry = prompt("Type A City To Check The Temperature And Wind");
  var cords_provider = "https://nominatim.openstreetmap.org/search?q=" + typecountry + "&format=json" ;

  if (typecountry === "" || typecountry === null || typecountry === undefined) {
    var display_field = document.getElementById("respo");
    display_field.value = "You Didn't Type Anything";
  } else {
    fetch(cords_provider)
    .then(response => response.json())
    .then(data => {
      const longitude  = data[0].lon;
      const latitude = data[0].lat;
      const date = new Date();
      const weather_get = "https://api.brightsky.dev/weather?lat=" + latitude.slice(0,4) + "&lon=" + longitude.slice(0,4) + "&date="+ date.toISOString().slice(0, 10); 
      const display_field = document.getElementById("respo");
    fetch(weather_get)
     .then(response => response.json())
     .then(data => {
      const windSpeed = data.weather[0].wind_speed;
      const tempature = data.weather[0].temperature;
      display_field.value = "  " + tempature +  "℃ 🌡️               "  + windSpeed + " m/s 💨";
     });
    });
  }
  }



// Chill Music Buttton

function chillradio() {
  const radio = document.getElementById("radiosystems");
  radio.src = "https://coderadio-admin-v2.freecodecamp.org/listen/coderadio/low.mp3";
}




// Radio Per Country

function radiocont() {
  fetch("https://get.geojs.io/v1/ip/country.json")
    .then(count => count.json())
    .then(data => {
      const countrex = data.name;
      const radiosystem = document.getElementById("radiosystems");

      if (countrex === "Greece") {
        radiosystem.src = "https://centova.gr-net.gr/proxy/love/stream";
      }
      else if ( countrex === "United States") {
        radiosystem.src = "https://17573.live.streamtheworld.com/977_HITSAAC_SC?dist=onlineradiobox";
      }
      else if ( countrex === "Netherlands") {
        radiosystem.src = "https://22323.live.streamtheworld.com/TLPSTR01.mp3?dist=radionet";
      }
      else if ( countrex === "Germany") {
        radiosystem.src = "https://icepool.silvacast.com/GAYFM.mp3";
      }
      else if ( countrex === "Cyprus") {
        radiosystem.src = "https://n0e.radiojar.com/c27wx6pdh8vtv";
      }
      else if ( countrex === "United Kingdom") {
        radiosystem.src = "https://bigrradio.cdnstream1.com/5164_128";
      }
      else if ( countrex === "Albania")  {
        radiosystem.src = "https://live.top-media.al/tar";
      }
      else if ( countrex  === "Romania") {
        radiosystem.src = "https://astreaming.edi.ro:8443/EuropaFM_aac";
      }
      else if ( countrex === "Turkey") {
        radiosystem.src = "https://25483.live.streamtheworld.com/SUPER2.mp3";
      }
      else if ( countrex === "Russia")  {
        radiosystem.src = "https://rusradio.hostingradio.ru/rusradio96.aacp";


                  // 10 Stations Above


      }
      else if ( countrex === "Bulgaria") {
        radiosystem.src = "https://ssl120.radyotelekom.com.tr:8122/stream";
      }
      else if ( countrex === "Pakistan") {
        radiosystem.src = "https://samaakhi107-itelservices.radioca.st/stream/1/";
      }
      else if ( countrex === "Armenia") {
        radiosystem.src = "https://eu.stream4cast.com/proxy/lavradio/stream";
      }
      else if ( countrex === "Canada") {
        radiosystem.src = "http://bigrradio.cdnstream1.com/5109_48";
      }
      else if ( countrex === "Moldova") {
        radiosystem.src = "http://live.noroc.tv:8000/radionoroc.mp3";
      }
      else if ( countrex === "Serbia") {
        radiosystem.src = "https://radiobalkan.live/radio/live/narodna.mp3";
      }
      else if ( countrex === "Croatia") {
        radiosystem.src = "https://www.myipcast.com/radio/split";
      }
      else if ( countrex === "Spain") {
        radiosystem.src = "https://cadena100-cope-rrcast.flumotion.com/cope/cadena100.mp3";
      }
      else if ( countrex === "France") {
        radiosystem.src = "https://str1.openstream.co/589";
      }
      else if ( countrex === "Italy") {
        radiosystem.src = "https://icstream.rds.radio/rds";
      }
      else if ( countrex === "India") {
        radiosystem.src = "http://peridot.streamguys.com:7150/Mirchi";
      }
      else if ( countrex === "Mexico") {
        radiosystem.src = "https://soniceuropa.globalstream.pro/7326/;";
      }
      else if ( countrex === "Afghanistan") {
        radiosystem.src = "https://stream.radiosrood.com/";
      }
      else if ( countrex === "Austria") {
        radiosystem.src = "https://live.antenne.at/rf";
      }
      else if ( countrex === "Belgium") {
        radiosystem.src = "https://vrt.streamabc.net/vrt-studiobrussel-mp3-128-4409118";
      }
      else if ( countrex === "Czechia") {
        radiosystem.src = "http://mp3stream4.abradio.cz/depeche128.mp3";
      }
      else if ( countrex === "Denmark") {
        radiosystem.src = "https://streammp3.retro-radio.dk/retro-mp3";
      }
      else if ( countrex === "Sweden") {
        radiosystem.src = "https://live-bauerse-fm.sharp-stream.com/retrofm_aacp";
      }
      else if ( countrex === "Estonia") {
        radiosystem.src = "https://edge03.cdn.bitflip.ee:8888/relax";
      }
      else if ( countrex === "Finland") {
        radiosystem.src = "https://c4.radioboss.fm:18123/stream";
      }
      else if ( countrex === "Hungary") {
        radiosystem.src = "https://icast.connectmedia.hu/5202/live.mp3";
      }
      else if ( countrex === "Iceland") {
        radiosystem.src = "https://ice-11.spilarinn.is/kissfm";
      }
      else if ( countrex === "Ireland") {
        radiosystem.src = "https://stream.audioxi.com/TD";
      }
      else if ( countrex === "Kazakhstan") {
        radiosystem.src = "https://icecast.luxfm.kz/luxfm";
      }
      else if ( countrex === "Kosovo") {
        radiosystem.src = "http://ca3.rcast.net:8024/stream";
      }
      else if ( countrex === "Latvia") {
        radiosystem.src = "https://topradio.live.advailo.com/topradio/mp3/icecast.audio";
      }




});
}

window.onload = radiocont();

// IP Detector
function mouser_reveal_ip() {
  fetch('https://api.ipify.org/?format=json')
  .then (ipe => ipe.json())
  .then(data => {
    const ip = document.getElementById("ipaka");
    ip.value = data.ip;
  });
}

function mouse_hidden_ip() {
  const ip = document.getElementById("ipaka");
  ip.value = "Hover To Reveal IP";
}


// Resolution Counter
fetch('https://api.ipify.org/?format=json')
.then(data => {
  const drre = document.getElementById("resolution");
  var final = window.screen.availWidth + " X " + window.screen.availHeight;
  drre.value = final;
});

// Display After Some Seconds 
setTimeout(function() {
  var fastdown1 = document.getElementById("fastdown1");
  var fastdownText = document.getElementById("fastdown_text");
  var backdrp = document.getElementById("back_drp");
  var madedrp = document.getElementById("madedrp");
  var git_text = document.getElementById("git_drpanayioths");

  backdrp.style.display = "block";
  fastdown1.style.display = "block";
  fastdownText.style.display = "block";
  madedrp.style.display = "block";
  git_text.style.display = "block";

  setTimeout(function() {
      fastdown1.classList.add("visible");
      fastdownText.classList.add("visible");
      back_drp.classList.add("visible");
      madedrp.classList.add("visible");
      git_text.classList.add("visible");
  
  }, 100);
}, 5000);


// Developer Web Tools Blocker
function inspector_blocker() {
  document.addEventListener('keydown', function(event) {
      if (event.code === 'F12' || (event.ctrlKey && event.shiftKey && (event.code === 'KeyI' || event.code === 'KeyJ' || event.code === 'KeyC')) || (event.ctrlKey && event.code === 'KeyU') || (event.ctrlKey && event.code === 'KeyS') || (event.ctrlKey && event.shiftKey && event.code === 'KeyK')) {
          event.preventDefault();
          alert('Developer Tools Detected, Reload Page');
      }
  });
}
inspector_blocker();


// Copyright Diclaimer (Music Mode)
document.addEventListener("DOMContentLoaded", (event) => {
  var mcontrols = document.getElementById("radiosystems");

  mcontrols.addEventListener("play", function() {
    var notification = document.getElementById("copyright_music");
      notification.style.visibility = "visible";
      notification.style.animationDuration = "6s";
  });
  mcontrols.addEventListener("pause", function() {
    var notification = document.getElementById("copyright_music");
    notification.style.visibility = "hidden";
    notification.style.opacity = "0";
  });
});

// Accessbility
function access_menu() {
  var menu = document.getElementById("access");

  if (localStorage.getItem("access") === "enabled") {
    menu.classList.add("fadeout");
    menu.classList.remove("fadein");
    setTimeout(function() {
      menu.style.display = "none";
    }, 1000);
    localStorage.setItem("access", "disabled");

  
  } else if (localStorage.getItem("access") === "disabled" || localStorage.getItem("access") === null) {
    menu.style.display = "block";
    menu.classList.add("fadein");
    menu.classList.remove("fadeout");
    localStorage.setItem("access", "enabled");
  }
}

function increase_text() {
  const displays = [
    document.getElementById("ipaka"),
    document.getElementById("resolution"),
    document.getElementById("cryptoshow"),
    document.getElementById("countre"),
    document.getElementById("passwordInput"),
    document.getElementById("coinprice_displayer")
];

  displays.forEach(display => {
    if (display) {
      var size_before = window.getComputedStyle(display).fontSize;
      var size_final = parseFloat(size_before) + 1;
    if (size_final <= 25) {
      display.style.fontSize = size_final + "px";
      }
    }
});}

function decrease_text() {
  const displays = [
    document.getElementById("ipaka"),
    document.getElementById("resolution"),
    document.getElementById("cryptoshow"),
    document.getElementById("countre"),
    document.getElementById("passwordInput"),
    document.getElementById("coinprice_displayer")
];

  displays.forEach(display => {
    if (display) {
      var size_before = window.getComputedStyle(display).fontSize;
      var size_final = parseFloat(size_before) - 1;
    if (size_final > 10) {
      display.style.fontSize = size_final + "px";
    }
  }
});
}


// Select To Speech

function enable_tts() {
  localStorage.setItem("tts_module", "enabled");
  operation_tts();
}

function operation_tts() {
  if (localStorage.getItem("tts_module") == "enabled") {
    function speakText(text) {
      var speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    }
    document.addEventListener('mouseup', function() {
      var selectedText = window.getSelection().toString().trim();
      if (selectedText) {
          speakText(selectedText);
      }
    });
  }
}

window.onload = operation_tts();

