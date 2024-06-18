
// Cookie That Is Automatically Created By DrPanayioths on 2 Agoust 2023 For Ownership 

document.cookie = "dataremember=Created By DrPanayioths; expires=Thu, 18 Dec 3000 01:01:01 UTC";



// QR CODE GENERATOR


function qrbuilda() {
	var idz = document.getElementById("datra");
	var inport = idz.value;
	var linker = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inport;

	var pictu = document.getElementById("qrp");
  if (inport === null || inport === "") {
    alert("<Invalid Input> Type Something Before Creating QR")
  } else {
    pictu.src = linker;
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
    const convetareto = Math.round(data.bpi.EUR.rate_float * 2) / 1000;
    const cryptoname = document.getElementById("whatcrypto");
    field.value = "€ " + convetareto 
    cryptoname.textContent =  "BTC"


  });


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
    price.value = "€ " + pricefinal
    cname.textContent =  "ETH"
  });

}


// Weather Display 
function weathercollection() {
  var typecountry = prompt("City To See Weather");
  var cords_provider = "https://geocode.maps.co/search?q=" + typecountry + "&api_key=666d62b99202b919832048pfk1f984c";
  
  fetch(cords_provider)
    .then(response => response.json())
    .then(data => {
      var longitude  = data[0].lon
      var latitude = data[0].lat
      var date = new Date();
    var weather_get = "https://api.brightsky.dev/weather?lat=" + latitude * 1000 / 1000 + "&lon=" + longitude * 1000 / 1000 + "&date="+ date.toISOString().slice(0, 10); 
    var display_field = document.getElementById("respo")
    fetch(weather_get)
     .then(response => response.json())
     .then(data => {
      var windSpeed = data.weather[1].wind_speed;
      var tempature = data.weather[1].temperature;
      display_field.value = "  " + tempature +  "℃ 🌡️               "  + windSpeed + " m/s 💨"
     })
    })
    
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


                  // 10 Stations Above


      }
      else if ( countrex === "Bulgaria") {
        radiosystem.src = "https://ssl120.radyotelekom.com.tr:8122/stream"
      }
      else if ( countrex === "Pakistan") {
        radiosystem.src = "https://samaakhi107-itelservices.radioca.st/stream/1/"
      }
      else if ( countrex === "Armenia") {
        radiosystem.src = "https://eu.stream4cast.com/proxy/lavradio/stream"
      }
      else if ( countrex === "Canada") {
        radiosystem.src = "http://bigrradio.cdnstream1.com/5109_48"
      }
      else if ( countrex === "Moldova") {
        radiosystem.src = "http://live.noroc.tv:8000/radionoroc.mp3"
      }
      else if ( countrex === "Serbia") {
        radiosystem.src = "https://radiobalkan.live/radio/live/narodna.mp3"
      }
      else if ( countrex === "Croatia") {
        radiosystem.src = "https://www.myipcast.com/radio/split"
      }
      else if ( countrex === "Italy") {
        radiosystem.src = "https://icecdn-19d24861e90342cc8decb03c24c8a419.msvdn.net/icecastRelay/S18493106/rCMKqdMFKPBB/icecast"
      }
      else if ( countrex === "Spain") {
        radiosystem.src = "https://cadena100-cope-rrcast.flumotion.com/cope/cadena100.mp3"
      }
      else if ( countrex === "France") {
        radiosystem.src = "https://str1.openstream.co/589?aw_0_1st.collectionid%3D3139%26stationId%3D3139%26publisherId%3D613%26k%3D1700166236"
      }
      else if ( countrex === "Italy") {
        radiosystem.src = "https://icstream.rds.radio/rds"
      }
      else if ( countrex === "India") {
        radiosystem.src = "http://peridot.streamguys.com:7150/Mirchi"
      }
      else if ( countrex === "Mexico") {
        radiosystem.src = "https://soniceuropa.globalstream.pro/7326/;"
      }
      else if ( countrex === "Afghanistan") {
        radiosystem.src = "https://stream.radiosrood.com/"
      }



});
}

window.onload = radiocont();



// Flag System For Countrys

function flager() {

  fetch('https://get.geojs.io/v1/ip/country.json')
.then(flage => flage.json())
.then(data => {
  const countryname = document.getElementById('countre')
  const flag1 = document.getElementById('flagimg')
  const flag2 = document.getElementById('flag2img')




  countryname.style.fontSize = "18px";
  countryname.style.textAlign = "center";
  countryname.style.outline = "none";
  countryname.value = data.name;

  flag1.src = "https://flagsapi.com/"+ data.country + "/flat/64.png"
  flag2.src = "https://flagsapi.com/"+ data.country + "/flat/64.png"



  








})}
window.onload = flager();




// Data Redirect

function humancol() {
  window.location.href = "https://drpanayioths.github.io/helper/HumanProfile/form.html";
}


// IP Detector
function ipair() {
  fetch('https://api.ipify.org/?format=json')
  .then (ipe => ipe.json())
  .then(data => {

    const ip = document.getElementById("ipaka");
    ip.value = data.ip;
  });

}

window.onload = ipair();


// Resolution Counter
fetch('https://api.ipify.org/?format=json')
.then(data => {
  const drre = document.getElementById("resolution");
  var final = window.screen.availWidth + " X " + window.screen.availHeight;
  console.log(final);
  drre.value = final;
});
