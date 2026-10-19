export const projects = [
  {
    name: 'Project First Run',
    type: 'Unity 6 · C# · Solo development',
    description: 'A first-person roguelite arena shooter where players fight enemy waves, earn XP, and shape their build through weapons, abilities, and chest rewards.',
    contribution: 'I own the full development, from gameplay systems and UI to integration. The project focuses on modular combat, data-driven content, and testable gameplay rules.',
    highlights: ['Weapon switching preserves each weapon’s ammunition state. Item upgrades improve the existing weapon or ability without taking up another slot.', 'Enemy encounters, XP collection, and chest reward selection connect combat to progression.'],
    status: 'In-development prototype; art and presentation currently use placeholders.',
    url: 'https://github.com/SadiEnis/project-first-run',
    details: 'Pure C# objects own gameplay rules where practical, while Unity components handle input, scene composition, presentation, and lifecycle integration. ScriptableObjects define content separately from mutable runtime state. EditMode and PlayMode suites cover combat, enemies, rewards, progression, and arena transitions.'
  },
  {
    name: 'OceanClean',
    type: 'Unity · C# · Graduation project',
    description: 'A 2D online co-op game for 1–4 players. Players collect ocean waste, deliver it to recycling points, and earn score and in-game currency during short multiplayer sessions.',
    contribution: 'Developed as my graduation project, combining gameplay programming, online multiplayer, player-facing UI, and API-integrated progression.',
    highlights: ['Players create or join a lobby, play a match, view the results, and return to the lobby. Unity Lobby, Relay, and Netcode for GameObjects support the multiplayer flow.', 'An external REST API connects accounts, player profiles, currency, leaderboards, inventory, shop data, and match results.'],
    status: 'Playable Unity client. WebGL support is being tested; host migration is implemented at lobby level.',
    url: 'https://github.com/SadiEnis/CleanOcean',
    details: 'Relay connects players without direct IP connections, with WebSocket-compatible configuration for WebGL. If the lobby host leaves, a new host recreates the Relay connection and updates lobby data. Shop and inventory UI structures are implemented; expanded item systems and active-match recovery remain future work. The environmental theme relates to SDG 14 (Life Below Water) and the cooperative structure to SDG 17 (Partnerships for the Goals).'
  },
  {
    name: '3Match',
    type: 'Personal prototype · Match-3',
    description: 'A personal match-3 prototype, created as an experiment with the genre.',
    contribution: '', highlights: [], status: 'Prototype.',
    url: 'https://github.com/SadiEnis/3Match', details: ''
  },
];
