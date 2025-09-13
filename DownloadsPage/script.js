document.addEventListener("DOMContentLoaded", () => {
  const item = document.querySelectorAll(".item");
  item.forEach((element) => {
    let color = element.classList[1];

    if (color === "orange") {
      element.style.boxShadow = "0 0 10px var(--orange)";
    }
    if (color === "purple") {
      element.style.boxShadow = "0 0 10px var(--purple)";
    }
    if (color === "blue") {
      element.style.boxShadow = "0 0 10px var(--blue)";
    }
    if (color == "yellow") {
      element.style.boxShadow = "0 0 10px var(--yellow)";
    }
    if (color == "dark_purple") {
      element.style.boxShadow = "0 0 10px var(--dark_purple)";
    }
    if (color == "light_purple") {
      element.style.boxShadow = "0 0 10px var(--light-purple)";
    }
    if (color == "white") {
      element.style.boxShadow = "0 0 10px var(--white)";
    }
    if (color == "light_blue") {
      element.style.boxShadow = "0 0 10px var(--light-blue)";
    }
  });
});

function goto(url, status) {
  if (status === 0) {
    window.open(url, "_blank").focus();
  } else if (status === 1) {
    document.location.href = url;
  }
}
