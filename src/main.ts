import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './style.css'

// Importa useDark para forçar aplicação da classe dark no html
import { useDark } from '@vueuse/core'


// Inicializa o controle de tema escuro
useDark()

// Cria e monta o app
const app = createApp(App)
app.use(router)
app.mount('#app')
