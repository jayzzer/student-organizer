<template>
    <v-container
            fluid
    >
        <v-row>
            <v-col>
                <ItemsList
                        title="Избранные преподаватели"
                        cols="4"
                        delete-btn
                />
            </v-col>

            <v-col>
                <ItemsList
                        title="Избранные предметы"
                        cols="4"
                        delete-btn
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import ItemsList from "./ItemsList";
    export default {
        name: "Favorite",
        components: {ItemsList}
    }
</script>

<style scoped>

</style>