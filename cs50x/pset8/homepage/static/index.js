document.querySelector("nav.navbar").classList.remove("sticky-top");
document.querySelector("nav.navbar").classList.add("fixed-top");

document.addEventListener("scroll", e => {
    if (window.scrollY > 0) {
      document.querySelector("nav.navbar").classList.add("scrolled");
    }
    else {
      document.querySelector("nav.navbar").classList.remove("scrolled");
    }
  })
