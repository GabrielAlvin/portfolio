<template>
    <v-col v-for="video in videos.items" :key="video.id" cols="12" sm="6" class="pa-4">
        <v-card elevation="4" outlined shaped max-height="250" class="bg-blue accent-3 pa-3">
            <h4 class="text-uppercase text-subtitle-2 mt-2">{{ video.snippet.title }}</h4>
            <p class="text-truncate">{{ video.snippet.description }}</p>
            <v-btn class="bg-light-blue darken-4 ml-2 mt-3 " fab icon height="40px" right width="40px">
                <v-icon>mdi-play</v-icon>
            </v-btn>
        </v-card>
    </v-col>
</template>

<script>
export default {
    name: 'VideoCard',
    props: ['videos']
};
</script>

<style lang="">
</style>
