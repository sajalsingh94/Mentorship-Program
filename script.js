/* Basic interactivity: nav toggle, modals, smooth anchor, forms, brochure (PDF) */

const $ = (s, sc = document) => sc.querySelector(s);
const $$ = (s, sc = document) => Array.from(sc.querySelectorAll(s));

// Current year
$('#year').textContent = new Date().getFullYear();

// Mobile nav
const navToggle = $('.nav-toggle');
const navMenu = $('#navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('open');
  });
  $$('#navMenu a').forEach(a => a.addEventListener('click', () => navMenu.classList.remove('open')));
}

// Smooth anchor scrolling with header offset
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const href = a.getAttribute('href');
  if (!href || href === '#' || href.length === 1) return;
  const target = $(href);
  if (!target) return;
  e.preventDefault();
  const header = $('.site-header');
  const headerH = header ? header.offsetHeight + 10 : 0;
  const y = target.getBoundingClientRect().top + window.scrollY - headerH;
  window.scrollTo({ top: y, behavior: 'smooth' });
});

// Modal helpers
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.setAttribute('aria-hidden', 'false');
}
function closeModal(node) {
  const m = node.closest('.modal');
  if (m) m.setAttribute('aria-hidden', 'true');
}

document.addEventListener('click', (e) => {
  const openBtn = e.target.closest('[data-open]');
  if (openBtn) {
    e.preventDefault();
    openModal(openBtn.getAttribute('data-open'));
  }
  if (e.target.matches('[data-close]')) {
    closeModal(e.target);
  }
});

// Forms: Booking form simple validation and success state
const bookingForm = $('#bookingForm');
const bookingSuccess = $('#bookingSuccess');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!bookingForm.reportValidity()) return;
    const submitBtn = bookingForm.querySelector('button[type="submit"]');
    const textBackup = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
    // Simulate async submit
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = textBackup;
      bookingForm.classList.add('hidden');
      bookingSuccess.classList.remove('hidden');
    }, 900);
  });
}

// Contact form
const contactForm = $('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!contactForm.reportValidity()) return;
    const btn = contactForm.querySelector('button[type="submit"]');
    const label = btn.textContent;
    btn.disabled = true; btn.textContent = 'Sending...';
    setTimeout(() => { btn.disabled = false; btn.textContent = label; contactForm.reset(); alert('Message sent. We will get back within 24 hours.'); }, 800);
  });
}

// Brochure generator (client-only) using jsPDF
const brochureBtn = document.getElementById('downloadBrochure');
if (brochureBtn) {
  brochureBtn.addEventListener('click', async () => {
    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      const p = 36; // padding
      let y = p;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.text('Udaan Mentorship – Programme Brochure', p, y);
      y += 28;

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(80);
      doc.setFontSize(12);
      doc.text('Mentorship, not just coaching – for every aspirant', p, y);
      y += 24;
      doc.setTextColor(0);

      const bullets = [
        'Mentor-led preparation adaptable for UPSC, SSC, Banking, CAT, State PSCs',
        'Personalized roadmap based on diagnostics and goals',
        'Continuous evaluation: MCQs, descriptive answers, essays',
        'Doubt-solving, workshops, and accountability check-ins'
      ];
      bullets.forEach((b) => { doc.circle(p + 3, y - 3, 2, 'F'); doc.text(b, p + 12, y); y += 18; });

      y += 10;
      doc.setFont('helvetica', 'bold');
      doc.text('How It Works', p, y); y += 18;
      doc.setFont('helvetica', 'normal');
      const steps = [
        '1) Fill registration form',
        '2) Mentor call scheduled',
        '3) Receive personalized plan',
        '4) Begin mentorship journey'
      ];
      steps.forEach((s) => { doc.text(s, p, y); y += 16; });

      y += 16;
      doc.setFont('helvetica', 'bold');
      doc.text('Contact', p, y); y += 18;
      doc.setFont('helvetica', 'normal');
      doc.text('Phone: +91 99999 99999', p, y); y += 16;
      doc.text('Email: hello@udaanmentorship.com', p, y);

      doc.save('Udaan-Mentorship-Brochure.pdf');
    } catch (err) {
      console.error(err);
      alert('Failed to generate brochure. Please try again.');
    }
  });
}

