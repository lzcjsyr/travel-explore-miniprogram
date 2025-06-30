// 测试多语言功能
const { i18n } = require('./utils/i18n');

console.log('=== 多语言功能测试 ===');

// 测试1: 默认语言
console.log('\n1. 测试默认语言 (中文)');
console.log('当前语言:', i18n.currentLang);
console.log('探索页面标题:', i18n.t('explore.title'));
console.log('航班页面标题:', i18n.t('flights.title'));
console.log('个人资料标题:', i18n.t('profile.title'));

// 测试2: 切换到英文
console.log('\n2. 切换到英文');
const switchResult = i18n.setLanguage('en');
console.log('切换结果:', switchResult);
console.log('当前语言:', i18n.currentLang);
console.log('探索页面标题:', i18n.t('explore.title'));
console.log('航班页面标题:', i18n.t('flights.title'));
console.log('个人资料标题:', i18n.t('profile.title'));

// 测试3: 测试嵌套键值
console.log('\n3. 测试嵌套键值');
console.log('巴黎(英文):', i18n.t('explore.destinations.paris'));
console.log('从哪里出发(英文):', i18n.t('flights.fromPlaceholder'));
console.log('语言设置成功(英文):', i18n.t('language.switchSuccess'));

// 测试4: 切换回中文
console.log('\n4. 切换回中文');
i18n.setLanguage('zh');
console.log('当前语言:', i18n.currentLang);
console.log('巴黎(中文):', i18n.t('explore.destinations.paris'));
console.log('从哪里出发(中文):', i18n.t('flights.fromPlaceholder'));
console.log('语言设置成功(中文):', i18n.t('language.switchSuccess'));

// 测试5: 测试不存在的键
console.log('\n5. 测试不存在的键');
console.log('不存在的键:', i18n.t('nonexistent.key', '默认值'));

// 测试6: 测试支持的语言
console.log('\n6. 测试支持的语言');
console.log('支持的语言:', i18n.getSupportedLanguages());
console.log('是否支持中文:', i18n.isLanguageSupported('zh'));
console.log('是否支持英文:', i18n.isLanguageSupported('en'));
console.log('是否支持日文:', i18n.isLanguageSupported('ja'));

console.log('\n=== 测试完成 ===');