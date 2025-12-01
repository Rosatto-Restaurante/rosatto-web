// src/i18n/request.ts
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Corrección: Aseguramos que siempre haya un idioma válido.
  // Si 'locale' llegara a ser undefined, usamos 'es' por defecto.
  const currentLocale = locale || 'es';

  return {
    locale: currentLocale,
    messages: (await import(`../i18n/${currentLocale}.json`)).default
  };
});