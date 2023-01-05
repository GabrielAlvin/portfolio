<template>
    <v-layout>
        <v-navigation-drawer v-model="drawer" temporary>
            <v-list density="compact" nav>
                <v-list-item v-for="item in menuItems" :key="item.title" :prepend-icon="item.icon" :to="item.path"
                    color="light-blue darken-4" rounded>
                    {{ item.title }}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <v-container>
                <div class="d-flex justify-space-between pa-4">
                    <div>
                        <h1 class="font-weight-bold text-body-1">GABRIEL SOUZA OLIVEIRA</h1>
                        <p class="text-caption">Web Developer</p>
                    </div>
                    <v-icon @click.stop="drawer = !drawer">mdi-format-align-justify</v-icon>
                </div>
                <router-view />
            </v-container>
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
                { title: "Inicio", path: "/", icon: "mdi-view-dashboard" },
                { title: "GitHub", path: "/github", icon: "mdi-github" },
                { title: "Cursos", path: "/youtube", icon: "mdi-youtube-tv" },
                { title: "Curriculo", path: "/curriculo", icon: "mdi-book-account-outline" },
                { title: "Blog", path: "", icon: "mdi-image-text" },
                { title: "Contato", path: "", icon: "mdi-forum" },
            ],
        }
    },
}
</script>

<style scoped>
#menu {
    height: 200px !important;
}
</style>