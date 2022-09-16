import { createApp } from 'vue'
import VueTheMask from 'vue-the-mask'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router/Index'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(VueTheMask)
  .mount('#app')
