import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'; 
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    // Create .env on your root directory
    // Add an environment variable named VUE_APP_GMAPS_KEY=<key>
    key: process.env.VUE_APP_GMAPS_KEY,
    libraries: "places" // necessary for places input
  }
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
