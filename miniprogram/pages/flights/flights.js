// pages/flights/flights.js
const app = getApp();

Page({
  data: {
    // 页面文本
    pageTitle: '',
    fromPlaceholder: '',
    toPlaceholder: '',
    departureDatePlaceholder: '',
    returnDatePlaceholder: '',
    passengersPlaceholder: '',
    searchButton: '',
    selectCityTitle: '',
    
    // 表单数据
    departure: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: '',
    showCityPicker: false,
    cityPickerType: '', // 'departure' or 'destination'
    
    // 城市列表
    cities: [],
    
    // 乘客选项
    passengerOptions: []
  },

  onLoad: function (options) {
    console.log('Flights page loaded');
    this.updateLanguage();
    this.initializeData();
  },

  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
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
      pageTitle: i18n.t('flights.title'),
      fromPlaceholder: i18n.t('flights.fromPlaceholder'),
      toPlaceholder: i18n.t('flights.toPlaceholder'),
      departureDatePlaceholder: i18n.t('flights.departureDatePlaceholder'),
      returnDatePlaceholder: i18n.t('flights.returnDatePlaceholder'),
      passengersPlaceholder: i18n.t('flights.passengersPlaceholder'),
      searchButton: i18n.t('flights.searchButton'),
      selectCityTitle: i18n.t('flights.selectCity'),
      
      // 更新城市列表
      cities: [
        { name: i18n.t('flights.cities.beijing'), code: 'PEK', full: i18n.t('flights.cities.beijing') + '首都国际机场', key: 'beijing' },
        { name: i18n.t('flights.cities.shanghai'), code: 'PVG', full: i18n.t('flights.cities.shanghai') + '浦东国际机场', key: 'shanghai' },
        { name: i18n.t('flights.cities.guangzhou'), code: 'CAN', full: i18n.t('flights.cities.guangzhou') + '白云国际机场', key: 'guangzhou' },
        { name: i18n.t('flights.cities.shenzhen'), code: 'SZX', full: i18n.t('flights.cities.shenzhen') + '宝安国际机场', key: 'shenzhen' },
        { name: i18n.t('flights.cities.chengdu'), code: 'CTU', full: i18n.t('flights.cities.chengdu') + '双流国际机场', key: 'chengdu' },
        { name: i18n.t('flights.cities.hangzhou'), code: 'HGH', full: i18n.t('flights.cities.hangzhou') + '萧山国际机场', key: 'hangzhou' },
        { name: i18n.t('flights.cities.xian'), code: 'XIY', full: i18n.t('flights.cities.xian') + '咸阳国际机场', key: 'xian' },
        { name: i18n.t('flights.cities.chongqing'), code: 'CKG', full: i18n.t('flights.cities.chongqing') + '江北国际机场', key: 'chongqing' },
        { name: i18n.t('flights.cities.kunming'), code: 'KMG', full: i18n.t('flights.cities.kunming') + '长水国际机场', key: 'kunming' },
        { name: i18n.t('flights.cities.xiamen'), code: 'XMN', full: i18n.t('flights.cities.xiamen') + '高崎国际机场', key: 'xiamen' },
        { name: i18n.t('flights.cities.sanya'), code: 'SYX', full: i18n.t('flights.cities.sanya') + '凤凰国际机场', key: 'sanya' },
        { name: i18n.t('flights.cities.qingdao'), code: 'TAO', full: i18n.t('flights.cities.qingdao') + '流亭国际机场', key: 'qingdao' },
        { name: i18n.t('flights.cities.dalian'), code: 'DLC', full: i18n.t('flights.cities.dalian') + '周水子国际机场', key: 'dalian' },
        { name: i18n.t('flights.cities.tianjin'), code: 'TSN', full: i18n.t('flights.cities.tianjin') + '滨海国际机场', key: 'tianjin' },
        { name: i18n.t('flights.cities.nanjing'), code: 'NKG', full: i18n.t('flights.cities.nanjing') + '禄口国际机场', key: 'nanjing' },
        { name: i18n.t('flights.cities.wuhan'), code: 'WUH', full: i18n.t('flights.cities.wuhan') + '天河国际机场', key: 'wuhan' },
        { name: i18n.t('flights.cities.changsha'), code: 'CSX', full: i18n.t('flights.cities.changsha') + '黄花国际机场', key: 'changsha' },
        { name: i18n.t('flights.cities.zhengzhou'), code: 'CGO', full: i18n.t('flights.cities.zhengzhou') + '新郑国际机场', key: 'zhengzhou' },
        { name: i18n.t('flights.cities.jinan'), code: 'TNA', full: i18n.t('flights.cities.jinan') + '遥墙国际机场', key: 'jinan' },
        { name: i18n.t('flights.cities.fuzhou'), code: 'FOC', full: i18n.t('flights.cities.fuzhou') + '长乐国际机场', key: 'fuzhou' }
      ],
      
      // 更新乘客选项
      passengerOptions: [
        i18n.t('flights.passengerOptions.1adult_economy'),
        i18n.t('flights.passengerOptions.1adult_business'),
        i18n.t('flights.passengerOptions.1adult_first'),
        i18n.t('flights.passengerOptions.2adults_economy'),
        i18n.t('flights.passengerOptions.2adults_business')
      ]
    });
  },

  // 初始化数据
  initializeData: function() {
    // 设置默认日期
    const today = new Date();
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    
    const i18n = app.globalData.i18n;
    
    this.setData({
      departureDate: this.formatDate(tomorrow),
      returnDate: this.formatDate(nextWeek),
      passengers: i18n.t('flights.passengersPlaceholder')
    });
  },

  // 格式化日期
  formatDate: function(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  // 点击出发地
  onDepartureTap: function() {
    this.setData({
      showCityPicker: true,
      cityPickerType: 'departure'
    });
  },

  // 点击目的地
  onDestinationTap: function() {
    this.setData({
      showCityPicker: true,
      cityPickerType: 'destination'
    });
  },

  // 选择城市
  onCitySelect: function(e) {
    const city = e.currentTarget.dataset.city;
    const updateData = {
      showCityPicker: false
    };
    
    if (this.data.cityPickerType === 'departure') {
      updateData.departure = city.name;
    } else if (this.data.cityPickerType === 'destination') {
      updateData.destination = city.name;
    }
    
    this.setData(updateData);
  },

  // 关闭城市选择器
  closeCityPicker: function() {
    this.setData({
      showCityPicker: false
    });
  },

  // 点击城市选择器遮罩
  onCityPickerMask: function() {
    this.closeCityPicker();
  },

  // 出发日期变化
  onDepartureDateChange: function(e) {
    this.setData({
      departureDate: e.detail.value
    });
  },

  // 返回日期变化
  onReturnDateChange: function(e) {
    this.setData({
      returnDate: e.detail.value
    });
  },

  // 点击乘客信息
  onPassengerTap: function() {
    wx.showActionSheet({
      itemList: this.data.passengerOptions,
      success: (res) => {
        this.setData({
          passengers: this.data.passengerOptions[res.tapIndex]
        });
      }
    });
  },

  // 搜索航班
  onSearchFlights: function() {
    const { departure, destination, departureDate, returnDate, passengers } = this.data;
    const i18n = app.globalData.i18n;
    
    // 验证表单
    if (!departure) {
      wx.showToast({
        title: i18n.t('flights.pleaseSelectDeparture'),
        icon: 'none'
      });
      return;
    }
    
    if (!destination) {
      wx.showToast({
        title: i18n.t('flights.pleaseSelectDestination'),
        icon: 'none'
      });
      return;
    }
    
    if (departure === destination) {
      wx.showToast({
        title: i18n.t('flights.sameCityError'),
        icon: 'none'
      });
      return;
    }
    
    if (!departureDate) {
      wx.showToast({
        title: i18n.t('flights.pleaseSelectDepartureDate'),
        icon: 'none'
      });
      return;
    }
    
    // 显示搜索结果
    wx.showLoading({
      title: i18n.t('flights.searchingFlights')
    });
    
    // 模拟搜索
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: `${i18n.t('flights.searchFlightsFor')} ${departure} → ${destination} ${i18n.t('flights.title')}`,
        icon: 'none',
        duration: 3000
      });
      
      // 可以导航到搜索结果页面
      // wx.navigateTo({
      //   url: `/pages/flight-results/flight-results?departure=${departure}&destination=${destination}&date=${departureDate}`
      // });
    }, 1500);
  },

  // 交换出发地和目的地
  swapCities: function() {
    const { departure, destination } = this.data;
    this.setData({
      departure: destination,
      destination: departure
    });
  }
});
