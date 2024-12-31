// Cookie That Is Automatically Created By DrPanayioths on 2 Agoust 2023 For Ownership 

document.cookie = "dataremember=Created By DrPanayioths; expires=Thu, 18 Dec 3000 01:01:01 UTC";


// IP Detector
function reveal() {
    fetch('https://api.ipify.org/?format=json')
    .then (response => response.json())
    .then(data => {
      const ip = document.getElementById('ip_reveal');
      ip.value = data.ip;
    })
    .catch(error => {
        console.error('Error In Fetching The IP:', error);
    });
}

  
function hide() {
    const ip = document.getElementById("ip_reveal");
    ip.value = "Hover To Reveal IP";
}

// Country Display
fetch('https://get.geojs.io/v1/ip/country.json')
.then(response => response.json())
.then(data => {
    const countryname = document.getElementById('country_display');
    countryname.value = data.name;
})
.catch(error => {
    console.error('Error Fetching Country Data:', error);
});


// Screen Resolution
function screenResolution() {
    const display = document.getElementById("screen_resolution");
    var data = window.screen.availWidth + " X " + window.screen.availHeight;
    display.value = data;
}
window.onload = screenResolution;

// password_data Strength
function Password() {
    const password_dataInput = document.getElementById("password_strength");
    const password_data = password_dataInput.value;
    const display = document.getElementById("password_display");

    const numbers = /[0123456789]+/;
    const symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (password_data.length != "0") {
      if (password_data.length < 6) {
        display.textContent = "Weak 🔓";
      } else if (password_data.length < 8) {
        display.textContent = "Good 👍";
      } else if (password_data.length < 12 && symbols.test(password_data) ) {
        display.textContent = "Strong 💪";
      } else if (password_data.length < 18 && symbols.test(password_data) && numbers.test(password_data) ) {
        display.textContent = "Super 🚀";
      }
    } else {
        display.textContent = "";
    }
}

// IP Check 
fetch('https://api.ipify.org/?format=json')
.then(response => response.json())
.then(data => {
    const letters = /[a-zA-Z]+/;
    const ip = data.ip;
    const ip_showcase = document.getElementById("ip_mode");

    if ( !letters.test(ip)) {
      ip_showcase.value = "Protocol IPV4"
    } else {
      ip_showcase.value = "Protocol IPV6"
    }
  })
  .catch(error => {
    console.error('Error Fetching IP Data:', error);
  });