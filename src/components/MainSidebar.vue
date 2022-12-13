<template>
    <v-layout>
        <v-navigation-drawer v-model="drawer" temporary>
            <v-list density="compact" nav>
                <v-list-item v-for="item in menuItems" :key="item.title" :prepend-icon="item.icon" :to="item.path" color="green">
                    {{ item.title }}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main class="bg-black">
            <div class="d-flex justify-space-between pa-4">
                <div>
                    <h1 class="font-weight-bold text-body-1">GABRIEL SOUZA OLIVEIRA</h1>
                    <p class="text-caption">Web Developer</p>
                </div>
                <v-btn class="bg-green darken-1" @click.stop="drawer = !drawer" prepend-icon="mdi-format-align-justify">Menu</v-btn>
            </div>
            <v-container>
                <router-view/>
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
                { title: "Sobre", path: "/about", icon: "mdi-forum" },
                { title: "GitHub", path: "/github", icon: "mdi-forum" },
            ],
        }
    },
}
</script>

<style scoped>
</style>