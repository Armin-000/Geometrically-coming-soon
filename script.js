function initVantaBackground() {
  VANTA.NET({
    el: "#vanta-bg",
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x4778ff,
    points: 4,
    maxDistance: 50,
    spacing: 50,
    backgroundColor: 0x111624
  });
}

function startCountdown() {
  const now = new Date().getTime();
  const twoWeeksInMilliseconds = 14 * 24 * 60 * 60 * 1000;
  const countdownDate = now + twoWeeksInMilliseconds;

  const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const countdownDaysEl = document.getElementById("countdown-days");
    const countdownHoursEl = document.getElementById("countdown-hours");
    const countdownMinutesEl = document.getElementById("countdown-minutes");
    const countdownSecondsEl = document.getElementById("countdown-seconds");

    if (countdownDaysEl && countdownHoursEl && countdownMinutesEl && countdownSecondsEl) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const formatNumber = num => num < 10 ? `0${num}` : num;

      countdownDaysEl.textContent = formatNumber(days);
      countdownHoursEl.textContent = formatNumber(hours);
      countdownMinutesEl.textContent = formatNumber(minutes);
      countdownSecondsEl.textContent = formatNumber(seconds);
    }

    if (distance < 0) {
      clearInterval(countdownInterval);
      const countdownContainer = document.querySelector(".countdown");
      if (countdownContainer) {
        countdownContainer.innerHTML = '<h2>We are here!</h2>';
      }
    }
  }, 1000);
}

function startTextSlider() {
  const subtitles = [
    "where intelligence meets innovation",
    "Changing the way you interact with technology",
    "Precision, performance, and AI without limits"
  ];
  let currentSlide = 0;
  const textSlider = document.getElementById('text-slider');
  
  if (textSlider) {
    const subtitle = textSlider.querySelector('.subtitle');
    
    function updateSlide() {
      textSlider.style.opacity = 0;
      setTimeout(() => {
        subtitle.textContent = subtitles[currentSlide];
        textSlider.style.opacity = 1;
        currentSlide = (currentSlide + 1) % subtitles.length;
      }, 1000);
    }
    
    updateSlide();
    setInterval(updateSlide, 4000);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  initVantaBackground();
  startCountdown();
  startTextSlider();
});

const contactBtn = document.getElementById('contactBtn');
contactBtn.disabled = false;

contactBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const to = 'info@alphawave.hr';
  const subject = 'Upit za Alphawave';
  const body = 'Pozdrav, želim vas kontaktirati. Napišite poruku...';

  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1&tf=1` +
    `&to=${encodeURIComponent(to)}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  window.open(gmailUrl, '_blank', 'noopener');
});