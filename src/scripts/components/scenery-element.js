const aux = require('../lib/auxiliary')

module.exports = function blockElement(block, options) {
	let blockElement = aux.createElement({
		tagName: 'div',
		attributes: {
			class: `scenery-element enter ${block.class}`,
			'data-happiness-state': block.happinessState,
		},
		styles: block.styles,
		children: [
			{
				tagName: 'img',
				attributes: {
					src: block.src,
					class: 'block-img',
				}
			},
		],
	})

	return blockElement
}
