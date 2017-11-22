const aux = require('../../lib/auxiliary')

const LEFT_ORIGIN = 22


const PIN_POSITION_RE = /^resources\/animacao\/(.+)\.svg/

const HAPPY_BUILDING_BLOCKS = [
  {
    src: 'resources/animacao/cidade-alegre/bloco-01.svg',
    class: 'bounce-transition delay-enter-250',
    styles: {
      left: 22,
      width: 42,
      zIndex: 3,
    },
  },
  {
    src: 'resources/animacao/cidade-alegre/bloco-02.svg',
    class: 'bounce-transition delay-enter-300',
    styles: {
      left: 66,
      width: 63,
      zIndex: 3,
    }
  },
  {
    src: 'resources/animacao/cidade-alegre/bloco-03.svg',
    class: 'bounce-transition delay-enter-350',
    styles: {
      left: 130,
      width: 78,
      zIndex: 3,
    }
  },
  {
    src: 'resources/animacao/cidade-alegre/bloco-04-estatal.svg',
    class: 'opacity-transition delay-enter-1500',
    styles: {
      left: 211,
      width: 194,
      zIndex: 3,
    }
  },
  {
    src: 'resources/animacao/cidade-alegre/bloco-05-comercial.svg',
    class: 'opacity-transition delay-enter-1500',
    styles: {
      left: 347,
      width: 31,
      zIndex: 2,
    }
  },
  {
    src: 'resources/animacao/cidade-alegre/bloco-06.svg',
    class: 'bounce-transition delay-enter-250',
    styles: {
      left: 405,
      width: 40,
      zIndex: 2,
    }
  },
  {
    src: 'resources/animacao/cidade-alegre/bloco-07.svg',
    class: 'bounce-transition delay-enter-300',
    styles: {
      left: 419,
      width: 88,
      zIndex: 3,
    }
  },
  {
    src: 'resources/animacao/cidade-alegre/bloco-08.svg',
    class: 'bounce-transition delay-enter-250',
    styles: {
      left: 512,
      width: 80,
      zIndex: 3,
    }
  },
  {
    src: 'resources/animacao/cidade-alegre/bloco-10-mato.svg',
    class: 'bounce-transition delay-enter-250',
    styles: {
      left: 600,
      width: 167,
      zIndex: 3,
    }
  },
  {
    src: 'resources/animacao/cidade-alegre/bloco-09-arvore.svg',
    class: 'bounce-transition delay-enter-300',
    styles: {
      left: 595,
      width: 39,
      zIndex: 2,
    }
  },
  {
    src: 'resources/animacao/cidade-alegre/bloco-11-arvore.svg',
    class: 'bounce-transition delay-enter-350',
    styles: {
      left: 643,
      width: 33,
      zIndex: 2,
    }
  },
  {
    src: 'resources/animacao/cidade-alegre/bloco-12-arvore.svg',
    class: 'bounce-transition delay-enter-400',
    styles: {
      left: 686,
      width: 28,
      zIndex: 2,
    }
  },
  {
    src: 'resources/animacao/cidade-alegre/bloco-09-arvore.svg',
    class: 'bounce-transition delay-enter-450',
    styles: {
      left: 718,
      width: 39,
      zIndex: 2,
    }
  },
  {
    src: 'resources/animacao/cidade-alegre/bloco-13-praca.svg',
    class: 'opacity-transition delay-enter-1500',
    styles: {
      left: 767,
      width: 99,
      zIndex: 2,
    }
  },
  {
    src: 'resources/animacao/cidade-alegre/bloco-14-banco.svg',
    class: 'opacity-transition delay-enter-1500',
    styles: {
      left: 871,
      width: 52,
      zIndex: 2,
    }
  },
  {
    src: 'resources/animacao/cidade-alegre/bloco-15-vlt-trilho.svg',
    class: 'bounce-transition delay-enter-250',
    styles: {
      left: 302,
      width: 644,
      zIndex: 1,
    }
  },
  {
    src: 'resources/animacao/cidade-alegre/bloco-15-vlt-carro.svg',
    class: 'bounce-transition delay-enter-450 vlt',
    styles: {
      left: 285,
      width: 236,
      zIndex: 1,
    }
  },
  {
    src: 'resources/animacao/cidade-alegre/bloco-16.svg',
    class: 'bounce-transition delay-enter-250',
    styles: {
      left: 931,
      width: 263,
      zIndex: 2,
    }
  },
  {
    src: 'resources/animacao/cidade-alegre/bloco-17-residencial.svg',
    class: 'opacity-transition delay-enter-1500',
    styles: {
      left: 930,
      width: 264,
      zIndex: 3,
    }
  },
]

const SAD_BUILDING_BLOCKS = [
  {
    src: 'resources/animacao/cidade-triste/bloco-01.svg',
    class: 'bounce-transition',
    styles: {
      left: 22,
      width: 177,
      zIndex: 3,
    }
  },
  {
    src: 'resources/animacao/cidade-triste/bloco-02.svg',
    class: 'bounce-transition delay-exit-100',
    styles: {
      left: 162,
      width: 46,
      zIndex: 2,
    }
  },
  {
    src: 'resources/animacao/cidade-triste/bloco-03-estatal.svg',
    styles: {
      left: 211,
      width: 194,
      zIndex: 3,
    }
  },
  {
    src: 'resources/animacao/cidade-triste/bloco-04-comercial.svg',
    styles: {
      left: 347,
      width: 31,
      zIndex: 2,
    }
  },
  {
    src: 'resources/animacao/cidade-triste/bloco-05-viaduto.svg',
    class: 'bounce-transition',
    styles: {
      left: 302,
      width: 677,
      zIndex: 1,
    }
  },
  {
    src: 'resources/animacao/cidade-triste/bloco-06.svg',
    class: 'bounce-transition',
    styles: {
      left: 419,
      width: 88,
      zIndex: 3,
    }
  },
  {
    src: 'resources/animacao/cidade-triste/bloco-07.svg',
    class: 'bounce-transition delay-exit-150',
    styles: {
      left: 494,
      width: 38,
      zIndex: 0,
    }
  },
  {
    src: 'resources/animacao/cidade-triste/bloco-08.svg',
    class: 'bounce-transition',
    styles: {
      left: 510,
      width: 87,
      zIndex: 3,
    }
  },
  {
    src: 'resources/animacao/cidade-triste/bloco-09.svg',
    class: 'bounce-transition',
    styles: {
      left: 572,
      width: 195,
      zIndex: 3,
    }
  },
  {
    src: 'resources/animacao/cidade-triste/bloco-10-praca.svg',
    // class: 'opacity-transition'
    styles: {
      left: 767,
      width: 99,
      zIndex: 2,
    }
  },
  {
    src: 'resources/animacao/cidade-triste/bloco-11.svg',
    class: 'bounce-transition delay-exit-200',
    styles: {
      left: 870,
      width: 77,
      zIndex: 0,
    }
  },
  {
    src: 'resources/animacao/cidade-triste/bloco-12-banco.svg',
    // class: 'opacity-transition',
    styles: {
      left: 871,
      width: 52,
      zIndex: 2,
    }
  },
  {
    src: 'resources/animacao/cidade-triste/bloco-13-residencial.svg',
    // class: 'opacity-transition',
    styles: {
      left: 930,
      width: 264,
      zIndex: 3,
    }
  },
  {
    src: 'resources/animacao/cidade-triste/bloco-14.svg',
    class: 'bounce-transition',
    styles: {
      left: 974,
      width: 100,
      zIndex: 1,
    }
  },
  {
    src: 'resources/animacao/cidade-triste/bloco-14-luminoso.svg',
    class: 'bounce-transition outdoor-blink',
    styles: {
      left: 984,
      width: 66,
      zIndex: 1,
    }
  },
  {
    src: 'resources/animacao/cidade-triste/bloco-15.svg',
    class: 'bounce-transition',
    styles: {
      left: 1124,
      width: 40,
      zIndex: 1,
    }
  }
]

module.exports = SAD_BUILDING_BLOCKS.map(b => {
  b.happinessState = 'sad'
  return b
})
.concat(HAPPY_BUILDING_BLOCKS.map(b => {
  b.happinessState = 'happy'
  return b
}))
.map(b => {

  b.left = b.left - LEFT_ORIGIN

  b.styles = aux.calcPercentageStyles(b.styles, {
    totalWidth: 1180,
  })

  if (!b.pinPositionName) {
    PIN_POSITION_RE
  }

  return b
})
