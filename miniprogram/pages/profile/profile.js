// pages/profile/profile.js
const app = getApp();

Page({
  data: {
    // 页面文本
    pageTitle: '',
    viewProfile: '',
    joinedIn: '',
    userName: '',
    tripsSection: '',
    settingsSection: '',
    
    // 行程数据
    tripItems: [],
    
    // 设置数据
    settingItems: []
  },

  onLoad: function (options) {
    console.log('Profile page loaded');
    this.updateLanguage();
  },

  onShow: function () {
    // 设置底部导航栏选中状态
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 4
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
      pageTitle: i18n.t('profile.title'),
      viewProfile: i18n.t('profile.viewProfile'),
      joinedIn: i18n.t('profile.joinedIn'),
      userName: i18n.t('profile.userName'),
      tripsSection: i18n.t('profile.tripsSection'),
      settingsSection: i18n.t('profile.settingsSection'),
      
      tripItems: [
        {
          id: 'flight',
          title: i18n.t('profile.tripItems.flightToNy'),
          date: i18n.t('profile.tripDates.flight'),
          icon: '/images/flight.svg'
        },
        {
          id: 'hotel',
          title: i18n.t('profile.tripItems.hotelInLa'),
          date: i18n.t('profile.tripDates.hotel'),
          icon: '/images/hotel.svg'
        }
      ],
      
      settingItems: [
        {
          id: 'notifications',
          title: i18n.t('profile.settingItems.notifications'),
          icon: '/images/notification.svg'
        },
        {
          id: 'payment',
          title: i18n.t('profile.settingItems.payment'),
          icon: '/images/payment.svg'
        },
        {
          id: 'language',
          title: i18n.t('profile.settingItems.language'),
          icon: '/images/language.svg'
        },
        {
          id: 'help',
          title: i18n.t('profile.settingItems.help'),
          icon: '/images/help.svg'
        }
      ]
    });
  },

  // 点击设置项
  onSettingTap: function(e) {
    const settingId = e.currentTarget.dataset.setting;
    console.log('Setting tapped:', settingId);
    
    if (settingId === 'language') {
      this.showLanguageSelector();
    } else {
      const i18n = app.globalData.i18n;
      const settingTitle = i18n.t(`profile.settingItems.${settingId}`);
      
      wx.showModal({
        title: settingTitle,
        content: `${settingTitle}${i18n.t('common.loading')}`,
        showCancel: false,
        confirmText: i18n.t('common.confirm')
      });
    }
  },

  // 显示语言选择器
  showLanguageSelector: function() {
    const i18n = app.globalData.i18n;
    const currentLang = i18n.currentLang;
    
    wx.showActionSheet({
      itemList: [
        `${i18n.t('language.chinese')} ${currentLang === 'zh' ? '✓' : ''}`,
        `${i18n.t('language.english')} ${currentLang === 'en' ? '✓' : ''}`
      ],
      success: (res) => {
        const selectedLang = res.tapIndex === 0 ? 'zh' : 'en';
        
        if (selectedLang !== currentLang) {
          app.switchLanguage(selectedLang);
        }
      }
    });
  }
});