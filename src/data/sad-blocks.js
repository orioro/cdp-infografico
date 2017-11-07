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
module.exports = [
  {
    left: 0,
    width: 115,
    zIndex: 2,
    src: 'resources/animacao/cidade-triste/blocos/triste-bloco-01-0-w115-z2.svg',
    class: 'opacity-transition',
  },
  {
    left: 114,
    width: 90,
    zIndex: 3,
    src: 'resources/animacao/cidade-triste/blocos/triste-bloco-02-body-114-w90-z3.svg',
    class: 'opacity-transition',
  },
  {
    left: 114,
    width: 90,
    zIndex: 2,
    src: 'resources/animacao/cidade-triste/blocos/triste-bloco-02-chimney-114-w90-z2.svg',
    class: 'bounce-transition'
  },
  {
    left: 202,
    width: 179,
    zIndex: 2,
    src: 'resources/animacao/cidade-triste/blocos/triste-bloco-03-202-w179-z2.svg',
    class: 'bounce-transition delay-enter-300'
  },
  {
    left: 377,
    width: 76,
    zIndex: 2,
    src: 'resources/animacao/cidade-triste/blocos/triste-bloco-04-377-w76-z2.svg',
    class: 'opacity-transition'
  },
  {
    left: 518,
    width: 230,
    zIndex: 2,
    src: 'resources/animacao/cidade-triste/blocos/triste-bloco-05-518-w230-z2.svg',
    class: 'slide-up-transition'
  },
  {
    left: 746,
    width: 88,
    zIndex: 2,
    src: 'resources/animacao/cidade-triste/blocos/triste-bloco-06-746-w88-z2.svg'
  },
  {
    left: 834,
    width: 192,
    zIndex: 2,
    src: 'resources/animacao/cidade-triste/blocos/triste-bloco-07-834-w192-z2.svg',
    class: 'opacity-transition',
  },
  {
    left: 1037,
    width: 140,
    zIndex: 2,
    src: 'resources/animacao/cidade-triste/blocos/triste-bloco-08-1037-w140-z2.svg',
    class: 'opacity-transition',
  },
  {
    left: 859,
    width: 45,
    zIndex: 2,
    src: 'resources/animacao/cidade-triste/blocos/triste-bloco-09-859-w45-z2.svg',
  },
  {
    left: 923,
    width: 52,
    zIndex: 2,
    src: 'resources/animacao/cidade-triste/blocos/triste-bloco-10-923-w52-z2.svg',
  },
  {
    left: 1016,
    width: 25,
    zIndex: 2,
    src: 'resources/animacao/cidade-triste/blocos/triste-bloco-11-1016-w25-z2.svg',
  },
  {
    left: 1053,
    width: 36,
    zIndex: 2,
    src: 'resources/animacao/cidade-triste/blocos/triste-bloco-12-1053-w36-z2.svg',
  },
  {
    left: 377,
    width: 606,
    zIndex: 1,
    src: 'resources/animacao/cidade-triste/blocos/triste-bloco-13-377-w606-z1.svg',
  },
  {
    left: 209,
    width: 48,
    zIndex: 0,
    src: 'resources/animacao/cidade-triste/blocos/triste-bloco-14-209-w48-z0.svg',
  },
  {
    left: 338,
    width: 113,
    zIndex: 0,
    src: 'resources/animacao/cidade-triste/blocos/triste-bloco-15-338-w113-z0.svg',
  }
]
