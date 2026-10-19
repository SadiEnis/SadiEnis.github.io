'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { messages, type Messages } from './messages';
import { isLocale, resolveLocale, storageKey, type Locale } from './locale';

const LanguageContext = createContext<{locale: Locale; t: Messages; setLocale: (locale: Locale) => void} | null>(null);

export function LanguageProvider({children}: {children: React.ReactNode}) {
  // English is the static HTML and no-JavaScript fallback; browser preferences
  // are read only after hydration to keep the first client render consistent.
  const [locale, updateLocale] = useState<Locale>('en');
  const pathname = usePathname();
  useEffect(() => {
    const detect = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem(storageKey); } catch { /* storage may be disabled */ }
      updateLocale(resolveLocale(saved, navigator.languages?.length ? navigator.languages : [navigator.language]));
    };
    detect();
    const syncStorage = (event: StorageEvent) => { if (event.key === storageKey || event.key === null) detect(); };
    window.addEventListener('languagechange', detect);
    window.addEventListener('storage', syncStorage);
    return () => { window.removeEventListener('languagechange', detect); window.removeEventListener('storage', syncStorage); };
  }, []);
  useEffect(() => {
    document.documentElement.lang = locale;
    const t = messages[locale];
    document.title = pathname.startsWith('/contact') ? t.titles.contact : pathname.startsWith('/motivation') ? t.titles.motivation : pathname.startsWith('/cv') ? t.titles.cv : t.titles.home;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.description);
  }, [locale, pathname]);
  function setLocale(value: Locale) {
    if (!isLocale(value)) return;
    updateLocale(value);
    try { localStorage.setItem(storageKey, value); } catch { /* current session still works */ }
  }
  return <LanguageContext.Provider value={{locale, t: messages[locale], setLocale}}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('LanguageProvider is required');
  return context;
}
