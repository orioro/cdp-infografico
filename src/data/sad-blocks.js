const aux = require('../lib/auxiliary')

// sadBlocks: [
// 	'resources/animacao/cidade-triste/blocos/triste-bloco-01-0-w115-z2.svg',
// 	'resources/animacao/cidade-triste/blocos/triste-bloco-02-114-w90-z2.svg',
// 	'resources/animacao/cidade-triste/blocos/triste-bloco-03-202-w179-z2.svg',
// 	'resources/animacao/cidade-triste/blocos/triste-bloco-04-377-w76-z2.svg',
// 	'resources/animacao/cidade-triste/blocos/triste-bloco-05-518-w230-z2.svg',
// 	'resources/animacao/cidade-triste/blocos/triste-bloco-06-746-w88-z2.svg',
// 	'resources/animacao/cidade-triste/blocos/triste-bloco-07-834-w192-z2.svg',
// 	'resources/animacao/cidade-triste/blocos/triste-bloco-08-1037-w140-z2.svg',
// 	'resources/animacao/cidade-triste/blocos/triste-bloco-09-859-w45-z2.svg',
// 	'resources/animacao/cidade-triste/blocos/triste-bloco-10-923-w52-z2.svg',
// 	'resources/animacao/cidade-triste/blocos/triste-bloco-11-1016-w25-z2.svg',
// 	'resources/animacao/cidade-triste/blocos/triste-bloco-12-1053-w36-z2.svg',
// 	'resources/animacao/cidade-triste/blocos/triste-bloco-13-377-w606-z1.svg',
// 	'resources/animacao/cidade-triste/blocos/triste-bloco-14-209-w48-z0.svg',
// 	'resources/animacao/cidade-triste/blocos/triste-bloco-15-338-w113-z0.svg',
// ].map(src => {
// 	return aux.parseImageMetadata(src)
// }),
// 

const LEFT_ORIGIN = 22

// origem: 22px
// piso: 20px
module.exports = [
  {
    left: 22 - LEFT_ORIGIN,
    width: 177,
    zIndex: 3,
    src: 'resources/animacao/cidade-triste/bloco-01.svg',
    class: 'bounce-transition',
  },
  {
    left: 162 - LEFT_ORIGIN,
    width: 46,
    zIndex: 2,
    src: 'resources/animacao/cidade-triste/bloco-02.svg',
    class: 'opacity-transition delay-exit-2000',
  },
  {
    left: 211 - LEFT_ORIGIN,
    width: 194,
    zIndex: 3,
    src: 'resources/animacao/cidade-triste/bloco-03-estatal.svg',
    // class: 'opacity-transition'
  },
  {
    left: 347 - LEFT_ORIGIN,
    width: 31,
    zIndex: 2,
    src: 'resources/animacao/cidade-triste/bloco-04-comercial.svg',
    // class: 'opacity-transition'
  },
  {
    left: 302 - LEFT_ORIGIN,
    width: 677,
    zIndex: 1,
    src: 'resources/animacao/cidade-triste/bloco-05-viaduto.svg',
    // class: 'opacity-transition'
  },
  {
    left: 419 - LEFT_ORIGIN,
    width: 88,
    zIndex: 3,
    src: 'resources/animacao/cidade-triste/bloco-06-fabrica-corpo.svg',
    // class: 'immediate-transition'
  },
  {
    left: 444 - LEFT_ORIGIN,
    width: 38,
    zIndex: 2,
    src: 'resources/animacao/cidade-triste/bloco-06-fabrica-chamine.svg',
    class: 'bounce-transition'
  },
  {
    left: 494 - LEFT_ORIGIN,
    width: 38,
    zIndex: 0,
    src: 'resources/animacao/cidade-triste/bloco-07.svg',
    class: 'opacity-transition delay-exit-2000',
  },
  {
    left: 510 - LEFT_ORIGIN,
    width: 87,
    zIndex: 3,
    src: 'resources/animacao/cidade-triste/bloco-08.svg',
    class: 'slide-up-transition',
  },
  {
    left: 572 - LEFT_ORIGIN,
    width: 195,
    zIndex: 3,
    src: 'resources/animacao/cidade-triste/bloco-09.svg',
    class: 'bounce-transition'
  },
  {
    left: 767 - LEFT_ORIGIN,
    width: 99,
    zIndex: 2,
    src: 'resources/animacao/cidade-triste/bloco-10-praca.svg',
    // class: 'opacity-transition'
  },
  {
    left: 870 - LEFT_ORIGIN,
    width: 77,
    zIndex: 0,
    src: 'resources/animacao/cidade-triste/bloco-11.svg',
    class: 'opacity-transition delay-exit-2000'
  },
  {
    left: 871 - LEFT_ORIGIN,
    width: 52,
    zIndex: 2,
    src: 'resources/animacao/cidade-triste/bloco-12-banco.svg',
    // class: 'opacity-transition'
  },
  {
    left: 930 - LEFT_ORIGIN,
    width: 264,
    zIndex: 3,
    src: 'resources/animacao/cidade-triste/bloco-13-residencial.svg',
    // class: 'opacity-transition'
  },
  {
    left: 974 - LEFT_ORIGIN,
    width: 100,
    zIndex: 1,
    src: 'resources/animacao/cidade-triste/bloco-14.svg',
    class: 'bounce-transition'
  },
  {
    left: 1124 - LEFT_ORIGIN,
    width: 40,
    zIndex: 1,
    src: 'resources/animacao/cidade-triste/bloco-15.svg',
    class: 'bounce-transition'
  }
]
