<template>
  <div id="home" class="bg-black">
      <h1 class="font-weight-bold text-md-h1 anima">GABRIEL SOUZA OLIVEIRA</h1>
      <p class="font-weight-bold text-md-h5">Web developer - System Analyst</p>
  </div>
  
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.anima{
    display: inline-block;
    border-right: 2px solid #000;
    padding-right:3px ;
    max-width: 0;
    white-space: nowrap;
    overflow: hidden;
    animation: pisca normal infinite .6s, escrever normal 3s steps(55) both;
}

p{
  color: #9c27b0;
}

@keyframes pisca {
    100%{
        border-right-color: transparent;
    }
}

@keyframes escrever {
    100%{
        max-width: 100%;
    }
}
</style>