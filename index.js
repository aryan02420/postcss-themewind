const color = require('color')

const USECOLOR_RE = /^useColor\((.*)\)$/

module.exports = () => {
  return {
    postcssPlugin: 'postcss-themewind',
    Declaration(decl) {
      const colorstring = USECOLOR_RE.exec(decl.value)
      if (colorstring) {
        decl.value = color(colorstring[1]).rgb().array().join(', ')
      }
    },
  }
}
module.exports.postcss = true
