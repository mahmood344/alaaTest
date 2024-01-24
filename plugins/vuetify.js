import '@mdi/font/css/materialdesignicons.css'
import { fa } from 'vuetify/locale'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            background:'#F6F7FB',
            warning:'#FFD553'
          }
        },
      },
    },
    locale: {
      locale: 'fa',
      fallback: 'fa',
      messages: { fa },
      rtl: {fa: true},
    },
  })
  app.vueApp.use(vuetify)
})