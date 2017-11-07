const aux = require('./lib/auxiliary')

const CIDADE = {
	sadBlocks: require('./data/sad-blocks'),
	happyBlocks: require('./data/happy-blocks'),
}

/**
 * Guess
 * @type {Number}
 */
CIDADE.blocksTotalWidth = 1180

let citiBuildingsElement = document.querySelector('#city-buildings')

function createBlockElement(happinessState, block) {
	let blockElement = aux.createElement({
		tagName: 'div',
		attributes: {
			class: `building ${block.class}`,
			style: `left: ${block.left * 100 / CIDADE.blocksTotalWidth}%; width: ${block.width * 100 / CIDADE.blocksTotalWidth}%; z-index: ${block.zIndex};`,
			'data-happiness-state': happinessState,
		},
		children: [
			{
				tagName: 'img',
				attributes: {
					src: block.src,
					class: 'block-img',
				}
			}
		],
	})

	return blockElement
}

CIDADE.sadBlocks.forEach(block => {
	citiBuildingsElement.appendChild(createBlockElement('sad', block))
})

CIDADE.happyBlocks.forEach(block => {
	citiBuildingsElement.appendChild(createBlockElement('happy', block))
})

require('./scripts/test-controls')()
