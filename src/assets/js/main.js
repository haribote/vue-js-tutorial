/**
 * main.js
 */

/** @require vue */
import Vue from 'vue';

/**
 * Hello, world
 */
new Vue({
  el  : '#app-1',
  data: {
    message: 'Hello, world.'
  }
});

/**
 * Two-way binding
 */
new Vue({
  el  : '#app-2',
  data: {
    message: 'Hello, world.'
  }
});

/**
 * Render a list
 */
new Vue({
  el  : '#app-3',
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

/**
 * Handle user input
 */
new Vue({
  el     : '#app-4',
  data   : {
    message: 'Hello, world.'
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

/**
 * All together
 */
new Vue({
  el     : '#app-5',
  data   : {
    newTodo: '',
    todos  : [{
      text: 'Add some todos'
    }]
  },
  methods: {
    addTodo() {
      const text = this.newTodo.trim();
      if (text) {
        this.todos.push({text});
        this.newTodo = '';
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }
});
