document.addEventListener("DOMContentLoaded", function() {
  initVantaBackground();
  startTextSlider();
});

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