/**
 * main.js
 */

/** @require vue */
import Vue from 'vue';

/**
 * Hello, world
 */
new Vue({
  el: '#app-1',
  data: {
    message: 'Hello, world.'
  }
});

/**
 * Two-way binding
 */
new Vue({
  el: '#app-2',
  data: {
    message: 'Hello, world.'
  }
});

/**
 * Render a list
 */
new Vue({
  el: '#app-3',
  data: {
    todos: [{
      text: 'Learn JavaScript'
    }, {
      text: 'Learn Vue.js'
    }, {
      text: 'Build Something Awesome'
    }]
  }
});
