<template>
    <div v-for="video in videos" :key="video.id" cols="12" sm="4" class="ma-2">
        <iframe id="player" type="text/html" width="350" height="196" :src="'http://www.youtube.com/embed/' + video.id.videoId" frameborder="0"></iframe>
    </div>
</template>

<script>
export default {
    name: 'VideoCard',
    props: ['videos'],
};
</script>

<style lang="">
</style>
