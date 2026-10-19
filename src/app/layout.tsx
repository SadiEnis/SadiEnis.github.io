import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import './portrait.css';
export const metadata: Metadata = { title: {default: 'Sadi Enis Güçlüer — Gameplay Programmer', template: '%s · Sadi Enis'}, description: 'Gameplay programmer with professional Unity experience and personal Unreal Engine projects. Explore my work, motivation, and contact links.' };
export default function Layout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><header><Link className="wordmark" href="/">SE<span>G</span><i>.</i></Link><nav aria-label="Main navigation"><Link href="/">About & work</Link><Link href="/motivation/">Motivation</Link><Link className="nav-contact" href="/contact/">Let’s talk <span>↗</span></Link></nav></header>{children}<footer><Link className="footer-name" href="/">Sadi Enis Güçlüer<span>Gameplay Programmer</span></Link><p>Built around curiosity. Focused on gameplay.</p><a href="https://github.com/SadiEnis">GitHub ↗</a><a href="https://www.linkedin.com/in/sadienisgucluer/">LinkedIn ↗</a><small>© 2026</small></footer></body></html> }
