<template>
    <v-container>
        <h2 class="text-sm-h2 mb-4">Cursos Gratuitos</h2>
        <v-row no-gutters>
            <VideoCard :videos="videos"/>
        </v-row>
    </v-container>
</template>

<script>
import VideoCard from '@/components/VideoCard';
import Axios from "axios";

export default {
    name: 'YoutubeView',
    components: {
        VideoCard
    },
    data() {
        return {
            youtube:{
                url: 'https://www.googleapis.com/youtube/v3/',
                key: 'AIzaSyDG8FPVTRRWtKKbRQxJvW_ieTW7lum5g-s',
                channelId: 'UCmkP_w1m2DvgYW3mqsI3dhw',
                part: 'snippet',
                font: 'playlists',
                playlistId: 'PLyOVuyJSXviO4aU2RdEZPB-7pBtfSenkf'
            },
            videos: []
        }
    },

    created(){
        try{
            const { url, key, part, font, channelId} = this.youtube;
            Axios.get(`${url}${font}?part=${part}&channelId=${channelId}&key=${key}`).then(({data}) => this.videos = data);
        }catch(e) {
            console.error(e);
        }
    }
}
</script>

<style lang="">
    
</style>