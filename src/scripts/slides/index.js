const SlidesNavigationController = require('./navigation-controller')
const mousetrap = require('mousetrap')

module.exports = function (app, options) {
	let navigationController = new SlidesNavigationController({
		containerElement: document.querySelector('#slides')
	})

	mousetrap.bind(['left', 'up'], () => {
		navigationController.goToPrevious()
	})
	mousetrap.bind(['right', 'down'], () => {
		navigationController.goToNext()
	})

	document.querySelector('#slides').addEventListener('wheel', function (e) {
		if (Math.abs(e.deltaY) > 10) {
			if (e.deltaY > 0) {
				navigationController.goToNext()
			} else {
				navigationController.goToPrevious()
			}
		}
	})

	/**
	 * Expose navigation controller
	 */
	app.navigationController = navigationController

	require('./sky-reactions')(app, options)

	return navigationController
}
