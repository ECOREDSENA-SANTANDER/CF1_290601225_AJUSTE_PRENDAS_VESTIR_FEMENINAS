<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipología de prendas femeninas

    .bg-21.mb-5(data-aos="fade-left")
      .row.align-items-center 
        .col-lg-7
          .p-4.p-lg-5         
            p Las tipologías de prendas de vestir femeninas permiten organizar el amplio espectro de opciones disponibles según su función, silueta y contexto de uso. Cada categoría, desde vestidos y faldas hasta blusas, pantalones y chaquetas, responden a criterios de forma, longitud, confección y materiales que definen estilos que van de lo casual a lo formal. Esta clasificación facilita el estudio de patrones, cortes y texturas, así como la adaptación de cada diseño a las necesidades estéticas y funcionales de la persona usuaria, garantizando coherencia en la planificación de colecciones, la elaboración de patrones y las pruebas de ajuste.
        .col-lg-5.col-md-12.d-none.d-lg-block
          img(src='@/assets/curso/Tema2/img01.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 2. 
            span Tipologías de prendas femeninas
          .tabla-a.color-acento-contenido 
            table(alt='Tabla con tres columnas. La primera clasifica diferentes tipologías de prendas femeninas como vestidos, faldas, blusas y tops, pantalones, chaquetas y abrigos, monos enterizos y fajas corsetería. La segunda columna presenta subtipos representativos de cada categoría. La tercera describe el uso habitual y características funcionales de cada prenda, incluyendo aspectos como cobertura, ajuste, estructura y versatilidad.')
              caption Fuente: SENA, (2025)
              thead
                tr
                  th.texto-izquierda.bg-17 Tipología
                  th.texto-izquierda.bg-17 Subtipos representativos
                  th.texto-izquierda.bg-17 Descripción y uso habitual
              tbody
                tr
                  td.texto-izquierda Vestidos
                  td.texto-izquierda Casual, de cóctel, de gala, camisero.
                  td.texto-izquierda Prenda de una sola pieza que cubre torso y falda; varía en longitud y formalidad según la ocasión. 
                tr
                  td.texto-izquierda Faldas
                  td.texto-izquierda Mini, midi, larga, plisada, tubo.
                  td.texto-izquierda Prenda inferior separada; ofrece versatilidad desde #[em looks] informales hasta estilos más estructurados.
                tr
                  td.texto-izquierda Blusas y #[em tops]
                  td.texto-izquierda Camisas, blusas de manga larga, #[em crop tops], túnicas.
                  td.texto-izquierda Prenda superior ligera; puede incorporar detalles de volantes, drapeados o cortes asimétricos para diferentes siluetas.
                tr
                  td.texto-izquierda Pantalones
                  td.texto-izquierda #[em Jeans], #[em palazzo], pitillo, #[em jogger].
                  td.texto-izquierda Prenda inferior con múltiples cortes y tejidos; combina confort y estilo según el ajuste y el material.
                tr
                  td.texto-izquierda Chaquetas y abrigos
                  td.texto-izquierda #[em Blazer, trench, bomber,] abrigo largo
                  td.texto-izquierda Prenda exterior destinada a aportar estructura y abrigo; su diseño define el nivel de formalidad y protección.
                tr
                  td.texto-izquierda Monos y enterizos
                  td.texto-izquierda #[em Jumpsuit], peto, overol.
                  td.texto-izquierda Prenda de una sola pieza con torso y pantalón; combina funcionalidad y estética en un solo elemento.
                tr
                  td.texto-izquierda Fajas y corsetería
                  td.texto-izquierda Faja moldeadora, corsé, #[em body].
                  td.texto-izquierda Prenda de ajuste que redefine la silueta; se emplea tanto como base estructural como prenda de exterior según el diseño.

    .bg-22(data-aos='fade-right')
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-11.p-4
          p A continuación, se describen diversas tipologías de prendas junto con sus representaciones correspondientes, lo cual facilita la identificación y comprensión de cada diseño. Las representaciones permiten reconocer con mayor claridad las diferencias entre estilos, favoreciendo tanto la comunicación técnica como la toma de decisiones en procesos de confección y ajuste:

    .row.bg-slyder.align-items-center.p-3.p-md-4.p-lg-5(data-aos="fade").mb-5
      .col-lg-12.col-12.px-lg-4
        SlyderA(tipo="b").slyderblanco.p-4
          .row.justify-content-center.align-items-center
            .col-10.col-lg-6
              h4 Vestido
              p Es una prenda de una sola pieza que cubre el torso y parte de las piernas. Las prendas de vestir son piezas textiles diseñadas para cubrir o adornar el cuerpo, y se clasifican según su forma y uso.
            .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 7.
                span Tipologías de vestido
              img(src='@/assets/curso/Tema2/figura7.svg', alt='Conjunto de quince ilustraciones distribuidas en tres filas. Cada una representa una prenda superior o de una sola pieza de uso femenino, con variaciones en escote, mangas, largos, siluetas y cortes. Se incluyen vestidos, blusas, chaquetas y faldas con diferentes estructuras, desde ajustadas hasta sueltas, y con múltiples diseños en cuello, cintura y terminaciones.')
            
        

          .row.justify-content-center.align-items-center
            .col-10.col-lg-5
              h4 Falda
              p Es una prenda de vestir que cubre desde la cintura hacia abajo, dejando descubiertas las piernas. Puede variar en largo, forma y estilo, adaptándose a diferentes usos y contextos.

            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 8. 
                span Tipologías de faldas
              img(src='@/assets/curso/Tema2/figura8.svg', alt='Conjunto de quince ilustraciones de faldas organizadas en tres filas. Cada imagen representa una tipología diferente, identificada con un nombre en la parte inferior. Las variaciones incluyen estructuras como línea A, godet, plisada, lápiz, asimétrica, cruzada, circular, con volantes o tipo sirena. Las formas abarcan desde diseños ajustados hasta voluminosos, con longitudes y caídas diversas.')
           
        
          .row.justify-content-center.align-items-center
            .col-10.col-lg-5
              h4 #[em Tops] y blusas
              p Prendas superiores que cubren el torso. El #[em top] suele ser una prenda más corta y ajustada, de estilo informal. La blusa, en cambio, es más suelta, versátil y común en contextos formales o semiformales.
            .col-10.col-md-8.col-lg-6.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 9. 
                span Tipologías de #[em tops] y blusas
              img(src='@/assets/curso/Tema2/figura9.svg', alt='Conjunto de dieciocho escotes femeninos representados mediante siluetas. Se incluyen formas cerradas, redondeadas, en punta, con aberturas pequeñas, líneas rectas, curvas suaves y estructuras asimétricas. Algunos cubren por completo el cuello, otros dejan los hombros libres o incorporan tiras delgadas. También hay diseños con cortes en diagonal, cruces frontales, curvas profundas o elementos que se ajustan desde el cuello, mostrando una variedad de estilos que modelan el área superior del torso.')
            

        
          .row.justify-content-center.align-items-center
            .col-10.col-lg-5
              h4 Pantalones
              p Son prendas de vestir que cubren desde la cintura hasta los tobillos, dividiendo el cuerpo en dos partes. Existen en diversas formas, largos y estilos, y se adaptan tanto a usos formales como informales.  
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 10. 
                span Tipologías de pantalones
              img(src='@/assets/curso/Tema2/figura10.svg', alt='Conjunto de doce ilustraciones de pantalones distribuidos en dos filas. Cada figura representa una silueta distinta, con variaciones en el ajuste, caída y largo. Hay modelos ajustados al cuerpo, rectos, con corte acampanado, amplios desde la cadera o de piernas anchas. También se incluyen versiones con el ruedo ceñido, formas relajadas, estructuras sueltas o versiones cortas por encima de la rodilla.')
            
      
          .row.justify-content-center.align-items-center
            .col-10.col-lg-6
              h4 Chaquetas
              p Prendas superiores de abrigo que cubren el torso y los brazos. Se usan como capa exterior y varían en estilo, largo y material según su función o temporada.
            .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 11. 
                span Tipologías de chaquetas
              img(src='@/assets/curso/Tema2/figura11.svg', alt='Nueve ilustraciones de chaquetas con distintas estructuras. Algunas tienen solapas anchas, otros cierres visibles, cortes rectos o ajustados. Variaciones en cuello, bolsillos y longitud definen cada diseño.')
            
    
          .row.justify-content-center.align-items-center
            .col-10.col-lg-6
              h4 Abrigos
              p Prendas exteriores largas y gruesas, diseñadas para brindar protección contra el frío. Cubren el torso y generalmente, llegan hasta las piernas.
            .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 12. 
                span Tipos de abrigos
              img(src='@/assets/curso/Tema2/figura12.svg', alt='Nueve ilustraciones de abrigos largos con variaciones en cuello, número de botones, bolsillos y proporción. Algunos tienen doble fila de cierre, otros capucha o solapas amplias. Las siluetas van desde entalladas hasta rectas.')
           


          .row.justify-content-center.align-items-center
            .col-10.col-lg-6
              h4 Enterizos
              p Son prendas de una sola pieza que combinan parte superior e inferior, cubriendo torso y piernas. Se usan en estilos formales e informales y varían en corte, largo y material.
            .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 13. 
                span Tipos de enterizos
              img(src='@/assets/curso/Tema2/figura13.svg', alt='Veinticuatro ilustraciones de enterizos femeninos distribuidos en tres filas. Incluyen versiones largas y cortas, con diferentes tipos de mangas, tirantes, escotes y cortes. Las siluetas varían entre ajustadas, rectas y amplias.')
           
        

          .row.justify-content-center.align-items-center
            .col-10.col-lg-6
              h4 #[em Corsets]
              p Prendas ajustadas que rodean el torso, diseñadas para moldear la figura, en especial la cintura. Pueden usarse como ropa interior o exterior, y combinan función estética y soporte estructural.
            .col-10.col-md-8.col-lg-4.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 14. 
                span Tipos de #[em corsets]
              img(src='@/assets/curso/Tema2/figura14.svg', alt='Ocho ilustraciones técnicas de prendas superiores ajustadas tipo corsé, organizadas en dos filas. Cada una presenta variaciones en longitud, presencia o ausencia de tirantes, cortes verticales, estructura de copas y terminaciones inferiores.')
           


    .tarjeta.bg-3.p-3.py-md-4(data-aos="fade").mb-3
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/video.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.bg1color Categoría de prendas - Tipologías - Bitácora de formas
                p.mb-0.text-white Se invita a explorar el video sobre la categoría y tipologías de prendas:
              .col-sm-auto
                a.boton.color-acento-botones(:href="('https://youtu.be/leHGYnfUxGk')" target="_blank")
                  span Ir al sitio
                  i.fas.fa-circle-play
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1.	Universos del vestuario

    .row.justify-content-center.align-items-center.mb-4(data-aos='fade-right')
      .col-lg-7.mb-3
        .row.justify-content-center.align-items-center.bg-23.p-4
          .col-lg-3.col-3.col-md-2.mb-3
            img(src='@/assets/curso/Tema2/ico1.svg', alt='')
          .col-lg-9
            p Los universos del vestuario constituyen agrupaciones de prendas organizadas en categorías que responden a contextos específicos de uso; estas categorías mantienen una coherencia interna en cuanto a tipologías de prendas, materiales textiles y criterios de aplicación. La clasificación del vestuario según la ocasión de uso facilita la estructuración del producto y permite una definición más precisa del mercado objetivo al que se dirige.
      .col-lg-5.col-md-9
        img(src='@/assets/curso/Tema2/img02.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 3. 
            span Clasificación de universos del vestuario por ocasión de uso
          .tabla-a.color-acento-contenido 
            table(alt='La tabla clasifica diferentes tipos de vestuario según su ocasión de uso y proporciona ejemplos de prendas para cada de estos. Los universos de vestuario son; formal, informal, deportiva, ejecutiva, y ceremonial.')
              caption Fuente: SENA, (2025)
              thead
                tr
                  th.texto-izquierda.bg-17 Universo
                  th.texto-izquierda.bg-17 Uso
                  th.texto-izquierda.bg-17 Ejemplos
              tbody
                tr
                  td.texto-izquierda Formal
                  td.texto-izquierda Eventos elegantes, reuniones importantes, fiestas de etiqueta.
                  td.texto-izquierda Trajes de gala, vestidos de noche, vestidos de gala.
                tr
                  td.texto-izquierda Informal casual
                  td.texto-izquierda Vida cotidiana, actividades diarias. 
                  td.texto-izquierda Pantalones en #[em denim], camisetas, camisas, zapatillas, vestidos ligeros.
                tr
                  td.texto-izquierda Deportivo o funcional 
                  td.texto-izquierda Actividad física, trabajo especializado.
                  td.texto-izquierda Ropa deportiva, uniformes médicos, overoles.
                tr
                  td.texto-izquierda Oficina o ejecutivo
                  td.texto-izquierda Entornos laborales, negocios.
                  td.texto-izquierda Trajes ejecutivos, blusas, pantalones de vestir.
                tr
                  td.texto-izquierda Ceremonia y festivo
                  td.texto-izquierda Bodas, graduaciones, eventos religiosos.
                  td.texto-izquierda Vestidos largos, trajes formales, indumentaria cultural.
                tr
                  td.texto-izquierda Fantasía
                  td.texto-izquierda Teatro, cine, #[em cosplay], carnaval.
                  td.texto-izquierda Disfraces, vestuario teatral, trajes de época.
                tr
                  td.texto-izquierda #[em Swinwear]
                  td.texto-izquierda Playa, piscina, eventos recreativos.
                  td.texto-izquierda Vestidos de baño, salidas de baño, vestidos para la playa y la piscina.
                tr
                  td.texto-izquierda #[em Lingerie wear ]
                  td.texto-izquierda Prendas interiores.
                  td.texto-izquierda Ropa interior. 
                tr
                  td.texto-izquierda #[em Sleepwear]
                  td.texto-izquierda Para dormir o descansar.
                  td.texto-izquierda Ropa de descanso, pijamas.

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-3.mb-3.col-8.col-md-6
        img(src='@/assets/curso/Tema2/img03.png', alt='')
      .col-lg-3.mb-3
        .row.justify-content-center.align-items-center.bg-23.p-4
          .col-lg-5.mb-4.col-5.col-md-4
            img(src='@/assets/curso/Tema2/img04.png', alt='')
          .col-lg-12
            p #[b Ocasión de uso:] hace referencia a los contextos o situaciones en los que una persona, o un grupo, utiliza una prenda de vestir. Esta elección responde a normas y acuerdos sociales que varían según la cultura, y refleja aspectos de la identidad tanto individual como colectiva.
      .col-lg-6
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Tabla 4. 
              span Ocasión de uso por universo de vestuario
            .tabla-a.color-acento-contenido 
              table(alt='La tabla presenta información de ocasión de uso por universo de vestuario, correspondiendo el protocolario a la gala /formal, multiocasion al casual, Informal al kakiwear, Jeanswear, Sportswear, Activwear, Leisurewear, y finaliza con complementos al Swinwear/Beachwear, Sleepwear, y Underwear. ')
                caption Fuente: SENA, (2025) 
                thead
                  tr
                    th.texto-izquierda.bg-17.w-25 Ocasión de uso
                    th.texto-izquierda.bg-17 Universo de vestuario
                tbody
                  tr.fila-baja
                    td.texto-izquierda Protocolario
                    td.texto-izquierda
                      ul.lista-ul.mb-0
                        .row.align-items-center.mb-0
                          .col-lg-3
                            li.mb-0
                              i.fas.fa-angle-right2
                              |Gala.
                          .col-lg-3
                            li.mb-0
                              i.fas.fa-angle-right2
                              |Formal.
                      
                  tr
                    td.texto-izquierda Multiocasión
                    td.texto-izquierda
                      ul.lista-ul.mb-0
                        .row.align-items-center.mb-0
                          .col-lg-3
                            li.mb-0
                              i.fas.fa-angle-right2
                              |Casual.
                  tr
                    td.texto-izquierda Informal
                    td.texto-izquierda
                      ul.lista-ul.mb-0
                        .row.align-items-center
                          .col-lg-3
                            li.mb-0.d-flex
                              i.fas.fa-angle-right2
                              p.mb-0 #[em Kakiwear.]
                            li.mb-0.d-flex
                              i.fas.fa-angle-right2
                              p.mb-0 #[em Jeanswear.]
                          .col-lg-3
                            li.mb-0.d-flex
                              i.fas.fa-angle-right2
                              p.mb-0 #[em Sportswear.]
                            li.mb-0.d-flex
                              i.fas.fa-angle-right2
                              p.mb-0 #[em Activewear.]
                          .col-lg-4
                            li.mb-0
                              i.fas.fa-angle-right2
                              |#[em Leisurewear.]
                  tr
                    td.texto-izquierda Complementos
                    td.texto-izquierda
                      ul.lista-ul.mb-0
                        .row.align-items-center.mb-0
                          .col-lg-5.mb-0
                            li.mb-0
                              i.fas.fa-angle-right2
                              |#[em Swinwear – Beachwear.]
                            li.mb-0
                              i.fas.fa-angle-right2
                              |#[em Sleepwear.]
                            li.mb-0
                              i.fas.fa-angle-right2
                              |#[em Underwear.]


    .tarjeta.bg-3.p-3.py-md-4(data-aos="fade").mb-3
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/video.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.bg1color Gamas de mercado - Universos de vestuarios - Ocasiones de uso.
                p.mb-0.text-white Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace:
              .col-sm-auto
                a.boton.color-acento-botones(:href="('https://youtu.be/VsTacEciP3k')" target="_blank")
                  span Ir al sitio
                  i.fas.fa-circle-play

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2.	Tipos de ajuste en prendas


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4.bg-10(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/Tema2/img05.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Los ajustes más habituales varían en función de la categoría de la prenda y responden a las particularidades de su corte, confección y funcionalidad. En vestidos, predominan las intervenciones de talle y largo para armonizar proporciones; en faldas, los cambios de cinturilla y vuelo permiten adaptar el volumen al estilo deseado; en blusas y #[em tops], la corrección de contorno de busto y la longitud de torso garantizan un calce ergonómico; en pantalones, la modificación de tiro y pernera optimiza confort y movilidad; en chaquetas y abrigos, el entallado de tronco y el acortado de mangas aseguran una silueta definida; en monos y enterizos, el ajuste de torso y tirantes evita pliegues indeseados; y en fajas o corsetería, la regulación de compresión y el refuerzo de costuras equilibran sujeción y durabilidad. Cada intervención se diseña para preservar la integridad estructural del textil y satisfacer las expectativas estéticas y funcionales de la persona usuaria.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 5. 
            span Ajustes más comunes en las prendas de vestir femeninas
          .tabla-a.color-acento-contenido 
            table(style="width: auto; table-layout: auto;" alt='Tabla con tres columnas. La primera enumera tipologías de prendas como vestidos, faldas, blusas, pantalones, chaquetas, monos y prendas de corsetería. La segunda describe ajustes o modificaciones posibles, como entalle, corrección de largo, ajuste de hombros o mangas. La tercera columna ofrece una explicación breve para cada modificación, orientada a mejorar el calce, la comodidad o la silueta.')
              caption Fuente: SENA, (2025)
              thead
                tr
                  th.texto-izquierda.bg-17.w-25 Tipología de prenda
                  th.texto-izquierda.bg-17.w-25 Ajuste o modificación
                  th.texto-izquierda.bg-17 Descripción breve
              tbody
                tr
                  td.texto-izquierda(rowspan="4") #[b Vestidos]
                  td.texto-izquierda Entallado de cintura.
                  td.texto-izquierda Se reduce el contorno de la cintura para lograr un talle más definido.
                tr
                  td.texto-izquierda Ajuste de largo.
                  td.texto-izquierda Se acorta o alarga el bajo conforme a la altura y preferencia de la persona usuaria.
                tr
                  td.texto-izquierda Corrección de hombros.
                  td.texto-izquierda Se ensancha o estrecha la anchura de hombros para mejorar el calce.
                tr
                  td.texto-izquierda Modificación de escote.
                  td.texto-izquierda Se modifica la forma o profundidad del escote para adaptar estilo y confort.

                // FALDAS
                tr
                  td.texto-izquierda(rowspan="3") #[b Faldas]
                  td.texto-izquierda Ajuste de cinturilla.
                  td.texto-izquierda Vestidos largos, trajes formales, indumentaria cultural.
                tr
                  td.texto-izquierda Variación de largo.
                  td.texto-izquierda Se adapta la cinturilla para ajustar el contorno a la medida deseada.
                tr
                  td.texto-izquierda Regulación de vuelo.
                  td.texto-izquierda Se convierte la falda en mini, midi o larga según la ocasión.

                // BLUSAS Y TOPS
                tr
                  td.texto-izquierda(rowspan="3") #[b Blusas y #[em tops]]
                  td.texto-izquierda Ajuste de contorno de busto.
                  td.texto-izquierda Se amplía o reduce el ancho frontal para un mejor acomodo en el pecho.
                tr
                  td.texto-izquierda Corrección de largo de torso.
                  td.texto-izquierda Se alarga o acorta la prenda en el cuerpo para ajustarse a la silueta.
                tr
                  td.texto-izquierda Modificación de mangas.
                  td.texto-izquierda Se cambia el largo o el volumen de la manga para optimizar movilidad y estilo.

                // PANTALONES
                tr
                  td.texto-izquierda(rowspan="4") #[b Pantalones]
                  td.texto-izquierda Ajuste de tiro.
                  td.texto-izquierda Se modifica la altura del tiro delantero o trasero para mejorar comodidad.
                tr
                  td.texto-izquierda Variación de largo de pernera.
                  td.texto-izquierda Se acorta o alarga la pierna de acuerdo con la altura y el tipo de calzado.
                tr
                  td.texto-izquierda Entallado de pretina.
                  td.texto-izquierda Se estrecha o afloja la pretina para un ajuste preciso en cintura.
                tr
                  td.texto-izquierda Regulación de ancho de pierna.
                  td.texto-izquierda Se estrecha o ensancha la pernera para adecuarse al estilo deseado.

                // CHAQUETAS Y ABRIGOS
                tr
                  td.texto-izquierda(rowspan="4") #[b Chaquetas y abrigos]
                  td.texto-izquierda Entallado en tronco.
                  td.texto-izquierda Se reduce la anchura en cintura o espalda para realzar la silueta.
                tr
                  td.texto-izquierda Ajuste de hombros.
                  td.texto-izquierda Se modifica la anchura y caída de hombros para un calce impecable.
                tr
                  td.texto-izquierda Acortado de mangas.
                  td.texto-izquierda Se ajusta la longitud de la manga para adecuarla a la forma del brazo.
                tr
                  td.texto-izquierda Adaptación de forro interno.
                  td.texto-izquierda Se repara o ajusta el forro para asegurar confort y durabilidad.

                // MONOS Y ENTERIZOS
                tr
                  td.texto-izquierda(rowspan="4") #[b Monos y enterizos]
                  td.texto-izquierda Ajuste de largo de torso.
                  td.texto-izquierda Se modifica la medida del tronco para evitar tirantez o pliegues indeseados.
                tr
                  td.texto-izquierda Entallado de cintura.
                  td.texto-izquierda Se adapta el contorno de la cintura al cuerpo para definir la silueta.
                tr
                  td.texto-izquierda Variación de largo de pernera.
                  td.texto-izquierda Se alarga o acorta la pierna según preferencia y uso.
                tr
                  td.texto-izquierda Regulación de tirantes.
                  td.texto-izquierda Se acortan o alargan tiras para ubicar correctamente la prenda.

                // FAJAS Y CORSETERÍA
                tr
                  td.texto-izquierda(rowspan="3") #[b Fajas y corsetería]
                  td.texto-izquierda Ajuste de compresión.
                  td.texto-izquierda Se modifica la tensión de la prenda para equilibrar sujeción y confort.
                tr
                  td.texto-izquierda Recorte de contornos.
                  td.texto-izquierda Se estrechan o amplían paneles para ajustar el contorno corporal.
                tr
                  td.texto-izquierda Refuerzo de costuras.
                  td.texto-izquierda Se añaden refuerzos en áreas de mayor tensión para mejorar la resistencia.
    
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3. Los textiles

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-6.col-md-12.pe-lg-0
        .bg-24.p-4.pb-0.h-100
          img.w-75.m-auto(src='@/assets/curso/Tema2/img06.svg', alt='')
      .col-lg-6.ps-lg-0
        .bg-25.p-4.p-lg-5.h-100.d-flex.align-items-center
          p.mb-0 Los textiles, ya sea para uso en vestuario o con fines industriales, se elaboran a partir de fibras, las cuales dan origen a un filamento. Este filamento se hila, se convierte en hilo y, posteriormente, mediante diversos métodos de tejido, se transforma en tela. A continuación, se describen los procesos generales involucrados en cada etapa de esta cadena.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.align-items-center.justify-content-center(titulo="Fibras textiles ")
              .col-lg-4.mb-4.mb-md-0
                p Son las unidades sólidas básicas de toda estructura textil. Se trata de filamentos cuya longitud es considerablemente mayor que su diámetro, lo que les permite ser transformados en hilos. Estas fibras constituyen el punto de partida en la fabricación de textiles, telas y prendas de vestir.
              .col-md-6.mb-4.mb-md-0
                .titulo-sexto.color-acento-contenido.mb-4
                  h5 Figura 15. 
                  span  Fibras textiles
                img(src='@/assets/curso/Tema2/figura15.png', alt='Hombre organizando fibras vegetales teñidas de varios colores, como azul, verde, rosa, rojo y amarillo, posiblemente utilizadas para artesanías o tejidos tradicionales.')
            .row(titulo="Clasificación de las fibras")
              .col-md-12.mb-4.mb-md-0
                p Las fibras se clasifican según su origen, entre ellas se tienen dos grandes grupos, las naturales y químicas y estas a su vez se subdividen, en la siguiente tabla se presenta la clasificación. 
                .titulo-sexto.color-acento-contenido.mb-4
                  h5 Tabla 6. 
                  span   Clasificación de las fibras
                .tabla-a
                  table(style="width:auto; table-layout:auto; border-collapse:collapse; background-color:white; border:1px solid #ddd;" alt='Clasificación las fibras textiles en dos grandes grupos: fibras naturales y fibras químicas, según su origen y composición.')
                    caption(style="caption-side:bottom; text-align:left; font-size:0.9em; color:#555;") Fuente: El rincón de celeste cielo, (2015)
                    tbody
                      //--- FIBRAS NATURALES
                      tr
                        td.texto-izquierda(rowspan="7" style="background-color:#f8b75d; font-weight:bold; border:1px solid #ddd; padding:8px;") Fibras naturales
                        td.texto-izquierda(rowspan="2" style="border:1px solid #ddd; padding:8px;") Animales
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Procedentes de glándulas sedosas
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Seda, seda salvaje.
                      tr
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Procedentes de folículos pilosos
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Pelo de alpaca, angora, buey, caballo, conejo, castor, camello, cachemira, cabra guanaco, llama, nutria, vicuña, yak.
                      tr
                        td.texto-izquierda(rowspan="4" style="border:1px solid #ddd; padding:8px;") Vegetales
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Procedentes de las semillas
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Algodón.
                      tr
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Procedentes del tallo
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Lino, cáñamo, yute, ramio.
                      tr
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Procedentes de la hoja
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Esparto, sisal.
                      tr
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Procedentes del fruto
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Coco.
                      tr
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Minerales
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Asbestos, fibra de vidrio, fibra de carbono
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") -

                      //--- FIBRAS QUÍMICAS
                      tr
                        td.texto-izquierda(rowspan="6" style="background-color:#f8b75d; font-weight:bold; border:1px solid #ddd; padding:8px;") Fibras químicas
                        td.texto-izquierda(rowspan="3" style="border:1px solid #ddd; padding:8px;") Artificiales
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Base proteínica
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") De la caseína de la leche (fibroína), de algas (alginato).
                      tr
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Base celulósica
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Rayones (viscosa, cupró, acetato).
                      tr
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Base metálica
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Oro, plata, cobre.
                      tr
                        td.texto-izquierda(rowspan="3" style="border:1px solid #ddd; padding:8px;") Sintéticas
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Por polimerización
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Polivinilo, poliacrílicos.
                      tr
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Por condensación
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Poliéster (tergal), poliamida (#[em nylon]).
                      tr
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Por poliadición
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Poliuretano, poliespanoes.
            .row(titulo="Hilos e hilatura")
              .col-md-12.mb-4.mb-md-0
                p.bg-1.p-4 Se denomina hilo al conjunto de fibras textiles, continuas o discontinuas, que se tuercen juntas alcanzando una gran longitud y que es directamente empleado para la fabricación de tejidos, a su vez, hilatura al arte de hilar los filamentos para obtener un conjunto de hebras preparadas para el proceso de construcción de hilos y tejidos. 
                .titulo-sexto.color-acento-contenido.mb-4
                  h5 Figura 16. 
                  span Hilaturas
                img(src='@/assets/curso/Tema2/figura16.png', alt='Representación de procesos de hilado artesanal e industrial, que incluyen el tejido manual en telar, el manejo de hilos y la producción mecanizada de bobinas en una fábrica textil. ')
          
            .row(titulo="Tejidos").justify-content-center
              .col-lg-4.mb-4.mb-md-0
                p.bg-1.p-4 Son estructuras fabricadas a partir de fibras o hilos que presentan una relación proporcional entre su longitud, área y espesor, y que cuentan con la resistencia mecánica suficiente para mantener su cohesión  (#[em Textile Terms and Definitions, The Textile Institute], citado por el SENA). <br> <br> Los tejidos se clasifican en dos grandes grupos: los tejidos planos, que se forman por el entrecruzamiento perpendicular de hilos de urdimbre y trama, y los tejidos de punto, que se construyen mediante el entrelazado de bucles o mallas. Además, existen estructuras no tejidas, obtenidas por medios tecnológicos como el prensado, el termofijado o la impresión, sin requerir un entrelazado de hilos tradicional.
              .col-md-7.mb-4.mb-md-0
                .titulo-sexto.color-acento-contenido.mb-4
                  h5 Tabla 7.
                  span Clasificación de tejidos
                .tabla-a.align-items-center
                  table(style="width:auto; table-layout:auto; border-collapse:collapse; background-color:white; border:1px solid #ddd;" alt='Tabla con la clasificación de los tejidos en dos grandes grupos: telas tejidas y telas no tejidas. Dentro de las telas tejidas se encuentran los tejidos planos, que incluyen ligamentos fundamentales como tafetán, sarga y raso; ligamentos derivados como esterilla, espina y sarga interrumpida; y otros como dobby, jacquard y afelpados. También se clasifican los tejidos de punto, divididos en tejidos por trama (jersey, lacoste, rib, interlock, piqué) y por urdimbre (tricot y raschell). Por último, las telas no tejidas comprenden materiales como interlones, guatas y entretelas.')
                    caption(style="caption-side:bottom; text-align:left; font-size:0.9em; color:#555;") Fuente: SENA, (2020)
                    tbody
                      //--- TELAS TEJIDAS (7 plano + 4 punto = 11 filas)
                      tr
                        td.texto-izquierda(rowspan="11" style="background-color:#f8b75d; font-weight:bold; border:1px solid #ddd; padding:8px; vertical-align:middle;") Telas tejidas
                        // --- PLANO (total 7 filas)
                        td.texto-izquierda(rowspan="7" style="border:1px solid #ddd; padding:8px; vertical-align:top;") Plano
                        td.texto-izquierda(rowspan="3" style="border:1px solid #ddd; padding:8px; vertical-align:top;") Ligamentos fundamentales
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Tafetán
                      tr
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Sarga (diagonal)
                      tr
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Raso o satén
                      tr
                        td.texto-izquierda(rowspan="3" style="border:1px solid #ddd; padding:8px; vertical-align:top;") Ligamentos derivados
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Esterilla/canasta
                      tr
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Espina/espiga
                      tr
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Sarga interrumpida (#[em broken twill])
                      tr
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Otros
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") #[em Dobby, jacquard,] afelpados etc.

                      // --- PUNTO (4 filas)
                      tr
                        td.texto-izquierda(rowspan="4" style="border:1px solid #ddd; padding:8px; vertical-align:top;") Punto
                        td.texto-izquierda(rowspan="2" style="border:1px solid #ddd; padding:8px; vertical-align:top;") Por trama
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Sencillo (#[em jersey,] lacoste)
                      tr
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") Doble (#[em rib] o resortado, #[em interlock], piqué)
                      tr
                        td.texto-izquierda(rowspan="2" style="border:1px solid #ddd; padding:8px; vertical-align:top;") Por urdimbre
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") #[em Tricot]
                      tr
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") #[em Raschel]

                      //--- TELAS NO TEJIDAS (con <br>)
                      tr
                        td.texto-izquierda(style="background-color:#f8b75d; font-weight:bold; border:1px solid #ddd; padding:8px; vertical-align:middle;") Telas no tejidas
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") 
                          | Interlones
                          br
                          | Guatas
                          br
                          | Entretelas
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") No aplica
                        td.texto-izquierda(style="border:1px solid #ddd; padding:8px;") No aplica
                  
    .row.justify-content-center.align-items-center.mb-4.bg-26.p-4(data-aos='fade-right')
      .col-lg-2.col-4.mb-3.col-md-3
        img(src='@/assets/curso/Tema2/ico2.svg', alt='')
      .col-lg-9
        p La caracterización de los textiles se organiza con base en el comportamiento del material, lo cual incluye aspectos como su peso, estructura, fluidez, capacidad de expansión y compresión. Las propiedades determinan cómo se adapta el textil al cuerpo, su caída, su uso adecuado y su respuesta frente a distintos procesos de confección.
        p A continuación, se describen los aspectos más relevantes asociados a cada una de estas propiedades, permitiendo comprender mejor las posibilidades de uso y manipulación del material en diferentes contextos.


    .tarjeta.bg-3.p-3.py-md-4(data-aos="fade").mb-3
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/video.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.bg1color Caracterización de los textiles
                p.mb-0.text-white Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace.
              .col-sm-auto
                a.boton.color-acento-botones(:href="('https://youtu.be/kL9UYOzJD3o')" target="_blank")
                  span Ir al sitio
                  i.fas.fa-circle-play

    .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema1/figura_subt.svg")
        h3.ps-3.pe-4.mb-0 Aprovechamiento

    p.mb-4 El aprovechamiento por metro de tela consiste en determinar cuánta tela se utiliza realmente para confeccionar una prenda en relación con la cantidad total comprada. Este cálculo es crucial para optimizar costos, minimizar desperdicios y mejorar la eficiencia en producción.
    .subt2.mb-5(data-aos="fade")    
        h3.pb-1.mb-0 Pasos para determinar el aprovechamiento

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-6
        LineaTiempoD.color-primario.mb-4
          .row(numero="a" titulo="Trazado de las piezas del patrón")
            .col-md-12.mb-4.mb-md-0
              p Colocar las piezas del patrón sobre la tela respetando:
              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-angle-right2.mb-0
                  |El sentido del hilo (dirección de la urdimbre).
                li.mb-0
                  i.fas.fa-angle-right2.mb-0
                  |Los márgenes de costura.
                li.mb-0
                  i.fas.fa-angle-right2.mb-0
                  |El sentido del diseño o estampado, si aplica.

          .row(numero="b" titulo="Distribución y encaje de piezas")
            .col-md-12
              p Organizar las piezas para que ocupen el menor espacio posible dentro del ancho de la tela (normalmente 1,40 m o 1,50 m). Aquí se busca una disposición eficiente, como encajar piezas en ángulos o rotarlas si el diseño lo permite.

          .row(numero="c" titulo="Medición de tela usada")
            .col-md-12.mb-4.mb-md-0
              p Medir el largo total de tela utilizado una vez acomodadas todas las piezas. Por ejemplo, si las piezas distribuidas ocupan 0,95 metros del total de 1 metro adquirido, ese será su valor de uso real.
          .row(numero="d" titulo="Cálculo del aprovechamiento")
            .col-md-12.mb-4.mb-md-0
              p La fórmula para calcular el aprovechamiento es:
              img(src='@/assets/curso/Tema2/formu.svg', alt='Expresión matemática que define el porcentaje de aprovechamiento del material textil, calculado dividiendo el área útil ocupada por los patrones entre el área total del metro de tela y multiplicando el resultado por cien, para obtener porcentaje.')
              p Área ocupada por los patrones: 1,15 m².
              h5 Ejemplo de aplicación
              h5 Aprovechamiento = (1,15  /  1,5) * 100 = 76,67 %
          .row(numero="e" titulo="Factores que afectan el aprovechamiento")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.fas.fa-angle-right2.mb-0
                  p.mb-0 #[b Forma y número de piezas:] prendas con muchas piezas pequeñas tienden a generar más sobrantes.
                li.mb-3.d-flex
                  i.fas.fa-angle-right2.mb-0
                  p.mb-0 #[b Ancho de la tela:]  a mayor ancho, más oportunidades de optimización.
                li.mb-3.d-flex
                  i.fas.fa-angle-right2.mb-0
                  p.mb-0 #[b Diseño o estampado:]  telas con dibujos direccionados limitan la rotación de piezas.
                li.mb-3.d-flex
                  i.fas.fa-angle-right2.mb-0
                  p.mb-0 #[b Técnicas de corte:]  el uso de #[em software] de corte o corte manual puede influir en el rendimiento.
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          .row(numero="f" titulo="Consideraciones adicionales")
            .col-md-12.mb-4.mb-md-0
              p Siempre se recomienda dejar un margen de seguridad del 5 - 10 % al comprar tela.
              p El uso de retales sobrantes en otras prendas o complementos puede mejorar el rendimiento general.
      .col-lg-5.col-10.col-md-8(data-aos='fade-right')
        img(src='@/assets/curso/Tema2/img17.png', alt='')






























</template>

<script>
export default {
  name: 'Tema2',
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
