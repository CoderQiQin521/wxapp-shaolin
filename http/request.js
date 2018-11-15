const request = (url, data, method = 'GET') => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: method,
      data: data,
      success: res => {
        if (res.statusCode === 200) {
          let resData = res.data
          if (resData.error_code === 0) {
            resolve(resData.data)
          } else {
            resolve(resData)
          }
        } else {
          reject(res)
        }
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

module.exports = {
  request
}