let RISCOS_CIDADES = [
	{
		name: 'riscos-secas',
		type: 'pie',
		data: {
			total: 100,
			slices: [
				{
					value: 9,
					label: [
						'das cidades',
						'reportaram riscos',
						'relacionados à',
						'Secas',
					]
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
					label: [
						'das cidades',
						'reportaram riscos',
						'relacionados à',
						'Aumento da temperatura',
						'e ondas de calor',
					]
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
					label: [
						'das cidades',
						'reportaram riscos',
						'relacionados à',
						'Enchentes',
					]
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
					label: [
						'das cidades',
						'reportaram riscos',
						'relacionados à',
						'Chuvas e tempestades',
						'intensas',
					]
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
					label: [
						// 'Reportaram riscos relacionados à',
						'Doenças',
						// '(insetos, vetores, vírus, água e ar',
					]
				}
			],
		},
	},

	{
		name: 'riscos-impactos',
		type: 'pie',
		data: {
			total: 100,
			slices: [
				{
					label: 'Agricultura/agropecuária',
					color: 'red',
					value: 20,
				},
				{
					label: [
						'das cidades',
						'reportaram riscos',
						'relacionados à',
						'Disponibilidade de água',
						'para produção/serviços',
					],
					color: 'pink',
					value: 17,
				},
				{
					label: [
						'Transporte matéria prima /',
						'produtos e serviços',
					],
					color: 'magenta',
					value: 14,
				},
				{
					label: 'Turismo',
					color: 'green',
					value: 11,
				},
			],
		}
	}
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
					label: [
						'Agricultura /',
						'Agropecuária',
					]
				},
				{
					value: 17,
					label: [
						'Disponibilidade de',
						'água para',
						'produção / serviços'
					],
				},
				{
					value: 14,
					label: [
						'Transporte matéria',
						'prima / produtos',
						'e serviços',
					]
				},
				{
					value: 11,
					label: [
						'Turismo'
					],
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
					label: [
						'das cidades',
						'reportaram oportunidades',
						'relacionadas à',
						'Atenção crescente',
						'a preocupações ambientais',
					]
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
					label: [
						'das cidades',
						'reportaram oportunidades',
						'relacionadas à',
						'Desenvolvimento de',
						'novos negócios',
					]
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
					label: [
						'das cidades',
						'reportaram oportunidades',
						'relacionadas à',
						'Aumento do investimento',
						'em infraestrutura',
					]
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
					label: [
						'das cidades',
						'reportaram oportunidades',
						'relacionadas à',
						'Opções adicionais',
						'de financiamento',
					]
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
