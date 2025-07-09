# 旅行探索 - 微信小程序

🌍 一个功能完整的旅行探索微信小程序，基于微信云开发构建，支持多语言切换，提供探索、航班、酒店、行程管理等完整的旅行服务功能。

![小程序预览](https://img.shields.io/badge/小程序-旅行探索-brightgreen)
![版本](https://img.shields.io/badge/版本-1.0.0-blue)
![语言支持](https://img.shields.io/badge/语言-中文|English-orange)

## ✨ 功能特性

### 🎯 核心功能
- 🌍 **探索发现** - 热门目的地推荐和个性化行程建议
- ✈️ **航班搜索** - 智能航班搜索，支持多城市和日期选择
- 🏨 **酒店预订** - 酒店搜索和预订管理
- 📅 **行程管理** - 统一管理航班和酒店预订信息
- 👤 **个人中心** - 用户信息和个性化设置

### 🎨 技术亮点
- 🌐 **完整国际化** - 支持中英文无缝切换，覆盖所有页面
- 📱 **响应式设计** - 适配各种屏幕尺寸，优秀的用户体验
- ⚡ **高性能优化** - 统一错误处理、请求管理和常量配置
- 🔧 **代码质量** - 规范的代码结构，完善的工具函数
- 🎯 **用户体验** - 流畅的页面切换和交互反馈

## 🛠 技术栈

- **前端框架**: 微信小程序原生开发
- **后端服务**: 微信云开发 (CloudBase)
- **数据存储**: 云开发数据库 (MongoDB)
- **云函数**: Node.js 18.15
- **文件存储**: 云开发存储
- **多语言**: 自定义i18n国际化方案

## 📁 项目结构

```
旅行探索/
├── miniprogram/                 # 小程序前端代码
│   ├── pages/                  # 页面文件
│   │   ├── index/              # 首页 - 项目介绍
│   │   ├── explore/            # 探索页面 - 目的地发现
│   │   ├── flights/            # 航班页面 - 航班搜索
│   │   ├── hotels/             # 酒店页面 - 酒店预订
│   │   ├── trips/              # 行程页面 - 预订管理
│   │   └── profile/            # 个人资料页面 - 用户设置
│   ├── components/             # 自定义组件
│   │   └── cloudbase-badge/    # 云开发徽章组件
│   ├── custom-tab-bar/         # 自定义底部导航栏
│   ├── utils/                  # 工具函数库
│   │   ├── i18n.js            # 国际化工具
│   │   ├── errorHandler.js    # 错误处理工具
│   │   ├── request.js         # 统一请求管理
│   │   └── constants.js       # 常量配置
│   ├── images/                 # 图片资源
│   ├── app.js                  # 应用程序逻辑
│   ├── app.json               # 应用配置
│   └── app.wxss               # 全局样式
├── cloudfunctions/             # 云函数
│   └── getOpenId/             # 获取用户OpenID云函数
├── project.config.json         # 项目配置文件
├── project.private.config.json # 私有配置文件
├── CLAUDE.md                  # AI开发配置
└── README.md                  # 项目说明文档
```

## 🚀 快速开始

### 环境要求

- 微信开发者工具 1.06.0+
- Node.js 16.0+
- 已注册的微信小程序账号
- 已开通的微信云开发服务

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/lzcjsyr/travel-explore-miniprogram.git
   cd travel-explore-miniprogram
   ```

2. **配置开发环境**
   - 使用微信开发者工具打开项目
   - 配置项目AppID
   - 开通云开发服务

3. **部署云函数**
   ```bash
   # 在微信开发者工具中
   # 右键 cloudfunctions/getOpenId
   # 选择 "创建并部署：云端安装依赖"
   ```

4. **启动项目**
   - 在微信开发者工具中点击"编译"
   - 选择"预览"生成二维码
   - 使用微信扫码体验

### 配置说明

**云开发环境配置** (miniprogram/app.js):
```javascript
wx.cloud.init({
  env: 'cloud1-3gj324qu040f5d39', // 当前配置的云开发环境ID
  traceUser: true,
});
```

## 🌐 国际化支持

本项目完整支持中英文双语，包括：

- ✅ 所有页面文本翻译
- ✅ 动态语言切换
- ✅ 自定义TabBar多语言
- ✅ 表单验证信息多语言
- ✅ 错误提示多语言

**切换语言**: 个人资料页面 → 设置 → 语言

## 📱 功能截图

| 探索页面 | 航班搜索 | 酒店预订 | 个人中心 |
|---------|---------|---------|---------|
| 🌍 目的地发现 | ✈️ 智能搜索 | 🏨 酒店选择 | 👤 设置管理 |

## 🔧 开发指南

### 添加新页面

1. 在 `miniprogram/pages/` 创建页面目录
2. 添加页面到 `app.json` 的 `pages` 配置
3. 实现国际化支持：
   ```javascript
   // 页面JS文件中
   onLanguageChange: function() {
     this.updateLanguage();
   },
   
   updateLanguage: function() {
     const i18n = app.globalData.i18n;
     this.setData({
       pageTitle: i18n.t('yourpage.title')
     });
   }
   ```

### 添加新的翻译

在 `miniprogram/utils/i18n.js` 中添加：
```javascript
// 中文
zh: {
  yourpage: {
    title: '页面标题',
    content: '页面内容'
  }
}

// 英文  
en: {
  yourpage: {
    title: 'Page Title',
    content: 'Page Content'
  }
}
```

### 云函数开发

```javascript
// 在 cloudfunctions/yourFunction/index.js
const cloud = require('wx-server-sdk');
cloud.init();

exports.main = async (event, context) => {
  // 你的云函数逻辑
};
```

## 🎯 最佳实践

### 性能优化
- ✅ 图片资源优化（建议 < 200KB）
- ✅ 统一错误处理机制
- ✅ 请求缓存和重试机制
- ✅ 组件化开发

### 代码规范
- ✅ 统一的代码风格
- ✅ 完善的错误处理
- ✅ 清晰的注释文档
- ✅ 模块化的工具函数

## 🔨 构建部署

### 本地测试
```bash
# 微信开发者工具中
1. 点击"编译" 
2. 选择"真机调试"
3. 扫码在手机上测试
```

### 正式发布
```bash
1. 微信开发者工具 → "上传"
2. 微信公众平台 → "版本管理" → "提交审核"
3. 审核通过后 → "发布"
```

## 🤝 贡献指南

我们欢迎所有形式的贡献！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

### 贡献类型
- 🐛 Bug 修复
- ✨ 新功能开发
- 📚 文档改进
- 🎨 UI/UX 优化
- ⚡ 性能优化

## 📄 开源协议

本项目基于 [MIT License](LICENSE) 开源协议。

## 📞 联系我们

- 📧 Email: lzcjsyr@hotmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/lzcjsyr/travel-explore-miniprogram/issues)
- 💬 讨论: [GitHub Discussions](https://github.com/lzcjsyr/travel-explore-miniprogram/discussions)

## 🙏 致谢

感谢以下项目和服务：

- [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/) - 小程序开发框架
- [微信云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html) - 后端云服务
- [Unsplash](https://unsplash.com/) - 高质量图片资源

---

⭐ 如果这个项目对你有帮助，请给个 Star！

[![Powered by CloudBase](https://7463-tcb-advanced-a656fc-1257967285.tcb.qcloud.la/mcp/powered-by-cloudbase-badge.svg)](https://github.com/TencentCloudBase/CloudBase-AI-ToolKit)  

> 本项目基于 [**CloudBase AI ToolKit**](https://github.com/TencentCloudBase/CloudBase-AI-ToolKit) 开发，🪐 用 AI IDE 一键生成、部署和托管你的全栈 Web 应用与小程序、数据库和后端服务，无需运维，极速上线你的创意 💫
