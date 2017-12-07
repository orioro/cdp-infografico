// load polyfills
require('es5-shim')
require('classlist.js')

const aux = require('./scripts/lib/auxiliary')
const components = require('./scripts/components')

let options = Object.assign({
	vh: window.innerHeight,
	vw: window.innerWidth,
}, require('./scripts/data'))

let app = {}

require('./scripts/scenery')(app, options)
require('./scripts/slides')(app, options)
require('./scripts/dialogs')(app, options)
require('./scripts/test-controls')(app, options)

setTimeout(function () {
	document.querySelector('body').classList.add('active')
	document.querySelector('body').style.opacity = '1'
}, 400)
