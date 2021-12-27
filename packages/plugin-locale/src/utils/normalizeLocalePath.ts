import { LocaleConfig } from '../types';

function normalizeLocalePath(
  pathname: string,
  localeConfig: LocaleConfig,
) {
  const { defaultLocale, locales } = localeConfig;
  const subPaths = pathname.split('/');
  let detectedLocale = defaultLocale;

  // eslint-disable-next-line no-restricted-syntax
  for (const locale of locales) {
    if (subPaths[1] && subPaths[1] === locale) {
      detectedLocale = locale;
      subPaths.splice(1, 1);
      pathname = subPaths.join('/') || '/';
      break;
    }
  }

  return {
    pathname,
    detectedLocale,
  };
}

export default normalizeLocalePath;
