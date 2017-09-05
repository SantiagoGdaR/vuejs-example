//global component registration
Vue.component('text-component', {
  template: '<p>{{message}}</p>',
  //for components data must be a function
  data: function(){
    return {
      message: 'This is a simple text component'
    }
  }
});

Vue.component('child-component', {
  props: ['message'],
  template: '<p>{{ message }}</p>'
});

//local component registration
var buttonComponent = {
  //component must have exactly one root element
  template: '<p><child-component :message="messageForChild"></child-component><button> Local Btn </button></p>',
  data: function(){
    return {
      messageForChild: 'Message for Child Component'
    }
  }
}



new Vue({
  el: '#app',
  components: {
    'button-component': buttonComponent
  }
});