'use client';
import Link from 'next/link';

import { useLanguage } from './i18n/provider';


export default function Home() { const {t} = useLanguage(); const {projects, experiences, education} = t;
  return <main id="main" className="simple-home">
    <section className="simple-intro" aria-labelledby="intro-heading">
      <div>
        <p className="simple-role">{t.role}</p>
        <h1 id="intro-heading">Sadi&nbsp;Enis&nbsp;<br />Güçlüer<span>.</span></h1>
        <p className="simple-lead">{t.home.lead}</p>
        <p className="simple-bio">{t.home.bio}</p>
        <div className="simple-actions"><a href="#work">{t.home.projectsLink} ↓</a><Link href="/motivation/">{t.home.more} ↗</Link></div>
        <div className="simple-direct"><a href={`mailto:${t.email}`}>{t.email}</a><Link href="/cv/">{t.home.resume} ↓</Link></div>
      </div>
      <img className="simple-photo" src="/images/enis-devfest-original.jpg" alt="Sadi Enis Güçlüer" width="970" height="1293" fetchPriority="high" />
    </section>
    <section className="simple-status" aria-label={t.home.statusLabel}>
      <p className="simple-status-open"><span className="dot" aria-hidden="true"/>{t.home.availability}</p>
      <p className="simple-status-target">{t.home.targeting}</p>
      <p className="simple-status-now">{t.home.currently}</p>
    </section>
    <section className="experiences" id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading">{t.home.experience}</h2>
      {experiences.map(experience => <article className="experience-entry" key={experience.company}>
        <a className="company-logo" href={experience.url} aria-label={experience.company}><img src={experience.logo} alt="" width="88" height="88" loading="lazy" /></a>
        <div className="experience-content">
          <div className="experience-head">
            <h3><a href={experience.url}>{experience.company}</a></h3>
            <p className="experience-period">{experience.period}</p>
          </div>
          <p className="experience-role">{experience.role}</p>
          <p className="experience-scope">{experience.scope}</p>
          <ul className="experience-highlights">{experience.highlights.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      </article>)}
    </section>
    <section className="simple-education" id="education" aria-labelledby="education-heading">
      <h2 id="education-heading">{t.cv.education}</h2>
      {education.map(item => <div className="education-entry" key={item.school}>
        <p className="education-degree">{item.degree}</p>
        <p className="education-school">{item.school} · {item.location}</p>
        <p className="education-meta">{item.period} · {item.detail}</p>
      </div>)}
    </section>
    <section className="simple-work" id="work" aria-labelledby="work-heading">
      <h2 id="work-heading">{t.home.projects}</h2>
      <div className="simple-projects">{projects.map(project => <article key={project.name} className={project.image ? 'project-with-image' : ''}>
        {project.image && <img className="project-backdrop" src={project.image} alt="" width="1400" height="800" loading="lazy" />}
        <div className="simple-project-heading"><h3><a href={project.url}>{project.name} <span aria-hidden="true">↗</span></a></h3><p>{[project.stack, project.platform, project.label].filter(Boolean).join(' · ')}</p></div>
        <div className="simple-project-description"><p>{project.description}</p>{project.contribution && <p>{project.contribution}</p>}{project.highlights.length > 0 && <ul className="project-highlights">{project.highlights.map(item => <li key={item}>{item}</li>)}</ul>}<p className="project-status">{project.status}</p>{project.recognition && <p className="project-recognition">{project.recognition}</p>}{project.details && <details><summary>{t.home.details}</summary><p>{project.details}</p></details>}</div>
      </article>)}</div>
    </section>
    <div className="simple-connect"><p>{t.home.question}</p><Link href="/contact/">{t.home.contact} ↗</Link></div>
  </main>;
}
