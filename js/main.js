/*open-close header mobıle menu*/

function openNav() {
  document.getElementById("myNav").style.width = "65%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
