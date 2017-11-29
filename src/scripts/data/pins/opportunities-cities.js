module.exports = {
	set: 'opportunities-cities',
	pins: [
	  {
	  	blockName: 'cidade-alegre/rio',
	  	src: 'resources/animacao/pins/pin-cidades.svg',
	  	contentClass: 'cidades',
	  	styles: {
	  		left: '60%',
	  		bottom: '50%',
	  	},
	    contents: [
	    	{
	    		body: 'Cidades que responderam nosso questionário reportaram:',
	    	},
	      {
	        title: 'Atenção crescente a outras preocupações ambientais',
	        body: '<img src="resources/graficos-pq/cidades-oportunidades-atencao-a-questoes-ambientais.png">'
	      },
	      {
	      	title: 'Exemplo:',
	      	body: 'A mudança climática traz oportunidades e relevância para questões ambientais, no caso de Cuenca no Equador deu um ímpeto à questão da conservação da biodiversidade urbana que se desenvolve em torno dos corredores biológicos de rios e córregos, e ao aumento de áreas protegidas.'
	      }
	    ]
	  },

	  {
	  	blockName: 'cidade-alegre/energia-solar',
	  	src: 'resources/animacao/pins/pin-cidades.svg',
	  	contentClass: 'cidades',
	    contents: [
	    	{
	    		body: 'Cidades que responderam nosso questionário reportaram:',
	    	},
	      {
	        title: 'Desenvolvimento de novos negócios (ex: tecnologia limpa)',
	        body: '<img src="resources/graficos-pq/cidades-oportunidades-novos-negocios.png">'
	      },
	      {
	      	title: 'Exemplo:',
	      	body: 'A comuna de Colina no Chile, instalou a primeira planta solar fotovoltaica devido a seu excelente nível de radiação e topografia plana.'
	      }
	    ]
	  },

	  {
	  	// blockName: 'cidade-alegre/bloco-15-vlt-trilho', // reposition due to z-index issues
	  	blockName: 'cidade-alegre/bloco-08',
	  	isExample: true,
	  	src: 'resources/animacao/pins/pin-cidades.svg',
	  	contentClass: 'cidades',
	  	styles: {
	  		bottom: '130%',
	  	},
	    contents: [
	    	{
	    		body: 'Cidades que responderam nosso questionário reportaram:',
	    	},
	      {
	        title: 'Aumento do investimento em infraestrutura',
	        body: '<img src="resources/graficos-pq/cidades-oportunidades-investimento-em-infraestrutura.png">'
	      },
	      {
	      	title: 'Exemplo:',
	      	body: 'Santos reporta o início da obra primeiro trecho do Veículo Leve Sobre Trilhos (VLT), que tem emissão zero de poluentes e atenderá diretamente 70 mil usuários/dia.'
	      }
	    ]
	  },

	  {
	  	blockName: 'cidade-alegre/bloco-05-comercial',
	  	src: 'resources/animacao/pins/pin-cidades.svg',
	  	contentClass: 'cidades',
	    contents: [
	    	{
	    		body: 'Cidades que responderam nosso questionário reportaram:',
	    	},
	      {
	        title: 'Opções adicionais de financiamento',
	        body: '<img src="resources/graficos-pq/cidades-oportunidades-opcoes-adicionais-de-financiamento.png">'
	      },
	      {
	      	title: 'Exemplo:',
	      	body: 'Rio de Janeiro recebeu, da Fundação Clinton, um financiamento para substituir 4.000 semáforos com a nova tecnologia LED.'
	      }
	    ]
	  },
	]
}
