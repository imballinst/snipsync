const { join } = require('path');
const { readFileSync } = require('fs');
const { load } = require('js-yaml');
const { cfgFile, rootDir, fmtProgressBar } = require('./common');

module.exports.readConfig = (logger, file="") => {
  // allow user to specify a configuration file path other than the default.
  const cfgPath = file === "" ? join(rootDir, cfgFile) : file;
  logger.info(`loading configuration from ${cfgPath}`);
  const cfg = load(readFileSync(cfgPath, 'utf-8'));

  // add features section if not specified
  if (!Object.prototype.hasOwnProperty.call(cfg, 'features')) {
    cfg['features'] = {};
  }

  // Enable source links if not specified in the config
  if (!Object.prototype.hasOwnProperty.call(cfg.features, 'enable_source_link')) {
    cfg['features']['enable_source_link'] = true;
  }

  // Enable code blocks if not specified in the config
  if (!Object.prototype.hasOwnProperty.call(cfg.features, 'enable_code_block')) {
    cfg['features']['enable_code_block'] = true;
  }

  // If allowed_target_extensions option isn't set, set it to an empty array
  // which will ignore the option and include all files.
  if (!Object.prototype.hasOwnProperty.call(cfg.features, 'allowed_target_extensions')) {
    cfg['features']['allowed_target_extensions'] = [];
  }

  // Disable code block dedenting by default if not specified
  if (!Object.prototype.hasOwnProperty.call(cfg.features, 'enable_code_dedenting')) {
    cfg['features']['enable_code_dedenting'] = false;
  }

  // Disable code block dedenting by default if not specified
  if (!Object.prototype.hasOwnProperty.call(cfg.features, 'enable_multi_snippet')) {
    cfg['features']['enable_multi_snippet'] = false;
  }

  // If override_codeblock_extension option isn't set, set it to false
  // which will ignore the option and include all files.
  if (!Object.prototype.hasOwnProperty.call(cfg.features, 'override_codeblock_extension')) {
    cfg['features']['override_codeblock_extension'] = [];
  }

  // If enable_auto_indentation option isn't set, set it to false
  // which will ignore the option and include all files.
  if (!Object.prototype.hasOwnProperty.call(cfg.features, 'enable_auto_indentation')) {
    cfg['features']['enable_auto_indentation'] = false;
  }

  // If replace_tabs option isn't set, set it to false
  // which will ignore the option and include all files.
  if (!Object.prototype.hasOwnProperty.call(cfg.features, 'replace_tabs')) {
    cfg['features']['replace_tabs'] = undefined;
  }

  return cfg;
};
