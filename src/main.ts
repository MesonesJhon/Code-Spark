import { createApp } from 'vue';
import App from './App.vue';
import { revelar } from './directives/revelar';
import './assets/styles/principal.css';

createApp(App).directive('revelar', revelar).mount('#app');
