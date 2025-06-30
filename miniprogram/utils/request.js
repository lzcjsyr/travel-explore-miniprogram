// 统一请求处理工具
const { handleCloudError, handleNetworkError } = require('./errorHandler');

class RequestManager {
  constructor() {
    this.defaultTimeout = 10000; // 10秒超时
  }
  
  // 云函数调用
  callCloudFunction(name, data = {}, options = {}) {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      
      wx.cloud.callFunction({
        name,
        data,
        success: (res) => {
          const duration = Date.now() - startTime;
          console.log(`云函数 ${name} 调用成功，耗时: ${duration}ms`);
          resolve(res);
        },
        fail: (error) => {
          handleCloudError(name, error);
          reject(error);
        }
      });
    });
  }
  
  // 数据库操作
  database(collectionName) {
    return {
      // 查询
      get: (query = {}) => {
        return new Promise((resolve, reject) => {
          const db = wx.cloud.database();
          const collection = db.collection(collectionName);
          
          let dbQuery = collection;
          if (Object.keys(query).length > 0) {
            dbQuery = collection.where(query);
          }
          
          dbQuery.get({
            success: resolve,
            fail: (error) => {
              handleCloudError(`db.${collectionName}.get`, error);
              reject(error);
            }
          });
        });
      },
      
      // 添加
      add: (data) => {
        return new Promise((resolve, reject) => {
          const db = wx.cloud.database();
          db.collection(collectionName).add({
            data,
            success: resolve,
            fail: (error) => {
              handleCloudError(`db.${collectionName}.add`, error);
              reject(error);
            }
          });
        });
      },
      
      // 更新
      update: (id, data) => {
        return new Promise((resolve, reject) => {
          const db = wx.cloud.database();
          db.collection(collectionName).doc(id).update({
            data,
            success: resolve,
            fail: (error) => {
              handleCloudError(`db.${collectionName}.update`, error);
              reject(error);
            }
          });
        });
      },
      
      // 删除
      remove: (id) => {
        return new Promise((resolve, reject) => {
          const db = wx.cloud.database();
          db.collection(collectionName).doc(id).remove({
            success: resolve,
            fail: (error) => {
              handleCloudError(`db.${collectionName}.remove`, error);
              reject(error);
            }
          });
        });
      }
    };
  }
  
  // 文件上传
  uploadFile(cloudPath, filePath) {
    return new Promise((resolve, reject) => {
      wx.cloud.uploadFile({
        cloudPath,
        filePath,
        success: resolve,
        fail: (error) => {
          handleCloudError('uploadFile', error);
          reject(error);
        }
      });
    });
  }
  
  // 文件下载
  downloadFile(fileID) {
    return new Promise((resolve, reject) => {
      wx.cloud.downloadFile({
        fileID,
        success: resolve,
        fail: (error) => {
          handleCloudError('downloadFile', error);
          reject(error);
        }
      });
    });
  }
  
  // 获取临时链接
  getTempFileURL(fileList) {
    return new Promise((resolve, reject) => {
      wx.cloud.getTempFileURL({
        fileList,
        success: resolve,
        fail: (error) => {
          handleCloudError('getTempFileURL', error);
          reject(error);
        }
      });
    });
  }
  
  // HTTP请求（如果需要调用外部API）
  request(options) {
    return new Promise((resolve, reject) => {
      const {
        url,
        method = 'GET',
        data = {},
        header = {},
        timeout = this.defaultTimeout
      } = options;
      
      wx.request({
        url,
        method,
        data,
        header: {
          'content-type': 'application/json',
          ...header
        },
        timeout,
        success: (res) => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(res);
          } else {
            const error = new Error(`HTTP ${res.statusCode}: ${res.errMsg}`);
            handleNetworkError(error);
            reject(error);
          }
        },
        fail: (error) => {
          handleNetworkError(error);
          reject(error);
        }
      });
    });
  }
}

// 创建全局实例
const request = new RequestManager();

module.exports = {
  request,
  
  // 便捷方法
  callFunction: (name, data, options) => request.callCloudFunction(name, data, options),
  db: (collectionName) => request.database(collectionName),
  uploadFile: (cloudPath, filePath) => request.uploadFile(cloudPath, filePath),
  downloadFile: (fileID) => request.downloadFile(fileID),
  getTempFileURL: (fileList) => request.getTempFileURL(fileList),
  httpRequest: (options) => request.request(options)
};