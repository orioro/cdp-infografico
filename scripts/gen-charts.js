const path = require('path')
const fs = require('fs')

const CHART_SPECS = require('./data')
const pieChart = require('./chart-types/pie')

const CHARTS_DIR = path.join(__dirname, '../src/resources/graficos')

CHART_SPECS.forEach((spec) => {
	if (spec.type === 'pie') {
		let svgStr = pieChart(spec)

		console.log(`chart ${spec.name}`)

		fs.writeFileSync(path.join(CHARTS_DIR, spec.name + '.svg'), svgStr, 'utf8')
	}
})
