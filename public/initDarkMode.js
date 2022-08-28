var setDarkStyles = function () {
  var root = document.documentElement;
  root.style.setProperty('--color-html', 'var(--color-cream)');
  root.style.setProperty('--color-html-bg', 'var(--color-gray-10)');
  root.style.setProperty('--color-cursor', 'var(--color-gray-8)');
  root.style.setProperty('--color-cursor-highlight', 'var(--color-gray-4)');
  root.classList.add('isDark');
}

var setLightStyles = function () {
  var root = document.documentElement;
  root.style.setProperty('--color-html', 'var(--color-gray-10)');
  root.style.setProperty('--color-html-bg', 'var(--color-white)');
  root.style.setProperty('--color-cursor', 'var(--color-gray-2)');
  root.style.setProperty('--color-cursor-highlight', 'var(--color-gray-4)');
  root.classList.remove('isDark');
}

var initDarkMode = (function initDarkMode() {
  var storedTheme = localStorage.getItem('theme');

  let themeToUse = storedTheme;

  // NOTE: if their preference is stored as 'auto', get it from their system
  if (!storedTheme || storedTheme === 'auto') {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) themeToUse = 'dark';
    if (window.matchMedia('(prefers-color-scheme: light)').matches) themeToUse = 'light';
  }

  if (themeToUse === 'dark') setDarkStyles();
  if (themeToUse === 'light') setLightStyles();
})();
