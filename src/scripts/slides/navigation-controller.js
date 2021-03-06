const EventEmitter = require('events')
const mousetrap = require('mousetrap')

const aux = require('../lib/auxiliary')

class SlidesNavigation extends EventEmitter {
	constructor(options) {
		super()
		this.isInTransition = false

		this.containerElement = options.containerElement
		this.slideElements = Array.from(this.containerElement.querySelectorAll('.slide'))
		this.slideElements.forEach((el, index) => {
			el.style.zIndex = this.slideElements.length - 1 - index
		})

		/**
		 * Create a controls element
		 */
		let slidesControlElement = aux.createElement({
			tagName: 'nav',
			attributes: {
				id: 'slides-nav',
			},
			children: [
				{
					tagName: 'button',
					attributes: {
						class: 'previous',
					}
				},
				{
					tagName: 'ul',
					children: this.slideElements.map(el => {
						return {
							tagName: 'li',
							children: [
								{
									tagName: 'a',
									attributes: {
										href: `#${el.getAttribute('id')}`
									},
								}
							]
						}
					})
				},
				{
					tagName: 'button',
					attributes: {
						class: 'next',
					}
				},
			],
		})

		slidesControlElement
			.querySelector('.previous')
			.addEventListener('click', this.goToPrevious.bind(this))

		slidesControlElement
			.querySelector('.next')
			.addEventListener('click', this.goToNext.bind(this))

		// append the nav to the container element's parent
		// so that it's z-index can be above the scenery elements
		this.containerElement.parentElement.appendChild(slidesControlElement)
		this.controlElement = slidesControlElement

		window.addEventListener('hashchange', this._handleHashchange.bind(this))

		// init
		setTimeout(() => {

			if (!window.location.hash || window.location.hash === '#') {
				window.history.pushState(
					{},
					'',
					'#intro'
				)
			}

			this._handleHashchange()
		}, 0)
	}

	_handleHashchange(e) {
		if (!window.location.hash) {
			return
		}

		let targetSlideId = window.location.hash.replace(/^#/, '')

		let targetSlideIndex = this.getSlideIndexById(targetSlideId)

		if (targetSlideIndex !== -1) {
			// found!
			if (e) {
				e.preventDefault()
			}
			this.goToSlideByIndex(targetSlideIndex)
		}
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

	getSlideIndexById(targetSlideId) {

		let targetSlideElement = this.slideElements.find(el => {
			return el.getAttribute('id') === targetSlideId
		})

		if (!targetSlideElement) {
			return -1
		}

		return this.getSlideIndex(targetSlideElement)
	}

	goToSlideByIndex(targetSlideIndex) {
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

		this.emit('slide-transition-start', {
			to: targetSlideElement,
			from: currentSlideElement,
		})

		// activate the correct control element
		Array.from(this.controlElement.querySelectorAll('a')).forEach((el, index) => {
			if (index === targetSlideIndex) {
				el.classList.add('active')
			} else {
				el.classList.remove('active')
			}
		})

		setTimeout(() => {
			this.isInTransition = false

			this.emit('slide-transition-end', {
				to: targetSlideElement,
				from: currentSlideElement,
			})

		}, 900)

		/**
		 * Update controls
		 */
		if (targetSlideIndex === 0) {
			this.controlElement.classList.add('at-first-slide')
			this.controlElement.classList.remove('at-last-slide')

			console.log('at first')

		} else if (targetSlideIndex === this.slideElements.length - 1) {
			this.controlElement.classList.remove('at-first-slide')
			this.controlElement.classList.add('at-last-slide')
		} else {
			this.controlElement.classList.remove('at-first-slide')
			this.controlElement.classList.remove('at-last-slide')
		}
	}

	goToNext() {
		if (this.isInTransition) {
			return
		}

		let currentSlideIndex = this.getCurrentSlideIndex()

		if (currentSlideIndex === this.slideElements.length - 1) {

		} else {

			window.history.pushState(
				{},
				'',
				'#' + this.slideElements[currentSlideIndex + 1].getAttribute('id')
			)

			this.goToSlideByIndex(currentSlideIndex + 1)
		}
	}

	goToPrevious() {

		if (this.isInTransition) {
			return
		}
		
		let currentSlideIndex = this.getCurrentSlideIndex()

		if (currentSlideIndex === 0) {

		} else {

			window.history.pushState(
				{},
				'',
				'#' + this.slideElements[currentSlideIndex - 1].getAttribute('id')
			)
			
			this.goToSlideByIndex(currentSlideIndex - 1)
		}
	}

}

module.exports = SlidesNavigation
