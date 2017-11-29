module.exports = {
	set: 'risks-cities',
	pins: [
	  {
	  	blockName: 'cidade-triste/bloco-09',
	  	src: 'resources/animacao/pins/pin-cidades.svg',
	  	contentClass: 'cidades',
	  	styles: {
	  		left: '28%',
	  		bottom: '96%',
	  	},
	    contents: [
	    	{
	    		body: 'Cidades que responderam nosso questionário reportaram:',
	    	},
	      {
	        title: 'Aumento da temperatura / Ondas de calor',
	        body: '<img src="resources/graficos-pq/cidades-riscos-aumento-da-temperatura.png">',
	      },
	      {
	      	title: 'Exemplo:',
	      	body: 'Aumento da incidência de dengue foi mencionada por várias cidades como Medellín, Caracas, Recife.'
	      }
	    ]
	  },
	  {
	  	blockName: 'cidade-triste/nuvem-2',
	  	src: 'resources/animacao/pins/pin-cidades.svg',
	  	contentClass: 'cidades',
	    contents: [
	    	{
	    		body: 'Cidades que responderam nosso questionário reportaram:',
	    	},
	      {
	        title: 'Chuvas / Tempestades intensas',
	        body: '<img src="resources/graficos-pq/cidades-riscos-tempestades-intensas.png">',
	      },
	      {
	      	title: 'Exemplo:',
	      	body: 'Tempestades, ligadas à topografia local e à ocupação, representam o fator de risco mais grave para a população, devido a deslizamentos de terra e inundações. A trágica história das perdas de vidas e de propriedades e as graves consequências sociais e de saúde pública contribuíram para a criação do Centro de Operações (COR) no Rio de Janeiro.'
	      }
	    ]
	  },
	  {
	  	blockName: 'cidade-triste/bloco-10-praca',
	  	isExample: true,
	  	src: 'resources/animacao/pins/pin-cidades.svg',
	  	contentClass: 'cidades',
	  	styles: {
	  		left: '25%',
	  		bottom: '96%',
	  	},
	    contents: [
	    	{
	    		body: 'Cidades que responderam nosso questionário reportaram:',
	    	},
	      {
	        title: 'Secas',
	        body: '<img src="resources/graficos-pq/cidades-riscos-secas.png">',
	      },
	      {
	      	title: 'Exemplo:',
	      	body: 'O Arquipélago de San Andrés na colômbia menciona que a seca traz como consequência a alta probabilidade de ocorrência de incêndios florestais, conflitos sociais por recursos hídricos e danos à saúde humana'
	      }
	    ]
	  },
	  {
	  	blockName: 'cidade-triste/bloco-13-residencial',
	  	src: 'resources/animacao/pins/pin-cidades.svg',
	  	contentClass: 'cidades',
	    contents: [
	    	{
	    		body: 'Cidades que responderam nosso questionário reportaram:',
	    	},
	      {
	        title: 'Doenças (insetos, vetores, vírus, água e ar)',
	        body: '<img src="resources/graficos-pq/cidades-riscos-doencas.png">'
	      },
	      {
	      	title: 'Exemplo:',
	      	body: 'Aumento da incidência de dengue foi mencionada por várias cidades como Medellín, Caracas, Recife etc'
	      }
	    ]
	  },
	  {
	  	blockName: 'cidade-triste/rio',
	  	src: 'resources/animacao/pins/pin-cidades.svg',
	  	contentClass: 'cidades',
	  	styles: {
	  		left: '20%',
	  		bottom: '50%',
	  	},
	    contents: [
	    	{
	    		body: 'Cidades que responderam nosso questionário reportaram:',
	    	},
	      {
	        title: 'Enchentes',
	        body: '<img src="resources/graficos-pq/cidades-riscos-enchentes.png">'
	      },
	      {
	      	title: 'Exemplo:',
	      	body: 'As Inundações costeiras já apresentam problemas para o <strong>município de Natal</strong> no Brasil como, por exemplo, perda da faixa de areia e danos à infraestrutura (calçadão)'
	      }
	    ]
	  },
	]
}