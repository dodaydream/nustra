const open = require('open')
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  hooks: {
    "devtools:initialized"() {
      open('http://localhost:3000')
    }
  }
})
