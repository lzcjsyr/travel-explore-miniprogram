// pages/trips/trips.js
const app = getApp();

Page({
  data: {
    // 页面文本
    pageTitle: '',
    tabFlights: '',
    tabHotels: '',
    viewButton: '',
    flightNumber: '',
    dateLabel: '',
    timeLabel: '',
    passengerLabel: '',
    addressLabel: '',
    checkinLabel: '',
    checkoutLabel: '',
    roomTypeLabel: '',
    confirmedStatus: '',
    noFlightsText: '',
    noHotelsText: '',
    searchFlightsText: '',
    searchHotelsText: '',
    
    activeTab: 'flights',
    flightBookings: [
      {
        id: 'f001',
        departure: '旧金山',
        arrival: '纽约',
        flightNumber: 'UA 1234',
        date: '2024-01-15',
        time: '08:30 - 16:45',
        passenger: '苏菲亚·陈',
        status: '已确认',
        statusClass: 'confirmed'
      },
      {
        id: 'f002',
        departure: '纽约',
        arrival: '旧金山',
        flightNumber: 'UA 5678',
        date: '2024-01-22',
        time: '14:20 - 17:35',
        passenger: '苏菲亚·陈',
        status: '已确认',
        statusClass: 'confirmed'
      }
    ],
    hotelBookings: [
      {
        id: 'h001',
        hotelName: '纽约时代广场酒店',
        address: '纽约市曼哈顿时代广场',
        checkinDate: '2024-01-15',
        checkoutDate: '2024-01-22',
        roomType: '豪华大床房',
        status: '已确认',
        statusClass: 'confirmed'
      }
    ]
  },

  onLoad: function (options) {
    console.log('Trips page loaded');
    this.updateLanguage();
  },

  onShow: function () {
    // 设置底部导航栏选中状态
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
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
    
    // 更新航班预订数据中的路由显示
    const updatedFlightBookings = this.data.flightBookings.map(flight => ({
      ...flight,
      routeDisplay: flight.id === 'f001' ? 
        i18n.t('trips.flightTrips.sfToNy.title') : 
        i18n.t('trips.flightTrips.nyToSf.title')
    }));
    
    this.setData({
      pageTitle: i18n.t('trips.title'),
      tabFlights: i18n.t('trips.tabFlights'),
      tabHotels: i18n.t('trips.tabHotels'),
      viewButton: i18n.t('trips.viewButton'),
      flightNumber: i18n.t('trips.flightNumber'),
      dateLabel: i18n.t('trips.date'),
      timeLabel: i18n.t('trips.time'),
      passengerLabel: i18n.t('trips.passenger'),
      addressLabel: i18n.t('trips.address'),
      checkinLabel: i18n.t('trips.checkin'),
      checkoutLabel: i18n.t('trips.checkout'),
      roomTypeLabel: i18n.t('trips.roomType'),
      confirmedStatus: i18n.t('trips.status.confirmed'),
      noFlightsText: i18n.t('trips.emptyStates.noFlights'),
      noHotelsText: i18n.t('trips.emptyStates.noHotels'),
      searchFlightsText: i18n.t('trips.emptyStates.searchFlights'),
      searchHotelsText: i18n.t('trips.emptyStates.searchHotels'),
      flightBookings: updatedFlightBookings
    });
  },

  // 标签页切换
  onTabChange: function(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      activeTab: tab
    });
  },

  // 查看预订详情
  onViewBooking: function(e) {
    const booking = e.currentTarget.dataset.booking;
    const i18n = app.globalData.i18n;
    console.log('View booking:', booking);
    
    wx.showModal({
      title: i18n.t('trips.bookingDetails'),
      content: `${i18n.t('trips.dialogMessages.bookingId')}${booking.id}\n${i18n.t('trips.dialogMessages.bookingStatus')}${booking.status}`,
      showCancel: false,
      confirmText: i18n.t('trips.dialogMessages.understood')
    });
  },

  // 搜索航班
  onSearchFlights: function() {
    wx.switchTab({
      url: '/pages/flights/flights'
    });
  },

  // 搜索酒店
  onSearchHotels: function() {
    wx.switchTab({
      url: '/pages/hotels/hotels'
    });
  }
});