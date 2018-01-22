let RISCOS = [
	{
		name: 'riscos-fisico',
		type: 'pie',
		data: {
			total: 195,
			slices: [
				{
					label: {
						pt: [
							'Mudanças',
							'climáticas'
						],
						es: [
							'Cambios',
							'climáticos'
						],
					},
					value: 21,
				},
				{
					label: {
						pt: [
							'Qualidade da água',
							'em declínio',
						],
						es: [
							'Calidad del agua',
							'en declive'
						]
					},
					value: 21,
				},
				{
					label: {
						pt: [
							'Maior estresse',
							'hídrico',
						],
						es: [
							'Mayor estrés',
							'hídrico'
						],
					},
					value: 23,
				},
				{
					label: {
						pt: [
							'Maior escassez',
							'de água',
						],
						es: [
							'Mayor escasez',
							'de agua'
						],
					},
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
					label: {
						pt: [
							'Maior dificuldade',
							'na obtenção de',
							'licenças de captação',
							'e operação',
						],
						es: [
							'Mayor dificultad',
							'en la obtención de',
							'licencias para la captación',
							'y operación'
						],
					},
					value: 11,
				},
				{
					label: {
						pt: [
							'Aumento no',
							'preço da água',
						],
						es: [
							'Aumento en el',
							'precio del agua'
						]
					},
					value: 17,
				},
				{
					label: {
						pt: [
							'Regulamentação da',
							'qualidade/volume de',
							'lançamentos, levando',
							'ao aumento dos custos',
							'de conformidade',
						],
						es: [
							'Reglamentación de la',
							'calidad/volumen de',
							'lanzamientos, conduciendo',
							'al aumento de los costos',
							'de conformidad'
						],
					},
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
					label: {
						pt: [
							'Valores culturais',
							'e religiosos',
						],
						es: [
							'Valores culturales',
							'y religiosos'
						],
					},
					value: 1,
				},
				{
					label: {
						pt: [
							'Acesso inadequado',
							'à água, saneamento',
							'e higiene',
						],
						es: [
							'Acceso inadecuado',
							'al agua, saneamiento',
							'e higiene'
						],
					},
					value: 2,
				},
				{
					label: {
						pt: [
							'Oposição da',
							'comunidade',
						],
						es: [
							'Oposición de',
							'la comunidad'
						],
					},
					value: 5,
				},
				{
					label: {
						pt: [
							'Cobertura negativa',
							'da mídia',
						],
						es: [
							'Cobertura negativa',
							'de los medios'
						],
					},
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
					label: {
						pt: [
							'Interrupção no',
							'abastecimento de água',
						],
						es: [
							'Interrupción en el',
							'suministro de agua'
						],
					},
					value: 9,
				},
				{
					label: {
						pt: [
							'Interrupção da produção',
							'das fábricas levando à',
							'redução nas quantidades',
							'produzidas',
						],
						es: [
							'Interrupción de la',
							'producción/fábrica',
							'conduciendo a la reducción',
							'de las cantidades producidas'
						],
					},
					value: 49,
				},
				{
					label: {
						pt: [
							'Custos operacionais',
							'mais elevados',
						],
						es: [
							'Costos operativos',
							'más elevados'
						],
					},
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
					label: {
						pt: [
							'Restrição ao',
							'crescimento',
						],
						es: [
							'Restricción al',
							'crecimiento'
						],
					},
					value: 14,
				},
				{
					label: {
						pt: [
							'Interrupção da produção',
							'das fábricas levando à',
							'redução nas quantidades',
							'produzidas',
						],
						es: [
							'Interrupción de la producción',
							'de las fábricas conduciendo a',
							'la reducción de las cantidades',
							'producidas'
						],
					},
					value: 19,
				},
				{
					label: {
						pt: [
							'Custos operacionais',
							'mais elevados',
						],
						es: [
							'Costos operativos',
							'más elevados'
						],
					},
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
					label: {
						pt: [
							'Dano à marca',
						],
						es: [
							'Daño a la marca'
						],
					},
					value: 2,
				},
				{
					label: {
						pt: [
							'Interrupção da produção',
							'das fábricas levando à',
							'redução nas quantidades',
							'produzidas',
						],
						es: [
							'Interrupción de la',
							'producción/fábrica',
							'conduciendo a la reducción',
							'de las cantidades producidas'
						],
					},
					value: 4,
				},
				{
					label: {
						pt: [
							'Restrição ao',
							'crescimento',
						],
						es: [
							'Restricción al',
							'crecimiento'
						],
					},
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
					label: {
						pt: [
							'Melhoria na relação',
							'com a comunidade',
						],
						es: [
							'Mejora en la relación',
							'con la comunidad'
						],
					},
					value: 10,
				},
				{
					label: {
						pt: [
							'Adaptação às',
							'Mudanças Climáticas'
						],
						es: [
							'Adaptación frente a',
							'los cambios climáticos'
						],
					},
					value: 10,
				},
				{
					label: {
						pt: 'Inovação',
						es: 'Innovación',
					},
					value: 12,
				},
				{
					label: {
						pt: [
							'Aumento no',
							'valor da marca',
						],
						es: [
							'Aumento en el',
							'valor de la marca'
						],
					},
					value: 15,
				},
				{
					label: {
						pt: [
							'Melhor eficiência',
							'hídrica',
						],
						es: [
							'Mejor eficiencia',
							'hídrica'
						],
					},
					value: 19,
				},
				{
					label: {
						pt: 'Redução de custos',
						es: 'Reducción de costos',
					},
					value: 20,
				},
			],
		},
	},

]

module.exports = RISCOS.concat(RISCOS_IMPACTOS).concat(OPORTUNIDADES)
