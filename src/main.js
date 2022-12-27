import { createApp } from 'vue';
import './style.css';
import '../node_modules/bulma/css/bulma.css';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faFloppyDisk,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
library.add(faFloppyDisk, faPenToSquare, faTrash);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
