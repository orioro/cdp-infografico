let RISCOS_CIDADES = [
	{
		name: 'riscos-secas',
		type: 'pie',
		data: {
			total: 100,
			slices: [
				{
					value: 9,
					label: {
						pt: [
							'riscos relacionados à',
							'Secas',
						],
						es: [
							'Riesgos relacionados a',
							'las sequías'
						],
					}
				}
			],
		},
	},
	{
		name: 'riscos-aumento-da-temperatura',
		type: 'pie',
		data: {
			total: 100,
			slices: [
				{
					value: 14,
					label: {
						pt: [
							'riscos relacionados à',
							'Aumento da temperatura',
							'e ondas de calor',
						],
						es: [
							'riesgos relacionados a',
							'la elevación de la',
							'temperatura y olas de calor'
						],
					}
				}
			],
		},
	},
	{
		name: 'riscos-enchentes',
		type: 'pie',
		data: {
			total: 100,
			slices: [
				{
					value: 18,
					label: {
						pt: [
							'riscos relacionados à',
							'Enchentes',
						],
						es: [
							'riesgos relacionados a',
							'las inundaciones',
						]
					}
				}
			],
		},
	},
	{
		name: 'riscos-tempestades-intensas',
		type: 'pie',
		data: {
			total: 100,
			slices: [
				{
					value: 10,
					label: {
						pt: [
							'riscos relacionados à',
							'Chuvas e tempestades',
							'intensas',
						],
						es: [
							'riesgos relacionados',
							'a lluvias y tempestades',
							'intensas'
						],
					}
				}
			],
		},
	},
	{
		name: 'riscos-doencas',
		type: 'pie',
		data: {
			total: 100,
			slices: [
				{
					value: 13,
					label: {
						pt: ['doenças'],
						es: ['enfermedades']
					}
				}
			],
		},
	},

	// {
	// 	name: 'riscos-impactos',
	// 	type: 'pie',
	// 	data: {
	// 		total: 100,
	// 		slices: [
	// 			{
	// 				label: 'Agricultura/agropecuária',
	// 				color: 'red',
	// 				value: 20,
	// 			},
	// 			{
	// 				label: [
	// 					'riscos relacionados à',
	// 					'Disponibilidade de água',
	// 					'para produção/serviços',
	// 				],
	// 				color: 'pink',
	// 				value: 17,
	// 			},
	// 			{
	// 				label: [
	// 					'Transporte matéria prima /',
	// 					'produtos e serviços',
	// 				],
	// 				color: 'magenta',
	// 				value: 14,
	// 			},
	// 			{
	// 				label: 'Turismo',
	// 				color: 'green',
	// 				value: 11,
	// 			},
	// 		],
	// 	}
	// }
]

let IMPACTOS_CIDADES = [
	{
		name: 'riscos-impactos',
		type: 'pie',
		data: {
			total: 100,
			slices: [
				{
					value: 20,
					label: {
						pt: [
							'Agricultura /',
							'Agropecuária',
						],
						es: [
							'Agricultura /',
							'Agropecuaria'
						]
					}
				},
				{
					value: 17,
					label: {
						pt: [
							'Disponibilidade de',
							'água para',
							'produção / serviços'
						],
						es: [
							'Disponibilidad de',
							'agua para',
							'producción/ servicios',
						],
					}
				},
				{
					value: 14,
					label: {
						pt: [
							'Transporte de materia',
							'prima / productos',
							'y servicios'
						],
						es: [
							'Transporte matéria',
							'prima / produtos',
							'e serviços',
						]
					}
				},
				{
					value: 11,
					label: {
						pt: [
							'Turismo'
						],
						es: [
							'Turismo'
						],
					},
				}
			],
		},
	},
]

let OPORTUNIDADES_CIDADES = [
	{
		name: 'oportunidades-atencao-a-questoes-ambientais',
		type: 'pie',
		data: {
			total: 100,
			slices: [
				{
					value: 27,
					label: {
						pt: [
							'oportunidades relacionadas à',
							'Atenção crescente',
							'a preocupações ambientais',
						],
						es: [
							'oportunidades relacionadas a la',
							'atención creciente con respecto',
							'a las preocupaciones ambientales'
						],
					}
				}
			],
		},
	},
	{
		name: 'oportunidades-novos-negocios',
		type: 'pie',
		data: {
			total: 100,
			slices: [
				{
					value: 25,
					label: {
						pt: [
							'oportunidades relacionadas à',
							'Desenvolvimento de',
							'novos negócios',
						],
						es: [
							'oportunidades relacionadas al',
							'desarrollo de nuevos negocios'
						],
					}
				}
			],
		},
	},
	{
		name: 'oportunidades-investimento-em-infraestrutura',
		type: 'pie',
		data: {
			total: 100,
			slices: [
				{
					value: 16,
					label: {
						pt: [
							'oportunidades relacionadas à',
							'Aumento do investimento',
							'em infraestrutura',
						],
						es: [
							'oportunidades relacionadas al',
							'aumento de la inversión',
							'en infraestructura'
						],
					}
				}
			],
		},
	},
	{
		name: 'oportunidades-opcoes-adicionais-de-financiamento',
		type: 'pie',
		data: {
			total: 100,
			slices: [
				{
					value: 14,
					label: {
						pt: [
							'oportunidades relacionadas à',
							'Opções adicionais',
							'de financiamento',
						],
						es: [
							'oportunidades relacionadas a las',
							'opciones adicionales',
							'de financiación'
						],
					}
				}
			],
		},
	},
]

let CIDADES = RISCOS_CIDADES.concat(IMPACTOS_CIDADES).concat(OPORTUNIDADES_CIDADES)

CIDADES.forEach(chart => {
	chart.name = 'cidades-' + chart.name
	chart.colorSet = 'violeta'
})

module.exports = CIDADES
