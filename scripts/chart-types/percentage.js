const D3Node = require('d3-node')
const d3 = D3Node.d3

function pieChart(options, styles) {
	let d3n = new D3Node({
		styles: styles,
	})

	let size = options.size

	// leave some space for the labels and stuff
	let outerRadius = (size - 100) / 2
	let innerRadius = options.innerRadius || outerRadius * 2/5

	let svg = d3n.createSVG()
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
		.outerRadius((d) => {
			if (d.data.isOther) {
				return outerRadius * 0.9
			} else {
				return outerRadius
			}
		})
		.innerRadius(innerRadius)

	let cartLabelGenerator = d3.arc()
		.outerRadius(outerRadius)
		.innerRadius(outerRadius)

	/**
	 * Compute slice sizes
	 */
	let slices = [
		{
			label: options.dataoptions.data.percentage
	]
	// let slices = options.data.slices.map(slice => {
	// 	return {
	// 		label: slice.label,
	// 		color: slice.color,
	// 		value: slice.value / options.data.total,
	// 	}
	// })

	// if (slicesTotal < options.data.total) {
	// 	slices.push({
	// 		label: 'Outros',
	// 		isOther: true,
	// 		color: 'gray',
	// 		value: (options.data.total - slicesTotal) / options.data.total,
	// 	})
	// }

	let arc = chartG.selectAll('.arc')
		.data(pie(slices))
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

	return d3n.svgString()
}

module.exports = pieChart
