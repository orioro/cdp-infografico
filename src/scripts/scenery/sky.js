const components = require('../components')

module.exports = function (app, options) {

	let skyElement = document.querySelector('#sky')

	let skyController = {
		updateHappySkyStyles: function (styles) {

			let sadSky = skyElement.querySelector('[data-happiness-state="sad"]')
			let happySky = skyElement.querySelector('[data-happiness-state="happy"]')

			for (let prop in styles) {
				happySky.style[prop] = styles[prop]
			}
		},
	}

	return skyController
}
