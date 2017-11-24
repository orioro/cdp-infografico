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
	Array.from(document.querySelectorAll('.pin')).forEach(pinElement => {
		let tooltip = new Tooltip(pinElement, {
			title: pinElement.querySelector('.pin-contents').innerHTML,
			html: true,
			placement: 'top',
		})
	})

	/**
	 * Activate pin set
	 */
	scenery.activatePinSet = function (pinSetName) {
		document.querySelector('body').setAttribute('data-active-pin-set', pinSetName)
	}

	app.scenery = scenery
}
