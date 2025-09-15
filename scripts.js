/* ===== Intersection-driven reveals (kept) ===== */
const revealIO = new IntersectionObserver((entries)=>{
  for(const e of entries){
    if(e.isIntersecting){
      e.target.classList.add('visible');
      revealIO.unobserve(e.target);
    }
  }
},{threshold:0.18});
document.querySelectorAll('.fade-in, .shot').forEach(el=>revealIO.observe(el));

