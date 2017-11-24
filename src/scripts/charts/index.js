const pieChart = require('../components/pie-chart')

module.exports = function (app, options) {
	let CHART_SPECS = options.charts

	/**
	 * Elements that refer to a chart spec
	 */
	let chartReferenceElements = Array.from(document.querySelectorAll('[data-chart-ref]'))
	chartReferenceElements.forEach(el => {
		let chartSpec = CHART_SPECS[el.getAttribute('data-chart-ref')]

		if (!chartSpec) {
			console.warn(`could not find chart spec for chart ${chartSpec}`)
			return
		}

		if (chartSpec.type === 'pie') {
			pieChart.chart(Object.assign({}, chartSpec, {
				containerElement: el,
				size: el.getBoundingClientRect().width,
			}))
		}
	})

	/**
	 * Elements that contain the chart spec inline
	 */
	let chartInlineElements = Array.from(document.querySelectorAll('[data-chart-spec]'))
	chartReferenceElements.forEach(el => {
		let chartSpec

		try {
			chartSpec = JSON.parse(el.getAttribute('data-chart-spec'))
		} catch (e) {
			console.warn(`could not find chart spec for chart`, err)
			return
		}

		if (chartSpec.type === 'pie') {
			pieChart.chart(Object.assign({}, chartSpec, {
				containerElement: el,
				size: el.getBoundingClientRect().width,
			}))
		}
	})
}
