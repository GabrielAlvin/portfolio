<template>
    <v-container>
        <v-row no-gutters class="flex">
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
                url: 'https://www.googleapis.com/youtube/v3/search',
                key: 'AIzaSyDG8FPVTRRWtKKbRQxJvW_ieTW7lum5g-s',
                part: 'snippet',
                maxResults: 6,
                q: 'laranja',
                type: 'video'
            },
            videos: []
        }
    },

    created(){
        try{
            const { url, key, part, q, type, maxResults} = this.youtube;
            Axios.get(`${url}?part=${part}&maxResults=${maxResults}&q=${q}&${type}&key=${key}`).then(({data}) => this.videos = data.items);
        }catch(e) {
            console.error(e);
        }
    }
}
</script>

<style lang="">
    
</style>