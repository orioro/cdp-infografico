const components = require('../components')

module.exports = function (app, options) {

	let skyElement = document.querySelector('#sky')

	return components.sceneryContainer({
		containerElement: skyElement,

		blocks: options.sky.blocks,

		blocksTotalWidth: options.sky.blocksTotalWidth,
	})
}
