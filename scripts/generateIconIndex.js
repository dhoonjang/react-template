import { readdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// eslint-disable-next-line no-undef
const currentDir = process.cwd();

const fileNames = readdirSync(resolve(currentDir, './src/assets/icons'));

const icons = fileNames
  .filter((fileName) => fileName.endsWith('.svg'))
  .map((fileName) => [
    fileName,
    `${fileName
      .replace(/^./, (str) => str.toUpperCase())
      .replace('.svg', '')
      .replace(/[-_.]./g, (str) => str[1].toUpperCase())}Icon`,
  ])
  .sort((a, b) => a[1].localeCompare(b[1]));

const indexFile = `${icons
  .map(
    ([fileName, componentName]) =>
      `export { ReactComponent as ${componentName} } from './${fileName}';`
  )
  .join('\n')}\n`;

writeFileSync(resolve(currentDir, './src/assets/icons/index.tsx'), indexFile);
