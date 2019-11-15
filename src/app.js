import Vue from 'vue/dist/vue.js';
import counter from './counter.vue'

new Vue({
  el: '#app',
  components:{
    counter
  },


  data:{

    name: 'Nick',
  },
  methods:{

    tada(){
      console.log('Tada');
    },
  }

});