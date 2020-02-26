<template>
    <v-container
            fluid
    >
        <v-row>
            <v-col>
                <v-row>
                    <v-col>
                        <UserInfo
                                title="Гадасин Денис Вадимович"
                                subtitle1="Должность: доцент"
                                subtitle2="Кафедра: МСиУС"
                                photo="./img/gadasin.jpg"
                        />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <SimpleList
                                title="Предметы"
                        />
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="8">
                <v-row>
                    <v-col>
                        <TeacherDescription/>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
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
                                    Отзывы
                                </v-toolbar-title>
                                <v-spacer/>
                            </v-toolbar>

                            <v-list>
                                <v-list-item>
                                    <v-card
                                            class="mx-auto"
                                            flat
                                            width="100%"
                                    >
                                        <v-card-text class="body-1">
                                            Turns out semicolon-less style is easier and safer in TS because most gotcha
                                            edge cases are type invalid as well.
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-list-item class="grow">
                                                <v-list-item-avatar color="grey darken-3">
                                                    <v-img
                                                            class="elevation-6"
                                                            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                                    ></v-img>
                                                </v-list-item-avatar>

                                                <v-list-item-content>
                                                    <v-list-item-title>Evan You</v-list-item-title>
                                                </v-list-item-content>

                                                <v-row
                                                        align="center"
                                                        justify="end"
                                                >
                                                    <v-rating
                                                            readonly
                                                            dense
                                                            v-bind:value="4"
                                                            background-color="orange lighten-3"
                                                            color="orange"
                                                            small
                                                    ></v-rating>
                                                </v-row>
                                            </v-list-item>
                                        </v-card-actions>
                                    </v-card>
                                </v-list-item>
                                <v-divider />
                                <v-list-item>
                                    <v-card
                                            class="mx-auto"
                                            flat
                                            width="100%"
                                    >
                                        <v-card-text class="body-1">
                                            Turns out semicolon-less style is easier and safer in TS because most gotcha
                                            edge cases are type invalid as well.
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-list-item class="grow">
                                                <v-list-item-avatar color="grey darken-3">
                                                    <v-img
                                                            class="elevation-6"
                                                            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                                                    ></v-img>
                                                </v-list-item-avatar>

                                                <v-list-item-content>
                                                    <v-list-item-title>Evan You</v-list-item-title>
                                                </v-list-item-content>

                                                <v-row
                                                        align="center"
                                                        justify="end"
                                                >
                                                    <v-rating
                                                            readonly
                                                            dense
                                                            v-bind:value="4"
                                                            background-color="orange lighten-3"
                                                            color="orange"
                                                            small
                                                    ></v-rating>
                                                </v-row>
                                            </v-list-item>
                                        </v-card-actions>
                                    </v-card>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import UserInfo from "./UserInfo";
    import SimpleList from "./SimpleList";
    import TeacherDescription from "./TeacherDescription";

    export default {
        name: 'Teacher',
        components: {TeacherDescription, SimpleList, UserInfo}
    }
</script>
<style scoped>
    .lightbox {
        box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 125px);
    }

</style>