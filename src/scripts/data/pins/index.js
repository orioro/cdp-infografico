const RISK_CITIES = [
]

const PIN_SETS = [
	{
		set: 'risks-cities',
		pins: [
		  {
		  	blockName: 'cidade-triste/bloco-01',
		  	src: 'resources/animacao/pins/pin-azul.svg',
		    contents: [
		      {
		        title: 'test title',
		        body: 'test body'
		      }
		    ]
		  },
		]
	},
	{
		set: 'risks-businesses',
		pins: [
		  {
		  	blockName: 'cidade-triste/bloco-01',
		  	src: 'resources/animacao/pins/pin-vermelho.svg',
		    contents: [
		      {
		        title: 'test title',
		        body: 'test body'
		      }
		    ]
		  },
		],
	}
]

let ALL_PINS = PIN_SETS.reduce((acc, set) => {
	return acc.concat(set.pins.map(pin => {
		pin.set = set.set
		return pin
	}))
}, [])

module.exports = ALL_PINS
