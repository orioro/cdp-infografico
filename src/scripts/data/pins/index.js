const RISK_CITIES = [
]

const PIN_SETS = [
	require('./risks-cities'),
	require('./risks-businesses'),
	require('./opportunities-cities'),
	require('./opportunities-businesses'),
	require('./actions')
]

const LANG = document.querySelector('html').getAttribute('lang') || 'pt'

let ALL_PINS = PIN_SETS.reduce((acc, set) => {
	return acc.concat(set.pins.map(pin => {
		pin.set = set.set

		pin.contents = pin.contents[LANG]

		return pin
	}))
}, [])

module.exports = ALL_PINS
