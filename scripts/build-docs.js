#!/usr/bin/env node
const fsp = require('fs').promises;
const { join } = require('path');

const data = require('../tmp/data.json');

const indexFile = join(__dirname, '..', 'index.html');

async function build() {
  let html = await fsp.readFile(
    indexFile,
    { encoding: 'utf8' },
  );

  html = html.replace(/<script id="data">[\s\S]*?<\/script>/, `<script id="data">var data = ${JSON.stringify(data).trim()}</script>`);

  await fsp.writeFile(indexFile, html);
}

build();
