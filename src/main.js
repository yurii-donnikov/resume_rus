function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  }
}

var photoshopSkill = document.body.querySelector('.photoshopSkill')
var htmlSkill = document.body.querySelector('.htmlSkill');
var cssSkill = document.body.querySelector('.cssSkill')
var jsSkill = document.body.querySelector('.jsSkill')

function skillPh() {
  var styleWidth = photoshopSkill.style.width = '0%'
  if (photoshopSkill.style.width !== '84%') {
    if (
      window.pageYOffset + window.innerHeight >
      offset(document.body.querySelector('.andProg')).top
    ) {
      var ratingPhotoshopSkill = function () {
        var newWidth = parseInt(styleWidth)
        var x = newWidth + 4
        styleWidth = photoshopSkill.style.width = `${x}%`
        document.body.querySelector('.skillProcentPh').innerHTML = `${newWidth}%`
        if (newWidth !== 84) {
          window.requestAnimationFrame(ratingPhotoshopSkill)
        }
      }
      requestAnimationFrame(ratingPhotoshopSkill)
    }
  }
}

function skillHtml() {
  var styleWidth = htmlSkill.style.width = '0%'
  if (htmlSkill.style.width !== '95%') {
    if (
      window.pageYOffset + window.innerHeight >

      offset(document.body.querySelector('.andProg')).top
    ) {
      var ratingPhotoshopSkill = function () {
        var newWidth = parseInt(styleWidth)
        var x = newWidth + 3
        styleWidth = htmlSkill.style.width = `${x}%`
        document.body.querySelector('.skillProcentHtml').innerHTML = `${newWidth}%`
        if (newWidth !== 93) {
          window.requestAnimationFrame(ratingPhotoshopSkill)
        }
      }
      requestAnimationFrame(ratingPhotoshopSkill)
    }
  }
}

function skillCss() {
  var styleWidth = cssSkill.style.width = '0%'
  if (cssSkill.style.width !== '90%') {
    if (
      window.pageYOffset + window.innerHeight >
      offset(document.body.querySelector('.andProg')).top
    ) {
      var ratingPhotoshopSkill = function () {
        var newWidth = parseInt(styleWidth)
        var x = newWidth + 2
        styleWidth = cssSkill.style.width = `${x}%`
        document.body.querySelector('.skillProcentCss').innerHTML = `${newWidth}%`
        if (newWidth !== 90) {
          window.requestAnimationFrame(ratingPhotoshopSkill)
        }
      }
      requestAnimationFrame(ratingPhotoshopSkill)
    }
  }
}

function skillJs() {
  var styleWidth = jsSkill.style.width = '0%'
  if (jsSkill.style.width !== '86%') {
    if (
      window.pageYOffset + window.innerHeight >
      offset(document.body.querySelector('.andProg')).top
    ) {
      var ratingPhotoshopSkill = function () {
        var newWidth = parseInt(styleWidth)
        var x = newWidth + 2
        styleWidth = jsSkill.style.width = `${x}%`
        document.body.querySelector('.skillProcentJs').innerHTML = `${newWidth}%`
        if (newWidth !== 86) {
          window.requestAnimationFrame(ratingPhotoshopSkill)
        }
      }
      requestAnimationFrame(ratingPhotoshopSkill)

    }
  }
}

window.document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    if (parseInt(htmlSkill.style.width) > 0) {
      window.removeEventListener('scroll', skillPh)
    } else {
      skillHtml(), skillPh(), skillCss(), skillJs()
    }
  })
});

window.addEventListener('load', function () {
  setTimeout(
  function () {
    document.body.querySelector('.language').classList.add('shake');

    setTimeout(function () {
      document.body.querySelector('.language').classList.remove('shake')
    }, 800)
  }, 500)
});
