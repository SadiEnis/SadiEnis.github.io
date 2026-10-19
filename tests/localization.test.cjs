const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
// Compile just the data modules for Node tests; no browser or production loader.
require.extensions['.ts'] = (module, filename) => {
  const result = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020}});
  module._compile(result.outputText, filename);
};
const {resolveLocale, languages} = require('../src/app/i18n/locale.ts');
const {messages} = require('../src/app/i18n/messages.ts');

test('manual preference wins over browser settings', () => {
  assert.equal(resolveLocale('pl', ['tr-TR', 'en-US']), 'pl');
  assert.equal(resolveLocale('en', ['pl-PL']), 'en');
});
test('matches supported regional languages in browser preference order', () => {
  assert.equal(resolveLocale(null, ['tr-TR', 'en-US']), 'tr');
  assert.equal(resolveLocale(null, ['pl-PL', 'en']), 'pl');
  assert.equal(resolveLocale(null, ['de-DE', 'pl-PL', 'tr-TR']), 'pl');
  assert.equal(resolveLocale(null, ['en-GB', 'tr-TR']), 'en');
  assert.equal(resolveLocale(null, [' TR_tr ']), 'tr');
});
test('unsupported or empty preferences fall back to English', () => {
  assert.equal(resolveLocale(null, ['de-DE', 'fr-FR']), 'en');
  assert.equal(resolveLocale(null, []), 'en');
  assert.equal(resolveLocale('invalid', ['tr']), 'tr');
  assert.equal(resolveLocale('invalid', ['unknown']), 'en');
});
function shape(value) {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, shape(item)]));
  return typeof value;
}
test('all locales cover every page, project and experience field', () => {
  for (const language of languages) {
    assert.deepEqual(shape(messages[language]), shape(messages.en));
    assert.equal(messages[language].projects.length, 4);
    assert.equal(messages[language].experiences.length, 2);
  }
});
test('translations preserve project identities, images and destinations', () => {
  for (const language of ['tr', 'pl']) {
    messages[language].projects.forEach((project, index) => {
      for (const field of ['name', 'url', 'image']) assert.equal(project[field], messages.en.projects[index][field]);
      assert.notEqual(project.description, messages.en.projects[index].description);
      assert.notEqual(project.status, messages.en.projects[index].status);
    });
    messages[language].experiences.forEach((experience, index) => {
      for (const field of ['company', 'url', 'logo']) assert.equal(experience[field], messages.en.experiences[index][field]);
      assert.notEqual(experience.period, messages.en.experiences[index].period);
    });
  }
});
