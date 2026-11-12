// Kleine scripts voor de hele site: mobiel menu, foto-lightbox, contactformulier.
(function () {
  // Jaartal in de footer
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Mobiel menu
  var burger = document.querySelector('.hamburger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', open);
    });
  }

  // Lightbox voor fotogalerijen
  var items = Array.prototype.slice.call(document.querySelectorAll('.g-item'));
  if (items.length) {
    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<img alt=""><button class="lb-close" aria-label="Sluiten">&times;</button>' +
      '<button class="lb-prev" aria-label="Vorige">&lsaquo;</button><button class="lb-next" aria-label="Volgende">&rsaquo;</button>';
    document.body.appendChild(lb);
    var img = lb.querySelector('img'), idx = 0;
    var show = function (i) { idx = (i + items.length) % items.length; img.src = items[idx].getAttribute('href'); };
    var close = function () { lb.classList.remove('open'); };
    items.forEach(function (a, i) {
      a.addEventListener('click', function (e) { e.preventDefault(); show(i); lb.classList.add('open'); });
    });
    lb.querySelector('.lb-close').onclick = close;
    lb.querySelector('.lb-prev').onclick = function (e) { e.stopPropagation(); show(idx - 1); };
    lb.querySelector('.lb-next').onclick = function (e) { e.stopPropagation(); show(idx + 1); };
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
    });
  }

  // Contactformulier: opent het mailprogramma van de bezoeker
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements;
      var subject = 'Contact via website: ' + f.naam.value;
      var body = f.bericht.value + '\n\n— ' + f.naam.value + ' (' + f.email.value + ')';
      window.location.href = 'mailto:gil.vanroy@hotmail.com?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
    });
  }
})();
