<template>
  <v-app>
    <MainSidebar />
  </v-app>
</template>

<script>
import MainSidebar from '@/components/MainSidebar';

export default {
  name: 'App',
  components: {
    MainSidebar
  },
}
</script>

<style>
::-webkit-scrollbar {
    width: 2px;
}

::-webkit-scrollbar-track {
    background: #040c0e; 
}

::-webkit-scrollbar-thumb {
    background: #888; 
}

::-webkit-scrollbar-thumb:hover {
    background: #555; 
}

</style>