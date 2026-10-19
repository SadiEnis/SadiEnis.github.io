export const languages = ['en', 'tr', 'pl'] as const;
export type Locale = typeof languages[number];
export const storageKey = 'portfolio-language';
export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && languages.includes(value as Locale);
}
export function resolveLocale(saved: unknown, preferred: readonly string[]): Locale {
  if (isLocale(saved)) return saved;
  for (const language of preferred) {
    const base = language.trim().toLowerCase().split(/[-_]/)[0];
    if (isLocale(base)) return base;
  }
  return 'en';
}
