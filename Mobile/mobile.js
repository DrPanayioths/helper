// Redirect To PC Page
function ispc() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth >= 1024) {
        window.location.href = "https://drpanayioths.github.io/helper/index.html";
    }
}

window.onload = ispc;