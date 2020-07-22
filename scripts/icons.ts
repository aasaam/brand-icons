import { readdirSync } from 'fs';
import { join } from 'path';

interface IIcon {
  name: string;
  path: string;
}

const icons: IIcon[] = [];

const directoryPath = join(__dirname, '..', 'svg');

readdirSync(directoryPath).forEach((f) => {
  icons.push({
    name: f.replace('.svg', '').replace(/[^a-z0-9]/g, '_').replace(/[_]+/g, '_'),
    path: join(directoryPath, f),
  });
});

export default icons;
