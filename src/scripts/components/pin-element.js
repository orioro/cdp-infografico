const aux = require('../lib/auxiliary')

module.exports = function pinElement(pin, options) {
	if (!pin.set) {
		console.warn('no set was defined for pin', pin)
	}
	if (!pin.contents) {
		console.warn('no contents defined for pin', pin)
	}

	let contents = pin.contents || []

	contents = contents.reduce((acc, content) => {
		return acc.concat([
			{
				tagName: 'h3',
				innerHTML: content.title,
			},
			{
				tagName: 'p',
				innerHTML: content.body,
			}
		])
	}, [])

	let pinElement = aux.createElement({
		tagName: 'div',
		attributes: {
			class: 'pin',
			'data-pin-set': pin.set,
		},
		children: [
			{
				tagName: 'div',
				attributes: {
					class: 'pin-contents',
				},
				children: contents,
			},
			{
				tagName: 'img',
				attributes: {
					class: 'pin-image',
					src: 'resources/animacao/pins/pin-azul.svg',
				},
				children: contents,
			}
		],
	})

	return pinElement
}
