module.exports = function (app, options) {
	app.navigationController.on('slide-enter-start', e => {
		console.log(e)

		console.log(app.navigationController.computeSlideProgress(e.slideElement))
	})
}
