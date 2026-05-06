import { en } from './en';
import { de } from './de';

export const dictionaries = { en, de };

export type Locale = keyof typeof dictionaries;
export type Dictionary = typeof en;

export const locales: Locale[] = ['en', 'de'];

export const otherLocale = (lang: Locale): Locale => (lang === 'en' ? 'de' : 'en');

const trimSlashes = (p: string) => p.replace(/^\/+|\/+$/g, '');

export function localePath(locale: Locale, path: string): string {
  const clean = trimSlashes(path);
  if (locale === 'en') {
    return clean === '' ? '/' : `/${clean}/`;
  }
  return clean === '' ? '/de/' : `/de/${clean}/`;
}

export function altUrl(currentLocale: Locale, currentPath: string): string {
  const stripped = trimSlashes(currentPath);
  const withoutDePrefix =
    currentLocale === 'de' && (stripped === 'de' || stripped.startsWith('de/'))
      ? stripped.replace(/^de\/?/, '')
      : stripped;
  return localePath(otherLocale(currentLocale), withoutDePrefix);
}

export function basePath(currentLocale: Locale, currentPath: string): string {
  const stripped = trimSlashes(currentPath);
  if (currentLocale === 'de') {
    return stripped.replace(/^de\/?/, '');
  }
  return stripped;
}
