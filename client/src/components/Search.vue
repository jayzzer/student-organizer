<template>
    <v-container
            fluid
    >
        <v-row>
            <v-col>
                <v-text-field
                        label="Поиск преподавателей и предметов"
                        prepend-icon="mdi-magnify"
                        clearable
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <ItemsList
                        title="Преподаватели"
                        cols="4"
                />
            </v-col>

            <v-col>
                <ItemsList
                        title="Предметы"
                        cols="4"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    import ItemsList from "./ItemsList";

    export default {
        name: "Search",
        components: {ItemsList}
    }
</script>

<style scoped>

</style>