<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta el organigrama que resume los componentes clave relacionados con el cliente y la estructura corporal femenina. Este se divide en tres bloques temáticos: el primero aborda aspectos del cliente, como los tipos, técnicas de atención, comunicación y registro de información; el segundo se centra en la tipología de prendas femeninas, incluyendo los universos del vestuario, los tipos de ajuste, los textiles y su aprovechamiento; y el tercero describe la estructura corporal femenina, considerando parámetros antropométricos, tipos de siluetas, análisis y clasificación de medidas, análisis ergonómico, variaciones corporales y la medición y señalización de la prenda.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis organiza los elementos clave para el diseño y confección de prendas femeninas, agrupados en tres ejes: características del cliente, tipología de prendas y estructura corporal femenina. Se abordan temas como atención al cliente, tipos de vestuario, ajustes, textiles, medidas, siluetas y análisis ergonómico, destacando la relación entre el cuerpo, la prenda y las necesidades de quien la usa. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
