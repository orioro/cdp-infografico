let RISCOS = [
	{
		name: 'riscos-fisico',
		type: 'pie',
		data: {
			total: 195,
			slices: [
				{
					label: [
						'Mudanças',
						'climáticas'
					],
					value: 21,
				},
				{
					label: [
						'Qualidade da água',
						'em declínio',
					],
					value: 21,
				},
				{
					label: [
						'Maior estresse',
						'hídrico',
					],
					value: 23,
				},
				{
					label: [
						'Maior escassez',
						'de água',
					],
					value: 49,
				},
			],
		},
	},
	{
		name: 'riscos-regulatorio',
		type: 'pie',
		data: {
			total: 87,
			slices: [
				{
					label: [
						'Maior dificuldade',
						'na obtenção de',
						'licenças de captação',
						'e operação',
					],
					value: 11,
				},
				{
					label: [
						'Aumento no',
						'preço da água',
					],
					value: 17,
				},
				{
					label: [
						'Regulamentação da',
						'qualidade/volume de',
						'lançamentos, levando',
						'ao aumento dos custos',
						'de conformidade',
					],
					value: 20,
				},
			],
		},
	},
	{
		name: 'riscos-reputacional',
		type: 'pie',
		data: {
			total: 15,
			slices: [
				{
					label: [
						'Valores culturais',
						'e religiosos',
					],
					value: 1,
				},
				{
					label: [
						'Acesso inadequado',
						'à água, saneamento',
						'e higiene',
					],
					value: 2,
				},
				{
					label: [
						'Oposição da',
						'comunidade',
					],
					value: 5,
				},
				{
					label: [
						'Cobertura negativa',
						'da mídia',
					],
					value: 7,
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
			total: 195,
			slices: [
				{
					label: [
						'Interrupção no',
						'abastecimento de água',
					],
					value: 9,
				},
				{
					label: [
						'Interrupção da produção',
						'das fábricas levando à',
						'redução nas quantidades',
						'produzidas',
					],
					value: 49,
				},
				{
					label: [
						'Custos operacionais',
						'mais elevados',
					],
					value: 99,
				},
			],
		},
	},
	{
		name: 'riscos-impactos-regulatorio',
		type: 'pie',
		data: {
			total: 87,
			slices: [
				{
					label: [
						'Restrição ao',
						'crescimento',
					],
					value: 14,
				},
				{
					label: [
						'Interrupção da produção',
						'das fábricas levando à',
						'redução nas quantidades',
						'produzidas',
					],
					value: 19,
				},
				{
					label: [
						'Custos operacionais',
						'mais elevados',
					],
					value: 38,
				},
			],
		},
	},
	{
		name: 'riscos-impactos-reputacional',
		type: 'pie',
		data: {
			total: 18,
			slices: [
				{
					label: 'Dano à marca',
					value: 2,
				},
				{
					label: [
						'Interrupção da produção',
						'das fábricas levando à',
						'redução nas quantidades',
						'produzidas',
					],
					value: 4,
				},
				{
					label: [
						'Restrição ao',
						'crescimento',
					],
					value: 5,
				},
			],
		},
	},

]

let OPORTUNIDADES = [
	{
		name: 'oportunidades-geral',
		type: 'pie',
		data: {
			total: 160,
			slices: [
				{
					label: [
						'Melhoria na relação',
						'com a comunidade',
					],
					value: 10,
				},
				{
					label: [
						'Adaptação às',
						'Mudanças Climáticas'
					],
					value: 10,
				},
				{
					label: 'Inovação',
					value: 12,
				},
				{
					label: [
						'Aumento no',
						'valor da marca',
					],
					value: 15,
				},
				{
					label: [
						'Melhor eficiência',
						'hídrica',
					],
					value: 19,
				},
				{
					label: 'Redução de custos',
					value: 20,
				},
			],
		},
	},

]

module.exports = RISCOS.concat(RISCOS_IMPACTOS).concat(OPORTUNIDADES)
