const components = require('../components')

module.exports = function (app, options) {

	let citiBuildingsElement = document.querySelector('#city-buildings')

	return components.sceneryContainer({
		containerElement: citiBuildingsElement,
		blocks: options.blocks.cityBuildings,
	})
}
