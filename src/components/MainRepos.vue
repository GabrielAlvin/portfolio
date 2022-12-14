<template>
    <ul>
        <li class="text-uppercase" v-for="repo in repos" :key="repo.id">
            {{ repo.name }}
        </li>
    </ul>
</template>

<script>
export default {
    name: "MainRepos",
    props: ['repos']
}
</script>

<style lang="">
    
</style>