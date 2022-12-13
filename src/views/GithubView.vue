<template>
    <div>
        <button @click="getPerfil">Button</button>
        <MainProfile :user="user"/>
    </div>
</template>

<script>
import Axios from "axios";
import MainProfile from "@/components/MainProfile"

export default {
    name: "GithubView",
    component:{
        MainProfile
    },
    data() {
        return {
            github: {
                url: "https://api.github.com/users/GabrielAlvin",
                client_id: "9753e4b2f3a30e817758",
                client_secret: "b95063db0479f6ef4625707032cc6c41072e8d7c",
            },
            user: [],
            repos: []
        }
    },
    methods: {
        getPerfil() {
            const { url, client_id, client_secret} = this.github; 
            Axios.get (
                `${url}?${client_id}&${client_secret}`
            ).then(({data}) => console.log(data));
        }
    },
}
</script>

<style lang="">
    
</style>