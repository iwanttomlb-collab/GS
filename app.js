/* 外科核心課程講義 — 主題切換、閱讀進度、目錄追蹤 */
(function () {
  var root = document.documentElement;

  /* ---- 深淺色主題 ---- */
  try {
    var saved = localStorage.getItem('lec-theme');
    if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);
  } catch (e) { /* 隱私模式下忽略 */ }

  function currentIsDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function paintToggle(btn) {
    if (!btn) return;
    btn.textContent = currentIsDark() ? '☀ 淺色' : '☾ 深色';
    btn.setAttribute('aria-label', currentIsDark() ? '切換為淺色模式' : '切換為深色模式');
  }

  var toggle = document.getElementById('theme-toggle');
  paintToggle(toggle);
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentIsDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('lec-theme', next); } catch (e) {}
      paintToggle(toggle);
    });
  }

  /* ---- 閱讀進度 ---- */
  var bar = document.getElementById('progress');
  var lessons = Array.prototype.slice.call(document.querySelectorAll('.lesson'));
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
  var ticking = false;

  function onScroll() {
    if (bar) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0) + '%';
    }
    if (links.length && lessons.length) {
      var mark = window.scrollY + 120, active = lessons[0].id;
      for (var i = 0; i < lessons.length; i++) {
        if (lessons[i].offsetTop <= mark) active = lessons[i].id;
      }
      links.forEach(function (a) {
        a.classList.toggle('on', a.getAttribute('href') === '#' + active);
      });
    }
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  /* ---- 一鍵展開／收合所有解答 ---- */
  var all = document.getElementById('toggle-answers');
  if (all) {
    all.addEventListener('click', function () {
      var ds = document.querySelectorAll('.recall details');
      var open = all.getAttribute('data-open') === '1';
      Array.prototype.forEach.call(ds, function (d) { d.open = !open; });
      all.setAttribute('data-open', open ? '0' : '1');
      all.textContent = open ? '展開全部解答' : '收合全部解答';
    });
  }
})();
