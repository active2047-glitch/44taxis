// Mobile nav toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger && burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked (mobile)
navLinks && navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth < 640) navLinks.classList.remove('open');
  });
});

// Mobile dropdown toggle on tap
document.querySelectorAll('.has-drop > a').forEach(a => {
  a.addEventListener('click', e => {
    if (window.innerWidth < 640) {
      e.preventDefault();
      a.closest('.has-drop').classList.toggle('open');
    }
  });
});
