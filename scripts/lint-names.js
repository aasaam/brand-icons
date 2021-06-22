#!/usr/bin/env node
const { readdirSync } = require('fs');
const { join, parse } = require('path');

const directoryPath = join(__dirname, '..', 'svg');

const { error } = console;

const validPrefixes = ['si', 'ir', 'wi'];

readdirSync(directoryPath).forEach((f) => {
  const parsed = parse(f);
  if (parsed.ext !== '.svg') {
    error(`Invalid extension for ${f}`);
    process.exit(1);
  }
  const matched = parsed.name.match(/^([a-z]{2})_(.*)/);
  if (!matched || !validPrefixes.includes(matched[1])) {
    error(`Invalid name for ${f}. Prefix must start with ${validPrefixes.join(', ')}`);
    process.exit(1);
  }
  if (!matched || !matched[2].match(/^[a-z0-9_]+$/)) {
    error(`Invalid name for ${f}`);
    process.exit(1);
  }
});
