<template>
    <div class="skills">
        <v-layout  column>
            <v-flex xs12>
                <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in skills" :key="card.title">
                            <!-- <v-card class="img"> -->
                                <v-progress-circular  class="circle" v-bind:size="100" v-bind:width="15" v-bind:rotate="-90" v-bind:value="card.value" color="purple">
                                    <img :src="card.url" :height="50" :alt="card.skill">
                                </v-progress-circular>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0">{{card.skill}}</h3>
                                    </div>
                                </v-card-title>
                            <!-- </v-card> -->
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: 'skills',
        data() {
            return {
                value: 50,
                color: "purple"
            }
        },

        components: {
        },
        computed: {
skills(){
    return this.$store.state.skills
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
    .img {
        /* color: blue; */
        background-color: transparent;
        color: white;

    }

    .circle {
        text-align: center;
        color: blue;

    }
    .para{
        background-color: transparent;
    }
    .headline{
        color: white;
    }
</style>