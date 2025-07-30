import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'fa', 'pt'] as const;

export default getRequestConfig(async (params) => {
  const locale = await params.requestLocale;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
