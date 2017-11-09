const aux = require('../lib/auxiliary')

  // happyBlocks: [
  //   'resources/animacao/cidade-alegre/bloco-1.svg',
  //   'resources/animacao/cidade-alegre/bloco-1.svg',
  //   'resources/animacao/cidade-alegre/bloco-1.svg',
  //   'resources/animacao/cidade-alegre/bloco-1.svg',
  //   'resources/animacao/cidade-alegre/bloco-1.svg',
  //   'resources/animacao/cidade-alegre/bloco-1.svg',
  //   'resources/animacao/cidade-alegre/bloco-1.svg',
  //   'resources/animacao/cidade-alegre/bloco-1.svg',
  //   'resources/animacao/cidade-alegre/bloco-1.svg',
  //   'resources/animacao/cidade-alegre/bloco-1.svg',
  //   'resources/animacao/cidade-alegre/bloco-1.svg',
  //   'resources/animacao/cidade-alegre/bloco-1.svg',
  //   'resources/animacao/cidade-alegre/bloco-1.svg',
  //   'resources/animacao/cidade-alegre/bloco-1.svg',
  //   'resources/animacao/cidade-alegre/bloco-1.svg',
  //   'resources/animacao/cidade-alegre/bloco-1.svg',
  // ].map(src => {
  //   return aux.parseImageMetadata(src)
  // }),

const LEFT_ORIGIN = 22

module.exports = [
  {
    left: 22 - LEFT_ORIGIN,
    width: 42,
    zIndex: 3,
    src: 'resources/animacao/cidade-alegre/bloco-01.svg',
    class: 'bounce-transition delay-enter-250',
  },
  {
    left: 66 - LEFT_ORIGIN,
    width: 63,
    zIndex: 3,
    src: 'resources/animacao/cidade-alegre/bloco-02.svg',
    class: 'bounce-transition delay-enter-300',
  },
  {
    left: 130 - LEFT_ORIGIN,
    width: 78,
    zIndex: 3,
    src: 'resources/animacao/cidade-alegre/bloco-03.svg',
    class: 'bounce-transition delay-enter-350',
  },
  {
    left: 211 - LEFT_ORIGIN,
    width: 194,
    zIndex: 3,
    src: 'resources/animacao/cidade-alegre/bloco-04-estatal.svg',
    class: 'opacity-transition delay-enter-2000',
  },
  {
    left: 347 - LEFT_ORIGIN,
    width: 31,
    zIndex: 2,
    src: 'resources/animacao/cidade-alegre/bloco-05-comercial.svg',
    class: 'opacity-transition delay-enter-2000',
  },
  {
    left: 405 - LEFT_ORIGIN,
    width: 40,
    zIndex: 2,
    src: 'resources/animacao/cidade-alegre/bloco-06.svg',
    class: 'opacity-transition delay-enter-2000'
  },
  {
    left: 419 - LEFT_ORIGIN,
    width: 88,
    zIndex: 3,
    src: 'resources/animacao/cidade-alegre/bloco-07.svg',
    class: 'immediate-transition delay-enter-300'
  },
  {
    left: 512 - LEFT_ORIGIN,
    width: 80,
    zIndex: 3,
    src: 'resources/animacao/cidade-alegre/bloco-08.svg',
    class: 'slide-up-transition'
  },
  {
    left: 600 - LEFT_ORIGIN,
    width: 167,
    zIndex: 3,
    src: 'resources/animacao/cidade-alegre/bloco-10-mato.svg',
    class: 'slide-up-transition'
  },
  {
    left: 595 - LEFT_ORIGIN,
    width: 39,
    zIndex: 2,
    src: 'resources/animacao/cidade-alegre/bloco-09-arvore.svg',
    class: 'bounce-transition delay-enter-250'
  },
  {
    left: 643 - LEFT_ORIGIN,
    width: 33,
    zIndex: 2,
    src: 'resources/animacao/cidade-alegre/bloco-11-arvore.svg',
    class: 'bounce-transition delay-enter-300'
  },
  {
    left: 686 - LEFT_ORIGIN,
    width: 28,
    zIndex: 2,
    src: 'resources/animacao/cidade-alegre/bloco-12-arvore.svg',
    class: 'bounce-transition delay-enter-350'
  },
  {
    left: 718 - LEFT_ORIGIN,
    width: 39,
    zIndex: 2,
    src: 'resources/animacao/cidade-alegre/bloco-09-arvore.svg',
    class: 'bounce-transition delay-enter-400'
  },
  {
    left: 767 - LEFT_ORIGIN,
    width: 99,
    zIndex: 2,
    src: 'resources/animacao/cidade-alegre/bloco-13-praca.svg',
    class: 'opacity-transition delay-enter-2000'
  },
  {
    left: 871 - LEFT_ORIGIN,
    width: 52,
    zIndex: 2,
    src: 'resources/animacao/cidade-alegre/bloco-14-banco.svg',
    class: 'opacity-transition delay-enter-2000'
  },
  {
    left: 302 - LEFT_ORIGIN,
    width: 644,
    zIndex: 1,
    src: 'resources/animacao/cidade-alegre/bloco-15-vlt-trilho.svg',
    class: 'opacity-transition delay-enter-2000'
  },
  // {
  //   left: 302 - LEFT_ORIGIN,
  //   width: 644,
  //   zIndex: 1,
  //   src: 'resources/animacao/cidade-alegre/bloco-15-vlt-carro.svg',
  //   class: 'opacity-transition delay-enter-2000'
  // },
  {
    left: 931 - LEFT_ORIGIN,
    width: 263,
    zIndex: 2,
    src: 'resources/animacao/cidade-alegre/bloco-16.svg',
    class: 'slide-up-transition delay-enter-300'
  },
  {
    left: 930 - LEFT_ORIGIN,
    width: 264,
    zIndex: 3,
    src: 'resources/animacao/cidade-alegre/bloco-17-residencial.svg',
    class: 'opacity-transition delay-enter-2000'
  },
]
