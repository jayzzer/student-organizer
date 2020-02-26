<template>
    <v-card>
        <v-toolbar
                color="primary"
                dense
                dark
        >
            <v-spacer/>
            <v-toolbar-title
                    class="title text-uppercase"
            >
                Список файлов
            </v-toolbar-title>
            <v-spacer/>
        </v-toolbar>

        <v-container
                class="pt-0"
                fluid
        >
            <v-row>
                <v-col
                        v-for="n in 6"
                        :key="n"
                        class="d-flex child-flex"
                        cols="4"
                >
                    <v-hover
                            v-slot:default="{ hover }"
                    >
                        <v-card class="mx-auto">
                            <v-fade-transition>
                                <v-btn
                                        v-show="hover"
                                        class="delete-btn"
                                        absolute
                                        dark
                                        fab
                                        height="25"
                                        width="25"
                                        color="red"
                                >
                                    <v-icon>mdi-minus</v-icon>
                                </v-btn>
                            </v-fade-transition>
                            <v-fade-transition>
                                <v-overlay
                                        v-show="hover"
                                        absolute
                                        color="black"
                                        z-index="1"
                                >
                                    <v-btn
                                            class="download-btn"
                                            dark
                                            icon
                                            color="white"
                                    >
                                        <v-icon>mdi-cloud-download</v-icon>
                                    </v-btn>
                                </v-overlay>
                            </v-fade-transition>
                            <v-img
                                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                    aspect-ratio="1"
                                    class="white--text align-end"
                            >
                                <template v-slot:placeholder>
                                    <v-row
                                            class="fill-height ma-0"
                                            align="center"
                                            justify="center"
                                    >
                                        <v-progress-circular indeterminate
                                                             color="grey lighten-5"
                                        />
                                    </v-row>
                                </template>
                                <v-card-title class="subtitle-2 pb-1">AFi iqwhfi iqw...
                                </v-card-title>
                            </v-img>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                            class="text-uppercase"
                            color="blue"
                            dark
                            block
                    >
                        Показать все
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>
<script>
    export default {
        name: 'FilesList'
    }
</script>
<style scoped>

    .delete-btn {
        z-index: 2;
        top: -10px;
        right: -10px;
    }

    .download-btn {
        z-index: 2;
    }
</style>