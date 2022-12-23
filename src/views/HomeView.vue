<template>
  <v-container id="home-page">
    <v-row no-gutters>
      <v-col cols="12" md="4" class="pa-5 text-center">
        <img src="https://avatars.githubusercontent.com/u/55728703?v=4" id="img-home">
      </v-col>
      <v-col cols="12" md="8" class="pa-5">
        <span class="bg-light-blue darken-4 pa-2">Fullstack Developer</span>
        <h2 class="text-sm-h3 my-5">Trabalho no desenvolvimento de aplicações web performáticas e com foco na experiência de usuário</h2>
        <p class="mb-3">Principais tecnologias que eu utilizo: </p>
        <span class="bg-light-green darken-4 pa-1">Vue.js</span> e <span class="bg-red darken-4 pa-1">Laravel</span>
      </v-col>
    </v-row>
  </v-container>
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
#img-home {
  border-radius: 50%;
  max-width: 210px;
}

@media (min-width:800px) {
  #home-page{
    margin-top: 14vh;
  }

  #img-home {
    max-width: 300px;
  }
}
</style>