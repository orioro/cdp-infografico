
const SAD = [
  {
    happinessState: 'sad',
    src: 'resources/animacao/cidade-triste/montanhas.svg',
    styles: {
      width: '100%',
    }
  },
  {
    happinessState: 'sad',
    src: 'resources/animacao/cidade-triste/nuvem-1.svg',
    class: 'city-cloud-1 opacity-transition',
    styles: {
      width: '5%',
      left: '70%',
      bottom: '90%',
    },

    pins: [
      {
        set: 'risks-cities',
        contents: [
          {
            title: 'test title',
            body: 'test body'
          }
        ]
      }
    ],
  },
  {
    happinessState: 'sad',
    src: 'resources/animacao/cidade-triste/nuvem-2.svg',
    class: 'city-cloud-2 opacity-transition',
    styles: {
      width: '7%',
      left: '45%',
      bottom: '76%',

    },
  },
]

const MOUNTAIN_HEIGHT = 313
const MOUNTAIN_WIDTH = 1292

function toPercentage(measure, reference) {
  return ((measure / reference) * 100) + '%'
}

const HAPPY = [
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/montanhas.svg',
    class: 'opacity-transition delay-enter-1500',
    styles: {
      width: '100%',
    }
  },
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/nuvem-1.svg',
    class: 'city-cloud-2 opacity-transition delay-enter-1500',
    styles: {
      width: '5%',
      left: '70%',
      bottom: '110%',
    }
  },
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/nuvem-2.svg',
    class: 'city-cloud-1 opacity-transition delay-enter-1500',
    styles: {
      width: '7%',
      left: '45%',
      bottom: '76%',
    }
  },

  // plantacao
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/plantacao.svg',
    class: 'opacity-transition delay-enter-1750',
    styles: {
      left: '11%',
      width: '4.5%',

      bottom: '54%',
    },

    pins: [
      {
        set: 'risks-cities',
        contents: [
          {
            title: 'test title',
            body: 'test body'
          }
        ]
      }
    ],
  },
  // armazem
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/armazem.svg',
    class: 'opacity-transition delay-enter-1875',
    styles: {
      left: '16.5%',
      width: '3.5%',

      bottom: '40%',
    },
  },


  // eolica-1
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/energia-eolica-haste.svg',
    class: 'opacity-transition delay-enter-2000',
    styles: {
      left: '57.6625%',
      width: '0.4%',

      bottom: '52.6997%',
    },
  },
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/energia-eolica-helice.svg',
    class: 'opacity-transition delay-enter-2000 helix',
    styles: {
      width: '2.7%',
      left: '56.5%',
      bottom: '62.5%',
    },

    pins: [
      {
        set: 'risks-cities',
        contents: [
          {
            title: 'test title',
            body: 'test body'
          }
        ]
      }
    ],
  },

  // eolica-2
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/energia-eolica-haste.svg',
    class: 'opacity-transition delay-enter-2000',
    styles: {
      left: '60%',
      width: '0.5%',

      bottom: '57%',
    }
  },
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/energia-eolica-helice.svg',
    class: 'opacity-transition delay-enter-2000 helix',
    styles: {
      width: '3.5%',
      left: '58.52%',
      bottom: '68%',
    }
  },

  // eolica-3
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/energia-eolica-haste.svg',
    class: 'opacity-transition delay-enter-2000',
    styles: {
      left: '63%',
      width: '0.6%',

      bottom: '62.3%',
    }
  },
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/energia-eolica-helice.svg',
    class: 'opacity-transition delay-enter-2000 helix',
    styles: {
      width: '4.5%',
      left: '61%',
      bottom: '74%',
    }
  },

  // solar-1
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/energia-solar.svg',
    class: 'opacity-transition delay-enter-2125',
    styles: {
      width: '2.5%',
      left: '66%',
      bottom: '66%',
    }
  },
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/energia-solar.svg',
    class: 'opacity-transition delay-enter-2125',
    styles: {
      width: '2.5%',
      left: '68.5%',
      bottom: '69%',
    }
  },
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/energia-solar.svg',
    class: 'opacity-transition delay-enter-2125',
    styles: {
      width: '2.5%',
      left: '71%',
      bottom: '71%',
    }
  },
]

module.exports = {
  blocks: SAD.concat(HAPPY),
}
