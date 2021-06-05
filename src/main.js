import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Scroller from '@/components/Scroller'
import Loading from '@/components/Loading'

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$filters = {
    setWH(url, arg) {
        return String(url).replace(/w\.h/, arg);
    }
}
app.component('Scroller', Scroller);
app.component('Loading', Loading);
app.use(store).use(router).mount('#app');