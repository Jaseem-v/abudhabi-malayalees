function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.classList.contains("hidden")) {
    x.classList.remove("hidden");
  } else {
    x.classList.add("hidden");
  }
}
