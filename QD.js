// Remember The Creator Cookie

document.cookie = "Connection Trust,value=Certified; path=/";

// Vote System


function psifosep() {
  var votecheckare = localStorage.getItem("vote");

  if (votecheckare === "true") {
    alert("You have already voted for an operating system! Please wait until the next vote!");
  }
   else if  (votecheckare != "true")  {
    vote(); 
}}






function vote() {
  const inpa = prompt("Write Your Favourite Operating System:");
  inpa_final = inpa.toLowerCase()
  inpa_Uppercase = inpa.toUpperCase()

  if (inpa_final === "windows" || inpa_final === "linux" || inpa_final === "macos") {
    alert("Perfect! Your Favourite Operating System Is: " + inpa_Uppercase);
    localStorage.setItem("vote", "true");
    localStorage.setItem("Vote_Value", inpa_final)
  }
  else {
    alert("Type The Operating System Before Submitting")
  }

}






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


// Developer Web Tools Blocker
function inspector_blocker() {
  document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J' || event.code === 'KeyC')) || (event.ctrlKey && event.key === 'U')) {
          event.preventDefault();
          reload_warning()
    }
  });
}
setInterval(inspector_blocker, 1000);

function reload_warning() {
    alert('Developer Tools Detected, Reload Page');
}

























