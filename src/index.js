const aux = require('./scripts/lib/auxiliary')
const components = require('./scripts/components')

let options = Object.assign({
	vh: window.innerHeight,
	vw: window.innerWidth,
}, require('./scripts/data'))

let app = {}

require('./scripts/scenery')(app, options)
require('./scripts/slides')(app, options)
require('./scripts/charts')(app, options)
require('./scripts/test-controls')(app, options)
