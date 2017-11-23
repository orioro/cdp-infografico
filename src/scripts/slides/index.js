const mousetrap = require('mousetrap')

module.exports = function (app, options) {

	// require('./contexto-global')(app, options)
	// require('./metas-gee-cidades')(app, options)
	
	let slidesContainerElement = document.querySelector('#slides')
	let slideElements = Array.from(slidesContainerElement.querySelectorAll('.slide'))

	/**
	 * Setup
	 */
	slideElements.forEach((el, index) => {
		el.style.zIndex = slideElements.length - 1 - index
	})




	function getCurrentSlide() {
		return slideElements.find(el => {
			return el.classList.contains('active')
		})
	}

	function getCurrentSlideIndex() {
		return slideElements.indexOf(getCurrentSlide())
	}

	function goToSlide(targetSlideIndex) {

		let targetSlideElement  = slideElements[targetSlideIndex]
		let currentSlideElement = getCurrentSlide()
		let currentSlideIndex = getCurrentSlideIndex()

		slideElements.forEach((el, index) => {
			if (index < targetSlideIndex) {
				el.classList.add('past')
			} else {
				el.classList.remove('past')
			}

			if (index === targetSlideIndex) {
				el.classList.add('active')
			} else {
				el.classList.remove('active')
			}
		})
	}

	function goToNext() {
		let currentSlideIndex = getCurrentSlideIndex()

		if (currentSlideIndex === slideElements.length - 1) {
			// last
			
		} else {
			goToSlide(currentSlideIndex + 1)
		}
	}

	function goToPrevious() {
		let currentSlideIndex = getCurrentSlideIndex()

		if (currentSlideIndex === 0) {
			// first
			
		} else {
			goToSlide(currentSlideIndex - 1)
		}
	}

	mousetrap.bind('left', goToPrevious)
	mousetrap.bind('right', goToNext)

}
