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
    if (color == "light_purple") {
      element.style.boxShadow = "0 0 10px var(--light-purple)";
    }
  });
});
