// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple contact form UI feedback for Formspree (or Netlify will handle POSTs)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  // If you're using Formspree: default submission works. This enhances UX.
  e.preventDefault();
  status.textContent = 'Sending...';
  const data = new FormData(form);
  const action = form.action;

  try {
    const res = await fetch(action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });
    if (res.ok) {
      status.textContent = 'Message sent — thank you!';
      form.reset();
    } else {
      const json = await res.json();
      status.textContent = json?.error || 'Error sending message. Try again or email directly.';
    }
  } catch (err) {
    status.textContent = 'Network error. Please try again later.';
    console.error(err);
  }
});
