const path = require('path')
const fs = require('fs')

const CHART_SPECS = require('./data')
const CHARTS_DIR = path.join(__dirname, '../src/resources/graficos')
// const CHARTS_DIR = path.join(__dirname, 'output')

const CHART_FNS = {
	'pie': require('./chart-types/pie'),
	'large-pie': require('./chart-types/large-pie'),
}

CHART_SPECS.forEach((spec) => {
	let chartFn = CHART_FNS[spec.type]

	if (chartFn) {
		let svgStr = chartFn(spec)
		console.log(`chart ${spec.name}`)

		fs.writeFileSync(path.join(CHARTS_DIR, spec.name + '.svg'), svgStr, 'utf8')
	} else {
		console.warn('could not find chart function for ' + spec.type)
	}
})

