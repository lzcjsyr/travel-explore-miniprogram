// pages/explore/explore.js
const app = getApp();

Page({
  data: {
    // 页面标题和文本
    pageTitle: '',
    searchPlaceholder: '',
    popularDestinations: '',
    recommendedTrips: '',
    
    // 目的地数据
    destinations: [],
    
    // 推荐行程数据
    recommendations: []
  },

  onLoad: function (options) {
    // 页面加载时的逻辑
    console.log('Explore page loaded');
    this.updateLanguage();
  },

  onShow: function () {
    // 页面显示时的逻辑
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      });
    }
  },

  // 语言变更回调
  onLanguageChange: function() {
    this.updateLanguage();
    // 通知自定义TabBar更新语言
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().onLanguageChange();
    }
  },

  // 更新语言
  updateLanguage: function() {
    const i18n = app.globalData.i18n;
    
    this.setData({
      pageTitle: i18n.t('explore.title'),
      searchPlaceholder: i18n.t('explore.searchPlaceholder'),
      popularDestinations: i18n.t('explore.popularDestinations'),
      recommendedTrips: i18n.t('explore.recommendedTrips'),
      
      destinations: [
        { id: 'paris', name: i18n.t('explore.destinations.paris'), image: '/images/paris-new.jpg' },
        { id: 'london', name: i18n.t('explore.destinations.london'), image: '/images/london-new.jpg' },
        { id: 'newyork', name: i18n.t('explore.destinations.newyork'), image: '/images/newyork-new.jpg' },
        { id: 'tokyo', name: i18n.t('explore.destinations.tokyo'), image: '/images/tokyo-new.jpg' }
      ],
      
      recommendations: [
        { 
          id: 'mountain', 
          name: i18n.t('explore.recommendations.mountain.title'), 
          description: i18n.t('explore.recommendations.mountain.desc'),
          image: '/images/mountain-new.jpg' 
        },
        { 
          id: 'beach', 
          name: i18n.t('explore.recommendations.beach.title'), 
          description: i18n.t('explore.recommendations.beach.desc'),
          image: '/images/beach-new.jpg' 
        },
        { 
          id: 'city', 
          name: i18n.t('explore.recommendations.city.title'), 
          description: i18n.t('explore.recommendations.city.desc'),
          image: '/images/city-new.jpg' 
        }
      ]
    });
  },

  // 点击目的地
  onDestinationTap: function(e) {
    const city = e.currentTarget.dataset.city;
    console.log('Selected destination:', city);
    
    const i18n = app.globalData.i18n;
    const cityName = i18n.t(`explore.destinations.${city}`);
    
    wx.showToast({
      title: `${i18n.t('explore.title')} ${cityName}`,
      icon: 'none',
      duration: 2000
    });
  },

  // 点击推荐行程
  onRecommendationTap: function(e) {
    const type = e.currentTarget.dataset.type;
    console.log('Selected recommendation:', type);
    
    const i18n = app.globalData.i18n;
    const typeName = i18n.t(`explore.recommendations.${type}.title`);
    
    wx.showToast({
      title: `${i18n.t('trips.viewButton')} ${typeName}`,
      icon: 'none',
      duration: 2000
    });
  },

  // 搜索功能
  onSearchTap: function() {
    const i18n = app.globalData.i18n;
    wx.showToast({
      title: i18n.t('common.loading'),
      icon: 'none',
      duration: 2000
    });
  }
});
