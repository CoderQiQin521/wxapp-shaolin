const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 验证手机号前两位和长度.
 * @param {Number} phone
 * @returns {boolean}
 */
const verifyPhone = phone => {
  let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
  return reg.test(phone)
}

module.exports = {
  formatTime: formatTime,
  verifyPhone: verifyPhone
}
