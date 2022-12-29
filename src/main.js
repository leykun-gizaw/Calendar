import { createApp } from 'vue';
import './style.scss';
import '../node_modules/bulma/css/bulma.css';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faFloppyDisk,
  faPenToSquare,
  faTrash,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
library.add(faFloppyDisk, faPenToSquare, faTrash, faClose);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
