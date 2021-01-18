document
  .querySelector("#hamburger-menu")
  .addEventListener("click", function () {
    alert("Clicked!");
    document.querySelector(".open-menu").classList.toggle("highlighted");
  });
