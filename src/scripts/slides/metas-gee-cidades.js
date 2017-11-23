const ScrollMagic = require('scrollmagic')

module.exports = function (app, options) {

	let controller = new ScrollMagic.Controller()

	let slideElement = document.querySelector('#metas-gee-cidades')

  var scene = new ScrollMagic.Scene({
    triggerElement: slideElement,
    // ensure the whole image is displayed before pin takes place
    offset: options.vh * 1/2,
    // scroll for 1 windowHeight
    duration: slideElement.offsetHeight
  })
  // pins the element for the the scene's duration
  .setPin(slideElement)
  .addTo(controller)



  scene.on('enter', e => {
    slideElement.classList.add('active')
  })
  scene.on('leave', e => {
    slideElement.classList.remove('active')
  })
	return {
		enter () {

		},
		exit () {

		}
	}
}
