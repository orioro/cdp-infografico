const BLOCKS = require('./blocks')
const ALL_PINS = require('./pins')
const CHARTS = require('./charts')

let ALL_BLOCKS = BLOCKS.cityBuildings
									.concat(BLOCKS.cityHorizon)
									.concat(BLOCKS.cityRiver)
									.concat(BLOCKS.sky)

const PIN_POSITION_RE = /^resources\/animacao\/(.+)\.svg/

/**
 * Ensure all blocks have name
 */
ALL_BLOCKS.forEach(block => {

	if (!block.name) {
		let match = block.src.match(PIN_POSITION_RE)

		block.name = match ? match[1] : undefined
	}
})

ALL_PINS.forEach(pin => {
	let block = ALL_BLOCKS.find(block => {
		return block.name === pin.blockName
	})

	if (block) {
		block.pins = block.pins || []
		block.pins.push(pin)
	} else {
		console.warn('could not find correct block for pin', pin)
	}
})

module.exports = {
	blocks: BLOCKS,
	charts: CHARTS,
}

