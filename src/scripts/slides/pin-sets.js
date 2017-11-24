module.exports = function (app, options) {
	app.navigationController.on('slide-transition-start', e => {
		let activePinSet = e.to.getAttribute('data-active-pin-set')

		app.scenery.activatePinSet(activePinSet)
	})
}
