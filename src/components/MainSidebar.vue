<template>
    <v-layout>
        <v-navigation-drawer v-model="drawer" temporary>
            <v-list density="compact" nav>
                <v-list-item v-for="item in menuItems" :key="item.title" :prepend-icon="item.icon" :to="item.path">
                    {{ item.title }}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main class="bg-black">
            <div class="d-flex justify-end pa-4">
                <v-btn class="bg-purple" @click.stop="drawer = !drawer" prepend-icon="mdi-format-align-justify">Menu</v-btn>
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
            ],
        }
    },
}
</script>

<style lang="">
    
</style>