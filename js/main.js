// Utility: clamp
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Canvas animated blobs (unreal bright theme)
(function(){
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let width, height, ratio;
  const blobs = Array.from({ length: 8 }, (_, i) => ({
    x: Math.random(), y: Math.random(), r: .08 + Math.random() * .12,
    hue: 10 + i * 35, speedX: (Math.random() * 2 - 1) * .0006, speedY: (Math.random() * 2 - 1) * .0006
  }));

  const resize = () => {
    ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth; height = window.innerHeight;
    canvas.width = width * ratio; canvas.height = height * ratio; canvas.style.width = width + 'px'; canvas.style.height = height + 'px';
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  };
  window.addEventListener('resize', resize, { passive: true });
  resize();

  function step(){
    ctx.clearRect(0, 0, width, height);
    for(const b of blobs){
      b.x += b.speedX; b.y += b.speedY;
      if(b.x < -0.1 || b.x > 1.1) b.speedX *= -1;
      if(b.y < -0.1 || b.y > 1.1) b.speedY *= -1;
      const x = b.x * width, y = b.y * height, r = b.r * Math.min(width, height);
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      grad.addColorStop(0, `hsla(${b.hue}, 95%, 65%, .35)`);
      grad.addColorStop(1, 'hsla(0, 0%, 100%, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
})();

// Tilt effect for cards
const tiltElements = document.querySelectorAll('.tilt');
tiltElements.forEach((el) => {
  const maxTilt = 10;
  function handleMove(e){
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tx = (x - 0.5) * 2 * maxTilt;
    const ty = (0.5 - y) * 2 * maxTilt;
    el.style.transform = `perspective(800px) rotateX(${ty}deg) rotateY(${tx}deg) translateY(-2px)`;
  }
  function reset(){ el.style.transform = 'perspective(800px)'; }
  el.addEventListener('mousemove', handleMove);
  el.addEventListener('mouseleave', reset);
});

// Reveal on scroll
const reveals = Array.from(document.querySelectorAll('.reveal'));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .15 });
reveals.forEach((el)=> observer.observe(el));

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if(target){
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    }
  });
});


