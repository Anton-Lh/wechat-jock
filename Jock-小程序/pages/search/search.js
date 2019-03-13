//index.js
//获取应用实例
const app = getApp()
Page({
  data: {

    phoneInfo: {
    },
    phoneNum: '',
  },
  phoneNum: function (e) {
    var that = this

    that.setData({

      phoneNum: e.detail.value

    })
  },
  cleanPhoneNum: function () {
    var that = this;
    that.setData({
      phoneNum: '',
      phoneInfo:''
    })

  },
  sendPhoneNum: function () {
    var that = this,
      phonenumber = that.data.phoneNum.replace(/-/g, ""),
      myreg = /^[1-9](\d){12}$/, 
      sendphone = phonenumber.substring();

    if (!myreg.test(phonenumber)) {

      wx.showModal({
        content: '请输入合法序列号码!',
      });


      that.setData({

        phoneNum: ''

      })
      wx.hideLoading()

      return;

    } else {
      wx.request({
        url: 'http://www.mxnzp.com/api/barcode/goods/details?barcode=' + sendphone + '',
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          wx.hideLoading()
          if (res.statusCode==200) {
            // console.log(res.data)
            that.setData({
              phoneInfo: res.data.data,
            })
          } else {
            wx.showModal({
              content: '请重试',
            });
          }
        },
        fail: function (err) {
          console.log(err);
          wx.hideLoading()
          wx.showModal({
            content: '请重试',
          });
          that.setData({
            phoneInfo: ''
          })

        }
      })
    }





  }

})


