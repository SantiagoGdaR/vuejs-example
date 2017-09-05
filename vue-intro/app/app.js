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
      this.message = this.message.split('').reverse().join('');
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

//component
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});
var app6 = new Vue({
  el: '#app-6',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
});

//computed and watchers
var app7 = new Vue({
  el: '#app-7',
  data: {
    message: 'Hello Vue!',
    oldInfo: ''
  },
  //diff between method and computed: 
  //computed: a computed property will only re-evaluate when some of its dependencies have changed [catching].
  //this means as long as message has not changed, multiple access to the reversedMessage computed property will 
  //immediately return the previously computed result without having to run the function again.
  //method: a method invocation will always run the function whenever a re-render happens.
  computed: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('');
    }
  },
  //is most useful when you want to perform asynchronous or expensive operations in response to changing data.
  watch:{
    message: function(newMessage, oldMessage){
      this.oldInfo =  oldMessage;
      return;
    }
  }
});

//class and style bindings
Vue.component('text-line', {
  props: ['message'],
  template: '<p>{{ message }}</p>'
});
var app8 = new Vue({
  el: '#app-8',
  data: {
    hasError: false,
    bold: 'bold',
    bigFont: 'big-font',
    message: 'component text',
    activeColor: 'red',
    fontSize: 30
  },
  methods: {
    changeData: function(){
      this.hasError = !this.hasError;
    }
  }
});