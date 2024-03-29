// Select DOM elements for our two images
img1 = document.getElementById('img-1');
img2 = document.getElementById('img-2');

// Returns a string suitable for one of the images
function stringMaker(randomNumber) {
  return ("i/" + randomNumber + ".jpg")
}

// Returns random number from [1, max]
function makeRandomInt(max) {
  return (Math.floor(Math.random() * Math.floor(max)) + 1);
}

// Composite function: replaces img src of selected image
function replaceImg(id) {
  id.src= stringMaker(makeRandomInt(101));
}

function replaceBoth() {
  replaceImg(img1);
  replaceImg(img2);
}

replaceBoth();



function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}



(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element');
        element.classList.remove('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();
