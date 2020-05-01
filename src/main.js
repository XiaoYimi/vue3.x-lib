import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/scss/base.scss'
import './assets/scss/demo.scss'

createApp(App).use(router).use(store).mount('#app')
