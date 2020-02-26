<template>
    <v-card
            class="mx-auto"
    >
        <v-img
                :aspect-ratio="16/9"
                :src="photo"
        >
            <v-row
                    align="end"
                    class="lightbox white--text pa-4 fill-height"
            >
                <v-col>
                    <div class="title">{{ title }}</div>
                    <div class="subtitle-1">{{ subtitle1 }}</div>
                    <div class="subtitle-1">{{ subtitle2 }}</div>
                </v-col>
            </v-row>
        </v-img>
    </v-card>
</template>
<script>
    export default {
        name: 'UserInfo',
        props: {
            photo: String,
            title: String,
            subtitle1: String,
            subtitle2: String
        }
    }
</script>
<style scoped>
    .lightbox {
        box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 125px);
    }

</style>