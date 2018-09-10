const { resolveComponent, mergeConfig } = require('../build/page-utils')

/**
 * 页面配置
 */
module.exports = mergeConfig([
  {
    path: 'pages/page1.vue',
    config: {
      navigationBarTitleText: 'page1',
      usingComponents: resolveComponent([

      ])
    }
  },
  {
    path: 'pages/page2.vue',
    config: {
      navigationBarTitleText: 'page2'
    }
  },
  {
    path: 'pages/page3.vue',
    config: {
      navigationBarTitleText: 'page3'
    }
  },
  {
    path: 'pages/counter.vue',
    config: {
      navigationBarTitleText: 'store示例'
      // usingComponents: resolveComponent([

      // ])
    }
  }
],
  // 全局组件
  resolveComponent([
    'i-row',
    'i-col',
    'i-button',
    'i-input',
    'i-panel',
    'i-card',
    "i-cell-group",
    "i-cell"
  ])
)