// pages/hotels/hotels.js
const app = getApp();

Page({
  data: {
    // 页面文本
    pageTitle: '',
    destinationPlaceholder: '',
    checkinPlaceholder: '',
    checkoutPlaceholder: '',
    roomsPlaceholder: '',
    searchButton: '',
    selectDestinationTitle: '',
    roomsAndGuestsTitle: '',
    
    // 表单数据
    destination: '',
    checkinDate: '',
    checkoutDate: '',
    rooms: '',
    showCityPicker: false,
    showRoomPicker: false,
    
    // 城市列表
    cities: [],
    
    // 房间选项
    roomOptions: []
  },

  onLoad: function (options) {
    console.log('Hotels page loaded');
    this.updateLanguage();
    this.setDefaultDates();
  },

  onShow: function () {
    // 设置底部导航栏选中状态
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
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
      pageTitle: i18n.t('hotels.title'),
      destinationPlaceholder: i18n.t('hotels.destinationPlaceholder'),
      checkinPlaceholder: i18n.t('hotels.checkinPlaceholder'),
      checkoutPlaceholder: i18n.t('hotels.checkoutPlaceholder'),
      roomsPlaceholder: i18n.t('hotels.roomsPlaceholder'),
      searchButton: i18n.t('hotels.searchButton'),
      selectDestinationTitle: i18n.t('hotels.selectDestination'),
      roomsAndGuestsTitle: i18n.t('hotels.roomsAndGuests'),
      
      // 更新城市列表
      cities: [
        { id: 'beijing', name: i18n.t('flights.cities.beijing'), desc: i18n.t('flights.cities.beijing') },
        { id: 'shanghai', name: i18n.t('flights.cities.shanghai'), desc: i18n.t('flights.cities.shanghai') },
        { id: 'guangzhou', name: i18n.t('flights.cities.guangzhou'), desc: i18n.t('flights.cities.guangzhou') },
        { id: 'shenzhen', name: i18n.t('flights.cities.shenzhen'), desc: i18n.t('flights.cities.shenzhen') },
        { id: 'hangzhou', name: i18n.t('flights.cities.hangzhou'), desc: i18n.t('flights.cities.hangzhou') },
        { id: 'nanjing', name: i18n.t('flights.cities.nanjing'), desc: i18n.t('flights.cities.nanjing') },
        { id: 'wuhan', name: i18n.t('flights.cities.wuhan'), desc: i18n.t('flights.cities.wuhan') },
        { id: 'chengdu', name: i18n.t('flights.cities.chengdu'), desc: i18n.t('flights.cities.chengdu') },
        { id: 'xian', name: i18n.t('flights.cities.xian'), desc: i18n.t('flights.cities.xian') },
        { id: 'qingdao', name: i18n.t('flights.cities.qingdao'), desc: i18n.t('flights.cities.qingdao') },
        { id: 'dalian', name: i18n.t('flights.cities.dalian'), desc: i18n.t('flights.cities.dalian') },
        { id: 'xiamen', name: i18n.t('flights.cities.xiamen'), desc: i18n.t('flights.cities.xiamen') },
        { id: 'tianjin', name: i18n.t('flights.cities.tianjin'), desc: i18n.t('flights.cities.tianjin') },
        { id: 'chongqing', name: i18n.t('flights.cities.chongqing'), desc: i18n.t('flights.cities.chongqing') },
        { id: 'kunming', name: i18n.t('flights.cities.kunming'), desc: i18n.t('flights.cities.kunming') },
        { id: 'sanya', name: i18n.t('flights.cities.sanya'), desc: i18n.t('flights.cities.sanya') }
      ],
      
      // 更新房间选项
      roomOptions: [
        { key: '1room1adult', text: i18n.t('hotels.roomOptions.1room1adult') },
        { key: '1room2adults', text: i18n.t('hotels.roomOptions.1room2adults') },
        { key: '2rooms2adults', text: i18n.t('hotels.roomOptions.2rooms2adults') },
        { key: '2rooms3adults', text: i18n.t('hotels.roomOptions.2rooms3adults') },
        { key: '2rooms4adults', text: i18n.t('hotels.roomOptions.2rooms4adults') }
      ]
    });
  },

  // 设置默认日期
  setDefaultDates: function() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const checkinDate = this.formatDate(today);
    const checkoutDate = this.formatDate(tomorrow);
    
    this.setData({
      checkinDate: checkinDate,
      checkoutDate: checkoutDate
    });
  },

  // 格式化日期
  formatDate: function(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  // 点击目的地输入框
  onDestinationTap: function() {
    this.setData({
      showCityPicker: true
    });
  },

  // 选择城市
  onCitySelect: function(e) {
    const city = e.currentTarget.dataset.city;
    this.setData({
      destination: city.name,
      showCityPicker: false
    });
  },

  // 关闭城市选择器
  closeCityPicker: function() {
    this.setData({
      showCityPicker: false
    });
  },

  // 城市选择器背景点击
  onCityPickerMask: function() {
    this.setData({
      showCityPicker: false
    });
  },

  // 入住日期变化
  onCheckinDateChange: function(e) {
    const checkinDate = e.detail.value;
    let checkoutDate = this.data.checkoutDate;
    
    // 如果退房日期早于或等于入住日期，自动设置为入住日期的后一天
    if (checkoutDate <= checkinDate) {
      const nextDay = new Date(checkinDate);
      nextDay.setDate(nextDay.getDate() + 1);
      checkoutDate = this.formatDate(nextDay);
    }
    
    this.setData({
      checkinDate: checkinDate,
      checkoutDate: checkoutDate
    });
  },

  // 退房日期变化
  onCheckoutDateChange: function(e) {
    const checkoutDate = e.detail.value;
    const checkinDate = this.data.checkinDate;
    
    // 检查退房日期是否在入住日期之后
    if (checkoutDate <= checkinDate) {
      const i18n = app.globalData.i18n;
      wx.showToast({
        title: i18n.t('hotels.checkoutDateError', '退房日期必须晚于入住日期'),
        icon: 'none',
        duration: 2000
      });
      return;
    }
    
    this.setData({
      checkoutDate: checkoutDate
    });
  },

  // 点击房间选择
  onRoomTap: function() {
    this.setData({
      showRoomPicker: true
    });
  },

  // 选择房间配置
  onRoomSelect: function(e) {
    const roomOption = e.currentTarget.dataset.room;
    this.setData({
      rooms: roomOption.text,
      showRoomPicker: false
    });
  },

  // 关闭房间选择器
  closeRoomPicker: function() {
    this.setData({
      showRoomPicker: false
    });
  },

  // 房间选择器背景点击
  onRoomPickerMask: function() {
    this.setData({
      showRoomPicker: false
    });
  },

  // 搜索酒店
  onSearchHotels: function() {
    const { destination, checkinDate, checkoutDate, rooms, roomsPlaceholder } = this.data;
    const i18n = app.globalData.i18n;
    
    // 验证必填项
    if (!destination) {
      wx.showToast({
        title: i18n.t('hotels.pleaseSelectDestination', '请选择目的地'),
        icon: 'none',
        duration: 2000
      });
      return;
    }
    
    if (!checkinDate || !checkoutDate) {
      wx.showToast({
        title: i18n.t('hotels.pleaseSelectDates', '请选择入住和退房日期'),
        icon: 'none',
        duration: 2000
      });
      return;
    }
    
    // 显示搜索结果
    wx.showToast({
      title: i18n.t('hotels.searchingHotels', `搜索${destination}的酒店`).replace('{destination}', destination),
      icon: 'none',
      duration: 2000
    });
    
    console.log('Hotel search params:', {
      destination,
      checkinDate,
      checkoutDate,
      rooms: rooms || roomsPlaceholder
    });
    
    // 这里可以导航到搜索结果页面
    // wx.navigateTo({
    //   url: `/pages/hotel-results/hotel-results?destination=${destination}&checkin=${checkinDate}&checkout=${checkoutDate}&rooms=${encodeURIComponent(rooms || roomsPlaceholder)}`
    // });
  }
});
