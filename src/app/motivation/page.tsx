'use client';
import Link from 'next/link';
import { useLanguage } from '../i18n/provider';
export default function Motivation() {
  const {t} = useLanguage(); const m = t.motivation;
  return <main id="main" className="wrap inner motivation-page"><p className="eyebrow">{m.eyebrow}</p><h1>{m.heading}&nbsp;<br/><em>{m.accent}</em></h1><div className="letter-layout"><aside><span className="mono">{m.note}</span><p>Sadi Enis Güçlüer<br/><span className="muted">{t.role}</span></p></aside><article className="letter"><p className="lead">{m.lead}</p><p>{m.intro}</p><p>{m.first}</p><p>{m.second}</p><p className="letter-closing"><strong>{m.closing}</strong></p><div className="signature">Sadi Enis Güçlüer<span>{t.role}</span></div><Link className="text-link" href="/contact/">{m.contact} ↗</Link></article></div></main>;
}
