document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.submenu-toggle');
  
    toggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = toggle.closest('.has-submenu');
        parent.classList.toggle('open');
      });
    });
  });
  