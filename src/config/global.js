export default {
  global: {
    Name: 'El cliente y la estructura corporal femenina.',
    Description:
      'Este componente formativo ofrece una visión integral de la interacción y el ajuste en prendas de vestir, al estudiar al cliente, las técnicas de atención y comunicación, junto con el registro sistemático de datos, al tiempo que aborda las tipologías de prendas femeninas, universos de vestuario, tipos de ajuste y aprovechamiento de materiales textiles; profundiza además en la estructura corporal femenina desde la antropometría, anatomía, biomecánica, morfología, ergonomía y división del cuerpo, culminando con el análisis de siluetas y la clasificación de medidas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Desarrollo de contenidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de cliente y su relación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnicas de atención al cliente',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Técnicas de comunicación con el cliente',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Registro de la información de la persona cliente',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipología de Prendas Femeninas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Universos del vestuario',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de ajuste en prendas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: '2.3 Los textiles',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estructura Corporal Femenina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de siluetas femeninas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Análisis y clasificación de las medidas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Análisis ergonómico',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Medición y señalizado de la prenda',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'El cliente',
      referencia:
        'Murillo Moreno, L. (2018). Fundamentos de servicio al cliente. Fundación Universitaria del Área Andina.',
      tipo: 'Libro (manual docente).',
      link:
        'https://digitk.areandina.edu.co/bitstream/handle/areandina/3523/93%20FUNDAMENTOS%20DE%20SERVICIO%20AL%20CLIENTE.pdf ',
    },
    {
      tema: 'Tipología de prendas de vestir',
      referencia:
        'García López, M. C. (2001). La indumentaria emblemática: sistema y tipología. Emblemata, 7, 365–376. ',
      tipo: 'Artículo.',
      link:
        'https://ifc.dpz.es/recursos/publicaciones/22/28/13garcialopez.pdf ',
    },
    {
      tema: 'Estructura corporal femenina',
      referencia:
        'Valero Martínez, M., Ballester Fernández, A., Nácher Fernández, B., Piérola Orcero, A., Alemany Mut, S., González García, J. C., et al. (2015). La antropometría, garantía para un correcto ajuste de la ropa. Revista de Biomecánica, 62, 11–17.',
      tipo: 'Artículo.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/6263312.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Alfileres',
      significado:
        'pequeñas piezas metálicas punzantes utilizadas para sujetar temporalmente capas de tela durante el ajuste o marcado.',
    },
    {
      termino: 'Antropometría',
      significado:
        'disciplina que mide las dimensiones físicas del cuerpo humano para aplicar datos en diseño y confección ergonómica.',
    },
    {
      termino: 'Biomecánica',
      significado:
        'estudio de los movimientos y fuerzas del cuerpo humano que orienta la adecuación funcional de las prendas.',
    },
    {
      termino: 'Boceto plano',
      significado:
        'representación bidimensional de una prenda, vista frontal, lateral y posterior, que sirve para planificar intervenciones.',
    },
    {
      termino: 'Cinta métrica',
      significado:
        'instrumento flexible graduado que permite obtener longitudes y contornos en el levantamiento de medidas.',
    },
    {
      termino: 'Cliente',
      significado:
        'persona que solicita un producto o servicio de ajuste y con quien se establece un proceso de atención y comunicación.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'ciencia que adapta los entornos, productos y tareas a las capacidades y limitaciones corporales de las personas usuarias.',
    },
    {
      termino: 'Hilvanar',
      significado:
        'técnica de costura provisional que une piezas de tela con puntada larga de hilo de contraste para probar ajustes.',
    },
    {
      termino: 'Maniquí de costura',
      significado:
        'forma tridimensional graduable que reproduce proporciones corporales y facilita el marcado preciso fuera del cuerpo.',
    },
    {
      termino: 'Patronaje',
      significado:
        'proceso de creación, modificación y gradación de patrones que guían el corte y la confección de prendas.',
    },
    {
      termino: 'Porte',
      significado:
        'disposición postural y alineación general del cuerpo que influye en la caída y el calce de la ropa.',
    },
    {
      termino: 'Registro de datos',
      significado:
        'método de documentación ordenada de medidas, preferencias y observaciones para garantizar trazabilidad y personalización.',
    },
    {
      termino: 'Silueta',
      significado:
        'contorno externo perceptible de la figura humana o de una prenda que determina su forma visual.',
    },
    {
      termino: 'Tipología de prendas',
      significado:
        'clasificación del vestuario según su función, diseño y contexto de uso.',
    },
    {
      termino: 'Toma de medidas',
      significado:
        'procedimiento de obtención de dimensiones corporales precisas para la confección o ajuste de prendas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Das, S. (2024). Design for the body: How ergonomics transforms modern clothing into comfortable, functional, and stylish garments. Ergonomics International Journal, 8(4), Artículo 000337.',
      link: 'https://doi.org/10.23880/EOIJ-16000337',
    },
    {
      referencia:
        'Gilewska, T. (2013). Diseño de moda. Arreglos y modificaciones de prendas de vestir (A. M. Aznar, Trad.; E. Domingo, Ed.). Editorial El Drac, S.L. ',
      link: '',
    },
    {
      referencia:
        'Gómez, M. L. (2020). Moda sostenible: Transforma y personaliza tu ropa. Editorial Gustavo Gili. ',
      link: '',
    },
    {
      referencia:
        'GQ México. (2019). ¿Sabías que existían estilos de sastrería para el hombre? Ahora conoce sus diferencias.',
      link:
        'https://www.gq.com.mx/moda/articulo/sabias-que-existian-estilos-de-sastreria-para-el-hombre-ahora-conoce-sus-diferencias',
    },
    {
      referencia: 'Inexmoda. (2024). Informe de tendencias: Colombiamoda 2024',
      link: 'https://inexmoda.org.co/observatorio-inexmoda-enero-2024/',
    },
    {
      referencia:
        'Instituto Nacional Tecnológico. (2011). Manual de unión y acabado de prendas de vestir.',
      link:
        'https://es.scribd.com/document/412659427/Manual-de-Union-y-Acabado-de-Prendas-de-Vestir ',
    },
    {
      referencia:
        'Pacheco, A. (2022). Economía circular y el arreglo y modificación de ropa. LinkedIn.',
      link:
        'https://es.linkedin.com/pulse/econom%C3%ADa-circular-y-el-arreglo-modificaci%C3%B3n-de-ropa-pacheco ',
    },
    {
      referencia:
        'Recovo. (2023). El papel del <i>upcycling</i> en la moda circular.',
      link: ' https://recovo.co/es/blog/article/upcycling-moda-circular',
    },
    {
      referencia:
        'Servicio Nacional de Adiestramiento en Trabajo Industrial. (s. f.). Tecnología del diseño y desarrollo de prendas de vestir: desarrollo de patrones y fichas técnicas con tecnología digital. ',
      link: 'https://es.scribd.com/document/575013893/MANUAL ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar ',
          cargo: 'Experta en confección ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez ',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jenny Rocio Reyes Acevedo',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
