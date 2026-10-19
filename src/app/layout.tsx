import type { Metadata } from 'next';
import { LanguageProvider } from './i18n/provider';
import { SiteHeader, SiteFooter } from './i18n/site-shell';
import { SmoothScroll } from './smooth-scroll';
import './globals.css';
import './portrait.css';
import './simple-home.css';
import './experience-projects.css';
import './i18n/language.css';
export const metadata: Metadata = { title: {default: 'Sadi Enis Güçlüer — Gameplay Programmer', template: '%s · Sadi Enis'}, description: 'Gameplay programmer with professional Unity experience and personal Unreal Engine projects. Explore my work, motivation, and contact links.' };
export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en" data-scroll-behavior="smooth"><body><LanguageProvider><SmoothScroll/><SiteHeader/>{children}<SiteFooter/></LanguageProvider></body></html>;
}
