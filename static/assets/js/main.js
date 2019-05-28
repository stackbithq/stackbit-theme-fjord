/**
 * Main JS file for theme behaviours
 */

// Responsive video embeds
var videoEmbeds = [
  'iframe[src*="youtube.com"]',
  'iframe[src*="vimeo.com"]'
];
reframe(videoEmbeds.join(','));

// Mobile menu
var menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', function (e) {
    document.body.classList.toggle('menu--opened');
    e.preventDefault();
  }, false);

  document.body.classList.remove('menu--opened');

  window.addEventListener('resize', function () {
    if (menuToggle.offsetParent === null) {
      document.body.classList.remove('menu--opened');
    }
  }, true);
}

// Header background image
var header = document.querySelector('#masthead');
if (header) {
  headerBg = document.querySelector('#header-bg');
  if (headerBg) {
    imagesLoaded(headerBg, { background: true }, function () {
      header.classList.add('bg--loaded');
    });
  } else {
    header.classList.add('bg--loaded');
  }
}

// Back to top
document.querySelector('#to-top').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#page').scrollIntoView({ behavior: 'smooth' });
});
