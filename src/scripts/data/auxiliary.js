const PIN_POSITION_RE = /^resources\/animacao\/(.+)\.svg/

exports.ensureBlockName = function (block) {

	if (!block.name) {
		let match = block.src.match(PIN_POSITION_RE)

		block.name = match ? match[1] : undefined
	}

	return block
}

exports.mixinPins = function (blocks, pins) {
	pins.forEach(pin => {
		let block = blocks.find(block => {
			return block.name === pin.blockName
		})

		if (block) {
			block.pins = block.pins || []
			block.pins.push(pin)
		} else {
			console.warn('could not find correct block for pin', pin)
		}
	})
}
