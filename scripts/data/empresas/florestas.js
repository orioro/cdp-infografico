let RISCOS = [
	{
		name: 'riscos-fisico',
		type: 'pie',
		data: {
			total: 100,
			slices: [
				{
					label: {
						pt: [
							'Mudança nos extremos',
							'das precipitações',
							'e das secas',
						],
						es: [
							'Cambio en los extremos',
							'de las precipitaciones',
							'y de sequías'
						],
					},
					value: 75,
				},
				{
					label: {
						pt: [
							'Incêndios florestais',
						],
						es: 'Incendios forestales',
					},
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
					label: {
						pt: [
							'Normas e padrões',
							'de rotulagem de',
							'produtos',
						],
						es: [
							'Normas y estándares',
							'de rotulado de',
							'productos'
						],
					},
					value: 33.33,
				},
				{
					label: {
						pt: [
							'Acordos voluntários',
						],
						es: 'Acuerdos voluntarios',
					},
					value: 33.33,
				},
				{
					label: {
						pt: [
							'Regulamentos e normas',
							'sobre produtos',
						],
						es: [
							'Reglamentos y normas',
							'sobre productos'
						],
					},
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
					label: {
						pt: [
							'Mudanças no',
							'comportamento do',
							'consumidor / demanda',
						],
						es: [
							'Cambio en el',
							'comportamiento del',
							'consumidor / demanda',
						],
					},
					value: 33,
				},
			],
		},
	},
]

module.exports = RISCOS
