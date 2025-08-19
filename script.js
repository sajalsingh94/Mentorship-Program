// Smooth scrolling for same-page anchors
document.addEventListener('click', function(e) {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const href = anchor.getAttribute('href');
  if (href.length > 1 && document.querySelector(href)) {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('show');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Modals (Privacy / Terms)
document.querySelectorAll('[data-open-modal]').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const id = trigger.getAttribute('data-open-modal');
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('show');
    modal.setAttribute('open', '');
  });
});
document.querySelectorAll('[data-close-modal]').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    if (!modal) return;
    modal.classList.remove('show');
    modal.removeAttribute('open');
  });
});
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      modal.removeAttribute('open');
    }
  });
});

// Enrollment form handler (demo)
const form = document.getElementById('enroll-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    // Simulated async request; replace with a real endpoint
    try {
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
      }

      await new Promise(r => setTimeout(r, 900));

      // Example: send to a webhook / API
      // await fetch('/api/enroll', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });

      const success = form.querySelector('.form-success');
      if (success) success.hidden = false;
      form.reset();
    } catch (err) {
      alert('Something went wrong. Please try again.');
    } finally {
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Request Call';
      }
      console.log('Enrollment payload:', payload);
    }
  });
}

