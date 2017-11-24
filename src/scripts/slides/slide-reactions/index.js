module.exports = function (app, options) {

	app.navigationController.on('slide-transition-end', e => {
		let slideId = e.to.getAttribute('id')


	})

}
