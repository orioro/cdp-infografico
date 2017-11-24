const EventEmitter = require('events')
const mousetrap = require('mousetrap')

class SlidesNavigation extends EventEmitter {
	constructor(options) {
		super()
		this.isInTransition = false

		this.containerElement = options.containerElement
		this.slideElements = Array.from(this.containerElement.querySelectorAll('.slide'))
		this.slideElements.forEach((el, index) => {
			el.style.zIndex = this.slideElements.length - 1 - index
		})
	}

	computeSlideProgress(slideElement) {
		return this.getSlideIndex(slideElement) / (this.slideElements.length - 1)
	}

	getCurrentSlide() {
		return this.slideElements.find(el => {
			return el.classList.contains('active')
		})
	}

	getSlideIndex(slideElement) {
		return this.slideElements.indexOf(slideElement)
	}

	getCurrentSlideIndex() {
		return this.getSlideIndex(this.getCurrentSlide())
	}

	goToSlide(targetSlideIndex) {
		if (this.isInTransition) {
			return
		}

		this.isInTransition = true

		let targetSlideElement  = this.slideElements[targetSlideIndex]
		let currentSlideElement = this.getCurrentSlide()
		let currentSlideIndex = this.getCurrentSlideIndex()

		this.slideElements.forEach((el, index) => {
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

		this.emit('slide-leave-start', {
			slideElement: currentSlideElement,
		})

		this.emit('slide-enter-start', {
			slideElement: targetSlideElement,
		})

		setTimeout(() => {
			this.isInTransition = false

			this.emit('slide-leave-end', {
				slideElement: currentSlideElement,
			})

			this.emit('slide-enter-end', {
				slideElement: targetSlideElement,
			})

		}, 900)
	}

	goToNext() {
		let currentSlideIndex = this.getCurrentSlideIndex()

		if (currentSlideIndex === this.slideElements.length - 1) {
			// last
			
		} else {
			this.goToSlide(currentSlideIndex + 1)
		}
	}

	goToPrevious() {
		let currentSlideIndex = this.getCurrentSlideIndex()

		if (currentSlideIndex === 0) {
			// first
			
		} else {
			this.goToSlide(currentSlideIndex - 1)
		}
	}

}

module.exports = SlidesNavigation
