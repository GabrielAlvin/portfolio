<template>
    <div v-for="playlist in playlists.items" :key="playlist.id" class="my-6">
        <v-row>
            <v-col>
                <v-img :src="playlist.snippet.thumbnails.medium.url"></v-img>
            </v-col>
            <v-col>
                <h4>{{ playlist.snippet.title }}</h4>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'ListPlaylist',
    props: ['playlists']
};
</script>

<style lang="">
    
</style>