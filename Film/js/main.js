window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".scroll").setAttribute("style", "display:block;");
  } else {
    document.querySelector(".scroll").setAttribute("style", "display:none");
  }

  if (document.documentElement.scrollTop > 550) {
    document
      .querySelector("#header")
      .setAttribute("style", "background: rgba(0, 0, 0, 0.5);");
  } else {
    document
      .querySelector("#header")
      .setAttribute("style", "background: none;");
  }
}

const btnScroll = document.getElementById("scroll");
btnScroll.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
