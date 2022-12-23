<template>
    <h2 class="text-h2 font-weight-bold">{{ user.login }}</h2>
    <p class="font-weight-light my-6">{{ user.bio }}</p>
    <div class="d-flex">
        <p class="bg-light-blue darken-4 pa-2">Repositórios: <span class="font-weight-bold">{{ user.public_repos }}</span></p>
        <p class="bg-light-blue darken-4 pa-2 mx-1">Seguindo: <span class="font-weight-bold">{{ user.followers }}</span></p>
        <p class="bg-light-blue darken-4 pa-2">Seguidores: <span class="font-weight-bold">{{ user.following }}</span></p>
    </div>
</template>

<script>
export default {
    name: "MainProfile",
    props: ['user']
}
</script>

<style lang="">
    
</style>