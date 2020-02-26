<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col
                    cols="12"
                    sm="8"
                    md="4"
            >
                <v-card class="elevation-12">
                    <v-toolbar
                            color="primary"
                            dark
                            flat
                    >
                        <v-spacer />
                        <v-toolbar-title
                            class="headline"
                        >
                            Вход
                        </v-toolbar-title>
                        <v-spacer />
                    </v-toolbar>
                    <v-card-text>

                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                                class="vk-btn"
                                block
                                height="50"
                                color="#4a76a8"
                                @click="login"

                        >
                            <v-icon
                                class="vk-icon"
                            >
                                mdi-vk
                            </v-icon>

                            Войти через ВКонтакте
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    export default {
        name: "Login",
        methods: {
            login: function () {
                this.$router.push('/');
                this.$store.dispatch('user/setAuth', true);
            }
        }
    }
</script>

<style scoped>
    .vk-btn {
        color: #fff;
    }

    .vk-icon {
        margin-right: 10px;
    }
</style>