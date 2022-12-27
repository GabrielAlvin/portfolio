<template>
    <v-container>
        <h2 class="text-sm-h3 mb-4">{{ $route.params.title }}</h2>
        <v-row no-gutters>
            <v-col cols="12" sm="8">
                <h2>teste</h2>
            </v-col>
            <v-col cols="12" sm="4">
                <ListaPlaylist :playlists="playlists"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Axios from "axios";
import ListaPlaylist from "@/components/ListaPlaylist"

export default {
    name: 'PlaylistView',
    components: {
        ListaPlaylist
    },
    data() {
        return {
            youtube:{
                url: 'https://www.googleapis.com/youtube/v3/',
                key: 'AIzaSyDG8FPVTRRWtKKbRQxJvW_ieTW7lum5g-s',
                part: 'snippet',
                maxResults: 50,
                font: 'playlistItems',
                playlistId: this.$route.params.id
            },
            playlists: []
        }
    },

    created(){
        try{
            const { url, key, part, maxResults, font, playlistId} = this.youtube;
            Axios.get(`${url}${font}?part=${part}&maxResults=${maxResults}&playlistId=${playlistId}&key=${key}`).then(({data}) => this.playlists = data);
        }catch(e) {
            console.error(e);
        }
    }
}
</script>

<style lang="">
    
</style>