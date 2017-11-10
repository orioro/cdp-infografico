module.exports = function (app, options) {
	let scenery = {}

	scenery.cityBuildings = require('./city-buildings')(app, options)
	scenery.cityRiver = require('./city-river')(app, options)
	scenery.sky = require('./sky')(app, options)
	scenery.cityHorizon = require('./city-horizon')(app, options)

	app.scenery = scenery
}
