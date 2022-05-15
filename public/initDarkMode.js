var setDarkStyles = function () {
  var root = document.documentElement;
  root.style.setProperty('--color-html', 'var(--color-cream)');
  root.style.setProperty('--color-html-bg', 'var(--color-almost-black)');
  root.style.setProperty('--color-cursor', 'var(--color-darker-gray)');
  root.style.setProperty('--color-cursor-highlight', 'var(--color-gray)');
}

var setLightStyles = function () {
  var root = document.documentElement;
  root.style.setProperty('--color-html', 'var(--color-almost-black)');
  root.style.setProperty('--color-html-bg', 'var(--color-white)');
  root.style.setProperty('--color-cursor', 'var(--color-lighter-gray)');
  root.style.setProperty('--color-cursor-highlight', 'var(--color-gray)');
}

var initDarkMode = (function initDarkMode() {
  var isDark = localStorage.getItem('isDark');
  if (isDark === 'true') {
    setDarkStyles();
  } else {
    setLightStyles();
  }
})();
