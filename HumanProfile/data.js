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

// English Langague

function langchoser() {
  fetch("https://get.geojs.io/v1/ip/country.json")
  .then(count => count.json())
  .then(data => { 
    if (data.name === "Greece") {
      
    } else {
      const one = document.getElementById("1");
      const two = document.getElementById("2");
      const three = document.getElementById("3");
      const four = document.getElementById("4");
      const five = document.getElementById("5");
      const six = document.getElementById("6");
      const seven = document.getElementById("7");
      const ten = document.getElementById("10");
      const eleven = document.getElementById("11");
      const twelve = document.getElementById("12");

      one.innerHTML = "Name:"
      two.innerHTML = "Middle Name:"
      three.innerHTML = "Last Name:"
      four.innerHTML = "Phone Number:"
      five.innerHTML = "Birthday:"
      six.innerHTML = "Age:"
      seven.innerHTML = "Tax Number:"
      ten.innerHTML = "Height:"
      eleven.innerHTML = "Weight:"
      twelve.innerHTML = "Body Status:"

      const basic = document.getElementById("basicin");
      const con = document.getElementById("coninfo");
      const bod = document.getElementById("bodyinf");

      basic.innerHTML = "Basic Information:"
      basic.style.left = "240px";
      con.innerHTML = "Contact Information:"
      con.style.left = "240px";
      bod.innerHTML = "Body Information:"
      bod.style.left = "240px";
      

    }
  });
}
window.onload = langchoser();



// Age Automatticaly Count From Birthday

function agecalc() {
  const xronia = new Date().getFullYear();
  const birtdh = new Date(document.getElementById("birthday").value).getFullYear();
  const agecalc = xronia - birtdh;
  console.log(agecalc);
  const ageinsert = document.getElementById("age");
  ageinsert.value = agecalc;
}
