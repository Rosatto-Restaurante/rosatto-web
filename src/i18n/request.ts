// src/i18n/request.ts
import {getRequestConfig} from 'next-intl/server'

// Carga los mensajes localmente desde src/i18n/<locale>.json
export default getRequestConfig(async ({locale}) => {
  const messages = (await import(`../i18n/${locale}.json`)).default
  return {messages}
})
