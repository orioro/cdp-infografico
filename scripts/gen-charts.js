const child_process = require('child_process')
const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')

const CHART_SPECS = require('./data')
const CHARTS_DIR = path.join(__dirname, 'output')
const TMP_DIR = path.join(__dirname, 'tmp')
const TRIMMED_DIR = path.join(__dirname, 'trimmed')
const TRIM_BASH_SCRIPT = path.join(__dirname, 'trim.sh')

fse.emptyDirSync(CHARTS_DIR)
fse.emptyDirSync(TMP_DIR)
fse.emptyDirSync(TRIMMED_DIR)

const CHART_FNS = {
	'pie': require('./chart-types/pie'),
	'large-pie': require('./chart-types/large-pie'),
}

const LANGUAGES = [
	'pt',
	'es'
]

LANGUAGES.forEach(lang => {
	CHART_SPECS.forEach((spec) => {
		let chartFn = CHART_FNS[spec.type]

		if (chartFn) {
			let svgStr = chartFn(spec, lang)
			console.log(`chart ${spec.name}`)

			let chartName = lang === 'pt' ?
				spec.name : spec.name + '_' + lang

			fs.writeFileSync(path.join(CHARTS_DIR, chartName + '.svg'), svgStr, 'utf8')

			child_process.execFile(TRIM_BASH_SCRIPT, [chartName])

		} else {
			console.warn('could not find chart function for ' + spec.type)
		}
	})
})
