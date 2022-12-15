<template>
    <v-layout>
        <v-navigation-drawer v-model="drawer" temporary>
            <v-list density="compact" nav>
                <v-list-item v-for="item in menuItems" :key="item.title" :prepend-icon="item.icon" :to="item.path" color="deep-orange darken-3">
                    {{ item.title }}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main class="bg-white">
            <div class="d-flex justify-space-between pa-4">
                <v-btn class="bg-deep-orange darken-3" @click.stop="drawer = !drawer" prepend-icon="mdi-format-align-justify">Menu</v-btn>
                <div class="text-right">
                    <h1 class="font-weight-bold text-body-1">GABRIEL SOUZA OLIVEIRA</h1>
                    <p class="text-caption">Web Developer</p>
                </div>
            </div>
            <router-view/>
        </v-main>
    </v-layout>
</template>

<script>
export default {
    name: 'MainSidebar',
    data() {
        return {
            drawer: null,
            menuItems: [
                { title: "Inicio", path: "/", icon: "mdi-view-dashboard"},
                { title: "Sobre", path: "/about", icon: "mdi-newspaper-variant"},
                { title: "GitHub", path: "/github", icon: "mdi-github"},
                { title: "Youtube", path: "/youtube", icon: "mdi-youtube"},
            ],
        }
    },
}
</script>

<style scoped>
</style>