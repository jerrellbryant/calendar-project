import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';


Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyCOrfIxDN7-tdDBTgPYCgUp58mQF3QXFnw",
  authDomain: "vue-calendar-c5ba3.firebaseapp.com",
  databaseURL: "https://vue-calendar-c5ba3.firebaseio.com",
  projectId: "vue-calendar-c5ba3",
  storageBucket: "vue-calendar-c5ba3.appspot.com",
  messagingSenderId: "368177294398",
  appId: "1:368177294398:web:6d3a16110c0342b95af56f"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
