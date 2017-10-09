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
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolor architecto quisquam eveniet, quae dicta repellendus minima, nostrum culpa id esse sed voluptates distinctio a aspernatur, corrupti commodi repellat delectus."

            },
            {
                src: '../static/tattoo.png',
                name: 'Tattoo-Me',
                link: 'https://tattoo-me.herokuapp.com',
                show: false,
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolor architecto quisquam eveniet, quae dicta repellendus minima, nostrum culpa id esse sed voluptates distinctio a aspernatur, corrupti commodi repellat delectus."

            },
            {
                src: '../static/kanban.png',
                name: 'Kanban Board',
                link: 'https://our-kanban-vue.herokuapp.com/',
                show: false,
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolor architecto quisquam eveniet, quae dicta repellendus minima, nostrum culpa id esse sed voluptates distinctio a aspernatur, corrupti commodi repellat delectus."

            },
            {
                src: '../static/music.png',
                name: 'BCW-Music',
                link: 'https://bcw-music.herokuapp.com/',
                show: false,
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolor architecto quisquam eveniet, quae dicta repellendus minima, nostrum culpa id esse sed voluptates distinctio a aspernatur, corrupti commodi repellat delectus."

            },
            {
                src: '../static/hogwartsCrest.png',
                name: 'Hogwarts Un-Official Site',
                link: 'https://treverjohnston.github.io/clonesite/',
                show: false,
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolor architecto quisquam eveniet, quae dicta repellendus minima, nostrum culpa id esse sed voluptates distinctio a aspernatur, corrupti commodi repellat delectus."

            },
            {
                name: "Slap Game",
                description: "description",
                src: "../static/archer.png",
                link: "https://treverjohnston.github.io/SlapGame/",
                show: false
            },
        ],
        skills: [
            {
                skill: "html",
                value: 25,
                url: "../static/html.png"
            },
            {
                skill: "css",
                value: 99,
                url: "../static/css3.png"
            },
            {
                skill: "javascript",
                value: 100,
                url: "../static/javascript-fixed.png"
            },
            {
                skill: "vue.js",
                value: 23,
                url: "../static/v.png"
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