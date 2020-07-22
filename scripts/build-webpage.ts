import { promises } from 'fs';
import { join } from 'path';
import { renderFile } from 'pug';

async function build() {
  const ics = await promises.readFile(join(__dirname, '..', 'tmp', 'icons.js'), { encoding: 'utf8' });

  const params = {
    icons: ics,
    title: 'فونت و آیکون برندها',
  };

  await new Promise((res) => {
    renderFile(join(__dirname, '..', 'templates', 'index.pug'), params, (_, data) => {
      promises.writeFile(join(__dirname, '..', 'index.html'), data).then(() => {
        res();
      });
    });
  });
}

build();
