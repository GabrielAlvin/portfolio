<template>
    <div class="pa-7">
        <h2 class="text-h5">{{ user.name }}</h2>
        <v-list-item :title="user.bio"></v-list-item>
        <v-list-item :title="user.public_repos"></v-list-item>
        <v-list-item :title="user.followers"></v-list-item>
         <v-list-item :title="user.following"></v-list-item>
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