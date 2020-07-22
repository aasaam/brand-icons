import { constants, copyFileSync, readdirSync } from 'fs';
import { join, parse } from 'path';

const simpleIconsDirectoryPath = join(__dirname, '..', 'node_modules', 'simple-icons', 'icons');

readdirSync(simpleIconsDirectoryPath).forEach((f) => {
  if (f.match(/\.svg$/)) {
    const fp = parse(f);
    const n = fp.name.replace(/[^a-z0-9]/g, '_').replace(/[_]+/, '_');
    copyFileSync(
      join(simpleIconsDirectoryPath, f),
      join(__dirname, '..', 'svg', `si_${n}.svg`),
      constants.COPYFILE_FICLONE,
    );
  }
});
