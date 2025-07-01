// 应用常量配置
const CONSTANTS = {
  // 时间相关
  TIMEOUTS: {
    LOADING: 1500,
    TOAST: 2000,
    REQUEST: 10000,
    DEBOUNCE: 300
  },
  
  // UI相关
  UI: {
    PAGE_SIZE: 20,
    MAX_IMAGE_SIZE: 2 * 1024 * 1024, // 2MB
    MIN_SEARCH_LENGTH: 2,
    MAX_INPUT_LENGTH: 50
  },
  
  // 云开发配置
  CLOUD: {
    ENV_ID: 'YOUR_CLOUD_ENV_ID',
    FUNCTIONS: {
      GET_OPENID: 'getOpenId',
      REPORT_ERROR: 'reportError'
    },
    COLLECTIONS: {
      USERS: 'users',
      BOOKINGS: 'bookings',
      FEEDBACK: 'feedback'
    }
  },
  
  // 存储键名
  STORAGE_KEYS: {
    LANGUAGE: 'language',
    USER_INFO: 'userInfo',
    FLIGHT_SEARCH: 'flightSearch',
    HOTEL_SEARCH: 'hotelSearch',
    LAST_SEARCH: 'lastSearch'
  },
  
  // 航班相关
  FLIGHT: {
    PASSENGER_OPTIONS: {
      '1adult_economy': '1位成人，经济舱',
      '1adult_business': '1位成人，商务舱',
      '1adult_first': '1位成人，头等舱',
      '2adults_economy': '2位成人，经济舱',
      '2adults_business': '2位成人，商务舱'
    },
    CLASSES: {
      ECONOMY: 'economy',
      BUSINESS: 'business',
      FIRST: 'first'
    }
  },
  
  // 酒店相关
  HOTEL: {
    ROOM_OPTIONS: {
      '1room1adult': '1间房 · 1位成人',
      '1room2adults': '1间房 · 2位成人',
      '2rooms2adults': '2间房 · 2位成人',
      '2rooms3adults': '2间房 · 3位成人',
      '2rooms4adults': '2间房 · 4位成人'
    },
    RATING_STARS: [1, 2, 3, 4, 5]
  },
  
  // 城市数据
  CITIES: [
    { id: 'beijing', code: 'PEK', name_zh: '北京', name_en: 'Beijing' },
    { id: 'shanghai', code: 'SHA', name_zh: '上海', name_en: 'Shanghai' },
    { id: 'guangzhou', code: 'CAN', name_zh: '广州', name_en: 'Guangzhou' },
    { id: 'shenzhen', code: 'SZX', name_zh: '深圳', name_en: 'Shenzhen' },
    { id: 'chengdu', code: 'CTU', name_zh: '成都', name_en: 'Chengdu' },
    { id: 'hangzhou', code: 'HGH', name_zh: '杭州', name_en: 'Hangzhou' },
    { id: 'xian', code: 'XIY', name_zh: '西安', name_en: "Xi'an" },
    { id: 'chongqing', code: 'CKG', name_zh: '重庆', name_en: 'Chongqing' },
    { id: 'kunming', code: 'KMG', name_zh: '昆明', name_en: 'Kunming' },
    { id: 'xiamen', code: 'XMN', name_zh: '厦门', name_en: 'Xiamen' },
    { id: 'sanya', code: 'SYX', name_zh: '三亚', name_en: 'Sanya' },
    { id: 'qingdao', code: 'TAO', name_zh: '青岛', name_en: 'Qingdao' },
    { id: 'dalian', code: 'DLC', name_zh: '大连', name_en: 'Dalian' },
    { id: 'tianjin', code: 'TSN', name_zh: '天津', name_en: 'Tianjin' },
    { id: 'nanjing', code: 'NKG', name_zh: '南京', name_en: 'Nanjing' },
    { id: 'wuhan', code: 'WUH', name_zh: '武汉', name_en: 'Wuhan' },
    { id: 'changsha', code: 'CSX', name_zh: '长沙', name_en: 'Changsha' },
    { id: 'zhengzhou', code: 'CGO', name_zh: '郑州', name_en: 'Zhengzhou' },
    { id: 'jinan', code: 'TNA', name_zh: '济南', name_en: 'Jinan' },
    { id: 'fuzhou', code: 'FOC', name_zh: '福州', name_en: 'Fuzhou' }
  ],
  
  // 热门目的地
  POPULAR_DESTINATIONS: [
    { id: 'paris', name_zh: '巴黎', name_en: 'Paris', image: '/images/paris-new.jpg' },
    { id: 'london', name_zh: '伦敦', name_en: 'London', image: '/images/london-new.jpg' },
    { id: 'newyork', name_zh: '纽约', name_en: 'New York', image: '/images/newyork-new.jpg' },
    { id: 'tokyo', name_zh: '东京', name_en: 'Tokyo', image: '/images/tokyo-new.jpg' }
  ],
  
  // 正则表达式
  REGEX: {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE: /^1[3-9]\d{9}$/,
    ID_CARD: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  },
  
  // 事件类型
  EVENTS: {
    LANGUAGE_CHANGE: 'languageChange',
    USER_LOGIN: 'userLogin',
    USER_LOGOUT: 'userLogout',
    SEARCH_COMPLETE: 'searchComplete'
  },
  
  // 错误代码
  ERROR_CODES: {
    NETWORK_ERROR: 'NETWORK_ERROR',
    AUTH_ERROR: 'AUTH_ERROR',
    VALIDATION_ERROR: 'VALIDATION_ERROR',
    SYSTEM_ERROR: 'SYSTEM_ERROR'
  },
  
  // 应用信息
  APP_INFO: {
    NAME: 'Travel Mini Program',
    VERSION: '1.0.0',
    AUTHOR: 'CloudBase Team'
  }
};

// 工具函数
const utils = {
  // 获取城市名称
  getCityName: (cityId, language = 'zh') => {
    const city = CONSTANTS.CITIES.find(c => c.id === cityId);
    return city ? city[`name_${language}`] : cityId;
  },
  
  // 获取城市列表
  getCitiesByLanguage: (language = 'zh') => {
    return CONSTANTS.CITIES.map(city => ({
      id: city.id,
      code: city.code,
      name: city[`name_${language}`]
    }));
  },
  
  // 格式化日期
  formatDate: (date, format = 'YYYY-MM-DD') => {
    if (!date) return '';
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    
    return format
      .replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day);
  },
  
  // 防抖函数
  debounce: (func, delay = CONSTANTS.TIMEOUTS.DEBOUNCE) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  },
  
  // 节流函数
  throttle: (func, delay = CONSTANTS.TIMEOUTS.DEBOUNCE) => {
    let lastCall = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        return func.apply(this, args);
      }
    };
  }
};

module.exports = {
  CONSTANTS,
  utils
};