<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-5.col-md-8.mb-3
        img(src='@/assets/curso/portada/intro.png', alt='')
      .col-lg-7.p-4.bg-14 
        p.p-3 El componente “El cliente y la estructura corporal femenina” se articula en dos ejes fundamentales; la gestión de la relación con el cliente y el conocimiento detallado del cuerpo femenino, desde una perspectiva técnica e institucional, este espacio de estudio sitúa al aprendiz ante los factores que determinan la calidad del servicio de ajuste y la pertinencia del diseño, garantizando una comprensión integral de las necesidades y expectativas que orientan el proceso de confección.
    p.mb-4 A lo largo de su desarrollo, se analiza la caracterización del cliente, las tipologías de consumo, las técnicas de atención y comunicación, así como la importancia de registrar de manera sistemática la información obtenida. Estas bases relacionales se complementan con el estudio de las principales categorías de prendas femeninas, los criterios de ajuste más habituales, la clasificación de materiales textiles y su aprovechamiento responsable. El recorrido culmina en la exploración de la estructura corporal femenina, abordando la antropometría, la anatomía, la biomecánica, la morfología, la ergonomía y el análisis de siluetas, de modo que el aprendiz disponga de referentes precisos para intervenir cada prenda con rigor.
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-3.bg-1.p-3.mb-3
        p Con esta integración temática, el SENA fortalece la formación de talento humano capaz de ofrecer un servicio altamente especializado en ajuste de vestuario femenino. 
      .col-lg-4.col-md-7.mb-3
        img(src='@/assets/curso/portada/img02.svg', alt='')
      .col-lg-5.bg-9.p-3
        p El componente proporciona las bases conceptuales necesarias para que el aprendiz consolide competencias técnicas, comunicativas y analíticas, alineadas con las exigencias de la industria de la moda y con los principios de excelencia institucional que caracterizan a la entidad.
    
    .fondo_intro     
      .row.justify-content-center.align-items-center
        .col-lg-10.col-md-11.col-11
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
