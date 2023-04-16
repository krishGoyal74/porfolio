let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let menuOpen = false;
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  menuOpen = !menuOpen;
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  if (!menuOpen) {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector("header nav a[href*='" + id + "']").classList.add('active');
        });
      }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
  }
};
const scriptURL = 'https://script.google.com/macros/s/AKfycbxLXj-Fp3M4eQpTn77ykP7Jukxr0zPw-c70mS6EYYjEzvY0GzqgFth06gmQnrOF1grExQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message sent successful!";
      setTimeout(function() {
        msg.innerHTML = ""
      }, 5000);
      form.reset();

      setTimeout(function() {
        window.location.reload();
      }, 3000);
    });
});