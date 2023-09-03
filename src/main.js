import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
/* eslint-disable */
createApp(App).use(router).mount('#app')

import Paginate from 'vuejs-paginate'
createApp.component('paginate', Paginate)

