#!/usr/bin/env node
const fileSize = require('filesize');
const fsp = require('fs').promises;
const IconFontBuilder = require('icon-font-buildr');
const { join } = require('path');

const icons = require('./icons');

const svgIcons = icons.map((i) => {
  return {
    icon: i.name,
  };
});

const fontName = 'aasaamBrandIcons';

async function build() {

  const builder = new IconFontBuilder({
    icons: svgIcons,
    sources: [
      join(__dirname, '..', 'svg', '[icon].svg'),
    ],

    output: {
      fontName,
      icons: null,
      ligatures: true,

      fonts: join(__dirname, '..', 'font'),
      formats: [
        'ttf',
        'woff',
        'woff2',
      ],
    },
  });

  await builder.build();

  const ligatures = builder.getIconsLigatures();

  const data = {
    count: 0,
    size: {},
    icons: [],
  };

  data.icons = Object.keys(ligatures).sort();
  data.count = data.icons.length,
  data.size.ttf = fileSize(await (await fsp.stat(join(__dirname, '..', 'font', `${fontName}.ttf`))).size);
  data.size.woff = fileSize(await (await fsp.stat(join(__dirname, '..', 'font', `${fontName}.woff`))).size);
  data.size.woff2 = fileSize(await (await fsp.stat(join(__dirname, '..', 'font', `${fontName}.woff2`))).size);

  await fsp.writeFile(join(__dirname, '..', 'tmp', 'data.json'), JSON.stringify(data, null, 2));
}

build();
