// Assembles each page in src/pages into a single self-contained HTML file:
// inlines the shared CSS/JS, header/footer partials, i18n dictionary and logos.
const fs = require('fs');
const path = require('path');

const read = f => fs.readFileSync(path.join(__dirname, f), 'utf8');
const uri = f => 'data:image/webp;base64,' + fs.readFileSync(path.join(__dirname, f)).toString('base64');

const FONTS = [
  '<link rel="preconnect" href="https://fonts.googleapis.com">',
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
  '<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">',
].join('\n');

const parts = {
  HEAD: FONTS + '\n<style>\n' + read('src/shared.css') + '</style>',
  HEADER: read('src/partials/header.html').trimEnd(),
  FOOTER: read('src/partials/footer.html').trimEnd(),
  SCRIPTS: '<script>\n' + read('src/cc-i18n.js').trim() + '\n</script>\n<script>\n' + read('src/shared.js').trim() + '\n</script>',
};
const logos = {
  LOGO_HEADER: uri('assets/logo-v2.webp'),
  LOGO_FOOTER: uri('assets/logo-footer-v2.webp'),
};

// Home is also written under its original design filename.
const OUTPUTS = {
  'index.html': ['index.html', 'CEM Connect Home V2 (standalone).html'],
};

const fill = (html, vals) => html.replace(/\{\{([A-Z_]+)\}\}/g, (m, k) => (k in vals ? vals[k] : m));

for (const file of fs.readdirSync(path.join(__dirname, 'src/pages')).filter(f => f.endsWith('.html'))) {
  const html = fill(fill(read('src/pages/' + file), parts), logos);
  const left = html.match(/\{\{[A-Z_]+\}\}/g);
  if (left) throw new Error(file + ': unresolved placeholders ' + left.join(', '));
  for (const out of OUTPUTS[file] || [file]) {
    fs.writeFileSync(path.join(__dirname, out), html);
    console.log('wrote', out, (html.length / 1024).toFixed(1) + ' KB');
  }
}
