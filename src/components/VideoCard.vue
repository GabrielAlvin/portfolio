<template>
    <v-col v-for="video in videos.items" :key="video.id" cols="12" sm="4" class="pa-4">
        <v-card elevation="4" outlined shaped max-height="250">
            <v-img :src="video.snippet.thumbnails.high.url"></v-img>
        </v-card>

        <h4 class="text-uppercase text-subtitle-2 mt-2 ">{{ video.snippet.title }}</h4>
    </v-col>
</template>

<script>
export default {
    name: 'VideoCard',
    props: ['videos'],
    data: () => ({
        show: false,
    }),
};
</script>

<style lang="">
</style>
