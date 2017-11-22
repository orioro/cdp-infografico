const RISK_CITIES = [
]

const PIN_SETS = [
	{
		set: 'risks-cities',
		pins: [
		  {
		  	blockName: 'cidade-triste/bloco-09',
		  	src: 'resources/animacao/pins/pin-vinho.svg',
		  	styles: {
		  		left: '28%',
		  		bottom: '96%',
		  	},
		    contents: [
		      {
		        title: 'Aumento da temperatura',
		        body: 'test body'
		      }
		    ]
		  },
		  {
		  	blockName: 'cidade-triste/nuvem-2',
		  	src: 'resources/animacao/pins/pin-vinho.svg',
		    contents: [
		      {
		        title: 'Chuvas',
		        body: 'test body'
		      }
		    ]
		  },
		  {
		  	blockName: 'cidade-triste/bloco-10-praca',
		  	src: 'resources/animacao/pins/pin-vinho.svg',
		  	styles: {
		  		left: '25%',
		  		bottom: '96%',
		  	},
		    contents: [
		      {
		        title: 'Secas',
		        body: 'test body'
		      }
		    ]
		  },
		  {
		  	blockName: 'cidade-triste/bloco-13-residencial',
		  	src: 'resources/animacao/pins/pin-vinho.svg',
		    contents: [
		      {
		        title: 'Doenças',
		        body: 'test body'
		      }
		    ]
		  },
		  {
		  	blockName: 'cidade-triste/rio',
		  	src: 'resources/animacao/pins/pin-vinho.svg',
		  	styles: {
		  		left: '20%',
		  		bottom: '50%',
		  	},
		    contents: [
		      {
		        title: 'Enchentes',
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
		  	blockName: 'cidade-triste/bloco-03-estatal',
		  	src: 'resources/animacao/pins/pin-verde.svg',
		  	styles: {
		  		left: '40%',
		  	},
		    contents: [
		      {
		        title: 'Riscos regulatórios - Florestas',
		        body: 'test body'
		      }
		    ]
		  },
		  {
		  	blockName: 'cidade-triste/bloco-03-estatal',
		  	src: 'resources/animacao/pins/pin-azul.svg',
		  	styles: {
		  		left: '50%',
		  	},
		    contents: [
		      {
		        title: 'Riscos regulatórios - Água',
		        body: 'test body'
		      }
		    ]
		  },
		  {
		  	blockName: 'cidade-triste/bloco-03-estatal',
		  	src: 'resources/animacao/pins/pin-vermelho.svg',
		  	styles: {
		  		left: '60%',
		  	},
		    contents: [
		      {
		        title: 'Riscos regulatórios - Mudanças climáticas',
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
