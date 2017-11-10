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
    }
  },
  {
    happinessState: 'sad',
    src: 'resources/animacao/cidade-triste/nuvem-2.svg',
    class: 'city-cloud-2 opacity-transition',
    styles: {
      width: '5%',
      left: '30%',
      bottom: '100%',

    }
  },
]

const HAPPY = [
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/montanhas.svg',
    class: 'opacity-transition',
    styles: {
      width: '100%',
    }
  },
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/nuvem-1.svg',
    class: 'city-cloud-2 opacity-transition',
    styles: {
      width: '5%',
      left: '20%',
      bottom: '100%',
    }
  },
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/nuvem-2.svg',
    class: 'city-cloud-1 opacity-transition',
    styles: {
      width: '5%',
      left: '50%',
      bottom: '100%',
    }
  },
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/energia-eolica-1.svg',
    class: 'bounce-transition',
    styles: {
      width: '2%',
      left: '70%',
      bottom: '60%',
    }
  },
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/energia-eolica-2.svg',
    class: 'bounce-transition',
    styles: {
      width: '2%',
      left: '71%',
      bottom: '61%',
    }
  },
  {
    happinessState: 'happy',
    src: 'resources/animacao/cidade-alegre/energia-eolica-3.svg',
    class: 'bounce-transition',
    styles: {
      width: '2%',
      left: '72%',
      bottom: '62%',
    }
  },
]

module.exports = {
  blocks: SAD.concat(HAPPY),
}
