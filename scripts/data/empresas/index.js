let AGUA = require('./agua')
let MUDANCAS_CLIMATICAS = require('./mudancas-climaticas')

AGUA.forEach(chart => {
	chart.name = 'empresas-agua-' + chart.name
	chart.colorSet = 'blue'
})

MUDANCAS_CLIMATICAS.forEach(chart => {
	chart.name = 'empresas-mc-' + chart.name
	chart.colorSet = 'vinho'
})

module.exports = AGUA.concat(MUDANCAS_CLIMATICAS)
