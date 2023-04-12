function myFunction() {
  var menuOpen = document.getElementById("menu-open");
  var menuClose = document.getElementById("menu-close");
  var x = document.getElementById("myLinks");
  if (x.classList.contains("hidden")) {
    x.classList.remove("hidden");
  } else {
    x.classList.add("hidden");
    x.classList.add("navClose");
  }
  if (menuOpen.classList.contains("hidden")) {
    menuOpen.classList.remove("hidden");
    menuClose.classList.add("hidden");
  } else {
    menuOpen.classList.add("hidden");
    menuClose.classList.remove("hidden");
  }
}
