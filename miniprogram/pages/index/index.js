const app = getApp();

Page({
  data: {
    openid: '',
    pageTitle: '',
    pageSubtitle: '',
    openidLabel: '',
    loadingText: '',
    featuresTitle: '',
    features: {}
  },
  
  onLoad() {
    this.updateLanguage();
    
    wx.cloud.callFunction({
      name: 'getOpenId',
      success: res => {
        this.setData({
          openid: res.result.openid
        })
      },
      fail: err => {
        console.error('调用云函数失败', err)
      }
    })
  },
  
  onLanguageChange: function() {
    this.updateLanguage();
  },
  
  updateLanguage: function() {
    const i18n = app.globalData.i18n;
    
    this.setData({
      pageTitle: i18n.t('index.title'),
      pageSubtitle: i18n.t('index.subtitle'),
      openidLabel: i18n.t('index.openidLabel'),
      loadingText: i18n.t('index.loadingText'),
      featuresTitle: i18n.t('index.featuresTitle'),
      features: {
        auth: i18n.t('index.features.auth'),
        cloudFunc: i18n.t('index.features.cloudFunc'),
        miniprogram: i18n.t('index.features.miniprogram'),
        deploy: i18n.t('index.features.deploy')
      }
    });
  }
})