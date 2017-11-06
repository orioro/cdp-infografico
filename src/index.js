const aux = require('./lib/auxiliary')

const CIDADE_TRISTE = {
	blocks: [
		'resources/animacao/cidade-triste/blocos/triste-bloco-01-0-w115-z2.svg',
		'resources/animacao/cidade-triste/blocos/triste-bloco-02-114-w90-z2.svg',
		'resources/animacao/cidade-triste/blocos/triste-bloco-03-202-w179-z2.svg',
		'resources/animacao/cidade-triste/blocos/triste-bloco-04-377-w76-z2.svg',
		'resources/animacao/cidade-triste/blocos/triste-bloco-05-518-w230-z2.svg',
		'resources/animacao/cidade-triste/blocos/triste-bloco-06-746-w88-z2.svg',
		'resources/animacao/cidade-triste/blocos/triste-bloco-07-834-w192-z2.svg',
		'resources/animacao/cidade-triste/blocos/triste-bloco-08-1037-w140-z2.svg',
		'resources/animacao/cidade-triste/blocos/triste-bloco-09-859-w45-z2.svg',
		'resources/animacao/cidade-triste/blocos/triste-bloco-10-923-w52-z2.svg',
		'resources/animacao/cidade-triste/blocos/triste-bloco-11-1016-w25-z2.svg',
		'resources/animacao/cidade-triste/blocos/triste-bloco-12-1053-w36-z2.svg',
		'resources/animacao/cidade-triste/blocos/triste-bloco-13-377-w606-z1.svg',
		'resources/animacao/cidade-triste/blocos/triste-bloco-14-209-w48-z0.svg',
		'resources/animacao/cidade-triste/blocos/triste-bloco-15-338-w113-z0.svg',
	],
}

const BLOCK_SRC_TO_METADATA_RE = /-([0-9]+)-w([0-9]+)\.svg$/

CIDADE_TRISTE.blocks = CIDADE_TRISTE.blocks.map(block => {
	return aux.parseImageMetadata(block)
})

console.log(CIDADE_TRISTE.blocks)

/**
 * Guess
 * @type {Number}
 */
CIDADE_TRISTE.blocksTotalWidth = 1180

let citiBuildingsElement = document.querySelector('#city-buildings')

CIDADE_TRISTE.blocks.forEach(block => {

	let blockElement = aux.createElement({
		tagName: 'div',
		attributes: {
			class: 'building',
			style: `left: ${block.left * 100 / CIDADE_TRISTE.blocksTotalWidth}%; width: ${block.width * 100 / CIDADE_TRISTE.blocksTotalWidth}%; z-index: ${block.zIndex};`,
		},
		children: [
			{
				tagName: 'img',
				attributes: {
					src: block.src,
					class: 'block-img',
				}
			}
		],
	})

	citiBuildingsElement.appendChild(blockElement)
})
