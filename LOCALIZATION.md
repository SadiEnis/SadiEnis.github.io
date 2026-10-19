# Localization

Supported languages: English (`en`), Turkish (`tr`), Polish (`pl`). The original static HTML and no-JavaScript fallback are English.

After hydration, selection priority is:

1. Valid explicit selection saved as `portfolio-language` in localStorage.
2. First supported language in `navigator.languages`, matching regional variants such as `tr-TR`, `pl-PL`, and `en-US`.
3. English when no supported preference exists.

An explicit choice is shared across pages and remembered on subsequent visits. Storage failures do not prevent in-session switching. Browser language changes and preferences saved in other tabs are observed. The language applies to navigation, content, projects, experience, dates, footer, accessibility labels, browser title, description, and the document's `lang` attribute. Brand names and technical product names remain unchanged.

The selector uses SVG flags (UK, Türkiye, Poland) plus language codes and native language names. A flag is a visual cue, not an assumption about the visitor's location. It supports keyboard activation, Tab navigation, Escape to close and focus return, and outside-click dismissal.

Translations live in `src/app/i18n/messages.ts`; language matching is in `locale.ts`. The existing paths remain the same in all languages; this is browser-selected localization, not separate indexed locale URLs. The 404 framework fallback is not part of the three localized portfolio pages.

Run `node --test tests/localization.test.cjs` and `npm run build` after changes.
