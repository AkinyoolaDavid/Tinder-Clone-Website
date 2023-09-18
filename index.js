var menuBtn = document.getElementsByClassName("four");
var sideNav = document.getElementsByClassName("navbar");

sideNav.style.bottom = "-400px";

menuBtn.onclick = function () {
  if (sideNav.style.bottom == "-400px") {
    sideNav
    style.bottom = "0";
  } else {
    sideNav
    style.bottom == "-400px";
  }
};
