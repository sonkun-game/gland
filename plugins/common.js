import Cookies from 'js-cookie'
/**
 * Phần này sử dụng để lưu các hàm js sử dụng lại
 * tác giả: Sơn
 * ngày : 26/08/2023
 */

export const Common = {
  /**
   * Get 1 chuỗi key tránh bị trùng lặp ID,... Hiện tại có thể sử dụng uuid thay thế
   * @param {*} length
   * @returns
   */
  getRandomKey(length = 8) {
    let randomNumber = Math.floor(Math.random() * 10000) + 1
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let randomText = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      randomText += characters.charAt(randomIndex)
    }
    return randomText + randomNumber
  },
  /**
   * Xóa unicode, lowercase, xóa space, trả về dộ dài theo y/c
   * @param {*} length
   */
  getKeyFromText(key = '', length = 6) {
    key = key.replace(/\s/g, '')
    key = key.replace(/[^\x00-\x7F]/g, '').toLowerCase()
    if (key.length > length) {
      return key.substring(0, length)
    }
    return key
  },
  /**
   * get đường link các trang, dùng để redirect khi bấm vào link,...
   * @param {*} url
   * @returns
   */
  baseUrl(url) {
    if (typeof window !== 'undefined') {
      let protocol = window.location.protocol
      let host = window.location.host
      return protocol + '//' + host + '/' + url
    } else {
      console.log('Window is undefined !')
    }
    return ''
  },
  /**
   * trả về đoạn chuỗi 1110111 dựa theo thuộc tính show = true|false của table
   * đối với show = true thì sẽ trả về 1 còn lại là 0
   */
  getTableShowColumn(tableHead) {
    var data = ''
    tableHead.forEach((item) => {
      if (item.show) {
        data = data.concat('1')
      } else {
        data = data.concat('2')
      }
    })
    return data
  },

  /**
   * Close / open modal
   */
  toggleModal(modalId) {
    var modal = document.getElementById(modalId)
    if (modal) {
      if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden')
      } else {
        modal.classList.add('hidden')
      }
    } else {
      console.error('common.js : Modal with id ' + modalId + ' is not defined')
    }
  },

  // HANDLE EFFECT AND NOTIFICATION -------------------->
  showSuccess(msg) {
    if(msg) $('#global-notify-success > div > span').html(msg)
    else $('#global-notify-success > div > span').html("Thao tác thành công");
    $('#global-notify-success').css({ top: 50 })
    setTimeout(() => {
      $('#global-notify-success').css({ top: -50 })
    }, 1000)
  },

  showError(msg) {
    if(msg) $('#global-notify-fail > div > span').html(msg)
    else $('#global-notify-fail > div > span').html("Thao tác thất bại");
    $('#global-notify-fail').css({ top: 50 })
    setTimeout(() => {
      $('#global-notify-fail').css({ top: -50 })
    }, 1000)
  },

  // HANDLE NULL POINTER ---------------->
  /**
   * Check if value is empty or null or undefinded
   * @param {*} value
   */
  isNullOrEmpty(value) {
    return value === null || value === undefined || value === ''
  },
  /**
   * Get Data only if this data is avariable, else return empty String
   * @param {*} data
   */
  getAvaiable(data) {
    return data ? data : ''
  },
  returnDefaultIfNull(data, defaultValue = '') {
    if (data === null || data === undefined) {
      return defaultValue
    }
    return data
  },
}
