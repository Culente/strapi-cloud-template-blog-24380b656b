export default {
  config: {
    // 设置默认语言为中文
    locales: ['zh-Hans', 'en'],
    defaultLocale: 'zh-Hans',
  },
  bootstrap(app) {
    console.log('Admin panel initialized with Chinese language support');
    
    // 设置浏览器语言偏好
    if (typeof window !== 'undefined') {
      // 尝试设置中文语言
      const savedLocale = localStorage.getItem('strapi-admin-language');
      if (!savedLocale) {
        localStorage.setItem('strapi-admin-language', 'zh-Hans');
      }
    }
  },
};
