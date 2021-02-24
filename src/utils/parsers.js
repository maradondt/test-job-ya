import fs from 'fs';
import path from 'path';

const getFilePath = (filename) => path.resolve(process.cwd(), filename);
const readFile = (filename) => fs.readFileSync(getFilePath(filename), 'utf-8');

const parsers = (filename) => {
  const extName = path.extname(filename);
  switch (extName) {
    case '':
      return readFile(filename).trim();
    default:
      throw new Error('Unknow file extension');
  }
};

export default parsers;
