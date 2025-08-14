<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Desarrollo de contenidos
    
      .bg-5.mb-5
        .row.align-items-center 
          .col-lg-7
            .p-4.p-lg-5
              h4.mb-2.bg-15.text-white.col-lg-2.text-center El cliente
              p El concepto de cliente se tomará en este espacio como #[b “persona cliente”] el cual engloba a cualquier individuo, colectivo u organización que, al identificar una necesidad, expectativa o dificultad concreta, opta por transferir recursos monetarios o de otra índole a cambio de una solución presentada como producto, servicio o experiencia. Hoy en día, se reconoce que la persona cliente no se limita a consumir lo que la entidad pone a disposición, sino que interviene de manera activa en la generación de valor: aporta información relevante, evalúa la propuesta y colabora en su perfeccionamiento continuo.
              p.mb-0 Desde un enfoque relacional, la interacción con la persona cliente se entiende como un proceso evolutivo que abarca todas las etapas del ciclo de consumo. Dichas etapas incluyen el reconocimiento de la necesidad, la exploración de alternativas, la adquisición, el uso o disfrute y todo lo que implica el servicio postventa. Para cada fase se diseñan estrategias específicas, dado que las expectativas y demandas varían conforme avanza la experiencia.
          .col-lg-5.col-md-8
            img(src='@/assets/curso/Tema1/img01.png', alt='')


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1. 
            span El cliente
          img(src='@/assets/curso/Tema1/figura1.png', alt='Dos personas están de pie frente a frente. Una sostiene una caja con el texto “donation clothes” en el centro. La otra persona tiene los brazos ligeramente abiertos. En el fondo varias cajas apiladas, una prenda colgada en un perchero y una planta junto a una mesa.')
        .col-lg-6
          p En el ámbito de la confección, la persona cliente constituye el eje central de todo el proceso productivo, es quien adquiere una prenda, sea de manera individual, colectiva o empresarial, define los parámetros de diseño, ajuste, calidad y sostenibilidad que guiarán desde la planificación de la colección hasta la entrega final. Su requerimiento coordina las áreas de diseño, patronaje, aprovisionamiento y mercadeo, transformando la creación de valor en una relación bidireccional que sostiene tanto la rentabilidad como la reputación de la marca.
          p.bg-1.p-4 la etapa de ajuste de prendas, la comprensión de la persona cliente  es fundamental para articular cada intervención, pues con el análisis detallado de sus expectativas funcionales, estéticas y sensoriales, el equipo de confección traduce esas necesidades en modificaciones precisas de silueta, patrón y acabados. La aproximación técnica garantiza que ajustes como entalles, variaciones de largo o modificaciones de la caída cumplan con los estándares de confort, usabilidad y satisfacción del cliente, fortaleciendo así el vínculo de confianza mutua.

      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1.	Tipos de cliente y su relación 

      .row.justify-content-center.mb-3
        .col-lg-4.bg-14.p-4.mb-4
          p.mb-0 Comprender a la persona cliente es fundamental para ofrecer un servicio personalizado y de calidad, su clasificación permite adaptar la atención, anticiparse a sus necesidades y construir relaciones duraderas, es así como la persona cliente puede clasificarse según su comportamiento, nivel de relación y valor económico para el negocio así:
        .col-lg-4
          img(src='@/assets/curso/Tema1/img02.svg', alt='')
        .col-lg-4
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-angle-right
              p.mb-0 Por comportamiento: se identifican clientes decididos, analíticos, expresivos o reservados. 
            li.d-flex
              i.fas.fa-angle-right
              p.mb-0 Según la relación: pueden ser nuevos, frecuentes o leales.
            li.d-flex
              i.fas.fa-angle-right
              p.mb-0 En términos económicos: se diferencian clientes de alto valor, estratégicos o de bajo impacto.
          p Esta clasificación permite ajustar la atención, mejorar la experiencia del servicio y optimizar la relación comercial. 

      .fondo_t1.p-4
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 2. 
              span Clasificación de clientes
          .col-lg-8.mb-2 
            img(src='@/assets/curso/Tema1/figura2.svg', alt='La figura presenta una pirámide dividida en cinco niveles, donde cada uno representa un aspecto clave relacionado con la clasificación de clientes. De forma ascendente, se abordan los siguientes elementos: la mejor opción para la clasificación de clientes, los riesgos de no categorizar a los clientes, los beneficios de la clasificación, la importancia de categorizar y, en la cúspide, la comprensión de los diferentes tipos de clientes. Este enfoque jerárquico destaca la progresión necesaria para una gestión estratégica y efectiva del cliente.')
      .col-lg-12.mb-4
        figcaption Fuente: https://fastercapital.com/es/i-es/Categorizacion-de-inversores-MiFID--como-clasificar-a-los-clientes--La-importancia-de-la-clasificaci-n-de-clientes.webp

      .tarjeta.bg-3.p-3.py-md-4(data-aos="fade")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/video.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.ct-color-primario Clasificación de los hilos
                p.mb-0.text-white Se invita a revisar la clasificación general de los hilos:
              .col-sm-auto
                a.boton.bg-4(:href="('https://www.youtube.com/watch?v=XmnGaIHLbro&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA')" target="_blank")
                  span Ver video
                  i.fas.fa-link


































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
