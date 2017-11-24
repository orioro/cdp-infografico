let RISCOS_CIDADES = [
	{
		name: 'riscos-cidades-secas',
		type: 'percentage',
		data: {
			percentage: 9,
			text: [
				'Reportaram riscos relacionados à',
				'Secas',
			]
		},
	},
	{
		name: 'riscos-cidades-aumento-da-temperatura',
		type: 'percentage',
		data: {
			percentage: 14,
			text: [
				'Reportaram riscos relacionados à',
				'Aumento da temperatura e ondas de calor',
			]
		},
	},
	{
		name: 'riscos-cidades-enchentes',
		type: 'percentage',
		data: {
			percentage: 18,
			text: [
				'Reportaram riscos relacionados à',
				'Enchentes',
			]
		},
	},
	{
		name: 'riscos-cidades-tempestades-intensas',
		type: 'percentage',
		data: {
			percentage: 10,
			text: [
				'Reportaram riscos relacionados à',
				'Chuvas e tempestades intensas',
			]
		},
	},
	{
		name: 'riscos-cidades-doencas',
		type: 'percentage',
		data: {
			percentage: 13,
			text: [
				'Reportaram riscos relacionados à',
				'Doenças (insetos, vetores, vírus, água e ar',
			]
		},
	},

	{
		name: 'riscos-cidades-impactos',
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
					label: 'Disponibilidade de agua para produção/serviços',
					color: 'pink',
					value: 17,
				},
				{
					label: 'Transporte matéria prima/produtos e serviços',
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

let OPORTUNIDADES_CIDADES = [
	{
		name: 'oportunidades-cidades-atencao-a-questoes-ambientais',
		type: 'percentage',
		data: {
			percentage: 27,
			text: [
				'Reportaram oportunidades relacionadas à',
				'Atenção crescente a preocupações ambientais',
			]
		},
	},
	{
		name: 'oportunidades-cidades-novos-negocios',
		type: 'percentage',
		data: {
			percentage: 25,
			text: [
				'Reportaram oportunidades relacionadas à',
				'Desenvolvimento de novos negócios',
			]
		},
	},
	{
		name: 'oportunidades-cidades-novos-negocios',
		type: 'percentage',
		data: {
			percentage: 16,
			text: [
				'Reportaram oportunidades relacionadas à',
				'Aumento do investimento em infraestrutura',
			]
		},
	},
	{
		name: 'oportunidades-cidades-novos-negocios',
		type: 'percentage',
		data: {
			percentage: 14,
			text: [
				'Reportaram oportunidades relacionadas à',
				'Opções adicionais de financiamento',
			]
		},
	},
]

module.exports = RISCOS_CIDADES.concat(OPORTUNIDADES_CIDADES)
