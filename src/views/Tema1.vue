<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Desarrollo de contenidos
    
      .bg-5.mb-5(data-aos="fade-left")
        .row.align-items-center 
          .col-lg-7
            .p-4.p-lg-5
              h4.mb-2.bg-15.text-white.col-lg-2.text-center El cliente
              p El concepto de cliente se tomará en este espacio como #[b “persona cliente”] el cual engloba a cualquier individuo, colectivo u organización que, al identificar una necesidad, expectativa o dificultad concreta, opta por transferir recursos monetarios o de otra índole a cambio de una solución presentada como producto, servicio o experiencia. Hoy en día, se reconoce que la persona cliente no se limita a consumir lo que la entidad pone a disposición, sino que interviene de manera activa en la generación de valor: aporta información relevante, evalúa la propuesta y colabora en su perfeccionamiento continuo.
              p.mb-0 Desde un enfoque relacional, la interacción con la persona cliente se entiende como un proceso evolutivo que abarca todas las etapas del ciclo de consumo. Dichas etapas incluyen el reconocimiento de la necesidad, la exploración de alternativas, la adquisición, el uso o disfrute y todo lo que implica el servicio postventa. Para cada fase se diseñan estrategias específicas, dado que las expectativas y demandas varían conforme avanza la experiencia.
          .col-lg-5.col-md-12.d-none.d-lg-block
            img(src='@/assets/curso/Tema1/img01.png', alt='')


      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-6
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1. 
            span El cliente
          img.mb-3.d-none.d-lg-block(src='@/assets/curso/Tema1/figura1.png', alt='Dos personas están de pie frente a frente. Una sostiene una caja con el texto “donation clothes” en el centro. La otra persona tiene los brazos ligeramente abiertos. En el fondo varias cajas apiladas, una prenda colgada en un perchero y una planta junto a una mesa.')
        .col-lg-6
          p En el ámbito de la confección, la persona cliente constituye el eje central de todo el proceso productivo, es quien adquiere una prenda, sea de manera individual, colectiva o empresarial, define los parámetros de diseño, ajuste, calidad y sostenibilidad que guiarán desde la planificación de la colección hasta la entrega final. Su requerimiento coordina las áreas de diseño, patronaje, aprovisionamiento y mercadeo, transformando la creación de valor en una relación bidireccional que sostiene tanto la rentabilidad como la reputación de la marca.
          p.bg-1.p-4 la etapa de ajuste de prendas, la comprensión de la persona cliente  es fundamental para articular cada intervención, pues con el análisis detallado de sus expectativas funcionales, estéticas y sensoriales, el equipo de confección traduce esas necesidades en modificaciones precisas de silueta, patrón y acabados. La aproximación técnica garantiza que ajustes como entalles, variaciones de largo o modificaciones de la caída cumplan con los estándares de confort, usabilidad y satisfacción del cliente, fortaleciendo así el vínculo de confianza mutua.

      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1.	Tipos de cliente y su relación 

      .row.justify-content-center.mb-3(data-aos="fade-left")
        .col-lg-4.bg-14.p-4.mb-4
          p.mb-0 Comprender a la persona cliente es fundamental para ofrecer un servicio personalizado y de calidad, su clasificación permite adaptar la atención, anticiparse a sus necesidades y construir relaciones duraderas, es así como la persona cliente puede clasificarse según su comportamiento, nivel de relación y valor económico para el negocio así:
        .col-lg-4.mb-3.col-md-9
          img(src='@/assets/curso/Tema1/img02.svg', alt='')
        .col-lg-4
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Por comportamiento: se identifican clientes decididos, analíticos, expresivos o reservados. 
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Según la relación: pueden ser nuevos, frecuentes o leales.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 En términos económicos: se diferencian clientes de alto valor, estratégicos o de bajo impacto.
          p Esta clasificación permite ajustar la atención, mejorar la experiencia del servicio y optimizar la relación comercial. 

      .fondo_t1.p-4
        .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
          .col-lg-12
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 2. 
              span Clasificación de clientes
          .col-lg-8.mb-2 
            img(src='@/assets/curso/Tema1/figura2.svg', alt='La figura presenta una pirámide dividida en cinco niveles, donde cada uno representa un aspecto clave relacionado con la clasificación de clientes. De forma ascendente, se abordan los siguientes elementos: la mejor opción para la clasificación de clientes, los riesgos de no categorizar a los clientes, los beneficios de la clasificación, la importancia de categorizar y, en la cúspide, la comprensión de los diferentes tipos de clientes. Este enfoque jerárquico destaca la progresión necesaria para una gestión estratégica y efectiva del cliente.')
      .col-lg-12.mb-4
        figcaption Fuente: https://fastercapital.com/es/i-es/Categorizacion-de-inversores-MiFID--como-clasificar-a-los-clientes--La-importancia-de-la-clasificaci-n-de-clientes.webp

      .tarjeta.bg-3.p-3.py-md-4(data-aos="fade").mb-3
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/video.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.bg1color La importancia de la clasificación de los clientes
                p.mb-0.text-white Como complemento, se recomienda visitar la siguiente página web para ampliar la información.
              .col-sm-auto
                a.boton.color-acento-botones(:href="('https://fastercapital.com/es/tema/la-importancia-de-la-clasificaci%C3%B3n-de-clientes.html/1')" target="_blank")
                  span Ir al sitio
                  i.fas.fa-link

      p.mb-3 A continuación, se describen las categorías más relevantes (Kotler & Keller, 2016):

      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema1/figura_subt.svg")
        h3.ps-3.pe-4.mb-0 Según el ciclo de relación de la persona cliente

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-8
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Persona cliente potencial")
              .col-md-12.mb-4.mb-md-0
                p Identifica una necesidad, pero aún no ha realizado una transacción; su perfil se construye a partir de datos demográficos, intereses y comportamientos de búsqueda.

            .row(titulo="Persona cliente nueva")
              .col-md-12.mb-4.mb-md-0
                p Ha efectuado su primera compra y se encuentra en la fase de evaluación de la propuesta; su experiencia podría determinar su paso hacia la fidelización.
            .row(titulo="Persona cliente recurrente ")
              .col-md-12.mb-4.mb-md-0
                p Adquiere con cierta periodicidad y ya confía en la oferta; participa activamente en el #[em feedback] y colabora con comentarios o valoraciones.
            .row(titulo="Persona cliente leal")
              .col-md-12.mb-4.mb-md-0
                p Mantiene un vínculo prolongado y actúa como promotor al recomendar la marca; su valor de por vida (#[em lifetime value]) suele ser superior al promedio.
            .row(titulo="Persona ex–cliente")
              .col-md-12.mb-4.mb-md-0
                p Interrumpió la relación por diversas causas, su análisis aporta indicadores de mejora en procesos de retención.
        .col-lg-4.col-7.col-md-6
          img(src="@/assets/curso/Tema1/img02.png")

      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema1/figura_subt.svg")
        h3.ps-3.pe-4.mb-0 Según el comportamiento de compra

      .row.justify-content-center.mb-5.fondo_t1_1.p-4(data-aos="fade-left")
        .col-lg-12.mb-4.mb-lg-0(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido
            h5 Figura 3. 
            span Relación con el cliente
        .col-lg-6.col-md-7
          img(src="@/assets/curso/Tema1/img03.svg", alt='Dos personas están sentadas frente a frente y se dan la mano sobre una mesa. Una de ellas sostiene varias bolsas con asas. Detrás hay una pantalla o cartel con íconos de comunicación y comercio, acompañados de una lista con marcas de verificación.')

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-lg-7.bg-16.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-11.p-4
              ul.lista-ul--color.mb-2
                li.d-flex.mb-0
                  i.far.fa-circle
                  h5.mb-0 Persona cliente racional
                .row
                  .col-lg-12
                    p.px-4 Basa su decisión en análisis comparativo de características, precio y valor percibido; demanda información técnica detallada.
                li.d-flex.mb-0
                  i.far.fa-circle
                  h5.mb-0 Persona cliente impulsiva

                .row
                  .col-lg-12
                    p.px-4 Realiza adquisiciones motivadas por estímulos emocionales o promociones puntuales; valora la inmediatez y la experiencia sensorial.

                li.d-flex.mb-0
                  i.far.fa-circle
                  h5.mb-0 Persona cliente exploradora:

                .row
                  .col-lg-12
                    p.px-4 Prueba productos o servicios nuevos constantemente; su feedback es valioso para innovación y desarrollo.
        .col-lg-5.col-9
          img(src='@/assets/curso/Tema1/img04.png', alt='')


      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema1/figura_subt.svg")
        h3.ps-3.pe-4.mb-0 Según el impacto económico

      .row.justify-content-center.mb-2(data-aos="fade-left")
        .col-lg-6.col-9.mb-3.d-none.d-lg-block
          img(src='@/assets/curso/Tema1/img05.png', alt='')
        .col-lg-6 
          .row.justify-content-center.mb-3(data-aos="fade-down")
            .col-lg-6.col-md-6.mb-3
              .tarjeta.tarjeta-btn.p-4.h-100
                img.mb-3(src='@/assets/curso/Tema1/ico1.svg', alt='')
                .title.mb-4
                  h4.text-center.mb-0 Persona cliente premium
                .row.justify-content-center.align-items-center.mb-2
                  .col-lg-10
                    p.text-center Representa un alto gasto unitario y exige estándares superiores de calidad y personalización; justifica inversiones específicas en diseño y servicio.

            .col-lg-6.col-md-6.mb-3    
              .tarjeta.tarjeta-btn.p-4.h-100
                img.mb-3(src='@/assets/curso/Tema1/ico2.svg', alt='')
                .title.mb-4
                  h4.text-center.mb-0 Persona cliente masivo
                .row.justify-content-center.align-items-center.mb-2
                  .col-lg-10
                    p.text-center Caracteriza volúmenes elevados de compra a bajo precio unitario; impulsa economías de escala en producción y logística.


      .subt2.mb-5(data-aos="fade")    
        h3.pb-1.mb-0 Clasificación de la persona cliente en servicios de modistería para ajuste de prendas

      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-5
          p En modistería, la persona cliente para ajuste de prendas puede agruparse atendiendo a sus necesidades, frecuencia de servicio y perfil de exigencia. A continuación, se describen las categorías más relevantes:
          .titulo-sexto.color-acento-contenido
            h5 Figura 4. 
            span Relación con el cliente
          .col-lg-12
            img(src="@/assets/curso/Tema1/img06.svg", alt='Ocho personas interactúan en diferentes situaciones relacionadas con la compra de ropa. En la parte superior izquierda, dos personas observan una prenda; una de ellas la sostiene frente a la otra. En el centro superior, una persona está en un punto de pago con otra detrás del mostrador. A la derecha, una persona ofrece una prenda a otra. En la parte inferior izquierda, una persona sostiene varias bolsas en ambas manos. En el centro inferior, otra también lleva múltiples bolsas. A la derecha, dos personas observan un vestido colocado en un maniquí.')
        .col-lg-7
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Persona cliente puntual")
              .col-md-12.mb-4.mb-md-0
                p Se trata de quien acude esporádicamente para corregir detalles específicos, como, por ejemplo; ajustar bajos, entallar cintura o modificar manga. Suele buscar un servicio ágil y de costo moderado, sin establecer un vínculo continuo con la modistería.
            .row(titulo="Persona cliente recurrente")
              .col-md-12.mb-4.mb-md-0
                p Mantiene una relación habitual con el taller, solicitando ajustes cada vez que incorpora nuevas prendas a su vestuario. Valora la coherencia en la talla y el estilo, así como el conocimiento previo de sus preferencias por parte del equipo de confección.
            .row(titulo="Persona cliente de trajes de gala")
              .col-md-12.mb-4.mb-md-0
                p Requiere servicios de máxima precisión y personalización: vestidos de ceremonia, trajes de gala o piezas de diseño exclusivo. Espera asesoría técnica sobre tejidos, cortes y acabados, así como un seguimiento detallado durante todo el proceso de prueba y ajuste.
            .row(titulo="Persona cliente de reparación y restauración")
              .col-md-12.mb-4.mb-md-0
                p Busca reacondicionar o reparar prendas desgastadas, rasgadas o con alteraciones de color. Prioriza la durabilidad y la fidelidad al diseño original, por lo que confía en la pericia de la modista para emplear técnicas de parcheo, refuerzo de costuras y recreación de detalles.
            .row(titulo="Persona cliente exprés")
              .col-md-12.mb-4.mb-md-0
                p Necesita ajustes en un plazo muy breve, ya sea para un evento imprevisto o por una urgencia de último minuto. Adquiere un servicio rápido que puede implicar un recargo, y valora la capacidad del taller para gestionar tiempos reducidos sin sacrificar calidad.
            .row(titulo="Persona cliente corporativa o grupal")
              .col-md-12.mb-4.mb-md-0
                p Representa a organizaciones, empresas o colectivos que requieren ajustes de uniformes o vestuario para eventos. Suelen negociar tarifas por volumen y establecen calendarios de entrega y revisiones periódicas, buscando eficiencia operativa y consistencia en la presentación.
            .row(titulo="Persona cliente de rehabilitación de patrón")
              .col-md-12.mb-4.mb-md-0
                p A diferencia de la simple corrección de medidas, solicita la modificación estructural del patrón base para adaptar el diseño a cambios corporales, estados posturales o necesidades especiales (por ejemplo, tallas inclusivas). Requiere un diagnóstico inicial detallado y varias sesiones de prueba.

      p.mb-4 Cada uno de estos perfiles implica protocolos de atención, tiempos de servicio y niveles de detalle distintos. Clasificar a la persona cliente en estas tipologías permite al taller de modistería optimizar recursos, definir cotizaciones precisas y garantizar un resultado que responda de manera adecuada a las expectativas funcionales, estéticas y temporales.

      separador
      #t_1_2.titulo-segundo.mb-5
        h2 1.2  Técnicas de atención al cliente

      .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
        .col-lg-5.col-md-8
          img.mb-3(src='@/assets/curso/Tema1/img07.png', alt='')
        .col-lg-7
          p Las técnicas de atención al cliente constituyen un conjunto de prácticas estructuradas que permiten a las organizaciones y talleres de servicio comprender, acompañar y satisfacer las expectativas de las personas usuarias de manera efectiva. Desde la escucha activa y la empatía profesional hasta la comunicación transparente y el seguimiento postventa, cada método se orienta a fortalecer la relación con la persona usuaria, garantizando claridad en los procesos, personalización en las soluciones y resolución ágil de inconvenientes. 
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2.col-4.col-md-2
              img(src='@/assets/curso/Tema1/icono.svg', alt='')
            .col-lg-10.bg-14.p-3.mb-3
              p En el contexto de modistería, estas estrategias universales se adaptan con protocolos específicos como; toma de medidas exhaustiva, pruebas sucesivas y control de calidad detallado, que aseguran ajustes precisos y una experiencia de servicio confiable y profesional.
          p A continuación, se presentan las técnicas empleadas en atención al cliente: 

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .tarjeta.tarjeta--azul.p-4
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center  
                .col-md-6.mb-3
                  figure
                    img(src='@/assets/curso/Tema1/img08.png', alt='Texto que describa la imagen')
                .col-lg-4.mb-4.mb-md-0
                  h4 Empatía profesional
                  p Se reconoce y valida el estado emocional de quien solicita el servicio (“entiendo que requiere un ajuste rápido para su evento”).
                  p Se emplea un tono cordial y cercano, pero respetuoso, que genere confianza y confort.
              .row.justify-content-center.align-items-center  
                .col-md-6.mb-3
                  figure
                    img(src='@/assets/curso/Tema1/img09.png', alt='Texto que describa la imagen')
                .col-lg-4.mb-4.mb-md-0
                  h4 Escucha activa
                  p El personal presta atención plena a los comentarios y preguntas de la persona usuaria, repitiendo o reformulando la información para confirmar la comprensión.
                  p Se utilizan preguntas abiertas (“¿cómo describiría sus necesidades?”) para promover la expresión detallada de expectativas.
            
              .row.justify-content-center.align-items-center  
                .col-md-6.mb-3
                  figure
                    img(src='@/assets/curso/Tema1/img10.png', alt='Texto que describa la imagen')
                .col-lg-4.mb-4.mb-md-0
                  h4 Comunicación clara y transparente
                  p Se informa de manera explícita sobre procesos, tiempos estimados y costos (“el plazo para este tipo de intervención es de 48 horas y el valor corresponde a…”). Se evita un lenguaje muy técnico sin explicación, o bien se aclara cada término especializado.
         
              .row.justify-content-center.align-items-center  
                .col-md-6.mb-3
                  figure
                    img(src='@/assets/curso/Tema1/img11.png', alt='Texto que describa la imagen')
                .col-lg-4.mb-4.mb-md-0
                  h4 Personalización de la experiencia
                  p Se registra el historial de interacciones y preferencias para ofrecer soluciones adaptadas (“en su última visita prefirió costuras invisibles…”).
                  p Se sugiere complementos o servicios adicionales relevantes al perfil de la persona usuaria.
         
              .row.justify-content-center.align-items-center  
                .col-md-6.mb-3
                  figure
                    img(src='@/assets/curso/Tema1/img12.png', alt='Texto que describa la imagen')
                .col-lg-4.mb-4.mb-md-0
                  h4 Gestión eficaz de reclamaciones y servicio
                  p Ante una insatisfacción, se aplica el protocolo “escuchar, disculparse, proponer solución”, minimizando tiempos de espera. Se ofrece una compensación proporcional (descuento, prioridad en la siguiente cita) cuando procede, reforzando la percepción de equidad.
     
              .row.justify-content-center.align-items-center  
                .col-md-6.mb-3
                  figure
                    img(src='@/assets/curso/Tema1/img13.png', alt='Texto que describa la imagen')
                .col-lg-4.mb-4.mb-md-0
                  h4 Seguimiento y retroalimentación continua
                  p Se contacta a la persona tras la entrega para verificar satisfacción (“¿el ajuste respondió a sus expectativas de comodidad?”).
                  p Se documenta la opinión recogida para alimentar políticas de mejora interna.
                
      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema1/figura_subt.svg")
        h3.ps-3.pe-4.mb-0 Técnicas de atención adaptadas al ajuste de prendas de vestir 

      p.mb-5 Hacen referencia a un conjunto de estrategias personalizadas que permiten atender al cliente de forma empática, precisa y eficiente durante el proceso de prueba, ajuste y modificación de las prendas; para ello es clave tener una comunicación asertiva, identificar las necesidades específicas del cuerpo del cliente, escuchar activamente, respetar la privacidad y gestionar expectativas frente al resultado final, garantizando así una experiencia satisfactoria y un servicio de alta calidad.

      SlyderF.circl-arrow.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-left")
        .tarjeta.tarjeta-btn.p-4.h-100
          img.mb-3(src='@/assets/curso/Tema1/1.svg', alt='')
          .title.mb-4
            h4.text-center.mb-0 Toma de medidas y registro detallado
          .row.justify-content-center.align-items-center.mb-2
            .col-lg-12
              p.text-center Se emplean cintas métricas y plantillas de papel o digital para anotar con precisión las dimensiones corporales y la forma de caída de la prenda.
        
        .tarjeta.tarjeta-btn.p-4.h-100
          img.mb-3(src='@/assets/curso/Tema1/2.svg', alt='')
          .title.mb-4
            h4.text-center.mb-0 Pruebas sucesivas en maniquí o en bastidor
          .row.justify-content-center.align-items-center.mb-2
            .col-lg-12
              p.text-center Se realiza un primer ajuste provisional sobre un maniquí calibrado con las medidas registradas, permitiendo visualizar la silueta antes de la prueba en persona. En cada prueba presencial, se señala con alfileres o marcadores las zonas que requieren entalle, alargue o reducción.
        .tarjeta.tarjeta-btn.p-4.h-100
          img.mb-3(src='@/assets/curso/Tema1/3.svg', alt='')
          .title.mb-4
            h4.text-center.mb-0 Asesoría en selección de materiales y acabados
          .row.justify-content-center.align-items-center.mb-2
            .col-lg-12
              p.text-center Se explica cómo afectan la elasticidad, el gramaje y la estructura de la tela al ajuste final. Es necesario proponer alternativas de hilos, forros y tipos de puntada que mejoran confort y durabilidad.
        
        .tarjeta.tarjeta-btn.p-4.h-100
          img.mb-3(src='@/assets/curso/Tema1/4.svg', alt='')
          .title.mb-4
            h4.text-center.mb-0 Programación de citas escalonadas 
          .row.justify-content-center.align-items-center.mb-2
            .col-lg-12
              p.text-center Se coordina una agenda de sesiones (primera prueba, ajustes intermedios y prueba final) con rangos de tiempo realistas para cada fase. Se concede prioridad a casos exprés bajo un recargo (opcional), asegurando entregas en plazos reducidos.
        
        .tarjeta.tarjeta-btn.p-4.h-100
          img.mb-3(src='@/assets/curso/Tema1/5.svg', alt='')
          .title.mb-4
            h4.text-center.mb-0 Control de calidad al cierre del servicio
          .row.justify-content-center.align-items-center.mb-2
            .col-lg-12
              p.text-center Antes de la entrega, se inspecciona cada costura y acabado con lupa o bastidor de iluminación, verificando uniformidad y resistencia. Se entrega la prenda en funda protectora (opcional), junto con indicaciones de uso y cuidado para preservar el ajuste logrado.
        
        .tarjeta.tarjeta-btn.p-4.h-100
          img.mb-3(src='@/assets/curso/Tema1/6.svg', alt='')
          .title.mb-4
            h4.text-center.mb-0 Control de calidad al cierre del servicio
          .row.justify-content-center.align-items-center.mb-2
            .col-lg-12
              p.text-center Antes de la entrega, se inspecciona cada costura y acabado con lupa o bastidor de iluminación, verificando uniformidad y resistencia. Se entrega la prenda en funda protectora (opcional), junto con indicaciones de uso y cuidado para preservar el ajuste logrado.
      
      p.mb-4 La siguiente tabla resume las principales técnicas de atención al cliente utilizadas durante el ajuste de prendas de vestir.
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 1. 
            span Comparativo entre técnicas de atención y las empleadas en el ajuste de prendas
          .tabla-a.color-acento-contenido 
            table(alt='Cuadro comparativo con dos columnas. La primera presenta técnicas de atención al cliente como escucha activa, empatía, comunicación, personalización, gestión de reclamos y seguimiento. La segunda expone técnicas de modistería y ajuste de prendas, como toma de medidas, pruebas, asesoría, programación de citas, control de calidad y registro de historial. Cada fila vincula ambos enfoques con descripciones breves.')
              thead
                tr
                  th.texto-izquierda.bg-17 Técnicas de atención al cliente
                  th.texto-izquierda.bg-17 Técnicas empleadas en modistería y ajuste de prendas
              tbody
                tr
                  td.texto-izquierda Escucha activa: atención plena a comentarios; uso de preguntas abiertas para clarificar necesidades.
                  td.texto-izquierda Toma de medidas detallada: registro preciso de dimensiones corporales en ficha técnica con fotografías.
                
                tr
                  td.texto-izquierda Empatía profesional: validación emocional y tono cercano que genere confianza.
                  td.texto-izquierda Pruebas sucesivas en maniquí y persona: ajuste provisional en maniquí y marcación con alfileres en cada prueba.
              
                tr
                  td.texto-izquierda Comunicación clara y transparente: información explícita sobre proceso, tiempos y costos; evitación de jerga sin explicación.
                  td.texto-izquierda Asesoría en materiales y acabados: explicación del comportamiento de telas, hilos y puntadas para optimizar confort y durabilidad.
                
                tr
                  td.texto-izquierda Personalización de la experiencia: uso de historial y preferencias para ofrecer soluciones adaptadas.
                  td.texto-izquierda Programación de citas escalonadas: agenda de sesiones (prueba inicial, ajustes intermedios, prueba final) con tiempos realistas.
                tr
                  td.texto-izquierda Gestión de reclamaciones y servicio: protocolo “escuchar, disculparse, proponer solución” y compensaciones cuando proceda.
                  td.texto-izquierda Control de calidad al cierre: inspección minuciosa de costuras y acabados antes de entrega, acompañada de instrucciones de cuidado.
                tr
                  td.texto-izquierda Seguimiento y retroalimentación: contacto posterior para verificar satisfacción y documentar feedback.
                  td.texto-izquierda Registro de historial y recordatorios: conservación de ficha de medidas y envío de recordatorios para ajustes futuros.
              
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 5. 
            span Atención al cliente en modistería
        .col-lg-8.col-md-7
          img(src='@/assets/curso/Tema1/img14.png', alt='Dos personas están de pie, una al lado de la otra. Una de ellas sostiene una tela doblada sobre el hombro de la otra, quien permanece erguida con expresión tranquila. Frente a ambas hay una mesa con varias telas organizadas en capas, hojas extendidas y una tarjeta con muestras en serie. Al fondo hay repisas con objetos y materiales de trabajo.')

      separador
      #t_1_3.titulo-segundo.mb-5
        h2 1.3.	Técnicas de comunicación con el cliente

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-6
          p Las técnicas de comunicación reúnen los métodos y recursos utilizados para intercambiar información de forma clara, coherente y empática entre quien presta el servicio y quien lo recibe. En este proceso, se prioriza el uso de un lenguaje comprensible, la adaptación del tono y ritmo al contexto y a las características de la persona interlocutora, así como la formulación de preguntas que permitan identificar con mayor profundidad sus necesidades, deseos y expectativas.
          p.bg-14.p-4 Estas estrategias también integran mecanismos de retroalimentación activa, como la reformulación de ideas o el resumen de lo expresado, con el fin de verificar la comprensión mutua y fortalecer la calidad de la interacción. En el ámbito específico de la modistería y el ajuste de prendas, estas prácticas son clave para asegurar que las indicaciones relacionadas con medidas, caída de las telas y acabados se comprendan correctamente, permitiendo así que el equipo de confección ejecute ajustes alineados con los requerimientos funcionales y estéticos del usuario. 
        .col-lg-6.col-9.col-md-6
          img(src='@/assets/curso/Tema1/img15.png', alt='')

      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema1/figura_subt.svg")
        h3.ps-3.pe-4.mb-0 Principales técnicas de comunicación 

      PasosA.color-primario.mb-5(tipo="n")
        .row.align-items-center
          .col-lg-6.mb-4.mb-md-0
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right2
                p Lenguaje claro y directo: uso de términos sencillos y accesibles que faciliten la comprensión general, incluso para personas que utilizan tecnologías de asistencia como lectores de pantalla. 
              li.d-flex
                i.fas.fa-angle-right2
                p Adecuación del tono y registro: ajuste del nivel de formalidad y del estilo comunicativo según el contexto y las características de la persona receptora.
          .col-md-6
            figure
              img(src='@/assets/curso/Tema1/img16.png', alt='Texto que describa la imagen')
       

        .row.align-items-center(data-aos="fade-left")
          .col-md-6.mb-4
            figure
              img(src='@/assets/curso/Tema1/img17.png', alt='Texto que describa la imagen')

          .col-lg-6
             ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right2
                p.texto-izquierda Preguntas abiertas: formulación de preguntas que inviten a respuestas amplias y detalladas (por ejemplo: ¿cómo describiría el ajuste ideal para usted?), lo que permite captar mejor sus expectativas.

              li.d-flex
                i.fas.fa-angle-right2
                p.texto-izquierda Retroalimentación activa: confirmación de lo entendido mediante paráfrasis o resúmenes, (ejemplo: entonces, prefiere una prenda que no se adhiera tanto al cuerpo, ¿es correcto?).
          .py-2
          .col-md-12
             ul.lista-ul--color
              li.d-flex
                i.fas.fa-angle-right2
                p.texto-izquierda Elementos no verbales y paraverbales: regulación del tono de voz, pausas, ritmo y entonación para reforzar la claridad del mensaje y brindar acompañamiento emocional, especialmente útil en la comunicación presencial.
        

      p.mb-4 En el ámbito de la modistería, estas técnicas se adaptan para optimizar el proceso de ajuste de prendas y atender con precisión las exigencias de la persona usuaria.
      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema1/figura_subt.svg")
        h3.ps-3.pe-4.mb-0 Aplicación en el ajuste de prendas

      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-8
          SlyderF.circl-arrow.mb-5(columnas="col-lg-6 col-xl-6")
            .tarjeta.bg-1.p-4
              .row.justify-content-center.mb-3
                .col-5.mb-3.col-md-3
                  img(src='@/assets/curso/Tema1/01.svg' alt='')
              h4.text-center.bg-20.p-1.mb-4 Explicación clara de procesos 
              p.text-center.col-lg-11 Detallar cada etapa del proceso (toma de medidas, pruebas, ajustes), asegurando que la persona usuaria comprenda lo que se está realizando y el porqué.
              br
              br
            .tarjeta.bg-1.p-4
              .row.justify-content-center.mb-3
                .col-4.mb-3.col-md-3
                  img(src='@/assets/curso/Tema1/02.svg' alt='')
              h4.text-center.bg-20.p-1.mb-4 Diálogo técnico accesible
              p.text-center.col-lg-11 Explicación comprensible de aspectos como tipos de tela, costuras o acabados, enfatizando cómo inciden en el resultado final.
            .tarjeta.bg-1.p-4
              .row.justify-content-center.mb-3
                .col-5.mb-3.col-md-3
                  img(src='@/assets/curso/Tema1/03.svg' alt='')
              h4.text-center.bg-20.p-1.mb-4 Validación de preferencias 
              p.text-center.col-lg-11 Confirmación continua de decisiones mediante preguntas específicas #[b ¿este tipo de costura le resulta cómoda? o ¿le agrada la caída de esta tela?]
            .tarjeta.bg-1.p-4
              .row.justify-content-center.mb-3
                .col-4.mb-3.col-md-3
                  img(src='@/assets/curso/Tema1/04.svg' alt='')
              h4.text-center.bg-20.p-1.mb-4 Comunicación constante durante pruebas
              p.text-center.col-lg-11 Información verbal clara en cada sesión de prueba sobre los cambios realizados, fomentando la participación activa mediante preguntas sobre sensaciones o percepciones.
            
            .tarjeta.bg-1.p-4
              .row.justify-content-center.mb-3
                .col-5.mb-3.col-md-3
                  img(src='@/assets/curso/Tema1/05.svg' alt='')
              h4.text-center.bg-20.p-1.mb-4 Registro verbal estructurado
              p.text-center.col-lg-11 Sistematización de las observaciones e indicaciones en la ficha técnica correspondiente.
        
        .col-lg-3.col-7.col-md-6
          img(src="@/assets/curso/Tema1/img18.png")

      separador
      #t_1_4.titulo-segundo.mb-5
        h2 1.4.	Registro de la información de la persona cliente
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-5.bg-14.p-4.mb-4
          p El registro sistemático y detallado de la información de la persona cliente es esencial para asegurar la precisión, coherencia y trazabilidad a lo largo del proceso de confección y ajuste de prendas. La información se organiza en una ficha técnica, la cual debe incluir datos fundamentales como: 
          ul.lista-ul--color
            li.d-flex.mb-0
              i.fas.fa-angle-right2
              p.mb-0 Medidas anatómicas (contorno de busto, cintura, cadera).
            li.d-flex.mb-0
              i.fas.fa-angle-right2
              p.mb-0 Tipología de silueta.

            li.d-flex.mb-0
              i.fas.fa-angle-right2
              p.mb-0 Inclinación de hombros.

            li.d-flex.mb-0
              i.fas.fa-angle-right2
              p.mb-0 Observaciones específicas sobre la caída, ajuste y comportamiento de los textiles.
        .col-lg-3.mb-4.col-9
          img(src='@/assets/curso/Tema1/img19.svg', alt='')
        .col-lg-4
          .row
            .col-lg-3.mb-3.col-4.d-none.d-lg-block
              img(src='@/assets/curso/Tema1/img20.svg', alt='')
            .col-lg-12
              p Este registro permite minimizar errores, optimizar la comunicación entre los distintos integrantes del equipo de modistería y garantizar la reproducibilidad de los resultados obtenidos en pruebas anteriores. Asimismo, proporciona una base objetiva para proyectar ajustes futuros, favoreciendo una atención personalizada, eficiente y alineada con los requerimientos funcionales y estéticos de la persona usuaria.
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura6. 
            span  Ejemplo de ficha técnica en el registro de medidas
        .col-lg-8  
          img(src='@/assets/curso/Tema1/figura6.svg', alt='Formulario estructurado en secciones. La parte superior recoge datos generales del cliente como nombre, dirección, teléfono, talla y correo. En el centro se incluye el análisis morfológico y el tipo de silueta. La parte inferior contiene una tabla con diferentes medidas corporales, cada una con un espacio asignado para su observación. Al final hay un área para observaciones y firma de quien elabora el documento.')

      .tarjeta.bg-3.p-3.py-md-4(data-aos="fade").mb-3
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/video.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.bg1color Formulario de datos del cliente. Ficha técnica
                p.mb-0.text-white Se recomienda consultar el siguiente documento como complemento informativo:
              .col-sm-auto
                a.boton.color-acento-botones(:href="('')" target="_blank")
                  span Descargar
                  i.fas.fa-download












  </template>

<script>
export default {
  name: 'Tema1',
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
