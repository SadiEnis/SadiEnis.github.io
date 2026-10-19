import Link from 'next/link';

const projects = [
  {name: 'Project First Run', type: 'Unity 6 · C# · Solo development', description: 'A first-person roguelite arena shooter with modular combat, enemy encounters, and chest-based rewards.', contribution: 'I own the full development, from gameplay systems to UI and integration.', url: 'https://github.com/SadiEnis/project-first-run', details: 'First-person controls, weapon switching, ammunition and abilities; enemy behaviours, XP, upgrades and reward selection. Data-driven content with separate runtime state and EditMode / PlayMode tests.'},
  {name: 'CleanOcean', type: 'Graduation project', description: 'My graduation project, bringing together academic work and hands-on development.', contribution: '', url: 'https://github.com/SadiEnis/CleanOcean', details: ''},
  {name: '3Match', type: 'Personal prototype · Match-3', description: 'A focused prototype exploring match-3 gameplay.', contribution: '', url: 'https://github.com/SadiEnis/3Match', details: ''},
];

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
    <section className="simple-work" id="work" aria-labelledby="work-heading">
      <h2 id="work-heading">Selected projects</h2>
      <div className="simple-projects">{projects.map(project => <article key={project.name}>
        <div className="simple-project-heading"><h3><a href={project.url}>{project.name} <span aria-hidden="true">↗</span></a></h3><p>{project.type}</p></div>
        <div className="simple-project-description"><p>{project.description}</p>{project.contribution && <p>{project.contribution}</p>}{project.details && <details><summary>Gameplay & technical details</summary><p>{project.details}</p></details>}</div>
      </article>)}</div>
    </section>
    <div className="simple-connect"><p>Want to talk about gameplay?</p><Link href="/contact/">Get in touch ↗</Link></div>
  </main>;
}
