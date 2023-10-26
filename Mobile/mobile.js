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