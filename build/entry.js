
const fs = require('fs')
const path = require('path')
const MpvueEntry = require('mpvue-entry')
const appJsonPath = path.resolve('dist/app.json')

/**
 * 格式化app.json文件
 */
function formatAppJson() {
  app = require(appJsonPath)
  if (app.pages) {
    app.pages = app.pages.map(page => page.replace(/.vue$/, ''))
  }
  return app
}

module.exports = new Promise(async resolve => {
  // 获取入口信息
  let getEntry = MpvueEntry.getEntry({
    template: 'src/entry.ts',
    main: 'src/main.ts',
    pages: 'src/pages.js'
  })

  // 入口对象
  let entry = {}

  // 生成入口
  Object.entries(await getEntry()).forEach(([key, value]) => {
    if (key.endsWith('.vue')) {
      key = key.replace(/.vue$/, '')
    }
    entry[key] = value
  })

  // 重写app.json文件
  fs.writeFile(appJsonPath, JSON.stringify(formatAppJson()), (err) => {
    if (err) throw err;
    resolve(entry)
  });
})
