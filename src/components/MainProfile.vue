<template>
    <div>
        <ul>
            <li>{{ user.public_repos }}</li>
            <li>{{ user.followers }}</li>
            <li>{{ user.following }}</li>
        </ul>

        <a :href="user.html_url">Ver Perfil</a>
    </div>
</template>

<script>
export default {
    props:['user']
}
</script>

<style lang="">
    
</style>