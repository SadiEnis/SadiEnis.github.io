import Link from 'next/link';

import { projects } from './projects';
import { experiences } from './experiences';

export default function Home() {
  return <main id="main" className="simple-home">
    <section className="simple-intro" aria-labelledby="intro-heading">
      <div>
        <p className="simple-role">Gameplay Programmer</p>
        <h1 id="intro-heading">Sadi Enis<br />Güçlüer<span>.</span></h1>
        <p className="simple-lead">I build gameplay systems — from combat and progression to the interactions that connect them.</p>
        <p className="simple-bio">I have professional experience with Unity and explore Unreal Engine through personal projects. My work ranges from a solo roguelite project to smaller gameplay prototypes.</p>
        <div className="simple-actions"><a href="#work">View my projects ↓</a><Link href="/motivation/">More about me ↗</Link></div>
      </div>
      <img className="simple-photo" src="/images/enis-devfest-original.jpg" alt="Sadi Enis Güçlüer" width="970" height="1293" fetchPriority="high" />
    </section>
    <section className="experiences" id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading">Experience</h2>
      {experiences.map(experience => <article className="experience-entry" key={experience.company}>
        <a className="company-logo" href={experience.url} aria-label={experience.company}><img src={experience.logo} alt="" width="88" height="88" loading="lazy" /></a>
        <div className="experience-content"><h3><a href={experience.url}>{experience.company}</a></h3><p className="experience-period">{experience.period}</p><p className="experience-role">{experience.role}</p><p>{experience.summary}</p><p>{experience.detail}</p></div>
      </article>)}
    </section>
    <section className="simple-work" id="work" aria-labelledby="work-heading">
      <h2 id="work-heading">Selected projects</h2>
      <div className="simple-projects">{projects.map(project => <article key={project.name} className={project.image ? 'project-with-image' : ''}>
        {project.image && <img className="project-backdrop" src={project.image} alt="" loading="lazy" />}
        <div className="simple-project-heading"><h3><a href={project.url}>{project.name} <span aria-hidden="true">↗</span></a></h3><p>{project.type}</p></div>
        <div className="simple-project-description"><p>{project.description}</p>{project.contribution && <p>{project.contribution}</p>}{project.highlights.length > 0 && <ul className="project-highlights">{project.highlights.map(item => <li key={item}>{item}</li>)}</ul>}<p className="project-status">{project.status}</p>{project.details && <details><summary>Gameplay & technical details</summary><p>{project.details}</p></details>}</div>
      </article>)}</div>
    </section>
    <div className="simple-connect"><p>Want to talk about gameplay?</p><Link href="/contact/">Get in touch ↗</Link></div>
  </main>;
}
