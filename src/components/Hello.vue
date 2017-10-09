<template>
  <div class="hello">
    <v-layout>
      <v-flex xs12>
        <v-card class="para">
          <v-parallax height="200"src="">
            <v-layout column align-center justify-center>
              <h1 class="white--text">Trever Johnston</h1>
              <h4 class="white--text">Full Stack Web-Developer</h4>
            </v-layout>
          </v-parallax>
          <v-card-title primary-title>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias vitae iure earum hic dolores at distinctio sequi vel
                in consequuntur laudantium, id itaque maiores quo qui voluptate omnis nesciunt voluptatum repellendus laboriosam
                error, deleniti iusto impedit. Ex perspiciatis nam cupiditate.
              </p>
            </div>
          </v-card-title>
          <v-card-actions>
            <router-link :to="'projects'">
              <v-btn light icon>
                <v-icon>code</v-icon>
              </v-btn>
            </router-link>
            <router-link :to="'skills'">
              <v-btn light icon>
                <v-icon>donut_small</v-icon>
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <div class="skills">
      <skills></skills>
    </div>
    <div class="projects">
      <projects></projects>
    </div>
  </div>
</template>

<script>
  import Projects from './Projects'
  import Skills from './Skills'
  export default {
    name: 'hello',
    data() {
      return {
      }
    },

    components: {
      Projects,
      Skills
    },
    computed: {

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
    height: 15rem;
  }
  .para{
    background-color: rgba(168, 162, 162, 0.6);
    color: white;
  }
  .skills{
    margin: 20rem 0 20rem 0;
  }
  .projects{
    margin: 10rem 0 10rem 0;
  }
</style>