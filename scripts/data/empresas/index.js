let AGUA = require('./agua')
let MUDANCAS_CLIMATICAS = require('./mudancas-climaticas')
let FLORESTAS = require('./florestas')

AGUA.forEach(chart => {
	chart.name = 'empresas-agua-' + chart.name
	chart.colorSet = 'blue'
})

MUDANCAS_CLIMATICAS.forEach(chart => {
	chart.name = 'empresas-mc-' + chart.name
	chart.colorSet = 'vinho'
})

FLORESTAS.forEach(chart => {
	chart.name = 'empresas-florestas-' + chart.name
	chart.colorSet = 'green'
})

module.exports = AGUA.concat(MUDANCAS_CLIMATICAS).concat(FLORESTAS)
