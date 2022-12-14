<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="7">
        <MainProfile :user="user" />
      </v-col>
      <v-col cols="12" sm="5">
        <MainRepos :repos="repos" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MainProfile from '@/components/MainProfile';
import MainRepos from '@/components/MainRepos';
import Axios from "axios";

export default {
  name: 'GithubView',
  components: {
    MainProfile,
    MainRepos
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
  async mounted() {
    try {
      const { url, url_rep, client_id, client_secret} = this.github; 
      Axios.get (`${url}?${client_id}&${client_secret}`).then(({data}) => this.user = data);
      Axios.get (`${url_rep}?${client_id}&${client_secret}`).then(({data}) => this.repos = data);
    } catch(e) {
      console.error(e);
    }
  }
}
</script>

<style lang="">
  
</style>