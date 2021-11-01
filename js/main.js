window.addEventListener('load', function () {
  // SVG Injector
  var SVGInjector = window.SVGInjector.SVGInjector;
  SVGInjector(document.querySelectorAll('[data-inject-svg]'));
});