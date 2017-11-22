const components = require('../components')

module.exports = function (app, options) {

	let skyElement = document.querySelector('#sky')

	let sceneryContainer = components.sceneryContainer({
		containerElement: skyElement,
		blocks: options.blocks.sky,
	})

	return sceneryContainer
}
