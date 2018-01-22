let RISCOS = [
	{
		name: 'riscos-fisico',
		type: 'pie',
		data: {
			total: 249,
			slices: [
				{
					label: {
						pt: [
							'Mudança na',
							'precipitação média',
						],
						es: [
							'Cambio en la',
							'precipitación promedio'
						],
					},
					value: 34,
				},
				{
					label: {
						pt: [
							'Alteração da',
							'temperatura média',
						],
						es: [
							'Alteración de la',
							'temperatura promedio'
						],
					},
					value: 29,
				},
				{
					label: {
						pt: [
							'Mudança nos',
							'extremos das precipitações',
							'e das secas',
						],
						es: [
							'Cambio en los extremos',
							'de las precipitaciones',
							'y de sequías'
						],
					},
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
					label: {
						pt: 'Impostos de carbono',
						es: 'Impuestos de carbono',
					},
					value: 30,
				},
				{
					label: {
						pt: [
							'Impostos e regulamentos',
							'sobre combustível / energia',
						],
						es: [
							'Impuestos y reglamentos',
							'sobre combustible / energía',
						],
					},
					value: 28,
				},
				{
					label: {
						pt: [
							'Regulamentos ambientais',
							'gerais, incluindo planejamento',
						],
						es: [
							'Reglamentos ambientales',
							'generales, incluyendo planificación'
						],
					},
					value: 51,
				},
				{
					label: {
						pt: [
							'Incertezas dos',
							'Regulamentos novos',
						],
						es: [
							'Incertidumbre de los',
							'nuevos reglamentos'
						],
					},
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
					label: {
						pt: [
							'Alteração do',
							'comportamento do',
							'consumidor',
						],
						es: [
							'Alteración del',
							'comportamiento del',
							'consumidor'
						],
					},
					value: 34,
				},
				{
					label: {
						pt: [
							'Condições',
							'socioeconômicas',
							'flutuantes',
						],
						es: [
							'Condiciones',
							'socioeconómicas',
							'fluctuantes'
						],
					},
					value: 19,
				},
				{
					label: {
						pt: 'Reputação',
						es: 'Reputación',
					},
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
					label: {
						pt: [
							'Incapacidade de',
							'fazer negócios',
						],
						es: [
							'Incapacidad de',
							'realizar negocios'
						],
					},
					value: 26,
				},
				{
					label: {
						pt: [
							'Aumento do custo',
							'operacional',
						],
						es: [
							'Aumento del costo',
							'operativo'
						],
					},
					value: 88,
				},
				{
					label: {
						pt: [
							'Redução/interrupção',
							'da capacidade',
							'de produção',
						],
						es: [
							'Reducción/interrupción',
							'de la capacidad',
							'de la producción',
						],
					},
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
					label: {
						pt: [
							'Aumento do',
							'custo do capital',
						],
						es: [
							'Aumento del',
							'costo del capital'
						],
					},
					value: 21,
				},
				{
					label: {
						pt: [
							'Aumento do custo',
							'operacional',
						],
						es: [
							'Aumento del costo',
							'operativo'
						],
					},
					value: 176,
				},
				{
					label: {
						pt: [
							'Redução da demanda',
							'por produtos e',
							'serviços',
						],
						es: [
							'Reducción de la demanda',
							'por productos y',
							'servicios'
						],
					},
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
					label: {
						pt: [
							'Redução da demanda',
							'por produtos e',
							'serviços',
						],
						es: [
							'Reducción de la demanda',
							'por productos y',
							'servicios'
						],
					},
					value: 55,
				},
				{
					label: {
						pt: [
							'Redução dos preços',
							'das ações',
							'(avaliação de mercado)',
						],
						es: [
							'Reducción de los precios',
							'de las acciones',
							'(evaluación de mercado)'
						],
					},
					value: 24,
				},
				{
					label: {
						pt: [
							'Aumento do custo',
							'operacional',
						],
						es: [
							'Aumento del costo',
							'operativo'
						],
					},
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
					label: {
						pt: [
							'Alteração do padrão',
							'de precipitação',
						],
						es: [
							'Alteración en el estándar',
							'de precipitación',
						],
					},
					value: 19,
				},
				{
					label: {
						pt: [
							'Alteração na',
							'temperatura média',
						],
						es: [
							'Alteración en la',
							'temperatura promedio'
						],
					},
					value: 21,
				},
				{
					label: {
						pt: [
							'Alteração entre',
							'os extremos de',
							'precipitação e das secas',
						],
						es: [
							'Alteración entre',
							'los extremos de',
							'precipitación y de',
							'las sequías'
						],
					},
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
					label: {
						pt: [
							'Regulamentos ambientais',
							'gerais, incluindo planejamento',
						],
						es: [
							'Reglamentos ambientales',
							'generales, incluyendo planificación'
						],
					},
					value: 29,
				},
				{
					label: {
						pt: [
							'Regimes de Cap',
							'and Trade',
						],
						es: [
							'Regímenes de Cap',
							'and Trade'
						],
					},
					value: 29,
				},
				{
					label: {
						pt: [
							'Regulamentação sobre',
							'energia renovável',
						],
						es: [
							'Reglamentación sobre',
							'energía renovable'
						],
					},
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
					label: {
						pt: [
							'Alteração do comportamento',
							'do consumidor',
						],
						es: [
							'Alteración en el',
							'comportamiento del consumidor',
						],
					},
					value: 40,
				},
				{
					label: {
						pt: [
							'Outros geradores',
							'de oportunidades',
						],
						es: [
							'Otros generadores',
							'de oportunidad',
						],
					},
					value: 23,
				},
				{
					label: {
						pt: 'Reputação',
						es: 'Reputación',
					},
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
					label: {
						pt: [
							'Maior demanda',
							'por produtos e serviços',
							'existentes',
						],
						es: [
							'Mayor demanda',
							'por productos/servicios',
							'existentes'
						],
					},
					value: 39,
				},
				{
					label: {
						pt: 'Novos produtos/serviços',
						es: 'Nuevos productos/servicios',
					},
					value: 20,
				},
				{
					label: {
						pt: [
							'Redução de custos',
							'operacionais',
						],
						es: [
							'Reducción de costos',
							'operativos',
						],
					},
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
					label: {
						pt: 'Novos produtos/serviços',
						es: 'Nuevos productos/servicios',
					},
					value: 51,
				},
				{
					label: {
						pt: [
							'Maior demanda',
							'por produtos e serviços',
							'existentes',
						],
						es: [
							'Mayor demanda',
							'por productos/servicios',
							'existentes'
						],
					},
					value: 29,
				},
				{
					label: {
						pt: [
							'Redução de custos',
							'operacionais',
						],
						es: [
							'Reducción de costos',
							'operativos',
						],
					},
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
					label: {
						pt: [
							'Maior demanda',
							'por produtos e serviços',
							'existentes',
						],
						es: [
							'Mayor demanda',
							'por productos/servicios',
							'existentes'
						],
					},
					value: 49,
				},
				{
					label: {
						pt: [
							'Maior preço',
							'da ação (avaliação de mercado)',
						],
						es: [
							'Mayor precio de',
							'la acción (evaluación de mercado)'
						],
					},
					value: 18,
				},
				{
					label: {
						pt: 'Novos produtos/serviços',
						es: 'Nuevos productos/servicios',
					},
					value: 18,
				},
			],
		},
	},
]

module.exports = RISCOS.concat(OPORTUNIDADES)
