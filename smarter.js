// Remember The Creator Cookie

document.cookie = "Visited DrPanayioths Site,value=true; path=/";

// Vote System

let psifisesre = false; 
function psifosep() {
  if (psifisesre) {
    alert("You Have Already Vote A Operating System! But Wait Until The Next Vote!");
  } else {
    const userInput = prompt("Write Your Favourite Operating System:"); 

    if (userInput !== null) {
      alert("Perfect! Your Favourite Operating System Is: " + userInput);
      psifisesre = true; 
    }
  }
}









