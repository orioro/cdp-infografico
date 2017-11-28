const RISK_CITIES = [
]

const PIN_SETS = [
	require('./risks-cities'),
	require('./risks-businesses'),
	require('./opportunities-cities'),
	require('./opportunities-businesses'),
	require('./actions')
]

let ALL_PINS = PIN_SETS.reduce((acc, set) => {
	return acc.concat(set.pins.map(pin => {
		pin.set = set.set
		return pin
	}))
}, [])

module.exports = ALL_PINS
