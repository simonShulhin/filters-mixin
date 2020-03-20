import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.filter('toLowercase', function(value) {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    console.log('Global mixin created');
  },
});

new Vue({
  render: function(h) {
    return h(App);
  },
}).$mount('#app');
