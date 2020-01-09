import Vue from 'vue'
import I18n from 'vue-i18n'
import zh from './zh'
import en from './en'

Vue.use(I18n)
const messages = {
  en: Object.assign(en),
  zh: Object.assign(zh)
}

const i18n = new I18n({
  locale: 'en',
  messages
})

export default i18n
