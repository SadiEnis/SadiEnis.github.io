'use client';
import Link from 'next/link';
import { useLanguage } from '../i18n/provider';

export default function Resume() {
  const {t} = useLanguage(); const c = t.cv;
  const {projects, experiences, education, languages, references} = t;
  const resumeProjects = projects.filter(project => project.inResume);
  return <main id="main" className="cv-page">
    <article className="cv-sheet">
      <div className="cv-actions cv-actions-top">
        <a className="cv-download" href="/cv/sadi-enis-guculer-cv.pdf" hrefLang="en" download>{c.download}</a>
      </div>
      <header className="cv-header">
        <h1>Sadi Enis Güçlüer</h1>
        <p className="cv-title">{c.title}</p>
        <ul className="cv-contact-list">
          <li><span className="cv-contact-label">{c.locationLabel}</span><span>{t.location}</span></li>
          <li><span className="cv-contact-label">{t.contact.emailLabel}</span><a href={`mailto:${t.email}`}>{t.email}</a></li>
          <li><span className="cv-contact-label">{t.contact.phoneLabel}</span><a href={`tel:${t.phone.replace(/\s/g, '')}`}>{t.phone}</a></li>
          <li><span className="cv-contact-label">{t.contact.hello}</span><a href={t.linkedin}>linkedin.com/in/sadienisgucluer</a></li>
          <li><span className="cv-contact-label">{t.contact.code}</span><a href={t.github}>github.com/SadiEnis</a></li>
        </ul>
      </header>

      <section className="cv-section">
        <h2>{c.summaryLabel}</h2>
        <p className="cv-summary">{c.summary}</p>
      </section>

      <section className="cv-section">
        <h2>{c.education}</h2>
        {education.map(item => <div className="cv-entry" key={item.school}>
          <h3>{item.degree}</h3>
          <p className="cv-entry-org">{item.school}, {item.location}</p>
          <p className="cv-entry-date">{item.detail} | {item.period}</p>
        </div>)}
      </section>

      <section className="cv-section">
        <h2>{c.experience}</h2>
        {experiences.map(experience => <div className="cv-entry" key={experience.company}>
          <h3>{experience.role}</h3>
          <p className="cv-entry-org">{experience.company}, {experience.location}</p>
          <p className="cv-entry-date">{experience.period}</p>
          <ul className="cv-bullets">{experience.highlights.map(item => <li key={item}>{item}</li>)}</ul>
        </div>)}
      </section>

      <section className="cv-section">
        <h2>{c.projects}</h2>
        {resumeProjects.map(project => <div className="cv-entry" key={project.name}>
          <h3>{project.name}</h3>
          <p className="cv-entry-org">{[project.label, project.stack, project.platform].filter(Boolean).join(' | ')}</p>
          <p className="cv-entry-date">{project.period}</p>
          {project.subtitle && <p className="cv-entry-sub">{project.subtitle}</p>}
          {project.recognition && <p className="cv-entry-recognition">{project.recognition}</p>}
          <p className="cv-entry-link"><a href={project.url}>{project.url.replace('https://', '')}</a></p>
          <ul className="cv-bullets">{project.resumeHighlights.map(item => <li key={item}>{item}</li>)}</ul>
        </div>)}
      </section>

      <section className="cv-section">
        <h2>{c.languages}</h2>
        <ul className="cv-plain">{languages.map(item => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="cv-section">
        <h2>{c.references}</h2>
        <ul className="cv-plain">{references.map(item => <li key={item.name}>{item.name} — {item.role} — {item.contact}</li>)}</ul>
      </section>

      <div className="cv-actions">
        <a className="cv-download" href="/cv/sadi-enis-guculer-cv.pdf" download>{c.download}</a>
        <Link className="cv-back" href="/">{c.back} ←</Link>
      </div>
    </article>
  </main>;
}
