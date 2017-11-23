const d3 = Object.assign({},
	require('d3-shape'),
	require('d3-selection')
)

function chart(options) {
	let containerElement = options.containerElement

	let size = options.size


	// leave some space for the labels and stuff
	let outerRadius = (size - 50) / 2
	let innerRadius = options.innerRadius || outerRadius * 2/5

	let svg = d3.select(containerElement)
		.append('svg')
		.attr('width', size)
		.attr('height', size)

	let chartG = svg.append('g')
		.attr('transform', 'translate(' + size / 2 + ',' + size / 2 + ')')

	/**
	 * The pie data generator
	 */
	let pie = d3.pie()
		.sort(null)
		.value(d => d.value )

	let chartArcPathGenerator = d3.arc()
		.outerRadius(outerRadius)
		.innerRadius(innerRadius)

	let cartLabelGenerator = d3.arc()
		.outerRadius(outerRadius)
		.innerRadius(outerRadius)

	let arc = chartG.selectAll('.arc')
		.data(pie(options.data))
		.enter()
			.append('g')
			.attr('class', 'arc')

	arc.append('path')
		.attr('d', chartArcPathGenerator)
		.attr('fill', d => d.data.color)

	arc.append('text')
		.attr('transform', d => `translate(${cartLabelGenerator.centroid(d)})`)
		.attr('dy', '0.35em')
		.text(d => d.data.label)
		.attr('text-anchor', d => {
	    // are we past the center?
	    return (d.endAngle + d.startAngle)/2 > Math.PI ?
	      'end' : 'start';
		})
}

exports.chart = chart
