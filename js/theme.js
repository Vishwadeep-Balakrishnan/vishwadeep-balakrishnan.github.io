/* theme.js — must be loaded in <head> to prevent flash */
(function() {
  var theme = localStorage.getItem('vb-theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
})();
