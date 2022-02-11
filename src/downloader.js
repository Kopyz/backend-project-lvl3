import axios from 'axios';
import { writeFile } from 'fs/promises';
import makeFileName from './utils.js';

const downloadPage = (pageAdress, outputDir = process.cwd()) => {
  const fileName = makeFileName(pageAdress);
  const dest = `${outputDir}/${fileName}.html`;
  const download = axios.get(pageAdress)
    .then((response) => writeFile(dest, response.data))
    .then(() => fileName);
  return download;
};

export default downloadPage;
