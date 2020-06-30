/*require('./bootstrap');

window.Vue = require('vue');
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
const app = new Vue({
    el: '#app',
});


import Echo from 'laravel-echo'

let e = new Echo({
    broadcaster : 'socket.io',
    host: window.location.hostname + ':6001'
})*/

require('./bootstrap');

import Echo from 'laravel-echo'

let e = new Echo({
    broadcaster : 'socket.io',
    host: window.location.hostname + ':6001'
})

e.channel('laravel_database_chan-demo').listen('PostCreatedEvent', (e) => {

   // var data = JSON.parse(e);

    var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
    //var data = e;
    document.getElementById('a').innerHTML = e.post;
    console.log(e);
})
