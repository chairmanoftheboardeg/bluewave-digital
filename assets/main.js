(function(){
  const hamburger = document.querySelector('[data-hamburger]');
  const mobile = document.querySelector('[data-mobile]');
  if(hamburger && mobile){
    hamburger.addEventListener('click', () => {
      const isOpen = mobile.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const dropdownBtn = document.querySelector('[data-dropdown-btn]');
  const dropdown = document.querySelector('[data-dropdown]');
  if(dropdownBtn && dropdown){
    dropdownBtn.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if(!dropdown.contains(e.target)) dropdown.classList.remove('open');
    });
  }

  const path = (location.pathname || '').toLowerCase();
  const normalize = (p) => (p || '').toLowerCase().replace(/\/+$/,'');
  const isHome = () => path === '' || path.endsWith('/') || path.endsWith('/index.html');

  document.querySelectorAll('a[data-nav]').forEach(a => {
    const href = normalize(a.getAttribute('href'));
    const isHomeLink = href === '' || href === '/' || href.endsWith('/index.html');
    const match = (isHomeLink && isHome()) || (!isHomeLink && path.endsWith(href));
    if(match) a.classList.add('active');
  });
})();
