const aux = require('./scripts/lib/auxiliary')
const components = require('./scripts/components')

let options = Object.assign({
	
}, require('./scripts/data'))

let app = {}

require('./scripts/test-controls')(app, options)
require('./scripts/scenery')(app, options)