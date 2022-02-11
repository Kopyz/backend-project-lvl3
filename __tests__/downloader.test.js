import nock from 'nock';
import * as fs from 'fs/promises';
import path from 'path';
import os from 'os';
import downloadPage from '../src/downloader.js';

nock.disableNetConnect();

let dest = '';

beforeEach(async () => {
  dest = await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-'));
});

test('check file content', async () => {
  nock('https://test.project.com')
    .get('/smwh/smth')
    .reply(200, 'Magic HTML');
  const fileName = await downloadPage('https://test.project.com/smwh/smth', dest);
  expect(fileName).toBe('test-project-com-smwh-smth');
  const savedData = await fs.readFile(`${dest}/${fileName}.html`, 'utf-8');
  console.log(JSON.stringify(savedData));
  expect(savedData).toBe('Magic HTML');
});
