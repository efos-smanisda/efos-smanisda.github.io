import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faBars, faAngleUp);
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')