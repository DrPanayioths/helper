
// Cookie That Is Automatically Created By DrPanayioths on 2 Agoust 2023 For Ownership 

document.cookie = "dataremember=Created By DrPanayioths; expires=Thu, 18 Dec 3000 01:01:01 UTC";


// IP Detector
function reveal() {
    fetch('https://api.ipify.org/?format=json')
    .then (response => response.json())
    .then(data => {
      const ip = document.getElementById("ip_reveal");
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
