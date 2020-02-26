<template>
    <v-container
            fluid
    >
        <v-row>
            <v-col>
                <v-row>
                    <v-col>
                        <UserInfo
                                title="Пушкарев Павел"
                                subtitle1="Пол: Мужской"
                                subtitle2="Группа: БСТ-1601"
                                photo="https://sun9-58.userapi.com/c846122/v846122294/149a4d/BzYkd6688f4.jpg"
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <FilesList/>
                    </v-col>
                </v-row>
            </v-col>
            <v-col>
                <v-row>
                    <v-col>
                        <ItemsList
                                title="Избранные преподаватели"
                                cols="6"
                                show-more
                                delete-btn
                        />
                    </v-col>
                </v-row>
            </v-col>
            <v-col>
                <v-row>
                    <v-col>
                        <ItemsList
                                title="Избранные предметы"
                                cols="6"
                                show-more
                                delete-btn
                        />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import UserInfo from "./UserInfo";
    import FilesList from "./FilesList";
    import ItemsList from "./ItemsList";

    export default {
        name: "Home",
        components: {ItemsList, FilesList, UserInfo}
    }
</script>

<style scoped>

    .delete-btn {
        z-index: 10;
        top: -10px;
        right: -10px;
    }

    .download-btn {
        z-index: 10;
    }
</style>