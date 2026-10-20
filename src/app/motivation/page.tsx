'use client';
import Link from 'next/link';
import { useLanguage } from '../i18n/provider';
import './roadmap.css';
const roadmapLabels = {
  en: { title: 'The path I’m building', current: 'Where I am now', completed: 'Reached', next: 'Future goal' },
  tr: { title: 'İlerlemek istediğim yol', current: 'Şu an bulunduğum yer', completed: 'Ulaşılan hedef', next: 'Gelecek hedefi' },
  pl: { title: 'Moja droga rozwoju', current: 'Gdzie jestem teraz', completed: 'Osiągnięty cel', next: 'Przyszły cel' },
};
export default function Motivation() {
  const {t, locale} = useLanguage(); const m = t.motivation;
  const labels = roadmapLabels[locale];
  return <main id="main" className="wrap inner motivation-page">
    <section className="motivation-hero" aria-labelledby="motivation-heading">
      <p className="eyebrow">{m.eyebrow}</p>
      <h1 id="motivation-heading">{m.heading}&nbsp;<br/><em>{m.accent}</em></h1>
    </section>
    <div className="letter-layout"><aside><span className="mono">{m.note}</span><p>Sadi Enis Güçlüer<br/><span className="muted">{t.role}</span></p></aside><article className="letter"><p className="lead">{m.lead}</p><p>{m.intro}</p><p>{m.first}</p><p>{m.second}</p><p className="letter-closing"><strong>{m.closing}</strong></p><div className="signature">Sadi Enis Güçlüer<span>{t.role}</span></div></article></div>
      <div className="career-roadmap" role="group" aria-label={labels.title}>
        <p className="roadmap-caption">{labels.title}</p>
        <div className="roadmap-stage">
        <svg className="roadmap-route roadmap-route-wide" viewBox="0 0 1000 300" preserveAspectRatio="none" aria-hidden="true">
          <path className="roadmap-route-future" d="M370 110 C470 155 500 240 650 190 S840 20 950 70"/>
          <path className="roadmap-route-done" d="M50 170 C140 170 160 40 300 90 C325 99 350 101 370 110"/>
        </svg>
        <svg className="roadmap-route roadmap-route-narrow" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">
          <path className="roadmap-route-future" d="M700 200 C710 280 290 260 350 330 S550 470 750 450"/>
          <path className="roadmap-route-done" d="M150 40 C100 110 620 50 650 150 C655 170 695 180 700 200"/>
        </svg>
        <ol className="roadmap-stops">
          {['Make a game', 'Game Developer', 'Technical Designer', 'Game Director'].map((goal, index) => <li key={goal} className={index < 2 ? 'roadmap-complete' : 'roadmap-future'}>
            <span className="roadmap-node" aria-hidden="true"/>
            <span>{goal}</span><span className="roadmap-sr-only"> — {index < 2 ? labels.completed : labels.next}</span>
          </li>)}
        </ol>
        <div className="roadmap-current" aria-current="step">
          <span className="roadmap-current-node" aria-hidden="true"/>
          <span className="roadmap-current-copy"><strong>Gameplay Programmer</strong></span>
        </div>
        </div>
      </div>
    <Link className="text-link" href="/contact/">{m.contact} ↗</Link>
    </main>;
}
