const mousetrap = require('mousetrap')

module.exports = function (app, options) {

	/**
	 * Setup dialog
	 */
	let dialogElement = document.querySelector('#cdp-dialog')
	let dialogContentsWrapper = dialogElement.querySelector('.dialog-contents-wrapper')
	let dialogBackdrop = dialogElement.querySelector('.dialog-backdrop')
	let dialogClose = dialogElement.querySelector('.dialog-close')

	function open(contents) {
		app.scenery.hideAllTooltips()
		
		dialogContentsWrapper.innerHTML = contents
		dialogElement.classList.add('active')
	}

	function close() {
		dialogContentsWrapper.innerHTML = ''
		dialogElement.classList.remove('active')
	}

	document.addEventListener('click', e => {
		if (e.target.querySelector('.dialog-contents')) {
			open(e.target.querySelector('.dialog-contents').innerHTML)
		}
	})

	dialogBackdrop.addEventListener('click', close)
	dialogClose.addEventListener('click', close)


	mousetrap.bind('esc', close)
}
