function createElement(def) {
	if (!def.tagName) {
		throw new Error('tagName is required')
	}

	let element = document.createElement(def.tagName)

	if (def.attributes) {
		for (let attribute in def.attributes) {
			element.setAttribute(attribute, def.attributes[attribute])
		}
	}

	if (def.styles) {
		for (let styleProperty in def.styles) {
			element.style[styleProperty] = def.styles[styleProperty]
		}
	}

	if (def.children) {
		def.children.forEach(childDef => {
			let childElement = createElement(childDef)

			element.appendChild(childElement)
		})
	}

	return element
}

exports.createElement = createElement

const PX_RE = /px$/
exports.ensurePx = function (str) {
	str = typeof str === 'number' ? str + '' : str
	return PX_RE.test(str) ? str : str + 'px'
}


const BLOCK_SRC_TO_METADATA_RE = /-([0-9]+)-w([0-9]+)-z([0-9])\.svg$/
exports.parseImageMetadata = function (src) {

	let match = src.match(BLOCK_SRC_TO_METADATA_RE)

	if (!match) {
		console.warn(`no match for ${src}`)
		return
	}

	return {
		left: parseInt(match[1]),
		width: parseInt(match[2]),
		zIndex: parseInt(match[3]),
		src: src,
	}
}
