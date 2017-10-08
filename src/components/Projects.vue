<template>
    <div class="projects">
            <v-layout column>
                <v-flex xs12>
                    <v-container fluid grid-list-md>
                        <v-layout row wrap>
                            <v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in projects" :key="card.title">
                                <v-card class="para">
                                    <v-card-media :src="card.src" height="300px">
                                        <v-container fill-height fluid>
                                            <v-layout fill-height>
                                                <v-flex xs12 align-end flexbox>
                                                    <span class="headline white--text" v-text="card.title"></span>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-card-media>
                                    <v-card-actions class="white">
                                        <v-spacer></v-spacer>
                                        <v-card-text>
                                            <a :href="card.link" target="_blank">
                                                {{card.name}}
                                            </a>
                                        </v-card-text>
                                        <div v-if="!card.show">
                                            <v-btn @click.stop="card.show = !card.show" icon>
                                                <v-icon>keyboard_arrow_down</v-icon>
                                            </v-btn>
                                        </div>
                                        <div v-if="card.show">
                                            <v-btn @click.stop="card.show = !card.show" icon>
                                                <v-icon>keyboard_arrow_up</v-icon>
                                            </v-btn>
                                            <p>
                                                {{card.description}}
                                            </p>
                                            <a :href="card.link" target="_blank">
                                                <v-btn class="link">Visit Site?</v-btn>
                                            </a>
                                        </div>
                                    </v-card-actions>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
    </div>
</template>

<script>
    export default {
        name: 'projects',
        data() {
            return {
                
            }
        },

        components: {
        },
        computed: {
            projects(){
                return this.$store.state.projects
            }
        },
        methods: {

        },
        mounted() {
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.para{
    background-color: transparent;
}
a{
    color: black;
}
.link{
    text-transform: none;
}
</style>