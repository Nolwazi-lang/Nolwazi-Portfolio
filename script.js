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

// Force-download CV button handler
const forceDownloadBtn = document.getElementById('force-download-cv');
if (forceDownloadBtn) {
  forceDownloadBtn.addEventListener('click', async () => {
    try {
      const url = '/assets/Nolwazi_Vundla_CV.pdf';
      const res = await fetch(url);
      if (!res.ok) throw new Error('Network response was not ok');
      const blob = await res.blob();
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'Nolwazi_Vundla_CV.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(a.href);
    } catch (err) {
      alert('Download failed: ' + (err.message || err));
      console.error(err);
    }
  });
}
