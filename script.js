var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000);
}

let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains1 = document.getElementById("mountains1");
let mountains2 = document.getElementById("mountains2");
let intro = document.querySelector("#intro");
window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountains1.style.top = value * 1 + "px";
  mountains2.style.top = value * 0.75 + "px";
  intro.style.fontSize = value + "px";
  if (scrollY >= 51) {
    intro.style.fontSize = 51 + "px";
    intro.style.position = "fixed";
    if (scrollY >= 500) {
      intro.style.display = "none";
    } else {
      intro.style.display = "block";
    }
    if (scrollY >= 80) {
      document.querySelector(".main").style.background =
        "linear-gradient(#376281,#10001f)";
    } else {
      document.querySelector(".main").style.background =
        "linear-gradient(#200016,#10001f)";
    }
  }
};
