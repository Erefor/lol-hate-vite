import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/router.js'
import JSText from './components/Atoms/JSText.vue'
import JSButton from './components/Atoms/JSButton.vue'
import LoadingIndicator from './components/Molecules/LoadingIndicator.vue'

const app = createApp(App)
app.component('JSText', JSText)
app.component('JSButton', JSButton)
app.component('LoadingIndicator', LoadingIndicator)
app.use(router)
app.mount('#app')
