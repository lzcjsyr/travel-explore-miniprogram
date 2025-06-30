// custom-tab-bar/index.js
const app = getApp();

Component({
  data: {
    selected: 0,
    color: "#61788a",
    selectedColor: "#121417",
    backgroundColor: "#ffffff",
    list: []
  },

  attached() {
    this.updateTabBar();
  },

  methods: {
    // 更新TabBar
    updateTabBar() {
      const i18n = app.globalData.i18n;
      
      this.setData({
        list: [
          {
            pagePath: "/pages/explore/explore",
            iconPath: "/images/explore.png",
            selectedIconPath: "/images/explore-active.png",
            text: i18n.t('tabBar.explore')
          },
          {
            pagePath: "/pages/flights/flights",
            iconPath: "/images/flight.png",
            selectedIconPath: "/images/flight-active.png",
            text: i18n.t('tabBar.flights')
          },
          {
            pagePath: "/pages/hotels/hotels",
            iconPath: "/images/hotel.png",
            selectedIconPath: "/images/hotel-active.png",
            text: i18n.t('tabBar.hotels')
          },
          {
            pagePath: "/pages/trips/trips",
            iconPath: "/images/trip.png",
            selectedIconPath: "/images/trip-active.png",
            text: i18n.t('tabBar.trips')
          },
          {
            pagePath: "/pages/profile/profile",
            iconPath: "/images/profile.png",
            selectedIconPath: "/images/profile-active.png",
            text: i18n.t('tabBar.profile')
          }
        ]
      });
    },

    // 点击TabBar项
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      
      wx.switchTab({ url });
    },

    // 语言变更时更新TabBar
    onLanguageChange() {
      this.updateTabBar();
    }
  }
});