<template>
    <v-layout>
        <v-navigation-drawer v-model="drawer" temporary>
            <v-list density="compact" nav>
                <v-list-item v-for="item in menuItems" :key="item.title" :prepend-icon="item.icon" :to="item.path" color="light-blue darken-4" rounded>
                    {{ item.title }}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main class="bg-black">
            <div class="d-flex justify-space-between pa-4">
                <v-btn class="bg-light-blue darken-4" @click.stop="drawer = !drawer" prepend-icon="mdi-format-align-justify">Menu</v-btn>
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
                // { title: "Sobre", path: "/sobre", icon: "mdi-newspaper-variant"},
                { title: "GitHub", path: "/github", icon: "mdi-github"},
                { title: "Cursos", path: "/youtube", icon: "mdi-youtube-tv"},
                { title: "Curriculo", path: "", icon: "mdi-book-account-outline"},
                { title: "Blog", path: "", icon: "mdi-image-text"},
                { title: "Contato", path: "", icon: "mdi-forum"},
            ],
        }
    },
}
</script>

<style scoped>
</style>