document.querySelectorAll('[data-target]').forEach((button) => {
  button.addEventListener('click', () => {
    const section = document.getElementById(button.dataset.target);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.getElementById('backToTop')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
