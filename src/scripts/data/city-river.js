const RIVER_BLOCKS = [
  {
    happinessState: 'sad',
    src: 'resources/animacao/cidade-triste/rio.svg',
    styles: {
      width: '100%',
    }
  },
  {
    happinessState: 'sad',
    src: 'resources/animacao/cidade-triste/carro-1.svg',
    class: 'city-car delay-enter-0 opacity-transition',
    styles: {
      left: '0',
      width: '6%',
      bottom: '100%',
    }
  },
  {
    happinessState: 'sad',
    src: 'resources/animacao/cidade-triste/carro-1.svg',
    class: 'city-car delay-enter-3000 opacity-transition',
    styles: {
      left: '0',
      width: '6%',
      bottom: '100%',
    }
  },
  {
    happinessState: 'sad',
    src: 'resources/animacao/cidade-triste/carro-1.svg',
    class: 'city-car delay-enter-7000 opacity-transition',
    styles: {
      left: '0',
      width: '6%',
      bottom: '100%',
    }
  },
  {
    happinessState: 'sad',
    src: 'resources/animacao/cidade-triste/carro-1.svg',
    class: 'city-car delay-enter-1000 opacity-transition',
    styles: {
      left: '0',
      width: '6%',
      bottom: '100%',
    }
  },
  {
    happinessState: 'sad',
    src: 'resources/animacao/cidade-triste/carro-1.svg',
    class: 'city-car delay-enter-1400 opacity-transition',
    styles: {
      left: '0',
      width: '6%',
      bottom: '100%',
    }
  },

  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/rio.svg',
    class: 'opacity-transition',
    styles: {
      width: '100%',
    }
  },
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/barco-1.svg',
    class: 'city-boat opacity-transition',
    styles: {
      width: '8%',
      bottom: '30%',
    }
  },
]

module.exports = {
  blocks: RIVER_BLOCKS,
  blocksTotalWidth: 1100,
  blocksTotalHeight: 0,
}
