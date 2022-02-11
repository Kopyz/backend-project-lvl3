#!/usr/bin/env node
import { program } from 'commander';
import downloadPage from '../downloader.js';

program
  .version('0.1.0')
  .description('Page loader utility')
  .arguments('<pageAdress>')
  .option('-V, --version', 'output the version number')
  .option('-o, --output [dir]', 'output dir', '/home/user/current-dir')
  .action(async (pageAdress) => {
    console.log(await downloadPage(pageAdress, program.opts().output));
  })
  .parse(process.argv);
