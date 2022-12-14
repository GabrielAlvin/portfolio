<template>
    <v-container>
        <h2 class="text-h2 font-weight-bold">{{ user.login }}</h2>
        <v-divider></v-divider>
        <p class="font-weight-light mb-6">{{ user.bio }}</p>
        <v-list-item>Repositórios: <span class="font-weight-bold">{{ user.public_repos }}</span></v-list-item>
        <v-list-item>Seguindo: <span class="font-weight-bold">{{ user.followers }}</span></v-list-item>
        <v-list-item>Seguidores: <span class="font-weight-bold">{{ user.following }}</span></v-list-item>
    </v-container>
</template>

<script>
export default {
    name: "MainProfile",
    props: ['user']
}
</script>

<style lang="">
    
</style>