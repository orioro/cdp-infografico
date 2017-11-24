const pieChart = require('./components/pie-chart')

module.exports = function (app, options) {

	let actions = {
		'toggle-happiness': (e) => {
			let targetHappinessState = app.scenery.cityBuildings.getHappinessState() === 'happy' ?
				'sad' : 'happy'
			app.scenery.cityBuildings.setHappinessState(targetHappinessState)
			app.scenery.cityHorizon.setHappinessState(targetHappinessState)
			app.scenery.cityRiver.setHappinessState(targetHappinessState)
		},

		'set-active-pin-set': (e) => {
			let targetActivePinSet = e.target.value

			app.scenery.activatePinSet(targetActivePinSet)
		}
	}

	let testControls = document.querySelector('#test-controls')

	testControls.addEventListener('click', e => {
		if (e.target.tagName !== 'BUTTON') {
			return
		}

		let action = e.target.getAttribute('data-action')
		if (action) {
			actions[action](e)
		}
	})

	testControls.addEventListener('change', e => {
		let action = e.target.getAttribute('data-action')

		if (action) {
			actions[action](e)
		}
	})




	let sandboxElement = document.querySelector('#sandbox')


	pieChart.chart({
		containerElement: document.querySelector('#sandbox'),
		size: 120,
		data: [
			{
				label: 'Label 1',
				color: 'red',
				value: 50,
			},
			{
				label: 'Label 2',
				color: 'green',
				value: 60,
			},
			{
				label: 'Label 3',
				color: 'blue',
				value: 77,
			},
			{
				label: 'Label 4',
				color: 'cyan',
				value: 14,
			}
		]
	})
}