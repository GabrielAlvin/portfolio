<template>
  <div>
    <MainProfile :user="user"/>
    <button @click="getPerfil">Button</button>
  </div>
</template>

<script>
import MainProfile from '@/components/MainProfile';
import Axios from "axios";

export default {
  name: 'GithubView',
  components: {
    MainProfile
  },
  data() {
      return {
          github: {
              url: "https://api.github.com/users/GabrielAlvin",
              url_rep: 'https://api.github.com/users/GabrielAlvin/repos',
              client_id: "9753e4b2f3a30e817758",
              client_secret: "b95063db0479f6ef4625707032cc6c41072e8d7c",
          },
          user: [],
          repos: []
      }
  },
  mounted() {
    const { url, client_id, client_secret} = this.github; 
    Axios.get (`${url}?${client_id}&${client_secret}`).then(({data}) => this.user = data);
  }
}
</script>

<style lang="">
  
</style>