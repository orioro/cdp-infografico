module.exports = function (app, options) {
	app.navigationController.on('slide-transition-start', e => {
		
		let previousHappinessState = e.from ? e.from.getAttribute('data-happiness-state') : false
		let targetHappinessState   = e.to.getAttribute('data-happiness-state')

		let happinessStateChanged = previousHappinessState !== targetHappinessState

		let slideHappinessState = e.to.getAttribute('data-happiness-state')
		let slideSkyOpacity = e.to.getAttribute('data-happy-sky-opacity')

		slideSkyOpacity = slideSkyOpacity ? parseFloat(slideSkyOpacity) : false

		if (typeof slideSkyOpacity === 'number') {
			if (happinessStateChanged) {
				console.log('happinessStateChanged to', targetHappinessState)
				app.scenery.sky.updateHappySkyStyles({
					opacity: slideSkyOpacity,
					transitionProperty: 'opacity',
					transitionDelay: '1500ms', // match the mountain enter delay
					transitionDuration: '900ms',
					transitionTimingFunction: 'ease',
				})
				app.scenery.cityBuildings.setHappinessState(targetHappinessState)
				app.scenery.cityHorizon.setHappinessState(targetHappinessState)
				app.scenery.cityRiver.setHappinessState(targetHappinessState)
			} else {
				// normal change
				app.scenery.sky.updateHappySkyStyles({
					opacity: slideSkyOpacity,
					transitionProperty: 'opacity',
					transitionDelay: '0',
					transitionDuration: '1350ms',
					transitionTimingFunction: 'ease',
				})
			}
		}
	})
}
