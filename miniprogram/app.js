// app.js
const { i18n } = require('./utils/i18n');

App({
  onLaunch: function() {
    // 初始化多语言
    this.initI18n();
    
    // 初始化云开发
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: 'cloud1-3gj324qu040f5d39',
        traceUser: true,
      });
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo;
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            }
          });
        }
      }
    });
  },
  
  // 初始化多语言
  initI18n: function() {
    this.globalData.i18n = i18n;
    console.log('I18n initialized, current language:', i18n.currentLang);
  },
  
  // 切换语言
  switchLanguage: function(lang) {
    if (i18n.setLanguage(lang)) {
      this.globalData.currentLanguage = lang;
      
      // 通知所有页面更新语言
      this.notifyLanguageChange();
      
      // 显示切换成功提示
      wx.showToast({
        title: i18n.t('language.switchSuccess'),
        icon: 'success',
        duration: 1500
      });
      
      return true;
    }
    return false;
  },
  
  // 通知所有页面语言变更
  notifyLanguageChange: function() {
    // 获取当前页面栈
    const pages = getCurrentPages();
    
    // 通知所有页面更新语言
    pages.forEach(page => {
      if (page.onLanguageChange && typeof page.onLanguageChange === 'function') {
        page.onLanguageChange();
      }
    });
  },
  
  // 获取翻译文本的便捷方法
  t: function(key, defaultValue) {
    return i18n.t(key, defaultValue);
  },
  
  globalData: {
    i18n: null,
    currentLanguage: 'zh'
  }
}); 