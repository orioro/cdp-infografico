let CIDADES = require('./cidades')
let EMPRESAS = require('./empresas')

let LARGE_PIES = [
	{
		name: 'cidades-com-inventario-gee',
		type: 'large-pie',
		data: {
			total: 155,
			slices: [
				{
					value: 38,
					label: [],
					color: '#F4BD37',
				}
			],
		},
	},
	{
		name: 'cidades-com-metas-de-reducao-gee',
		type: 'large-pie',
		data: {
			total: 155,
			slices: [
				{
					// com inventario e com meta
					value: 8,
					label: [],
					color: 'rgb(209, 18, 66)',
				},
				{
					// com inventario, mas sem meta
					value: 30,
					label: [],
					color: '#F4BD37',
				}
			],
		},
	},
	{
		name: 'empresas-com-metas-de-reducao-gee',
		type: 'large-pie',
		data: {
			total: 95,
			slices: [
				{
					// com inventario e com meta
					value: 67,
					label: [],
					color: '#F4BD37',
				},
			],
		},
	},
	{
		name: 'empresas-com-metas-de-reducao-desmatamento',
		type: 'large-pie',
		data: {
			total: 11,
			slices: [
				{
					// com inventario e com meta
					value: 8,
					label: [],
					color: '#F4BD37',
				},
			],
		},
	},
	{
		name: 'empresas-com-metas-de-reducao-agua',
		type: 'large-pie',
		data: {
			total: 25,
			slices: [
				{
					// com inventario e com meta
					value: 17,
					label: [],
					color: '#F4BD37',
				},
			],
		},
	}
]

module.exports = CIDADES.concat(EMPRESAS).concat(LARGE_PIES)


