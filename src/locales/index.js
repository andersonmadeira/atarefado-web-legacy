import I18n from 'i18n-js'
import en from './en-US'
import pt from './pt-BR'

const fallbackLocale = 'en-US'
const getBrowserLanguage = () => navigator.language || navigator.userLanguage

I18n.translations = {
    'en-US': en,
    'pt-BR': pt,
}

const setupLocales = () => {
    const locale = getBrowserLanguage()
    I18n.locale = I18n.translations.hasOwnProperty(locale)
        ? (I18n.locale = locale)
        : fallbackLocale
}

setupLocales()

export const translate = locale => I18n.t(locale)
