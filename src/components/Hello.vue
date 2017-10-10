<template>
  <div class="hello">
    <v-layout>
      <v-flex xs12>
        <v-card class="para">
          <v-parallax height="500" src="">
            <v-layout column align-center justify-center>
              <v-flex xs4>
                <img class="ava" src="../../static/me.jpg" alt="avatar">
              </v-flex>
              <v-flex xs8>
                <h1 class="black--text">Trever Johnston</h1>
                <h4 class="black--text">Full Stack Web-Developer</h4>
              </v-flex>
            </v-layout>
          </v-parallax>
          <v-card-title class="font" primary-title>
            <p>
              I spent the first 15 years of my life growing up in Longmont, Colorado. Once I hit high school, I moved out to Boise, Idaho
              with the rest of my family where I have more or less resided for the past 6 years. I started my college career
              at George Fox University in Oregon. However, upon getting married I moved back to Boise and attended Boise
              State for a year, pursuing a Bachelor's in History and Education. Prior to entering my Junior year at BSU,
              I discovered a love and aptitude for coding. Since then, I have been doing everything that I can to improve
              this ability in every way possible.
            </p>
            <p>
              When I am not coding, I enjoy a wide variety of activities. I love to snowboard, read, woodwork, fish, play video games,
              and especially, spend time with my wife and family.
            </p>
          </v-card-title>
          <!-- </v-parallax> -->
          <!-- <v-card-actions>
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
          </v-card-actions> -->
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
  .font{
    font-size: 1.5rem;
  }
  .ava {
    height: 20rem;
    width: 12\4rem;
    margin-top: 2rem;
  }

  .img {
    height: 15rem;
  }

  .para {
    background-color: rgba(168, 162, 162, 0.6);
    /* color: white; */
    color: black;
  }

  .skills {
    margin: 10rem 0 10rem 0;
  }

  .projects {
    margin: 10rem 0 10rem 0;
  }
</style>