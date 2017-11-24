let RISCOS = [
	{
		name: 'riscos-fisico',
		type: 'pie',
		data: {
			total: 249,
			slices: [
				{
					label: 'Mudança na precipitação média',
					color: 'red',
					value: 34,
				},
				{
					label: 'Alteração da temperatura média',
					color: 'green',
					value: 29,
				},
				{
					label: 'Mudança nos extremos das precipitações e das secas',
					color: 'blue',
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
					color: 'red',
					value: 30,
				},
				{
					label: 'Impostos e regulamentos sobre combustível / energia',
					color: 'green',
					value: 28,
				},
				{
					label: 'Regulamentos ambientais gerais, incluindo o planejamento',
					color: 'blue',
					value: 51,
				},
				{
					label: 'Incertezas dos Regulamentos novos',
					color: 'magenta',
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
					color: 'red',
					value: 34,
				},
				{
					label: 'Condições socioeconômicas flutuantes',
					color: 'magenta',
					value: 19,
				},
				{
					label: 'Reputação',
					color: 'blue',
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
					color: 'red',
					value: 26,
				},
				{
					label: 'Aumento do custo operacional',
					color: 'green',
					value: 88,
				},
				{
					label: 'Redução/interrupção da capacidade de produção',
					color: 'blue',
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
					color: 'red',
					value: 21,
				},
				{
					label: 'Aumento do custo operacional',
					color: 'green',
					value: 176,
				},
				{
					label: 'Redução da demanda por produtos e serviços',
					color: 'blue',
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
					color: 'red',
					value: 55,
				},
				{
					label: 'Redução dos preços das ações (avaliação de mercado)',
					color: 'magenta',
					value: 24,
				},
				{
					label: 'Aumento do custo operacional',
					color: 'blue',
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
					color: 'red',
					value: 19,
				},
				{
					label: 'Alteração na temperatura média',
					color: 'green',
					value: 21,
				},
				{
					label: 'Alteração entre os extremos de precipitação e das secas',
					color: 'blue',
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
					color: 'red',
					value: 29,
				},
				{
					label: 'Regimes de Cap and Trade',
					color: 'green',
					value: 29,
				},
				{
					label: 'Regulamentação sobre energia renovável',
					color: 'blue',
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
					color: 'red',
					value: 40,
				},
				{
					label: 'Outros geradores de oportunidades',
					color: 'magenta',
					value: 23,
				},
				{
					label: 'Reputação',
					color: 'blue',
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
					color: 'red',
					value: 39,
				},
				{
					label: 'Novos produtos/serviços',
					color: 'green',
					value: 20,
				},
				{
					label: 'Redução de custos operacionais',
					color: 'blue',
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
					color: 'red',
					value: 51,
				},
				{
					label: 'Maior demanda por produtos/serviços existentes',
					color: 'green',
					value: 29,
				},
				{
					label: 'Redução de custos operacionais',
					color: 'blue',
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
					color: 'red',
					value: 49,
				},
				{
					label: 'Maior preço da ação (avaliação de mercado)',
					color: 'magenta',
					value: 18,
				},
				{
					label: 'Novos produtos/serviços',
					color: 'blue',
					value: 18,
				},
			],
		},
	},
]

module.exports = RISCOS.concat(OPORTUNIDADES)
