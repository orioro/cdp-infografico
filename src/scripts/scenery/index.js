const Tooltip = require('tooltip.js')

module.exports = function (app, options) {
	let scenery = {}

	scenery.cityBuildings = require('./city-buildings')(app, options)
	scenery.cityRiver = require('./city-river')(app, options)
	scenery.sky = require('./sky')(app, options)
	scenery.cityHorizon = require('./city-horizon')(app, options)

	/**
	 * Setup pin interactions
	 */
	let pinTooltips = Array.from(document.querySelectorAll('.pin')).map(pinElement => {
		let tooltip = new Tooltip(pinElement, {
			title: pinElement.querySelector('.pin-contents').innerHTML,
			html: true,
			placement: 'right-end',
			container: document.querySelector('#tooltip-container'),
			trigger: 'hover focus',
		})

		pinElement.tooltip = tooltip

		return tooltip
	})

	scenery.hideAllTooltips = function () {
		// hide all tooltips
		pinTooltips.forEach(tooltip => {
			tooltip.hide()
		})
	}

	/**
	 * Activate pin set
	 */
	scenery.activatePinSet = function (pinSetName) {
		scenery.hideAllTooltips()

		function _hideAllTooltips() {
			scenery.hideAllTooltips()
			document.removeEventListener('mousemove', _hideAllTooltips)
		}

		document.querySelector('body').setAttribute('data-active-pin-set', pinSetName)

		let examplePinElement = document.querySelector('[data-pin-set="' + pinSetName + '"][data-is-example-pin="true"]')

		if (!examplePinElement) {
			examplePinElement = document.querySelector('[data-pin-set="' + pinSetName + '"]')
		}

		setTimeout(function () {
			examplePinElement.tooltip.show()

			document.addEventListener('mousemove', _hideAllTooltips)
		}, 1000)

	}

	app.scenery = scenery
}
