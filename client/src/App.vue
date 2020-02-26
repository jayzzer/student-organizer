<template>
    <v-app>
        <v-app-bar
                fixed
                app
                color="primary"
                dark
        >
            <router-link to="/">
                <div class="d-flex align-center">
                    <v-icon
                            size="40"
                    >
                        mdi-account-search
                    </v-icon>

                    <div class="brand-name display-1 font-weight-medium">
                        PrePod
                    </div>
                </div>
            </router-link>
            <v-tabs
                    right
                    v-if="isAuth"
            >
                <v-tab to="/">
                    <v-icon class="mr-2">mdi-account-circle</v-icon>
                    Профиль
                </v-tab>
                <v-tab to="/favorite">
                    <v-icon class="mr-2">mdi-heart</v-icon>
                    Избранное
                </v-tab>
                <v-tab to="/search">
                    <v-icon class="mr-2">mdi-magnify</v-icon>
                    Поиск
                </v-tab>
            </v-tabs>

            <v-btn
                    class="ml-4 text-uppercase"
                    color="error"
                    @click="logout"
                    v-if="isAuth"
                    depressed
            >
                Выйти
            </v-btn>
        </v-app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>

    import {mapState} from "vuex";

    export default {
        name: 'App',

        components: {},

        data: () => ({
            //
        }),

        computed: mapState({
            isAuth: state => state.user.isAuth
        }),
        methods: {
            logout: function () {
                this.$router.push('/login');
                this.$store.dispatch('user/setAuth', false);
            }
        }
    };
</script>

<style scoped>
    .brand-name {
        color: #fff;
    }
</style>
