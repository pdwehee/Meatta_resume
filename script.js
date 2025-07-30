// script.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. HEADER BACKGROUND SLIDESHOW
  const header = document.querySelector('.slideshow-header');
  if (header) {
    const slideshowImages = [
      './images/bg1.jpg',
      './images/bg2.jpg',
      './images/bg3.jpg',
      './images/bg4.jpg',
    ];
    let currentIndex = 0;

    function changeBackground() {
      header.style.backgroundImage = `url('${slideshowImages[currentIndex]}')`;
      currentIndex = (currentIndex + 1) % slideshowImages.length;
    }

    changeBackground(); // initial image
    setInterval(changeBackground, 3000);
  }

  // 2. MOBILE MENU TOGGLE (Bootstrap 5 usually handles this)
  const menuToggle = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('#navbarNav');

  if (menuToggle && navbarCollapse) {
    menuToggle.addEventListener('click', () => {
      navbarCollapse.classList.toggle('show');
    });
  }

  // 3. DARK MODE TOGGLE
  const themeToggleBtn = document.createElement('button');
  themeToggleBtn.className = 'theme-toggle';
  themeToggleBtn.textContent = 'Dark Mode';
  document.body.appendChild(themeToggleBtn);

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
  });

  // 4. SMOOTH SCROLL FOR ANCHOR LINKS
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId.length > 1) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // 5. SCROLL TO TOP BUTTON
  const scrollBtn = document.createElement('button');
  scrollBtn.id = 'scrollToTop';
  scrollBtn.textContent = '↑';
  scrollBtn.style.display = 'none';
  document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 6. PASSWORD-PROTECTED RESUME DOWNLOAD
  const downloadBtn = document.getElementById('downloadResumeBtn');
  const correctPassword = 'MySecret123'; // Change this to your desired password

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const userPass = prompt('Please enter the password to download the resume:');
      if (userPass === correctPassword) {
        const link = document.createElement('a');
        link.href = './resume.pdf';
        link.download = 'Meatta_Freeman_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        alert('Incorrect password. Access denied.');
      }
    });
  }
});
