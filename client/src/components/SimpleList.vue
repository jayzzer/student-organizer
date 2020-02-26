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
                {{ title }}
            </v-toolbar-title>
            <v-spacer/>
        </v-toolbar>
        <v-list>
            <v-list-item color="primary">
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-book-open-page-variant</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>ТиСОС</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item>

            <v-list-item color="primary">
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-book-open-page-variant</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>ТиСОС 2</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item>

            <v-list-item color="primary">
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-book-open-page-variant</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>ТиСОС 3</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item>
        </v-list>
    </v-card>
</template>
<script>
    export default {
        name: 'SimpleList',
        props: {
            title: String
        }
    }
</script>
