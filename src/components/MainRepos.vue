<template>
    <v-card elevation="10" shaped  v-for="repo in repos" :key="repo.id" :href="repo.html_url" target="_blank" class="my-3 pa-10 bg-deep-orange darken-1">
        <h4 class="text-uppercase">{{ repo.full_name }}</h4>
        <p class="text-caption">{{ repo.language }}</p>
    </v-card>
</template>

<script>
export default {
    name: "MainRepos",
    props: ['repos']
}
</script>

<style scoped>

</style>