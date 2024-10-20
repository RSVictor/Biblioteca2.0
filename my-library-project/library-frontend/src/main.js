import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App)

app.use(router); // Usa o Vue Router

app.mount('#app'); // Monta o aplicativo no elemento #app