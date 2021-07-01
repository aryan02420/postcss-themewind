module.exports.useColor = function (cssVarName) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVarName}), ${opacityValue})`
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${cssVarName}), var(${opacityVariable}, 1))`
    }
    return `rgb(var{${cssVarName})`
  }
}
