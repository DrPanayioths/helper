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
  const counter = document.getElementById("count");
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
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