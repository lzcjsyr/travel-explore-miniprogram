// 多语言配置文件
const languages = {
  zh: {
    // 通用
    common: {
      confirm: '确认',
      cancel: '取消',
      save: '保存',
      edit: '编辑',
      delete: '删除',
      search: '搜索',
      loading: '加载中...',
      noData: '暂无数据',
      error: '发生错误',
      success: '操作成功'
    },
    
    // TabBar
    tabBar: {
      explore: '探索',
      flights: '航班',
      hotels: '酒店',
      trips: '行程',
      profile: '个人资料'
    },
    
    // 探索页面
    explore: {
      title: '探索',
      searchPlaceholder: '去哪里？',
      popularDestinations: '热门目的地',
      recommendedTrips: '推荐行程',
      destinations: {
        paris: '巴黎',
        london: '伦敦',
        newyork: '纽约',
        tokyo: '东京'
      },
      recommendations: {
        mountain: {
          title: '山间度假',
          desc: '逃离城市，享受清新的山间静谧。'
        },
        beach: {
          title: '海滩度假',
          desc: '在沙滩上放松，享受阳光。'
        },
        city: {
          title: '城市探索',
          desc: '发现城市的生动文化和标志性地标。'
        }
      }
    },
    
    // 航班页面
    flights: {
      title: '航班',
      fromPlaceholder: '从哪里出发？',
      toPlaceholder: '到哪里去？',
      departureDatePlaceholder: '出发日期',
      returnDatePlaceholder: '返回日期',
      passengersPlaceholder: '1位成人，经济舱',
      searchButton: '搜索 🔍',
      selectCity: '选择城市',
      searching: '搜索中...',
      searchResults: '搜索结果',
      pleaseSelectDeparture: '请选择出发地',
      pleaseSelectDestination: '请选择目的地',
      sameCityError: '出发地和目的地不能相同',
      pleaseSelectDepartureDate: '请选择出发日期',
      searchingFlights: '搜索航班中...',
      searchFlightsFor: '搜索',
      passengerOptions: {
        '1adult_economy': '1位成人，经济舱',
        '1adult_business': '1位成人，商务舱',
        '1adult_first': '1位成人，头等舱',
        '2adults_economy': '2位成人，经济舱',
        '2adults_business': '2位成人，商务舱'
      },
      cities: {
        beijing: '北京',
        shanghai: '上海',
        guangzhou: '广州',
        shenzhen: '深圳',
        chengdu: '成都',
        hangzhou: '杭州',
        xian: '西安',
        chongqing: '重庆',
        kunming: '昆明',
        xiamen: '厦门',
        sanya: '三亚',
        qingdao: '青岛',
        dalian: '大连',
        tianjin: '天津',
        nanjing: '南京',
        wuhan: '武汉',
        changsha: '长沙',
        zhengzhou: '郑州',
        jinan: '济南',
        fuzhou: '福州'
      }
    },
    
    // 酒店页面
    hotels: {
      title: '酒店',
      destinationPlaceholder: '去哪里？',
      checkinPlaceholder: '入住',
      checkoutPlaceholder: '退房',
      roomsPlaceholder: '1间房 · 1位成人',
      searchButton: '搜索 🔍',
      selectDestination: '选择目的地',
      roomsAndGuests: '房间和成人数',
      checkoutDateError: '退房日期必须晚于入住日期',
      pleaseSelectDestination: '请选择目的地',
      pleaseSelectDates: '请选择入住和退房日期',
      searchingHotels: '搜索{destination}的酒店',
      roomOptions: {
        '1room1adult': '1间房 · 1位成人',
        '1room2adults': '1间房 · 2位成人',
        '2rooms2adults': '2间房 · 2位成人',
        '2rooms3adults': '2间房 · 3位成人',
        '2rooms4adults': '2间房 · 4位成人'
      }
    },
    
    // 行程页面
    trips: {
      title: '我的预订',
      tabFlights: '航班',
      tabHotels: '酒店',
      flightTrips: {
        sfToNy: {
          title: '从旧金山到纽约',
          desc: '1名乘客 · 1次中转'
        },
        nyToSf: {
          title: '从纽约到旧金山',
          desc: '1名乘客 · 1次中转'
        }
      },
      viewButton: '查看',
      bookingDetails: '预订详情',
      flightNumber: '航班号：',
      date: '日期：',
      time: '时间：',
      passenger: '乘客：',
      address: '地址：',
      checkin: '入住：',
      checkout: '退房：',
      roomType: '房型：',
      status: {
        confirmed: '已确认'
      },
      emptyStates: {
        noFlights: '暂无航班预订',
        noHotels: '暂无酒店预订',
        searchFlights: '搜索航班',
        searchHotels: '搜索酒店'
      },
      dialogMessages: {
        bookingId: '预订号：',
        bookingStatus: '状态：',
        understood: '知道了'
      }
    },
    
    // 个人资料页面
    profile: {
      title: '账户',
      viewProfile: '查看个人资料',
      joinedIn: '2021年加入',
      userName: '苏菲亚·陈',
      tripsSection: '行程',
      settingsSection: '设置',
      tripItems: {
        flightToNy: '飞往纽约的航班',
        hotelInLa: '洛杉矶的酒店'
      },
      tripDates: {
        flight: '2023年12月12日',
        hotel: '2023年11月11日'
      },
      settingItems: {
        notifications: '通知',
        payment: '支付方式',
        language: '语言',
        help: '帮助'
      }
    },
    
    // 语言设置
    language: {
      title: '语言设置',
      currentLanguage: '当前语言',
      chinese: '中文',
      english: 'English',
      switchSuccess: '语言切换成功'
    },
    
    // 首页
    index: {
      title: 'CloudBase 小程序模板',
      subtitle: '基于微信云开发的小程序应用',
      openidLabel: '您的OpenID：',
      loadingText: '获取中...',
      featuresTitle: '✨ 项目特点',
      features: {
        auth: '🔐 云开发身份认证',
        cloudFunc: '☁️ 云函数调用能力',
        miniprogram: '📱 原生小程序开发',
        deploy: '🚀 一键部署上线'
      }
    }
  },
  
  en: {
    // Common
    common: {
      confirm: 'Confirm',
      cancel: 'Cancel',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      search: 'Search',
      loading: 'Loading...',
      noData: 'No Data',
      error: 'Error Occurred',
      success: 'Success'
    },
    
    // TabBar
    tabBar: {
      explore: 'Explore',
      flights: 'Flights',
      hotels: 'Hotels',
      trips: 'Trips',
      profile: 'Profile'
    },
    
    // Explore Page
    explore: {
      title: 'Explore',
      searchPlaceholder: 'Where to?',
      popularDestinations: 'Popular Destinations',
      recommendedTrips: 'Recommended Trips',
      destinations: {
        paris: 'Paris',
        london: 'London',
        newyork: 'New York',
        tokyo: 'Tokyo'
      },
      recommendations: {
        mountain: {
          title: 'Mountain Getaway',
          desc: 'Escape the city and enjoy the fresh mountain serenity.'
        },
        beach: {
          title: 'Beach Vacation',
          desc: 'Relax on the beach and enjoy the sunshine.'
        },
        city: {
          title: 'City Exploration',
          desc: 'Discover vibrant culture and iconic landmarks.'
        }
      }
    },
    
    // Flights Page
    flights: {
      title: 'Flights',
      fromPlaceholder: 'Where from?',
      toPlaceholder: 'Where to?',
      departureDatePlaceholder: 'Departure Date',
      returnDatePlaceholder: 'Return Date',
      passengersPlaceholder: '1 Adult, Economy',
      searchButton: 'Search 🔍',
      selectCity: 'Select City',
      searching: 'Searching...',
      searchResults: 'Search Results',
      pleaseSelectDeparture: 'Please select departure city',
      pleaseSelectDestination: 'Please select destination city',
      sameCityError: 'Departure and destination cannot be the same',
      pleaseSelectDepartureDate: 'Please select departure date',
      searchingFlights: 'Searching flights...',
      searchFlightsFor: 'Search',
      passengerOptions: {
        '1adult_economy': '1 Adult, Economy',
        '1adult_business': '1 Adult, Business',
        '1adult_first': '1 Adult, First Class',
        '2adults_economy': '2 Adults, Economy',
        '2adults_business': '2 Adults, Business'
      },
      cities: {
        beijing: 'Beijing',
        shanghai: 'Shanghai',
        guangzhou: 'Guangzhou',
        shenzhen: 'Shenzhen',
        chengdu: 'Chengdu',
        hangzhou: 'Hangzhou',
        xian: "Xi'an",
        chongqing: 'Chongqing',
        kunming: 'Kunming',
        xiamen: 'Xiamen',
        sanya: 'Sanya',
        qingdao: 'Qingdao',
        dalian: 'Dalian',
        tianjin: 'Tianjin',
        nanjing: 'Nanjing',
        wuhan: 'Wuhan',
        changsha: 'Changsha',
        zhengzhou: 'Zhengzhou',
        jinan: 'Jinan',
        fuzhou: 'Fuzhou'
      }
    },
    
    // Hotels Page
    hotels: {
      title: 'Hotels',
      destinationPlaceholder: 'Where to?',
      checkinPlaceholder: 'Check-in',
      checkoutPlaceholder: 'Check-out',
      roomsPlaceholder: '1 Room · 1 Adult',
      searchButton: 'Search 🔍',
      selectDestination: 'Select Destination',
      roomsAndGuests: 'Rooms and Adults',
      checkoutDateError: 'Check-out date must be after check-in date',
      pleaseSelectDestination: 'Please select destination',
      pleaseSelectDates: 'Please select check-in and check-out dates',
      searchingHotels: 'Searching hotels in {destination}',
      roomOptions: {
        '1room1adult': '1 Room · 1 Adult',
        '1room2adults': '1 Room · 2 Adults',
        '2rooms2adults': '2 Rooms · 2 Adults',
        '2rooms3adults': '2 Rooms · 3 Adults',
        '2rooms4adults': '2 Rooms · 4 Adults'
      }
    },
    
    // Trips Page
    trips: {
      title: 'My Bookings',
      tabFlights: 'Flights',
      tabHotels: 'Hotels',
      flightTrips: {
        sfToNy: {
          title: 'San Francisco to New York',
          desc: '1 Passenger · 1 Stop'
        },
        nyToSf: {
          title: 'New York to San Francisco',
          desc: '1 Passenger · 1 Stop'
        }
      },
      viewButton: 'View',
      bookingDetails: 'Booking Details',
      flightNumber: 'Flight:',
      date: 'Date:',
      time: 'Time:',
      passenger: 'Passenger:',
      address: 'Address:',
      checkin: 'Check-in:',
      checkout: 'Check-out:',
      roomType: 'Room Type:',
      status: {
        confirmed: 'Confirmed'
      },
      emptyStates: {
        noFlights: 'No flight bookings',
        noHotels: 'No hotel bookings',
        searchFlights: 'Search Flights',
        searchHotels: 'Search Hotels'
      },
      dialogMessages: {
        bookingId: 'Booking ID:',
        bookingStatus: 'Status:',
        understood: 'Got it'
      }
    },
    
    // Profile Page
    profile: {
      title: 'Account',
      viewProfile: 'View Profile',
      joinedIn: 'Joined in 2021',
      userName: 'Sofia Chen',
      tripsSection: 'Trips',
      settingsSection: 'Settings',
      tripItems: {
        flightToNy: 'Flight to New York',
        hotelInLa: 'Hotel in Los Angeles'
      },
      tripDates: {
        flight: 'December 12, 2023',
        hotel: 'November 11, 2023'
      },
      settingItems: {
        notifications: 'Notifications',
        payment: 'Payment Methods',
        language: 'Language',
        help: 'Help'
      }
    },
    
    // Language Settings
    language: {
      title: 'Language Settings',
      currentLanguage: 'Current Language',
      chinese: '中文',
      english: 'English',
      switchSuccess: 'Language switched successfully'
    },
    
    // Index Page
    index: {
      title: 'CloudBase Mini Program Template',
      subtitle: 'WeChat Mini Program based on CloudBase',
      openidLabel: 'Your OpenID:',
      loadingText: 'Loading...',
      featuresTitle: '✨ Project Features',
      features: {
        auth: '🔐 CloudBase Authentication',
        cloudFunc: '☁️ Cloud Functions',
        miniprogram: '📱 Native Mini Program',
        deploy: '🚀 One-click Deployment'
      }
    }
  }
};

// 工具函数
class I18n {
  constructor() {
    this.currentLang = this.getCurrentLanguage();
  }
  
  // 获取当前语言
  getCurrentLanguage() {
    try {
      return wx.getStorageSync('language') || 'zh';
    } catch (e) {
      console.error('Error getting language from storage:', e);
      return 'zh';
    }
  }
  
  // 设置语言
  setLanguage(lang) {
    if (!languages[lang]) {
      console.error('Unsupported language:', lang);
      return false;
    }
    
    try {
      wx.setStorageSync('language', lang);
      this.currentLang = lang;
      return true;
    } catch (e) {
      console.error('Error setting language to storage:', e);
      return false;
    }
  }
  
  // 获取翻译文本
  t(key, defaultValue = '') {
    if (!key) return defaultValue;
    
    const keys = key.split('.');
    let current = languages[this.currentLang];
    
    if (!current) {
      console.warn('Language not found:', this.currentLang);
      current = languages['zh']; // 回退到中文
    }
    
    for (const k of keys) {
      if (current && typeof current === 'object' && current.hasOwnProperty(k)) {
        current = current[k];
      } else {
        console.warn('Translation key not found:', key);
        return defaultValue || key;
      }
    }
    
    return typeof current === 'string' ? current : defaultValue || key;
  }
  
  // 获取所有支持的语言
  getSupportedLanguages() {
    return Object.keys(languages);
  }
  
  // 检查是否支持某种语言
  isLanguageSupported(lang) {
    return languages.hasOwnProperty(lang);
  }
}

// 创建全局实例
const i18n = new I18n();

module.exports = {
  i18n,
  I18n
};