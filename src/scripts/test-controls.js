module.exports = function () {

	let actions = {
		'toggle-happiness': (e) => {
			let buildingsContainer = document.querySelector('#city-buildings')
			let currentHappinessState = buildingsContainer.getAttribute('data-happiness-state')

			let happyBlocks = Array.from(buildingsContainer.querySelectorAll('[data-happiness-state="happy"]'))
			let sadBlocks = Array.from(buildingsContainer.querySelectorAll('[data-happiness-state="sad"]'))



			if (currentHappinessState === 'sad') {
				// to: happy
				happyBlocks.forEach(blockElement => {
					blockElement.classList.remove('exit')
					blockElement.classList.add('enter')
				})
				sadBlocks.forEach(blockElement => {
					blockElement.classList.remove('enter')
					blockElement.classList.add('exit')
				})
				buildingsContainer.setAttribute('data-happiness-state', 'happy')
			} else {
				// to: sad
				happyBlocks.forEach(blockElement => {
					blockElement.classList.remove('enter')
					blockElement.classList.add('exit')
				})
				sadBlocks.forEach(blockElement => {
					blockElement.classList.remove('exit')
					blockElement.classList.add('enter')
				})
				buildingsContainer.setAttribute('data-happiness-state', 'sad')
			}
		}
	}

	let testControls = document.querySelector('#test-controls')

	testControls.addEventListener('click', e => {
		let action = e.target.getAttribute('data-action')
		if (action) {
			actions[action](e)
		}
	})

}