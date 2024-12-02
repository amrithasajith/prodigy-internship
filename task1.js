// JavaScript to add scroll-based interactivity to the navbar
window.onscroll = function() {
    changeNavbarStyle();
  };
  
  function changeNavbarStyle() {
    const navbar = document.getElementById("navbar");
  
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  