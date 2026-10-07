(function () {
  'use strict';

  // All page content exists in the DOM in both languages. CSS decides which
  // one is visible, keyed off <html lang>. JS only flips that attribute, so
  // the page stays fully readable and indexable with JavaScript disabled.

  var root = document.documentElement;
  var buttons = document.querySelectorAll('.lang-btn');

  function setLang(lang) {
    var isZh = lang === 'zh';
    root.lang = isZh ? 'zh-CN' : 'en';

    Array.prototype.forEach.call(buttons, function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    try {
      window.localStorage.setItem('preferred-lang', lang);
    } catch (e) {
      /* storage unavailable (private mode); ignore */
    }
  }

  Array.prototype.forEach.call(buttons, function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-lang'));
    });
  });

  // Restore a previous choice; otherwise keep the default Chinese.
  var saved = null;
  try {
    saved = window.localStorage.getItem('preferred-lang');
  } catch (e) {
    /* ignore */
  }

  setLang(saved === 'en' ? 'en' : 'zh');
})();
