// Function to check if the user is on a desktop PC
function isDesktop() {
    return window.innerWidth > 768; 
}
function redirectIfDesktop() {
    if (isDesktop()) {
        // Redirect to the desktop page
        window.location.href = 'https://drpanayioths.github.io/helper/index.html';
    }
}
window.onload = redirectIfDesktop;

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
  