const aux = require('../lib/auxiliary')

module.exports = function createPinElement(pin, options) {
	if (!pin.set) {
		console.warn('no set was defined for pin', pin)
	}
	if (!pin.contents) {
		console.warn('no contents defined for pin', pin)
	}

	let contents = pin.contents || []

	contents = contents.reduce((acc, content) => {

		if (content.title) {
			acc.push({
				tagName: 'h3',
				innerHTML: content.title,
			})
		}

		if (content.body) {
			acc.push({
				tagName: 'div',
				innerHTML: content.body,
				attributes: {
					class: 'pin-body',
				},
			})
		}

		return acc
	}, [])

	let pinElement = aux.createElement({
		tagName: 'div',
		attributes: {
			class: 'pin',
			'data-pin-set': pin.set,
			'show-on-start': pin.showOnStart,
			'data-is-example-pin': pin.isExample,
		},
		styles: pin.styles,
		children: [
			{
				tagName: 'img',
				attributes: {
					class: 'pin-image',
					src: pin.src,
				},
				children: contents,
			},
			{
				tagName: 'div',
				attributes: {
					class: 'pin-contents',
				},
				children: contents,
			},
		],
	})

	return pinElement
}
