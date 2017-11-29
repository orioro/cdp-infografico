module.exports = function (app, options) {

	app.navigationController.on('slide-transition-end', e => {
		let slideId = e.to.getAttribute('id')
		let creditos = document.querySelector("#creditos")

		if (slideId == 'participe' || slideId == 'sobre-o-cdp') {
			creditos.classList.add('active')
		} else {
			creditos.classList.remove('active')
		}

	})

}
