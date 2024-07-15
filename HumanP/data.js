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
      basic.style.left = "593px";
      con.innerHTML = "Contact Information:"
      con.style.left = "585px";
      bod.innerHTML = "Body Information:"
      bod.style.left = "593px";
      
      const heightplacehold = document.getElementById("height");
      const weightplaceholda = document.getElementById("weight");
    }
  });
}
window.onload = langchoser();



// Age Automatticaly Count From Birthday

function agecalc() {
  const xronia = new Date().getFullYear();
  const birtdh = new Date(document.getElementById("birthday").value).getFullYear();
  const agecalc = xronia - birtdh;
  const ageinsert = document.getElementById("age");
  ageinsert.value = agecalc;
}


// BMI Calc That Show Body Status

function bmi() { 
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const areyouweight = weight / (height * height);
  const status = document.getElementById("status");

  if (areyouweight < 18.5) 
  status.value = "UnderWeight"; 

  else if (areyouweight >= 18.5 && areyouweight < 24.9) 
  status.value = "Healthy"; 

  else if (areyouweight >= 24.9 && areyouweight < 30) 
  status.value = "OverWeight"; 

  else if (areyouweight >= 30) 
  status.value = "Obesity"; 
}



// Generate Text Input
function generateText() {
  var input1Value = document.getElementById('username').value;
  var input2Value = document.getElementById('middlename').value;
  var input3Value = document.getElementById('surname').value;
  var input4Value = document.getElementById('telephonen').value;
  var input5Value = document.getElementById('birthday').value;
  var input6Value = document.getElementById('age').value;
  var input7Value = document.getElementById('TaxNumber').value;
  var input8Value = document.getElementById('Email').value;
  var input9Value = document.getElementById('Discord').value;
  var input10Value = document.getElementById('height').value;
  var input11Value = document.getElementById('weight').value;
  var input12Value = document.getElementById('status').value;

  var finaloutpot = "Name: " + input1Value + " Middle_Name: " + input2Value + " Surname: " + input3Value + " Telephone Number: " + input4Value + " Birthday: " + input5Value + " Age: " + input6Value + "TaxNumber: " + input7Value + " Email: " + input8Value + " Discord: " + input9Value + " Height: " + input10Value + " Weight: " + input11Value + " Body Status: " + input12Value;


  var final = document.getElementById("finalf");
  final.value = finaloutpot;


}


// Developer Web Tools Blocker
function inspector_blocker() {
  document.addEventListener('keydown', function(event) {
    if (event.code === 'F12' || (event.ctrlKey && event.shiftKey && (event.code === 'KeyI' || event.code === 'KeyJ' || event.code === 'KeyC')) || (event.ctrlKey && event.code === 'KeyU') || (event.ctrlKey && event.code === 'KeyS')) {
      event.preventDefault();
      alert('Developer Tools Detected, Reload Page');
    }
});
}
inspector_blocker();

