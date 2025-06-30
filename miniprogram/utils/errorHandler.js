// 全局错误处理工具
class ErrorHandler {
  constructor() {
    this.setupGlobalErrorHandler();
  }
  
  // 设置全局错误处理
  setupGlobalErrorHandler() {
    const originalError = console.error;
    console.error = (...args) => {
      this.logError('Console Error', args);
      originalError.apply(console, args);
    };
  }
  
  // 云函数调用错误处理
  handleCloudFunctionError(functionName, error) {
    const errorMsg = error?.errMsg || error?.message || '未知错误';
    console.error(`云函数 ${functionName} 调用失败:`, error);
    
    wx.showToast({
      title: '网络请求失败',
      icon: 'none',
      duration: 2000
    });
    
    this.logError('CloudFunction', {
      functionName,
      error: errorMsg,
      timestamp: new Date().toISOString()
    });
  }
  
  // 网络请求错误处理
  handleNetworkError(error) {
    console.error('网络请求错误:', error);
    
    wx.showToast({
      title: '网络连接失败',
      icon: 'none',
      duration: 2000
    });
  }
  
  // 表单验证错误处理
  handleValidationError(message) {
    wx.showToast({
      title: message,
      icon: 'none',
      duration: 2000
    });
  }
  
  // 用户操作错误处理
  handleUserError(message) {
    wx.showModal({
      title: '提示',
      content: message,
      showCancel: false,
      confirmText: '确定'
    });
  }
  
  // 记录错误日志
  logError(type, error) {
    try {
      const errorLog = {
        type,
        error: typeof error === 'object' ? JSON.stringify(error) : error,
        timestamp: new Date().toISOString(),
        page: getCurrentPages().length > 0 ? getCurrentPages()[getCurrentPages().length - 1].route : 'unknown'
      };
      
      // 这里可以上报到云端或本地存储
      console.log('Error Log:', errorLog);
      
      // 可选: 上报到云端
      // this.reportToCloud(errorLog);
    } catch (e) {
      console.error('Error logging failed:', e);
    }
  }
  
  // 上报错误到云端（可选）
  reportToCloud(errorLog) {
    wx.cloud.callFunction({
      name: 'reportError',
      data: errorLog
    }).catch(err => {
      console.error('Error reporting failed:', err);
    });
  }
}

// 创建全局实例
const errorHandler = new ErrorHandler();

// 导出工具方法
module.exports = {
  errorHandler,
  
  // 便捷方法
  handleCloudError: (functionName, error) => errorHandler.handleCloudFunctionError(functionName, error),
  handleNetworkError: (error) => errorHandler.handleNetworkError(error),
  handleValidationError: (message) => errorHandler.handleValidationError(message),
  handleUserError: (message) => errorHandler.handleUserError(message),
  logError: (type, error) => errorHandler.logError(type, error)
};