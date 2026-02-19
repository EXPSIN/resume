(function () {
  'use strict';

  var langButtons = document.querySelectorAll('.lang-btn');
  var html = document.documentElement;

  function setLang(lang) {
    html.lang = lang === 'zh' ? 'zh' : 'en';

    document.querySelectorAll('[data-zh]').forEach(function (el) {
      var zh = el.getAttribute('data-zh');
      if (!el.hasAttribute('data-en')) {
        el.setAttribute('data-en', el.textContent.trim());
      }
      var enText = el.getAttribute('data-en');
      el.textContent = lang === 'zh' ? zh : (enText || el.textContent);
    });

    langButtons.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-lang'));
    });
  });

  document.querySelectorAll('[data-zh]').forEach(function (el) {
    if (!el.hasAttribute('data-en')) {
      el.setAttribute('data-en', el.textContent.trim());
    }
  });

  setLang('zh');
})();
