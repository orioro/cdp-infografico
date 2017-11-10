const components = require('../components')

module.exports = function (app, options) {

	let cityRiverElement = document.querySelector('#city-river')

	return components.sceneryContainer({
		containerElement: cityRiverElement,

		blocks: options.cityRiver.blocks,

		blocksTotalWidth: options.cityRiver.blocksTotalWidth,
	})
}
