module.exports = function (app, options) {

	let actions = {
		'toggle-happiness': (e) => {
			let targetHappinessState = app.scenery.cityBuildings.getHappinessState() === 'happy' ?
				'sad' : 'happy'
			app.scenery.cityBuildings.setHappinessState(targetHappinessState)
			app.scenery.cityHorizon.setHappinessState(targetHappinessState)
			app.scenery.cityRiver.setHappinessState(targetHappinessState)
			app.scenery.sky.setHappinessState(targetHappinessState)
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