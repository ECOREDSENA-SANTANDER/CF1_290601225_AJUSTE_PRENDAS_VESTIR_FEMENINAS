<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipología de Prendas Femeninas

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
                  td.texto-izquierda Prenda inferior separada; ofrece versatilidad desde looks informales hasta estilos más estructurados.
                tr
                  td.texto-izquierda Blusas y tops
                  td.texto-izquierda Camisas, blusas de manga larga, crop tops, túnicas.
                  td.texto-izquierda Prenda superior ligera; puede incorporar detalles de volantes, drapeados o cortes asimétricos para diferentes siluetas.
                tr
                  td.texto-izquierda Pantalones
                  td.texto-izquierda Jeans, palazzo, pitillo, #[en jogger].
                  td.texto-izquierda Prenda inferior con múltiples cortes y tejidos; combina confort y estilo según el ajuste y el material.
                tr
                  td.texto-izquierda Chaquetas y abrigos
                  td.texto-izquierda Blazer, trench, bomber, abrigo. largo
                  td.texto-izquierda Prenda exterior destinada a aportar estructura y abrigo; su diseño define el nivel de formalidad y protección.
                tr
                  td.texto-izquierda Monos y enterizos
                  td.texto-izquierda Jumpsuit, peto, overol.
                  td.texto-izquierda Prenda de una sola pieza con torso y pantalón; combina funcionalidad y estética en un solo elemento.
                tr
                  td.texto-izquierda Fajas y corsetería
                  td.texto-izquierda Faja moldeadora, corsé, body.
                  td.texto-izquierda Prenda de ajuste que redefine la silueta; se emplea tanto como base estructural como prenda de exterior según el diseño.

    .bg-22(data-aos='fade-right')
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-11.p-4
          p A continuación, se describen diversas tipologías de prendas junto con sus representaciones correspondientes, lo cual facilita la identificación y comprensión de cada diseño. Las representaciones permiten reconocer con mayor claridad las diferencias entre estilos, favoreciendo tanto la comunicación técnica como la toma de decisiones en procesos de confección y ajuste:

    TabsC.color-primario.mb-5(data-aos="fade")
      .bg-11.py-4.py-md-5(titulo="Vestido")
        .row.justify-content-center.align-items-center
          .col-10.col-md-8.col-lg-3.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 7.
              span Tipologías de vestido
            img(src='@/assets/curso/Tema2/figura7.png', alt='Conjunto de quince ilustraciones distribuidas en tres filas. Cada una representa una prenda superior o de una sola pieza de uso femenino, con variaciones en escote, mangas, largos, siluetas y cortes. Se incluyen vestidos, blusas, chaquetas y faldas con diferentes estructuras, desde ajustadas hasta sueltas, y con múltiples diseños en cuello, cintura y terminaciones.')
          .col-10.col-lg-6
            p Es una prenda de una sola pieza que cubre el torso y parte de las piernas. Las prendas de vestir son piezas textiles diseñadas para cubrir o adornar el cuerpo, y se clasifican según su forma y uso.
      .bg-11.py-4.py-md-5(titulo="Falda")
        .row.justify-content-center.align-items-center
          .col-10.col-md-8.col-lg-3.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 8. 
              span Tipologías de faldas
            img(src='@/assets/curso/Tema2/figura8.png', alt='Conjunto de quince ilustraciones de faldas organizadas en tres filas. Cada imagen representa una tipología diferente, identificada con un nombre en la parte inferior. Las variaciones incluyen estructuras como línea A, godet, plisada, lápiz, asimétrica, cruzada, circular, con volantes o tipo sirena. Las formas abarcan desde diseños ajustados hasta voluminosos, con longitudes y caídas diversas.')
          .col-10.col-lg-6
            p Es una prenda de vestir que cubre desde la cintura hacia abajo, dejando descubiertos las piernas. Puede variar en largo, forma y estilo, adaptándose a diferentes usos y contextos.

      .bg-11.py-4.py-md-5(titulo="Tops y blusas")
        .row.justify-content-center.align-items-center
          .col-10.col-md-8.col-lg-3.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 9. 
              span Tipologías de tops y blusas
            img(src='@/assets/curso/Tema2/figura9.png', alt='Conjunto de dieciocho escotes femeninos representados mediante siluetas. Se incluyen formas cerradas, redondeadas, en punta, con aberturas pequeñas, líneas rectas, curvas suaves y estructuras asimétricas. Algunos cubren por completo el cuello, otros dejan los hombros libres o incorporan tiras delgadas. También hay diseños con cortes en diagonal, cruces frontales, curvas profundas o elementos que se ajustan desde el cuello, mostrando una variedad de estilos que modelan el área superior del torso.')
          .col-10.col-lg-6
            p Prendas superiores que cubren el torso. El top suele ser una prenda más corta y ajustada, de estilo informal. La blusa, en cambio, es más suelta, versátil y común en contextos formales o semiformales.

      .bg-11.py-4.py-md-5(titulo="Pantalones")
        .row.justify-content-center.align-items-center
          .col-10.col-md-8.col-lg-3.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 10. 
              span Tipologías de pantalones
            img(src='@/assets/curso/Tema2/figura10.png', alt='Conjunto de doce ilustraciones de pantalones distribuidos en dos filas. Cada figura representa una silueta distinta, con variaciones en el ajuste, caída y largo. Hay modelos ajustados al cuerpo, rectos, con corte acampanado, amplios desde la cadera o de piernas anchas. También se incluyen versiones con el ruedo ceñido, formas relajadas, estructuras sueltas o versiones cortas por encima de la rodilla.')
          .col-10.col-lg-6
            p Son prendas de vestir que cubren desde la cintura hasta los tobillos, dividiendo el cuerpo en dos partes. Existen en diversas formas, largos y estilos, y se adaptan tanto a usos formales como informales.  
      .bg-11.py-4.py-md-5(titulo="Chaquetas ")
        .row.justify-content-center.align-items-center
          .col-10.col-md-8.col-lg-3.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 11. 
              span Tipologías de chaquetas
            img(src='@/assets/curso/Tema2/figura11.png', alt='Nueve ilustraciones de chaquetas con distintas estructuras. Algunas tienen solapas anchas, otros cierres visibles, cortes rectos o ajustados. Variaciones en cuello, bolsillos y longitud definen cada diseño.')
          .col-10.col-lg-6
            p Prendas superiores que cubren el torso. El top suele ser una prenda más corta y ajustada, de estilo informal. La blusa, en cambio, es más suelta, versátil y común en contextos formales o semiformales.
      .bg-11.py-4.py-md-5(titulo="Abrigos")
        .row.justify-content-center.align-items-center
          .col-10.col-md-8.col-lg-3.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 12. 
              span Tipos de abrigos
            img(src='@/assets/curso/Tema2/figura12.png', alt='Nueve ilustraciones de abrigos largos con variaciones en cuello, número de botones, bolsillos y proporción. Algunos tienen doble fila de cierre, otros capucha o solapas amplias. Las siluetas van desde entalladas hasta rectas.')
          .col-10.col-lg-6
            p Prendas exteriores largas y gruesas, diseñadas para brindar protección contra el frío. Cubren el torso y generalmente, llegan hasta las piernas.

      .bg-11.py-4.py-md-5(titulo="Enterizos")
        .row.justify-content-center.align-items-center
          .col-10.col-md-8.col-lg-3.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 13. 
              span Tipos de enterizos
            img(src='@/assets/curso/Tema2/figura13.png', alt='Veinticuatro ilustraciones de enterizos femeninos distribuidos en tres filas. Incluyen versiones largas y cortas, con diferentes tipos de mangas, tirantes, escotes y cortes. Las siluetas varían entre ajustadas, rectas y amplias.')
          .col-10.col-lg-6
            p Son prendas de una sola pieza que combinan parte superior e inferior, cubriendo torso y piernas. Se usan en estilos formales e informales y varían en corte, largo y material.
      
      .bg-11.py-4.py-md-5(titulo="Vestido")
        .row.justify-content-center.align-items-center
          .col-10.col-md-8.col-lg-3.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 14. 
              span Tipos de corsets
            img(src='@/assets/curso/Tema2/figura14.png', alt='Ocho ilustraciones técnicas de prendas superiores ajustadas tipo corsé, organizadas en dos filas. Cada una presenta variaciones en longitud, presencia o ausencia de tirantes, cortes verticales, estructura de copas y terminaciones inferiores.')
          .col-10.col-lg-6
            p prendas ajustadas que rodean el torso, diseñadas para moldear la figura, en especial la cintura. Pueden usarse como ropa interior o exterior, y combinan función estética y soporte estructural.

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
                a.boton.color-acento-botones(:href="('https://youtu.be/MPaIS2YaAXM')" target="_blank")
                  span Ir al video
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
                            li.mb-0
                              i.fas.fa-angle-right2
                              |#[em Kakiwear.]
                            li.mb-0
                              i.fas.fa-angle-right2
                              |#[em Jeanswear.]
                          .col-lg-3
                            li.mb-0
                              i.fas.fa-angle-right2
                              |#[em Sportswear.]
                            li.mb-0
                              i.fas.fa-angle-right2
                              |#[em Activewear.]
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
                a.boton.color-acento-botones(:href="('https://youtu.be/YXT2HTjiB3Q')" target="_blank")
                  span Ir al video
                  i.fas.fa-circle-play

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2.	Tipos de ajuste en prendas


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4.bg-10(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/Tema2/img05.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Los ajustes más habituales varían en función de la categoría de la prenda y responden a las particularidades de su corte, confección y funcionalidad. En vestidos, predominan las intervenciones de talle y largo para armonizar proporciones; en faldas, los cambios de cinturilla y vuelo permiten adaptar el volumen al estilo deseado; en blusas y tops, la corrección de contorno de busto y la longitud de torso garantizan un calce ergonómico; en pantalones, la modificación de tiro y pernera optimiza confort y movilidad; en chaquetas y abrigos, el entallado de tronco y el acortado de mangas aseguran una silueta definida; en monos y enterizos, el ajuste de torso y tirantes evita pliegues indeseados; y en fajas o corsetería, la regulación de compresión y el refuerzo de costuras equilibran sujeción y durabilidad. Cada intervención se diseña para preservar la integridad estructural del textil y satisfacer las expectativas estéticas y funcionales de la persona usuaria.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 5. 
            span Ajustes más comunes en las prendas de vestir femeninas
          img(src='@/assets/curso/Tema2/tabla5.svg', alt='')
          figcaption Fuente: SENA, (2025)

    
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Los textiles

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
                img(src='@/assets/curso/Tema2/tabla6.svg', alt='Clasificación las fibras textiles en dos grandes grupos: fibras naturales y fibras químicas, según su origen y composición.')
                figcaption Fuente: El rincón de celeste cielo, (2015)
            .row(titulo="Hilos e hilatura")
              .col-md-12.mb-4.mb-md-0
                p.bg-1.p-4 Se denomina hilo al conjunto de fibras textiles, continuas o discontinuas, que se tuercen juntas alcanzando una gran longitud y que es directamente empleado para la fabricación de tejidos, a su vez, hilatura al arte de hilar los filamentos para obtener un conjunto de hebras preparadas para el proceso de construcción de hilos y tejidos. 
                .titulo-sexto.color-acento-contenido.mb-4
                  h5 Figura 16. 
                  span Hilaturas
                img(src='@/assets/curso/Tema2/figura16.png', alt='Tres escenas relacionadas con las hiladuras: a la izquierda, husos con hilos enrollados; al centro, un telar en funcionamiento con hilos de colores; y a la derecha, unas manos sostienen madejas de lana teñida.')
          
            .row(titulo="Tejidos").justify-content-center
              .col-lg-4.mb-4.mb-md-0
                p.bg-1.p-4 Son estructuras fabricadas a partir de fibras o hilos que presentan una relación proporcional entre su longitud, área y espesor, y que cuentan con la resistencia mecánica suficiente para mantener su cohesión (Textile Terms and Definitions, The Textile Institute, citado por el SENA). <br> <br> Los tejidos se clasifican en dos grandes grupos: los tejidos planos, que se forman por el entrecruzamiento perpendicular de hilos de urdimbre y trama, y los tejidos de punto, que se construyen mediante el entrelazado de bucles o mallas. Además, existen estructuras no tejidas, obtenidas por medios tecnológicos como el prensado, el termofijado o la impresión, sin requerir un entrelazado de hilos tradicional.
              .col-md-7.mb-4.mb-md-0
                .titulo-sexto.color-acento-contenido.mb-4
                  h5 Tabla 7.
                  span Clasificación de tejidos
                img(src='@/assets/curso/Tema2/tabla7.svg', alt='Informacion para la línea: En esa frase deben ir en mayúscula los nombres propios y las siglas institucionales. Así corregido: (Textile Terms and Definitions, The Textile Institute, citado por el SENA). Explicación: •	Textile Terms and Definitions: es el título de una obra, por lo tanto va en mayúscula inicial en cada palabra principal en inglés (según normas de estilo en títulos). •	The Textile Institute: es el nombre propio de una institución, por lo tanto en mayúscula.')
                figcaption Fuente: SENA, (2020)
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
                h4.mb-1.bg1color Sesión 6 - Caracterización de los textiles
                p.mb-0.text-white Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace.
              .col-sm-auto
                a.boton.color-acento-botones(:href="('https://youtu.be/mc1kARHDHrs')" target="_blank")
                  span Ir al video
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
              img(src='@/assets/curso/Tema2/formu.svg', alt='')
              p Área ocupada por los patrones: 1,15 m².
              h5 Ejemplo de aplicación
              h5 Aprovechamiento = (1,15  /  1,5) * 100 = 76,67 %
          .reacondicionarow(numero="d" titulo="Consideraciones adicionales")
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
