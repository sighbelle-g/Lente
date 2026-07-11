const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const fields = [
      { id: 'name', check: v => v.trim().length >= 2, msg: 'Please enter your name.' },
      { id: 'email', check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: 'Please enter a valid email.' },
      { id: 'message', check: v => v.trim().length >= 10, msg: 'Message should be at least 10 characters.' },
    ];

    fields.forEach(f => {
      const input = document.getElementById(f.id);
      const errorEl = document.getElementById(f.id + '-error');
      if (!f.check(input.value)) {
        errorEl.textContent = f.msg;
        errorEl.style.display = 'block';
        valid = false;
      } else {
        errorEl.style.display = 'none';
      }
    });

    const successEl = document.getElementById('form-success');
    if (valid) {
      successEl.style.display = 'block';
      form.reset();
    } else {
      successEl.style.display = 'none';
    }
  });
}
