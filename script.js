
document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  document.querySelectorAll('#year').forEach(el => el.textContent = year);
});
