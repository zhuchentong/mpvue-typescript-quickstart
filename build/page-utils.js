module.exports.resolveComponent = (targetComponents, root = "../../static/iview-weapp") => {
  const components = {}
  targetComponents.forEach(key => {
    components[key] = `${root}/${key.replace(/^i\-/, '')}/index`
  });
  return components
}


module.exports.mergeConfig = (pageConfig, commonComponent) => {
  return pageConfig.map(page => {
    if (!page.config)
      page.config = {}
    page.config.usingComponents = Object.assign(page.config.usingComponents || {}, commonComponent)
    return page
  })
}
