import * as filesize from 'filesize';
import { promises } from 'fs';
import * as IconFontBuilder from 'icon-font-buildr';
import { join } from 'path';

import icons from './icons';

const svgIcons = icons.map((i) => {
  return {
    icon: i.name,
  };
});

const fontName = 'aasaamBrandIcons';

async function build() {

  // @ts-ignore
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

  const jsLines = [];
  jsLines.push(`var icons = ${JSON.stringify(Object.keys(ligatures).sort())};`);
  const ttfFont = await promises.stat(join(__dirname, '..', 'font', `${fontName}.ttf`));
  const woffFont = await promises.stat(join(__dirname, '..', 'font', `${fontName}.woff`));
  const woff2Font = await promises.stat(join(__dirname, '..', 'font', `${fontName}.woff2`));

  // @ts-ignore
  jsLines.push(`var ttfSize = ${JSON.stringify(filesize(ttfFont.size))};`);
  // @ts-ignore
  jsLines.push(`var woffSize = ${JSON.stringify(filesize(woffFont.size))};`);
  // @ts-ignore
  jsLines.push(`var woff2Size = ${JSON.stringify(filesize(woff2Font.size))};`);

  await promises.writeFile(join(__dirname, '..', 'tmp', 'icons.js'), jsLines.join('\n'));
}

build();
