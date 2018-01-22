const fs = require('fs')
const path = require('path')

const D3Node = require('d3-node')
const d3 = D3Node.d3

const GRAY = '#A0A0A0'

const COLOR_SETS = {
	// cities
	violeta: [
		'#351923',
		'#5B414C',
		'#7174A5',
		'#8D8FBA',
	],
	vinho: [
		'#501D3C',
		'#7F2D6E',
		'#965084',
		'#B26F9D',
	],
	blue: [
		'#006B85',
		'#13889B',
		'#289DA3',
		'#58A4A8',
		'#6AB6BA',
		'#7FCAD1',
	],
	green: [
		'#123426',
		'#22563C',
		'#30684D',
		'#437C62',
		'#5E8876',
	],
}

const LANG_OTHERS = {
	pt: 'Outros',
	es: 'Otros',
	en: 'Others',
}

function pieChart(options, language) {
	let d3n = new D3Node({
		// styles: '@import url("https://fonts.googleapis.com/css?family=Raleway:700");',
		// styles: fs.readFileSync(path.join(__dirname, '../styles.css'), 'utf8'),
	})

	// let width = 400
	// let height = 300
	// let fontSize = '11px'

	let fontSize = '33px'
	let outerRadius = 180
	let innerRadius = outerRadius * 2/5
	
	let width = 1500
	let height = 1500
	

	let chartColorSet = COLOR_SETS[options.colorSet] || COLOR_SETS.blue

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
		.outerRadius(outerRadius * 1.2)
		.innerRadius(outerRadius * 1.2)

	/**
	 * Compute slice sizes
	 */
	let slicesTotal = options.data.slices.reduce((acc, slice) => {
		return acc + slice.value
	}, 0)

	// sort slices from largest to smallest
	options.data.slices.sort((sliceA, sliceB) => {
		if (sliceA.value > sliceB.value) {
			return -1
		} else {
			return 1
		}
	})

	let slices = options.data.slices.map((slice, index) => {

		let label = slice.label[language] || 'MISSING'

		if (!label === 'MISSING') {
			console.warn(`missing label for slice in language ${language} ${JSON.stringify(slice)}`)
		}

		let formattedSlice = {
			label: Array.isArray(label) ? label : [label],
			color: chartColorSet[index],
			value: slice.value / options.data.total,
		}

		let percentageStr = Math.round(formattedSlice.value * 100) + '%'

		formattedSlice.label.unshift(percentageStr)

		return formattedSlice
	})

	if (slicesTotal < options.data.total) {
		slices.push({
			label: [LANG_OTHERS[language]],
			isOther: true,
			color: GRAY,
			value: (options.data.total - slicesTotal) / options.data.total,
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

	// build the label
	arc.append('g')
		.attr('class', 'arc-label')
		.attr('transform', d => `translate(${cartLabelGenerator.centroid(d)})`)
		.attr('dy', '0.35em')
		.each(function (d) {

			// console.log(datum.data.label)

			d.data.label.forEach((lineText, lineIndex) => {
				d3.select(this)
					.append('text')
					.text(lineText)
					.style('font-family', 'Raleway, sans-serif')
					.style('font-size', fontSize)
					.style('font-weight', 'bold')
					// .attr('fill', '#686868')
					.attr('dy', (d) => {

						if (d.endAngle > 11.5/6 * Math.PI || d.endAngle < 4/6 * Math.PI) {
							return -35 * (d.data.label.length - 1 - lineIndex) + ''
						} else {
							return 35 * lineIndex + ''
						}
					})
					.attr('text-anchor', () => {
				    // are we past the center?
				    return (d.endAngle + d.startAngle)/2 > Math.PI ?
				      'end' : 'start';
					})
			})
		})


	return d3n.svgString()
}

module.exports = pieChart
