'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { languages, type Locale } from './locale';
import { useLanguage } from './provider';

const labels = { en: 'English', tr: 'Türkçe', pl: 'Polski' };
function Flag({locale}: {locale: Locale}) {
  // SVG flags render consistently on Windows, where flag emoji may show letters.
  return <svg className="language-flag" viewBox="0 0 60 40" aria-hidden="true" focusable="false">
    {locale === 'pl' ? <><path fill="#fff" d="M0 0h60v20H0z"/><path fill="#dc143c" d="M0 20h60v20H0z"/></> : locale === 'tr' ? <><path fill="#e30a17" d="M0 0h60v40H0z"/><circle cx="26" cy="20" r="10" fill="#fff"/><circle cx="29" cy="20" r="8" fill="#e30a17"/><path fill="#fff" d="m35 20 7-2-4 6v-8l4 6z"/></> : <><path fill="#012169" d="M0 0h60v40H0z"/><path stroke="#fff" strokeWidth="8" d="m0 0 60 40M60 0 0 40"/><path stroke="#c8102e" strokeWidth="3" d="m0 0 60 40M60 0 0 40"/><path stroke="#fff" strokeWidth="13" d="M30 0v40M0 20h60"/><path stroke="#c8102e" strokeWidth="7" d="M30 0v40M0 20h60"/></>}
  </svg>;
}
function LanguagePicker() {
  const {locale, t, setLocale} = useLanguage();
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const outside = (event: PointerEvent) => { if (ref.current && !ref.current.contains(event.target as Node)) ref.current.open = false; };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && ref.current?.open) {
        ref.current.open = false;
        ref.current.querySelector('summary')?.focus();
      }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); };
  }, []);
  return <details ref={ref} className="language-picker"><summary aria-label={`${t.nav.language}: ${labels[locale]}`}><Flag locale={locale}/><span>{locale.toUpperCase()}</span><span aria-hidden="true">⌄</span></summary>
    <div className="language-options" role="group" aria-label={t.nav.language}>{languages.map(language => <button type="button" key={language} lang={language} aria-pressed={language === locale} onClick={() => {
      setLocale(language);
      if (ref.current) { ref.current.open = false; ref.current.querySelector('summary')?.focus(); }
    }}><Flag locale={language}/><span>{labels[language]}</span>{language === locale && <span aria-hidden="true">✓</span>}</button>)}</div>
  </details>;
}
export function SiteHeader() {
  const {t} = useLanguage();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 751px)');
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    document.addEventListener('pointerdown', outside);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('pointerdown', outside);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, []);
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = Math.max(0, window.scrollY);
      if (y < 96) setHidden(false);
      else if (y > lastY + 4) setHidden(true);
      else if (y < lastY - 4) setHidden(false);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <><a className="skip" href="#main">{t.nav.skip}</a>
    <header ref={headerRef} className={`site-header${hidden && !menuOpen ? ' is-hidden' : ''}`}
      onKeyDown={event => {
        if (event.key === 'Escape' && menuOpen) {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setMenuOpen(false);
      }}>
      <Link className="wordmark" href="/" aria-label="Sadi Enis Güçlüer" onClick={() => setMenuOpen(false)}>SE<span>G</span><i>.</i></Link>
      <nav id="site-navigation" className={`site-navigation${menuOpen ? ' is-open' : ''}`} aria-label={t.nav.label} onClick={event => {
        if ((event.target as HTMLElement).closest('a')) setMenuOpen(false);
      }}>
        <Link href="/">{t.nav.about}</Link><Link href="/motivation/">{t.nav.motivation}</Link><Link href="/cv/">{t.nav.cv}</Link><Link className="nav-contact" href="/contact/">{t.nav.contact} <span aria-hidden="true">↗</span></Link>
      </nav>
      <LanguagePicker/>
      <button ref={menuButtonRef} className="site-menu-toggle" type="button" aria-label={t.nav.label} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(value => !value)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d={menuOpen ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16'}/>
        </svg>
      </button>
    </header></>;
}
export function SiteFooter() {
  const {t} = useLanguage();
  return <footer><Link className="footer-name" href="/">Sadi Enis Güçlüer<span>{t.role}</span></Link><p>{t.footer}</p><a href="https://github.com/SadiEnis">GitHub ↗</a><a href="https://www.linkedin.com/in/sadienisgucluer/">LinkedIn ↗</a><small>© 2026</small></footer>;
}
