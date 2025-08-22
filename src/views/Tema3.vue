<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estructura Corporal Femenina 
  
    .bloque-texto-g.bloque-texto-g--inverso.bg-12.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade-right')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La estructura corporal se entiende como la arquitectura del cuerpo humano en relación con su composición y capacidad de movimiento. El concepto es fundamental para el patronaje, ya que permite entender cómo se organizan y articulan los segmentos del cuerpo, lo cual incide directamente en la forma en que una prenda debe ajustarse, adaptarse y responder a las necesidades funcionales y estéticas de quien la usa.
          br
          br
          | Según Norton (2019), la estructura corporal se define a partir de la organización y disposición de los segmentos corporales, considerando su función y biomecánica. Esto implica la integración de factores anatómicos, morfológicos y posturales que influyen en el movimiento, la estabilidad y la ergonomía del cuerpo humano, especialmente en contextos como el diseño de vestuario, donde es necesario comprender estas variables para lograr prendas funcionales, cómodas y estéticamente apropiadas.

    p.mb-4 A continuación, se presentan los conceptos clave relacionados con la estructura corporal:

    .row.bg-pasosB.align-items-center.p-3.p-md-4.p-lg-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center
          .tarjeta.tarjeta--blanca.p-4
            LineaTiempoC.color-primario
              .row.justify-content-center.align-items-center(titulo="Antropometría")
                .col-lg-7.mb-4.mb-md-0
                  h4.mb-4 Antropometría 
                  p La antropometría es la ciencia encargada de medir y analizar las dimensiones y proporciones del cuerpo humano en sus distintas etapas de desarrollo. La disciplina también se aplica en áreas como la ergonomía, la nutrición y la medicina, con el fin de evaluar el estado físico y de salud de las personas. 
                  p En el campo del diseño y confección de vestuario, la antropometría se emplea para realizar análisis ergonómicos que permitan crear prendas adaptadas a la morfología corporal, facilitando el movimiento y garantizando confort y funcionalidad. El conocimiento de estas medidas es esencial para lograr patrones precisos y bien ajustados, adecuados a diferentes tipos de cuerpo y contextos de uso.
                .col-lg-4.col-md-6
                  .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                    h5 Figura 17. 
                    span Antropometría femenina
                  figure
                    img(src='@/assets/curso/Tema3/figura17.jpg', alt='Esquema anatómico de una mujer con medidas antropométricas, destacando proporciones corporales clave. Estos datos son esenciales para el diseño ergonómico, el patronaje y estudios biomecánicos.')
              
              .row.justify-content-center.align-items-center(titulo="Anatomía")
                .col-lg-6.mb-4.mb-md-0
                  h4.mb-4 Anatomía
                  p La anatomía es vista como una rama de la biología que estudia la estructura de todos los seres vivos, focalizada principalmente en la forma, ubicación y la relación que tienen los órganos y los sistemas (Cabrera, 2016).
                  p Esta rama tiene relación en la elaboración de prendas dada que está enfocada para lograr una adaptación y funcionalidad al cuerpo humano. 
                .col-lg-5.col-md-8
                  .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                    h5 Figura 18. 
                    span Anatomía del cuerpo
                  figure
                    img(src='@/assets/curso/Tema3/figura18.png', alt='Cuerpo femenino con los músculos expuestos en vista frontal y posterior. Se distinguen los principales grupos musculares del torso, brazos y piernas, evidenciando su estructura y distribución en el cuerpo.')
                  figcaption Fuente: SENA, (2025)Fuente: tomado de https://es.pinterest.com/pin/762163936973032561/
              .row.justify-content-center.align-items-center(titulo="Biomecánica")
                .col-lg-8
                  h4.mb-4 Biomecánica
                  p La biomecánica es la disciplina que estudia los principios mecánicos que regulan el movimiento y la estructura del cuerpo humano. Se centra en analizar las fuerzas internas y externas que actúan sobre el cuerpo, así como la respuesta del sistema músculo esquelético ante dichas fuerzas. Sus aplicaciones abarcan áreas como el diseño de prótesis ortopédicas, el deporte y la rehabilitación. La relación entre la anatomía y la biomecánica aplicada al diseño de prendas de vestir se basa en los principios de adaptación y funcionalidad. 
                  p Comprender la anatomía, biomecánica y ergonomía del cuerpo permite que se puedan diseñar prendas que respondan a las necesidades físicas de una persona, lo que facilita la interacción entre el cuerpo y una prenda de vestir (Sierra y Mosquera, 2013).
                .col-lg-4.mb-4.mb-md-0.col-md-6
                  img(src='@/assets/curso/Tema3/img3.png', alt='')
              
              .row.justify-content-center.align-items-center(titulo="Morfología")
                .col-lg-6.mb-4.mb-md-0
                  h4.mb-4 Morfología
                  p La morfología del cuerpo humano hace referencia a la forma y estructura del cuerpo a partir de la relación y disposición de sus partes, esta rama resulta esencial en otras áreas y disciplinas como la anatomía, y fisiología.  
                
                .col-lg-5.col-md-8
                  .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                    h5 Figura 19.
                    span  Morfología femenina
                  figure
                    img(src='@/assets/curso/Tema3/figura19.png', alt='Cinco mujeres de pie, en ropa interior representan diferentes tipos morfológicos femeninos. Sus siluetas evidencian variaciones en proporciones corporales como la forma del tronco, distribución del tejido graso, longitud de piernas y estructura ósea.')
                 
              .row.justify-content-center.align-items-center(titulo="Ergonomía")
                .col-lg-6.mb-4.mb-md-0
                  h4.mb-4 Ergonomía
                  p La ergonomía es contemplada como una disciplina científica que se encarga de estudiar las interacciones entre seres humanos y elementos de un sistema (International Ergonomics Association, 2000), aplicada a partir de teorías, principios y métodos cuyo fin es el bienestar humano. La relación de la ergonomía y las prendas de vestir está dada a partir del confort que estas pueden darle al cuerpo humano con el objetivo de mejorar el rendimiento en relación al desempeño de las actividades diarias, su propósito es que se pueda desenvolver a partir de la comodidad, funcionalidad y adaptabilidad, también incluye la prevención de molestias o enfermedades que puedan derivarse de un mal uso de una prenda que no esté elaborada y pensada para el movimiento, por ejemplo: un pantalón que no permita el movimiento de la rodilla puede acarrear molestias o dolores articulares. 
                
                .col-lg-6
                  p Es por lo anterior, que en la moda uno de los objetivos a perseguir es poder proporcionar modelos de prendas ergonómicos con procesos de confección, en donde el estudio de materiales para su construcción resulta ser uno de los puntos tácticos en este proceso. 
                  p La relación entre los conceptos y la estructura corporal es la siguiente:
                  .bg-27.p-4
                    ul.lista-ul--color
                      li
                        i.fas.fa-angle-right2
                        | #[b Antropometría:] se relaciona con las medidas corporales.
                      li
                        i.fas.fa-angle-right2
                        | #[b Anatomía:]  se refiere a la estructura del cuerpo.
                      li
                        i.fas.fa-angle-right2
                        | #[b Biomecánica:]   corresponde al movimiento corporal.
                      li
                        i.fas.fa-angle-right2
                        | #[b Morfología: ]   hace referencia a la geometría del cuerpo (huesos y uniones).

                      li
                        i.fas.fa-angle-right2
                        | #[b Ergonomía:]  abarca la postura.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1. Tipos de siluetas femeninas

    .row.justify-content-center.align-items-center.mb-4(data-aos='fade-right')
      .col-lg-4.p-4
        .row.justify-content-center.align-items-center.bg-14.p-4
          .col-lg-11
            p La tipología de silueta hace referencia a la apariencia generalizada de la forma del cuerpo, depende de la proporción y volumen que la figura humana proyecta en segunda y tercera dimensión. En el sector de la moda, es indispensable poder analizar la forma femenina para determinar qué prendas pueden favorecer a una cliente dependiendo del tipo de silueta. 
            p A continuación, se presentan las siluetas para tener en cuenta en el patronaje de prendas de vestir. 
      .col-lg-8
        .row.justify-content-center.align-items-center.bg-2.p-4
          .col-lg-12
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 20.
              span  Tipos de silueta femeninas
          .col-lg-8
            img(src='@/assets/curso/Tema3/figura20.svg', alt='')
        figcaption Fuente: tomado de https://www.personalshopperzaragoza.com/blog/2020/03/13/tipos-de-siluetas-femeninas/ 

    p.mb-4 Se describe cada silueta iniciando de izquierda a derecha: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-4.col-7.col-md-6
          img.mb-3(src="@/assets/curso/Tema3/img04.png")
        .col-lg-8
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="a)	Silueta reloj de arena")
              .col-md-12.mb-4.mb-md-0
                p Se caracteriza e identifica principalmente por tener más volumen en los hombros y las caderas, estas partes tendrán un ancho muy similar, haciendo que el torso se vea más reducido.  En el cuerpo femenino suele percibirse a partir de curvas pronunciadas y proporcionadas al peso corporal. 

            .row(titulo="b) Silueta ovalada")
              .col-md-12.mb-4.mb-md-0
                p Se caracteriza por tener mayor volumen en el área abdominal de la mujer, es decir, se encontrará una figura poco definida con busto prominente y cadera más estrecha. Las piernas se percibirán un poco más delgadas con relación a la proporción del torso. 
            .row(titulo="c)	Silueta triangulo invertido")
              .col-md-12.mb-4.mb-md-0
                p Se caracteriza por tener los hombros más anchos que las caderas, es decir, es opuesto a la silueta anterior, en este caso se encuentra una cintura menos definida y piernas más delgadas, es común encontrar cuerpos femeninos en esta silueta con espalda ancha y busto prominente. 
            .row(titulo="d)	Silueta triangular o tipo pera")
              .col-md-12.mb-4.mb-md-0
                p Se caracteriza por tener las caderas más anchas que los hombros, en este caso la cintura se percibe más definidamente.  La parte superior suele tener un busto pequeño, lo que genera que la parte inferior se evidencie más prominente. 
            .row(titulo="e)	Silueta rectangular: ")
              .col-md-12.mb-4.mb-md-0
                p Se caracteriza por tener los hombros, la cintura y la cadera con medidas de anchos similares, es decir, las curvas en este tipo de silueta se presentan más reducidas, formando más líneas semirrectas en la anatomía femenina. 
        


    .tarjeta.bg-3.p-3.py-md-4(data-aos="fade").mb-3
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/video.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.bg1color Estructura del cuerpo
                p.mb-0.text-white Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace :
              .col-sm-auto
                a.boton.color-acento-botones(:href="('https://youtu.be/9UZwjgAYxMY')" target="_blank")
                  span Ir al video
                  i.fas.fa-circle-play


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2. Análisis y clasificación de las medidas

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-4.mb-3.col-md-8
        img.mb-4(src='@/assets/curso/Tema3/img05.png', alt='')
        .row.justify-content-center.align-items-center.bg-14.p-4
          .col-lg-11
            p Dentro del análisis de medidas se hace necesario traducir las medidas obtenidas del cuerpo humano, dado que esto guiará todo el proceso de patronaje en la elaboración de moldería, por ello es importante establecer un sistema de medidas claro para poder clasificarlas y a partir de sus características emplearlas en la elaboración de patrones. 
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Sistemas de medidas (clasificación)")
            .col-lg-5.mb-4.mb-md-0
              p El sistema de medidas en el área de patronaje hace referencia al conjunto de técnicas y procesos que se utilizan para obtener y dar aplicación con los datos obtenidos de las medidas corporales, las cuales han de ser precisas en la elaboración de patrones de prendas de vestir. 
              p Del proceso de medición dependerá el ajuste y horma de una prenda sobre el cuerpo en donde la proporcionalidad, comodidad y estética se conjuguen con el objetivo de tener un resultado esperado. 
            .col-md-5.col-10
              img(src='@/assets/curso/Tema3/img06.png', alt='')
          .row.justify-content-center(titulo="Normatividad")
            .col-lg-5.mb-4.mb-md-0
              p A nivel internacional y nacional se plantean diversas normas para la toma de medidas corporales, entre las que se encuentran: 
              p Norma Técnica Colombiana NTC-ISO 8559:1995. Fabricación de vestuario y estudios antropométricos. Dimensiones corporales.
           
            .col-md-5.col-10
              img(src='@/assets/curso/Tema3/img07.png', alt='')
       
    .tarjeta.bg-3.p-3.py-md-4(data-aos="fade").mb-3
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/video.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.mb-4.text-white Consultar los siguientes PDF, donde ampliará  la información de la temática tratada: 
            .row.justify-content-between.align-items-center
              .col-lg-3.mb-3.mb-sm-0    
                h4.mb-1.bg1color Medidas anatómicas
              .col-lg-3.mb-3
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/1_Anexo.pdf')" target="_blank")
                  span Descargar 
                  i.fas.fa-download
              .col-lg-3.mb-3.mb-sm-0    
                h4.mb-1.bg1color Análisis de tallas y medidas
              .col-lg-3
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/1_Anexo.pdf')" target="_blank")
                  span Descargar 
                  i.fas.fa-download

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3. Análisis ergonómico

    .row.justify-content-center(data-aos='fade-right')
      .col-lg-3.col-7.mb-4
        img(src='@/assets/curso/Tema3/img08.png', alt='')
      .col-lg-9
        p El análisis ergonómico constituye el punto de partida en todo levantamiento de medidas. El personal de confección identifica en primer lugar la silueta global, continúa con la evaluación de la proporción, entre las diferentes regiones corporales y finaliza con el registro de la estatura, variable que orienta el dimensionamiento de bolsillos, botones, cruces y demás detalles constructivos conforme a la escala de la figura. Aplicada de manera sistemática, esta secuencia metodológica favorece una imagen estética equilibrada en la persona usuaria.
        .row
          .col-lg-8
            p.bg-14.p-4 Aunque la historia del mestizaje genera gran variabilidad morfológica, los estudios antropométricos siguen reconociendo conjuntos poblacionales con rasgos físicos recurrentes, como tono de piel, estatura o envergadura torácica. Por ejemplo, algunas investigaciones sitúan la estatura masculina promedio en varios países europeos cerca de 1.80 m y describen una contextura relativamente esbelta, mientras que en regiones latinoamericanas se documenta un promedio aproximado de 1.72 m y una complexión más robusta. Estos rangos ilustran la necesidad de adaptar patrones y escalas a contextos demográficos específicos.
            p La postura corporal también varía de forma significativa a lo largo del ciclo vital. Con la edad, la curvatura dorsal tiende a incrementarse y la alineación axial pierde verticalidad, a diferencia de la disposición más lineal que caracteriza a personas jóvenes. Incorporar tales cambios posturales en la lectura morfológica garantiza que los ajustes respondan tanto a la ergonomía como a la estética.
            p Integrar estos parámetros en un análisis ergonómico permite determinar con rigor los puntos de variación que deben ejecutarse en la prenda, asegurando funcionalidad, confort y coherencia visual para la clientela.
          .col-lg-4.col-12.mb-3
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 21. 
              span Fenotipos
            img(src='@/assets/curso/Tema3/figura21.png', alt='Ilustración comparativa de tres figuras femeninas de frente, cada una con diferente estatura: una mide 1.80 metros, otra 1.70 metros y la última 1.60 metros. Cada figura está dividida en segmentos horizontales iguales desde la cabeza hasta los pies, indicando proporciones corporales en relación con la altura total.')
            figcaption.text-small Fuente: https://plasticamentebilingue.blogspot.com/2020/05/el-cuerpo-humano-mi-version-de-keith.html
        

    .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema1/figura_subt.svg")
        h3.ps-3.pe-4.mb-0 Evolución del cuerpo humano

    .row.justify-content-center.align-items-center.mb-4(data-aos='fade-right')
      .col-lg-5.bg-2.p-4.mb-3
        p.p-4 El cuerpo humano experimenta transformaciones a lo largo del crecimiento y, de manera aún más marcada, durante el envejecimiento. Factores como la edad, determinadas patologías, los accidentes y los hábitos alimentarios influyen en estas variaciones morfológicas. Para lograr un ajuste preciso en una prenda resulta imprescindible reconocer dichas alteraciones y comprender cómo afectan la silueta, de modo que las modificaciones de confección respondan con exactitud a las necesidades de cada persona.
      .col-lg-7
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 22. 
          span  Tipos de cuerpo
        img(src='@/assets/curso/Tema3/figura22.png', alt='Ilustración con cinco figuras femeninas que representan diferentes tipologías corporales. En la parte superior se muestran tres vistas frontales: una delgada, una de complexión media y otra más ancha. En la parte inferior, hay una figura de perfil con mayor volumen corporal junto a una figura de complexión media vista de frente, ambas alineadas sobre una base para comparación.')
        figcaption Fuente: https://es.123rf.com/photo_74730255_tipos-constituci%C3%B3n-del-cuerpo-femenino-peso-normal-y-delgada-figura-de-la-grasa-de-una-mujer-ectomorfo-.html

    p.mb-3 En cuanto a la contextura corporal, la literatura clasifica tres configuraciones básicas que sirven de referencia para el patronaje: 


    .bg-28.mb-4(data-aos="fade-left")
      .row.align-items-center 
        .col-lg-5.col-md-12.d-none.d-lg-block
          img(src='@/assets/curso/Tema3/img09.png', alt='')
        .col-lg-7.p-4
          ul.lista-ul
            li.d-flex.mb-0
              i.fas.fa-angle-right2
              p #[b Cuerpo normotípico o media:] se caracteriza por la armonía estructural entre estatura y proporciones según tramos etarios.        
            li.d-flex.mb-0
              i.fas.fa-angle-right2
              p #[b Contextura ectomórfica o delgada:] presenta escaso desarrollo muscular, omóplatos prominentes, columna levemente curvada, esternón hundido y cintura estrecha.
            li.d-flex.mb-0
              i.fas.fa-angle-right2
              p #[b Contextura endomórfica u obesa:] exhibe un incremento del tejido adiposo que eleva el peso por encima de los parámetros recomendados para la edad y la talla. 
            li.d-flex.mb-0
              i.fas.fa-angle-right2
              p #[b Contextura mesomórfica:] exhibe músculos prominentes especialmente en la parte superior, de igual manera su apariencia suele ser robusta o gruesa. 
          p Reconocer estas tipologías facilitas la toma de decisiones técnicas y propicia resultados funcionales, confortables y coherentes con la imagen deseada por la clientela.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-4.bg-16.p-4.mb-4
        p Ahora bien, también se aborda el término porte, el cual alude a la disposición física que exhibe una persona en posición erguida; describe la alineación de la columna vertebral, la proyección del tórax y la relación entre las diferentes curvaturas espinales. A partir de este criterio, la bibliografía técnica distingue tres configuraciones posturales principales:
      .col-lg-8
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Porte neutro")
            h4 Porte neutro
            p La columna vertebral mantiene sus curvaturas fisiológicas. La transición entre la región torácica y la lumbar se conserva armónica, lo que facilita un equilibrio estático estable y un perfil corporal proporcional.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Porte cifótico con tórax deprimido")
            h4 Porte cifótico con tórax deprimido
            p La curvatura torácica se acentúa hacia adelante, provocando la inclinación del tronco y la retracción del tórax. Esta disposición genera un pecho plano y desplaza el centro de gravedad, lo que puede afectar la comodidad y la caída de las prendas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Porte convexo")
            h4 Porte convexo
            p la parte media de la espalda se proyecta hacia atrás. La cabeza tiende a elevarse y a desplazarse en sentido posterior, el tórax evidencia mayor desarrollo y las costillas aparecen planas. Esta morfología confiere un perfil prominente en la región dorsal.
    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/Tema1/figura_subt.svg")
      h3.ps-3.pe-4.mb-0 Variaciones corporales
          
    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-6
        p.bg-9.p-4 Las variaciones corporales se originan por factores patológicos, funcionales, hábitos posturales y formas adquiridas, influyendo directamente en la forma y el equilibrio de la figura. Para el personal de modistería y sastrería, reconocer estas diferencias amplía la comprensión de los puntos del patrón o de la prenda desmontada que requieren ajuste. 
        .row.justify-content-center.align-items-center
          .col-lg-4.col-7
            img(src="@/assets/curso/Tema3/img11.png")
          .col-lg-8
            p Por ejemplo, una inclinación del torso modifica la línea de la manga y altera el calce del frente y la espalda, mientras que variaciones en la caída de los hombros o en la proyección del pecho repercuten en la configuración de toda la pieza. Este análisis ergonómico resulta aplicable a cualquier línea de confección, ya sea femenina, masculina o infantil, y sustenta intervenciones precisas que favorecen el confort, la funcionalidad y la estética de la clientela.
      .col-lg-6.col-8
        img(src="@/assets/curso/Tema3/img10.png")
    TabsC.color-primario.mb-5(data-aos="fade")
      .bg-11.py-4.py-md-5(titulo="En la inclinación del cuerpo se encuentran")
        .row.justify-content-center.align-items-center
          .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 23.  
              span Inclinación del cuerpo
            img(src='@/assets/curso/Tema3/figura23.png', alt='Tres figuras humanas masculinas en vista lateral. Cada una presenta una postura diferente: la primera con inclinación hacia adelante, la segunda con alineación vertical recta y la tercera con leve inclinación hacia atrás.')
            figcaption Fuente: (Alarcón, 2014) Anexo 3 
          .col-10.col-lg-4
            h4 En la inclinación del cuerpo se encuentran
            ul.lista-ul--color
              li
                i.fas.fa-angle-right2
                |Cuerpo inclinado hacia delante. 
              li
                i.fas.fa-angle-right2
                |Cuerpo de equilibrio normal.
              li
                i.fas.fa-angle-right2
                |Cuerpo inclinado hacia atrás.
      
      .bg-11.py-4.py-md-5(titulo="Con relación a las piernas se encuentran")
        .row.justify-content-center.align-items-center
          .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 24.  
              span Postura en piernas
            img(src='@/assets/curso/Tema3/figura24.png', alt='Dos figuras masculinas de frente. La primera tiene postura relajada con pies ligeramente separados y brazos extendidos a los lados. La segunda presenta una silueta más alargada, con pies más juntos y brazos cercanos al cuerpo.')
            figcaption Fuente: (Alarcón, 2014) Anexo1_sastreria_Masculina Página 24
          .col-10.col-lg-4
            h4 Con relación a las piernas se encuentran
            ul.lista-ul--color
              li
                i.fas.fa-angle-right2
                |Piernas arqueadas.

              li
                i.fas.fa-angle-right2
                |Piernas con rodillas juntas.
           
      .bg-11.py-4.py-md-5(titulo="En las conformaciones de los hombros se encuentran")
        .row.justify-content-center.align-items-center
          .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 25.  
              span Conformaciones de los hombros
            img(src='@/assets/curso/Tema3/figura25.png', alt='Tres figuras humanas masculinas en vista lateral. Cada una presenta una postura diferente: la primera con inclinación hacia adelante, la segunda con alineación vertical recta y la tercera con leve inclinación hacia atrás.')
            figcaption Fuente: (Alarcón, 2014) Anexo 3 
          .col-10.col-lg-5
            h4 En las conformaciones de los hombros se encuentran
            ul.lista-ul--color
              li
                i.fas.fa-angle-right2
                |Hombros altos.


              li
                i.fas.fa-angle-right2
                |Hombros bajos.
              li
                i.fas.fa-angle-right2
                |El hombro derecho más bajo.

      .bg-11.py-4.py-md-5(titulo="Conformaciones del pecho")
        .row.justify-content-center.align-items-center
          .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 26.  
              span Conformaciones de los hombros
            img(src='@/assets/curso/Tema3/figura26.png', alt='Tres figuras masculinas en vista lateral. La primera mantiene una postura erguida, la segunda muestra el torso inclinado hacia adelante con abdomen prominente, y la tercera presenta una inclinación general hacia adelante con curvatura en la espalda.')
            figcaption Fuente: (Alarcón, 2014) Anexo3_ Página 26
          .col-10.col-lg-5
            h4 Conformaciones del pecho
            ul.lista-ul--color
              li
                i.fas.fa-angle-right2
                |Pecho amplio, chico de cintura y hombros altos. 


              li
                i.fas.fa-angle-right2
                |Hombros caídos, cargado de espaldas y curvo.

              li
                i.fas.fa-angle-right2
                |Conformación delgada.

    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4. Medición y señalizado de la prenda
    
    .row.justify-content-center.align-items-center.mb-4(data-aos='fade-right')
      .col-lg-5.col-10.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 27. 
          span  Medición
        img(src='@/assets/curso/Tema3/figura27.png', alt='')
      .col-lg-7
        p La medición de una prenda puede realizarse en dos contextos: durante su construcción desde el patrón base o al intervenir una pieza ya confeccionada para efectuar ajustes. Cuando el cliente agenda su cita en el taller, se recomienda que asista con la ropa interior que utiliza habitualmente; ello permite establecer con mayor precisión la altura de busto y el contorno torácico en el caso de prendas femeninas. Una vez documentado el análisis antropométrico del cliente, el modisto evalúa la prenda según su tipología, el tipo de tejido y los detalles constructivos, de modo que las recomendaciones formuladas se alineen con la silueta y los requerimientos funcionales.
        .row.justify-content-center.align-items-center.bg-14.p-4
          .col-lg-9
            p Antes de iniciar la toma de medidas se clarifica el objetivo del ajuste y se elabora un boceto plano de la pieza frontal, lateral y posterior para registrar gráficamente las intervenciones. Los instrumentos indispensables incluyen alfileres, hilo de contraste para hilvanar, tiza o lápiz de sastre, cinta métrica, descosedor y libreta de anotaciones.
          .col-lg-3.col-8.col-md-5
            img(src='@/assets/curso/Tema3/ico4.svg', alt='') 


    p.mb-4 Durante el procedimiento se procede a sujetar provisionalmente la prenda con alfileres o hilvanes, marcando sobre la tela las líneas de corrección y consignando en el boceto las distancias que deben aumentarse o reducirse. Tras finalizar la marcación, la prenda se retira con los alfileres, dejando listos los puntos de referencia para el ajuste definitivo en el área de confección.

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-5.bg-29.p-4.mb-3
        br
        br
        br
        p Cuando se dispone de un maniquí de costura graduable, conviene recolocar la prenda sobre su estructura para afinar con mayor precisión las líneas de corrección, ya que la delimitación directa sobre el cliente presenta mayores dificultades operativas. El procedimiento puede efectuarse con la prenda íntegra o tras haber separado los paneles que requieran intervención.
        br
        br
        br
      .col-lg-7.col-md-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 28. 
          span  Maniquí de costura
        img(src='@/assets/curso/Tema3/figura28.png', alt='')


    .row.justify-content-center.align-items-center.mb-4(data-aos='fade-right')
      .col-lg-4.mb-4.col-md-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 29. 
          span  Medidas sobre superficie plana
        img(src='@/assets/curso/Tema3/figura29.png', alt='')
      .col-lg-8.bg-30.p-4 
        br
        br
        p La prenda se dispone sobre una superficie plana y estable; con las reglas de patronaje se suavizan y perfeccionan las líneas de corrección, mientras que la cinta métrica verifica con exactitud cada distancia y proporción. A partir de esta revisión se determina, según la naturaleza del ajuste, qué paneles conviene desmontar para garantizar la precisión del trabajo. Una vez definido el alcance de la intervención, se procede a desarmar las piezas necesarias y a ejecutar los ajustes previstos con rigor técnico y respeto por la integridad del tejido.
        br
        br

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-5
        p En conclusión, comprender a la persona cliente y conocer a profundidad la estructura corporal femenina son pilares fundamentales en el proceso de ajuste de prendas. La integración de técnicas de atención, comunicación efectiva, análisis antropométrico y conocimiento de las tipologías de silueta permite ofrecer un servicio personalizado, funcional y estéticamente coherente. 
      .col-lg-3.col-8.mb-3.col-md-6
        img(src='@/assets/curso/Tema3/img20.png', alt='')
      .col-lg-4
        p Este componente formativo fortalece las competencias del aprendiz, dotándolo de herramientas para intervenir prendas con precisión técnica, empatía profesional y criterios ergonómicos, garantizando así resultados que respondan a las expectativas del sector de la moda y a la diversidad del cuerpo femenino.

























</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
