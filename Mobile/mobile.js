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
        if (event.code === 'F12' || (event.ctrlKey && event.shiftKey && (event.code === 'KeyI' || event.code === 'KeyJ' || event.code === 'KeyC')) || (event.ctrlKey && event.code === 'KeyU') || (event.ctrlKey && event.code === 'KeyS') || (event.ctrlKey && event.shiftKey && event.code === 'KeyK')) {
            event.preventDefault();
            alert('Developer Tools Detected, Reload Page');
        }
    });
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        alert('Right-click is disabled.');
    });
  }
  inspector_blocker();