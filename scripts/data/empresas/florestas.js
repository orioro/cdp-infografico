let RISCOS = [
	{
		name: 'riscos-fisico',
		type: 'pie',
		data: {
			total: 100,
			slices: [
				{
					label: [
						'Mudança nos extremos',
						'das precipitações',
						'e das secas',
					],
					value: 75,
				},
				{
					label: [
						'Incêndios florestais',
					],
					value: 25,
				},
			],
		},
	},
	{
		name: 'riscos-regulatorio',
		type: 'pie',
		data: {
			total: 100,
			slices: [
				{
					label: [
						'Normas e padrões',
						'de rotulagem de',
						'produtos',
					],
					value: 33.33,
				},
				{
					label: [
						'Acordos voluntários',
					],
					value: 33.33,
				},
				{
					label: [
						'Regulamentos e normas',
						'sobre produtos',
					],
					value: 33.34,
				},
			],
		},
	},
	{
		name: 'riscos-reputacional',
		type: 'pie',
		data: {
			total: 100,
			slices: [
				{
					label: [
						'Cobertura midiática',
						'negativa',
					],
					value: 67,
				},
				{
					label: [
						'Mudanças no',
						'comportamento do',
						'consumidor / demanda',
					],
					value: 33,
				},
			],
		},
	},
]

module.exports = RISCOS
