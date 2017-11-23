const aux = require('../lib/auxiliary')
const createPinElement = require('./pin-element')

module.exports = function createBlockElement(block) {

	let blockName = block.name

	if (!blockName) {
		let srcSplit = block.src.split(/\//g)
		blockName = srcSplit[srcSplit.length - 1].replace(/\.[a-z]*$/, '')
	}

	let pinElements = (block.pins || []).map(pin => {
		return createPinElement(pin)
	})

	let blockElement = aux.createElement({
		tagName: 'div',
		attributes: {
			class: `scenery-element enter ${block.class}`,
			'data-happiness-state': block.happinessState,
		},
		styles: block.styles,
		children: [
			{
				tagName: 'div',
				attributes: {
					class: 'image-container',
				},
				children: [
					{
						tagName: 'img',
						attributes: {
							src: block.src,
							class: 'block-img',
						}
					},
			

					/**
					 * Development
					 */
					{
						tagName: 'div',
						innerHTML: block.name,
						attributes: {
							class: 'dev-block-label'
						},
					}
				]
			},
		].concat(pinElements),
	})

	return blockElement
}
