<template>
    <v-row>
        <v-col cols="12" sm="6" v-for="repo in repos" :key="repo.id">
            <v-card elevation="10" shaped :href="repo.html_url" target="_blank" class=" pa-10 bg-light-blue darken-4" height="120">
                <h4 class="text-uppercase font-weight-black text-caption">{{ repo.full_name }}</h4>
                <p class="text-caption">{{ repo.language }}</p>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "MainRepos",
    props: ['repos']
}
</script>

<style scoped>

</style>