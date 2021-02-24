#!/usr/bin/env node
import program from 'commander';
import * as app from '../src/index.js';

program
  .description('Сreates a board with the size of a row per column, every second it outputs the state to the console.')
  .version('0.0.1', '-v, --version', 'output the current version');

program
  .command('generate <rows> <colls>')
  .alias('g')
  .description('Generate random board <rows> * <cols>')
  .action((rows, colls) => {
    app.generate(rows, colls);
  });

program
  .command('file <file>')
  .alias('f')
  .description('Create board from <file>')
  .action((file) => {
    app.file(file);
  });

program.parse(process.argv);
