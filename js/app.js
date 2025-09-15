// refer 
const copyTxt = document.querySelector(".refer-link");
const copyBtn = document.querySelector(".refer-copy-btn");
const toastLive = document.getElementById('liveToast');
const toast = new bootstrap.Toast(toastLive);
const path = window.location.pathname;

if (copyBtn && copyTxt && toastLive && (path === "/" || path.includes("index"))) {
  const toast = new bootstrap.Toast(toastLive);

  copyBtn.addEventListener("click", () => {
    console.log("copying...");
    copyTxt.focus();
    copyTxt.select();
    navigator.clipboard.writeText(copyTxt.value)
      .then(() => toast.show())
      .catch(err => console.error("Copy failed:", err));
  });
}

// active state
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});


// menu toggle
const menuToggler = document.querySelector('.nav-toggler');
const toggleIcon = document.querySelector('.nav-toggler i');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggler.addEventListener('click', () => {
  if (mobileMenu.classList.contains('open')) {
    // Closing
    mobileMenu.classList.remove('open');
    toggleIcon.classList.replace('bx-x', 'bx-menu');

    mobileMenu.addEventListener('transitionend', function handler() {
      mobileMenu.style.display = 'none';
      mobileMenu.removeEventListener('transitionend', handler);
    });
  } else {
    // Opening
    mobileMenu.style.display = 'flex';
    requestAnimationFrame(() => {
      mobileMenu.classList.add('open');
      toggleIcon.classList.replace('bx-menu', 'bx-x');
    });
  }
});

