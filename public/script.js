// Aparecer al hacer scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Foto del inicio se mueve suave con el mouse
const foto = document.querySelector(".hero-foto");
if (foto) {
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / innerWidth - 0.5) * 18;
    const y = (e.clientY / innerHeight - 0.5) * 18;
    foto.style.transform = `translate(${x}px, ${y}px)`;
  });
}
