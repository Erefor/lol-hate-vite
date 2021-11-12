import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/router.js'
import JSText from './components/Atoms/JSText.vue'

const app = createApp(App)
app.component('JSText', JSText)
app.use(router)
app.mount('#app')
