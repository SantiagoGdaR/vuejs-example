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
  props: {
    message:{
      type: String,
      required: true
    }
  },
  template: '<div><p>{{ message }}</p><button @click="addClick"> Click</button></div>',
  methods:{
    addClick: function(){
      this.$emit('incrementClicks')
    }
  }
});

//local component registration
var buttonComponent = {
  //component must have exactly one root element
  template: '<p><child-component :message="messageForChild" @incrementClicks="increaseTotalCicks"></child-component>Total Clicks: {{totalClicks}}</p>',
  data: function(){
    return {
      messageForChild: 'Message for Child Component',
      totalClicks: 0
    }
  },
  methods: {
    increaseTotalCicks: function(){
      this.totalClicks += 1;
    }
  }
}



new Vue({
  el: '#app',
  components: {
    'button-component': buttonComponent
  }
});