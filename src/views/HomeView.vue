<template>
  <v-col id="home-page">
    <v-row no-gutters>
      <v-col cols="12" md="4" class="pa-5">
        <v-img src="https://avatars.githubusercontent.com/u/55728703?v=4" contain></v-img>
      </v-col>
      <v-col cols="12" md="8" class="pa-5">
        <span class="bg-light-blue darken-4 pa-2">Fullstack Developer</span>
        <p class="text-caption my-5">Tenho 22 anos, sou dev front-end. Tenho mantido o meu foco e interesse em aprender e me aperfeiçoar cada vez mais na área de programação Front-End.
          Aqui no meu portfólio você encontrará os meus meios de contato, verá as tecnologias que estou aprendendo e utilizando, e também avaliará alguns dos projetos pessoais e freelas que fiz até agora!</p>
        <p class="mb-3">Principais tecnologias que eu utilizo: </p>
        <span class="bg-light-green darken-4 pa-1">Vue.js</span> e <span class="bg-red darken-4 pa-1">Laravel</span>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {

    }
  },
};
</script>

<style scoped>

@media (min-width:800px) {
  #home-page {
    margin-top: 14vh;
  }
}

</style>