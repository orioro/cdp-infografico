const path = require('path')
const fs = require('fs')

const CHART_SPECS = require('./data')
const pieChart = require('./chart-types/pie')

const CHARTS_DIR = path.join(__dirname, 'output')

CHART_SPECS.forEach((spec) => {
	// spec.size = 500

	if (spec.type === 'pie') {
		let svgStr = pieChart(spec)

		console.log(`chart ${spec.name}`)

		fs.writeFileSync(path.join(CHARTS_DIR, spec.name + '.svg'), svgStr, 'utf8')
	}
})

// console.log(pieChart({
// 	name: 'riscos-impactos',
// 	type: 'pie',
// 	size: 400,
// 	data: {
// 		total: 100,
// 		slices: [
// 			{
// 				label: 'Agricultura/agropecuária',
// 				color: 'red',
// 				value: 20,
// 			},
// 			{
// 				label: 'Disponibilidade de agua para produção/serviços',
// 				color: 'pink',
// 				value: 17,
// 			},
// 			{
// 				label: 'Transporte matéria prima/produtos e serviços',
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
// }))
