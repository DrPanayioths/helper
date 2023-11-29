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



// Add Click Point Adder

function detectclick() {
  console.log("Left click detected!");
}