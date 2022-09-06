function menuDropDown() {
  document.getElementById("my-dropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-cont");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}