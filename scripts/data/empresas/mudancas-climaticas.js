let RISCOS = [
	{
		name: 'riscos-fisico',
		type: 'pie',
		data: {
			total: 249,
			slices: [
				{
					label: 'Mudança na precipitação média',
					value: 34,
				},
				{
					label: 'Alteração da temperatura média',
					value: 29,
				},
				{
					label: 'Mudança nos extremos das precipitações e das secas',
					value: 60,
				},
			],
		},
	},
	{
		name: 'riscos-regulatorio',
		type: 'pie',
		data: {
			total: 272,
			slices: [
				{
					label: 'Impostos de carbono',
					value: 30,
				},
				{
					label: 'Impostos e regulamentos sobre combustível / energia',
					value: 28,
				},
				{
					label: 'Regulamentos ambientais gerais, incluindo o planejamento',
					value: 51,
				},
				{
					label: 'Incertezas dos Regulamentos novos',
					value: 29,
				},
			],
		},
	},
	{
		name: 'riscos-reputacional',
		type: 'pie',
		data: {
			total: 146,
			slices: [
				{
					label: 'Alteração do comportamento do consumidor',
					value: 34,
				},
				{
					label: 'Condições socioeconômicas flutuantes',
					value: 19,
				},
				{
					label: 'Reputação',
					value: 48,
				},
			],
		},
	},
]

let RISCOS_IMPACTOS = [
	{
		name: 'riscos-impactos-fisico',
		type: 'pie',
		data: {
			total: 249,
			slices: [
				{
					label: 'Incapacidade de fazer negócios',
					value: 26,
				},
				{
					label: 'Aumento do custo operacional',
					value: 88,
				},
				{
					label: 'Redução/interrupção da capacidade de produção',
					value: 95,
				},
			],
		},
	},
	{
		name: 'riscos-impactos-regulatorio',
		type: 'pie',
		data: {
			total: 272,
			slices: [
				{
					label: 'Aumento do custo do capital',
					value: 21,
				},
				{
					label: 'Aumento do custo operacional',
					value: 176,
				},
				{
					label: 'Redução da demanda por produtos e serviços',
					value: 22,
				},
			],
		},
	},
	{
		name: 'riscos-impactos-reputacional',
		type: 'pie',
		data: {
			total: 146,
			slices: [
				{
					label: 'Redução da demanda por produtos e serviços',
					value: 55,
				},
				{
					label: 'Redução dos preços das ações (avaliação de mercado)',
					value: 24,
				},
				{
					label: 'Aumento do custo operacional',
					value: 15,
				},
			],
		},
	},
]

let OPORTUNIDADES = [
	{
		name: 'oportunidades-fisico',
		type: 'pie',
		data: {
			total: 114,
			slices: [
				{
					label: 'Alteração do padrão de precipitação',
					value: 19,
				},
				{
					label: 'Alteração na temperatura média',
					value: 21,
				},
				{
					label: 'Alteração entre os extremos de precipitação e das secas',
					value: 24,
				},
			],
		},
	},
	{
		name: 'oportunidades-regulatorio',
		type: 'pie',
		data: {
			total: 225,
			slices: [
				{
					label: 'Regulamentos ambientais gerais, incluindo o planejamento',
					value: 29,
				},
				{
					label: 'Regimes de Cap and Trade',
					value: 29,
				},
				{
					label: 'Regulamentação sobre energia renovável',
					value: 39,
				},
			],
		},
	},
	{
		name: 'oportunidades-reputacional',
		type: 'pie',
		data: {
			total: 135,
			slices: [
				{
					label: 'Alteração do comportamento do consumidor',
					value: 40,
				},
				{
					label: 'Outros geradores de oportunidades',
					value: 23,
				},
				{
					label: 'Reputação',
					value: 47,
				},
			],
		},
	},
]

let OPORTUNIDADES_IMPACTOS = [
	{
		name: 'oportunidades-impactos-fisico',
		type: 'pie',
		data: {
			total: 114,
			slices: [
				{
					label: 'Maior demanda por produtos/serviços existentes',
					value: 39,
				},
				{
					label: 'Novos produtos/serviços',
					value: 20,
				},
				{
					label: 'Redução de custos operacionais',
					value: 21,
				},
			],
		},
	},
	{
		name: 'oportunidades-impactos-regulatorio',
		type: 'pie',
		data: {
			total: 225,
			slices: [
				{
					label: 'Novos produtos/serviços',
					value: 51,
				},
				{
					label: 'Maior demanda por produtos/serviços existentes',
					value: 29,
				},
				{
					label: 'Redução de custos operacionais',
					value: 47,
				},
			],
		},
	},
	{
		name: 'oportunidades-impactos-reputacional',
		type: 'pie',
		data: {
			total: 135,
			slices: [
				{
					label: 'Maior demanda por produtos/serviços existentes',
					value: 49,
				},
				{
					label: 'Maior preço da ação (avaliação de mercado)',
					value: 18,
				},
				{
					label: 'Novos produtos/serviços',
					value: 18,
				},
			],
		},
	},
]

module.exports = RISCOS.concat(OPORTUNIDADES)
