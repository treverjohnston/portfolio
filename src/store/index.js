import vue from 'vue'
import axios from 'axios'
import vuex from 'vuex'
import router from '../router'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//keepur.herokuapp.com/' : '//localhost:3000/';

let api = axios.create({
    // baseURL: '//keepur.herokuapp.com/api/',
    baseURL: baseUrl + 'api/',
    timeout: 4000,
    withCredentials: true
})
let auth = axios.create({
    // baseURL: '//keepur.herokuapp.com/',
    baseURL: baseUrl,
    timeout: 4000,
    withCredentials: true
})

vue.use(vuex)

var store = new vuex.Store({
    state: {
        projects: [
            {
                src: '../static/keepr.png',
                name: 'Keepr',
                link: 'https://keepur.herokuapp.com/',
                show: false,
                description: "A Pintrest clone, set up with Vue.js, Node, Vuetify and MongoDB."

            },
            {
                src: '../static/tattoo.png',
                name: 'Tattoo-Me',
                link: 'https://tattoo-me.herokuapp.com',
                show: false,
                description: "A Hackathon project that was set up using Vue.js, Vue-Material, Bootstrap, Node, and MongoDB.  This app allows users to do many things, but at it's core it is a way for users to look up tattoos and try them on themselves via canvas overlay."

            },
            {
                src: '../static/kanban.png',
                name: 'Kanban Board',
                link: 'https://our-kanban-vue.herokuapp.com/',
                show: false,
                description: "Full stack application using Vue, Node, Boostrap and MongoDB to build Kanban boards to better help users with project management in a similar fashion to trello."

            },
            {
                src: '../static/music.png',
                name: 'BCW-Music',
                link: 'https://bcw-music.herokuapp.com/',
                show: false,
                description: "Project built with Vue.js which uses the iTunes API as well as Node.js to build a playlist of short music clips persisted through a node server running on heroku."

            },
            // {
            //     src: '../static/hogwartsCrest.png',
            //     name: 'Hogwarts Un-Official Site',
            //     link: 'https://treverjohnston.github.io/clonesite/',
            //     show: false,
            //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolor architecto quisquam eveniet, quae dicta repellendus minima, nostrum culpa id esse sed voluptates distinctio a aspernatur, corrupti commodi repellat delectus."

            // },
            {
                name: "Slap Game",
                description: "A simple 'Slap Game' which utilizes vanilla JavaScript and Bootstrap",
                src: "../static/archer.png",
                link: "https://treverjohnston.github.io/SlapGame/",
                show: false
            },
        ],
        frontskills: [
            {
                skill: "html",
                value: 90,
                url: "../static/html.png"
            },
            {
                skill: "css",
                value: 90,
                url: "../static/css3.png"
            },
            {
                skill: "javascript",
                value: 90,
                url: "../static/javascript.png"
            },
            {
                skill: "vue.js",
                value: 90,
                url: "../static/logo.png"
            },
            {
                skill: "jquery",
                value: 75,
                url: "../static/jquery.png"
            },
            {
                skill: "bootstrap",
                value: 85,
                url: "../static/bootstrap.png"
            },
        ],
        backskills: [

            {
                skill: "node.js",
                value: 90,
                url: "../static/node.svg"
            },
            {
                skill: "mongoDB",
                value: 90,
                url: "../static/mongo.png"
            },
            {
                skill: "c#",
                value: 60,
                url: "../static/csharp.png"
            },
            {
                skill: "sql",
                value: 60,
                url: "../static/sql.png"
            },
        ]

    },
    mutations: {
        handleError(state, err) {
            console.error(err)
            // state.error = err
        },


    },
    actions: {
    }
})


export default store