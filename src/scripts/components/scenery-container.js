const components = require('../components')

module.exports = function sceneryContainer(options) {

	let containerElement = options.containerElement
	let blockElements = []
	
	options.blocks.forEach(block => {
		let blockElement = components.sceneryElement(block)
		containerElement.appendChild(blockElement)

		blockElements.push(blockElement)
	})

	return {
		containerElement: containerElement,
		blockElements: blockElements,

		getBlockElements: (happinessState) => {
			// return containerElement.
		},

		getHappinessState: () => {
			return containerElement.getAttribute('data-happiness-state')
		},

		setHappinessState: (targetState) => {
			let happyBlocks = Array.from(containerElement.querySelectorAll('[data-happiness-state="happy"]'))
			let sadBlocks = Array.from(containerElement.querySelectorAll('[data-happiness-state="sad"]'))


			switch (targetState) {
				case 'happy':
					happyBlocks.forEach(blockElement => {
						blockElement.classList.remove('exit')
						blockElement.classList.add('enter')
					})
					sadBlocks.forEach(blockElement => {
						blockElement.classList.remove('enter')
						blockElement.classList.add('exit')
					})
					containerElement.setAttribute('data-happiness-state', 'happy')
					break
				case 'sad':
					happyBlocks.forEach(blockElement => {
						blockElement.classList.remove('enter')
						blockElement.classList.add('exit')
					})
					sadBlocks.forEach(blockElement => {
						blockElement.classList.remove('exit')
						blockElement.classList.add('enter')
					})
					containerElement.setAttribute('data-happiness-state', 'sad')
					break
				default:
					break
			}
		}
	}

}
