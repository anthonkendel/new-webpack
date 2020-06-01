/** @typedef {import("webpack/lib/Compiler")} WebpackCompiler */

const validateOptions = require('schema-utils');

const schema = {
  type: 'object',
  properties: {},
};

class Plugin {
  constructor(options = {}) {
    validateOptions(schema, options, 'Plugin');
  }

  /**
   * @param {WebpackCompiler} compiler
   */
  apply(compiler) {}
}

module.exports = Plugin;
