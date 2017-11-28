module.exports = {
	set: 'actions',
	pins: [
	  /**
	   * Empresas - Mudanças climáticas
	   */
	  {
	  	blockName: 'cidade-alegre/energia-eolica-helice',
	  	isExample: true,
	  	src: 'resources/animacao/pins/pin-vinho.svg',
	  	contentClass: 'mudancas-climaticas',
	    contents: [
	      {
	        title: 'Tipos de ações:',
	      	body: [
	      		'24.20% Eficiência energética: Processos',
	      		'13.50% Eficiência energética: Prédios',
	      		'9.30% Transportes: Frota',
	      		'10.50% Outros',
	      	].join('<br>')
	      },
	      {
	      	title: 'Reduções de GEE - 2016:',
	      	body: '9.786.268 TCo2e'
	      },
	      {
	      	title: 'Metas de redução de GEE reportadas até 2025:',
	      	body: '39.402.753 TCo2e'
	      },
	      {
	      	title: 'Investimentos em 2016:',
	        body: 'R$ 896,926,256.37',
	      },
	      {
	      	title: 'Case:',
	      	body: [
	      		'<a href="#case">',
	      			'MRV: Intalação de painéis solares nos empreendimentos',
	      			'<div class="dialog-contents">',
	      				'<iframe src="resources/cases/2017_CDPLA_Case_Study_MRV.pdf"></iframe>',
	      			'</div>',
	      		'</a>',
	      	].join(' ')
	      }
	    ]
	  },
	  /**
	   * Empresas - Água
	   */
	  {
	  	blockName: 'cidade-alegre/rio',
	  	src: 'resources/animacao/pins/pin-azul.svg',
	  	contentClass: 'aguas',
	  	styles: {
	  		left: '50%',
	  		bottom: '50%',
	  	},
	    contents: [
	      {
	        title: 'Tipos de ações:',
	      	body: [
	      		'15.04% Estabelecimento de metas de sustentabilidade',
	      		'10.62% Compromisso com a água demonstrado publicamente',
	      		'10.62% Introdução de indicadores de desempenho (KPIs) para a gestão hídrica',
	      		'10.62% Recursos hídricos são levados em consideração na tomada de decisão no planejamento de novas operações',
	      		'8.85% Recursos hídricos são levados em consideração na tomada de decisão sobre expansões',
	      	].join('<br>')
	      },
	    ]
	  },
	  /**
	   * Empresas - Floresta
	   */
	  {
	  	blockName: 'cidade-alegre/plantacao',
	  	src: 'resources/animacao/pins/pin-verde.svg',
	  	contentClass: 'florestas',
	    contents: [
	      {
	        title: 'Tipos de ações:',
	      	body: [
	      		'18% Desmatamento e degradação zero',
	      		'16% Prevenção de áreas de terra sob conservação',
	      		'9% Desmatamento e degradação líquidas zero',
	      		'9% Conformidade legal',
	      		'9% Gestão de Elevado Valor de Conservação (HCV)',
	      		'9% Certificação',
	      	].join('<br>')
	      },
	      {
	      	title: 'Case:',
	      	body: [
	      		'<a href="#case">',
	      			'Marfrig',
	      			'<div class="dialog-contents">',
	      				'<iframe src="resources/cases/2017_CDPLA_Case_Study_Marfrig.pdf"></iframe>',
	      			'</div>',
	      		'</a>',
	      	].join(' ')
	      }
	    ]
	  },
	],
}
