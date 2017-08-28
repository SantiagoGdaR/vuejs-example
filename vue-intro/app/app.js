//interpolation
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

//element attributes binding
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

//conditionals and loops
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true,    
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});

//handling user input
var app4 = new Vue({
  el: '#app-4',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

//model
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue!'
  }
});