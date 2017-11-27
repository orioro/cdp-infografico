const D3Node = require('d3-node')
const d3 = D3Node.d3

function largePieChart(options, styles) {
	let d3n = new D3Node({
		styles: '@import url("https://fonts.googleapis.com/css?family=Raleway:700");',
	})

	let width = 300
	let height = 300

	// leave some space for the labels and stuff
	let outerRadius = 150
	let innerRadius = 60

	let svg = d3n.createSVG()
		.attr('width', width)
		.attr('height', height)

	let chartG = svg.append('g')
		.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

	/**
	 * The pie data generator
	 */
	let pie = d3.pie()
		.sort(null)
		.value(d => {
			return d.value
		})

	let chartArcPathGenerator = d3.arc()
		.outerRadius((d) => {
			if (d.data.isOther) {
				return outerRadius * 0.9
			} else {
				return outerRadius
			}
		})
		.innerRadius(innerRadius)

	/**
	 * Compute slice sizes
	 */
	let slicesTotal = options.data.slices.reduce((acc, slice) => {
		return acc + slice.value
	}, 0)

	let slices = options.data.slices.map((slice, index) => {
		let formattedSlice = {
			color: slice.color,
			value: slice.value / options.data.total,
		}

		return formattedSlice
	})

	if (slicesTotal < options.data.total) {
		slices.push({
			color: '#FFFFFF',
			value: (options.data.total - slicesTotal) / options.data.total,
			isOther: true,
		})
	}

	let arc = chartG.selectAll('.arc')
		.data(pie(slices))
		.enter()
			.append('g')
			.attr('class', 'arc')

	arc.append('path')
		.attr('d', chartArcPathGenerator)
		.attr('fill', d => d.data.color)

	return d3n.svgString()
}

module.exports = largePieChart
