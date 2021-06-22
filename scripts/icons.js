const { readdirSync } = require('fs');
const { join } = require('path');

const icons = [];

const directoryPath = join(__dirname, '..', 'svg');
encodeURIComponent()
readdirSync(directoryPath).forEach((f) => {
  icons.push({
    name: f.replace('.svg', '').replace(/[^a-z0-9]/g, '_').replace(/[_]+/g, '_'),
    path: join(directoryPath, f),
  });
});

module.exports = icons;
