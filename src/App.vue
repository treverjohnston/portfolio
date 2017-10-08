<template>
  
  <v-app light>
    <v-toolbar fixed>
      <router-link :to="'/'">
        <v-btn icon light>
          <v-icon>home</v-icon>
        </v-btn>
      </router-link>
      <v-btn icon light @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon light @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view>
        </router-view>
      </v-container>
      <v-container fluid>
        <skills></skills>
      </v-container>
      <v-container fluid>
        <projects></projects>
      </v-container>
    </main>
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer">
    </v-navigation-drawer>
    <v-footer :fixed="fixed">
      <span>&copy; 2017 Trever Johnston</span>
    </v-footer>
  </v-app>
</template>

<script>
  
  import Projects from './Components/Projects'
  import Skills from './Components/Skills'
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: true,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Trever Johnston'
      }
    },
    methods: {
    },
    computed: {
    },
    components: {
      Projects,
      Skills
    },
    mounted() {
    }
  }

</script>
<style>
  a {
    text-decoration: none;
  }
  main{
    background-image: url("http://wallpapercave.com/wp/uzWrM9c.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Bellefair', serif;
}
</style>