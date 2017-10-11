<template>
    <div class="projects">
        <v-layout column>
            <v-flex xs12>
                <v-card-title>
                    <h3>Portfolio</h3>
                </v-card-title>
                <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in projects" :key="card.title">
                            <v-card class="para">
                                <v-card-media class="media elevation-24" :src="card.src" height="500px">
                                    <v-container fill-height fluid>
                                        <v-layout fill-height>
                                            <v-flex xs12 align-end flexbox>
                                                <span class="headline white--text" v-text="card.title"></span>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card-media>
                                <div class="overlay">
                                    <p class="text">{{card.description}}</p>
                                </div>
                            </v-card>
                            <a :href="card.link" target="_blank">
                                <v-btn class="link">Visit Site</v-btn>
                            </a>
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
            projects() {
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
    .text {
        color: black;
        font-size: 1rem;
        position: absolute;
        top: 50%;
        left: 40%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        /* text-transform: uppercase; */
        font-family: 'Bellefair', serif;
    }

    .para:hover .overlay {
        opacity: 1;
    }

    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        /* background-color: rgba(168, 162, 162, 0.9); */
        background-color: rgba(255, 255, 255, .8)
    }

    .para {
        background-color: transparent;
    }

    .media {
        min-width: 20rem;
        display: block;
    }

    a {
        color: black;
    }

    .link {
        text-transform: none;
        text-align: center;
        margin: 1rem;
    }
</style>