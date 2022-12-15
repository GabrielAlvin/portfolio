<template>
    <v-card v-for="video in videos" :key="video.id" elevation="10" cols="12" sm="4" max-width="350" class="ma-4">
        <h1>{{ video.snippet.channelTitle }}</h1>
        <v-img width="420" height="315" :src="video.snippet.thumbnails.medium.url"></v-img>
    </v-card>
</template>

<script>
export default {
    name: 'VideoCard',
    props: ['videos']
};
</script>

<style lang="">
</style>
