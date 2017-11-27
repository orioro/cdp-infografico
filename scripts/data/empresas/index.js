let AGUA = require('./agua')
let MUDANCAS_CLIMATICAS = require('./mudancas-climaticas')

AGUA.forEach(chart => {
	chart.name = 'empresas-agua-' + chart.name
})

MUDANCAS_CLIMATICAS.forEach(char => {
	chart.name = 'empresas-mc-' + chart.name
})
