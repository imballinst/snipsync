module.exports = {
  rootDir: process.cwd(),
  cfgFile: 'snipsync.config.yaml',
  extractionDir: 'sync_repos',
  markdownCodeTicks: '```',
  fmtStartCodeBlock: (ext) => '```' + ext,
  readStart: '@@@SNIPSTART',
  readEnd: '@@@SNIPEND',
  readMultiSnip: '@@@MULTISNIP',
  writeStart: '<!--SNIPSTART',
  writeStartClose: '-->',
  writeEnd: '<!--SNIPEND',
};
