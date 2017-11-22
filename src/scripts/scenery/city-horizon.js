const components = require('../components')

module.exports = function (app, options) {

	let cityHorizonElement = document.querySelector('#city-horizon')

	return components.sceneryContainer({
		containerElement: cityHorizonElement,
		blocks: options.blocks.cityHorizon,
	})
}
