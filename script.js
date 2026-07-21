// ---- current year ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- mobile menu ----
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
// close menu on link click (mobile)
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// ---- contact form -> WhatsApp (only where the form exists) ----
const WA_NUMBER = '40746649063';
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nume = form.nume.value.trim();
    const telefon = form.telefon.value.trim();
    const adresa = form.adresa.value.trim();
    const etaje = form.etaje.value.trim();
    const mesaj = form.mesaj.value.trim();

    let text = `Bună ziua! Sunt ${nume} și doresc o ofertă pentru curățenia scării de bloc.`;
    text += `\n\nAdresa: ${adresa}`;
    if (etaje) text += `\nNumăr de etaje: ${etaje}`;
    if (mesaj) text += `\nDetalii: ${mesaj}`;
    text += `\n\nTelefon de contact: ${telefon}`;

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
  });
}

// ---- reveal on scroll ----
const revealEls = document.querySelectorAll('.card, .feat, .step, .section-head, .hero-copy, .hero-visual, .cta-inner, .contact-info');
revealEls.forEach(el => el.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}
