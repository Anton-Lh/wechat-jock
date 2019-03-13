Page({
  data: {
    imgUrls: [
      '../../images/banner.jpg',
      '../../images/banner2.jpg',
      '../../images/banner3.jpg'
    ],
    contentItems: ['', '', '', ''],
    listItems: ['', '', '', '', '', '', '']
  },
  imgHeight: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
    var imgh = e.detail.height;//图片高度
    var imgw = e.detail.width;//图片宽度
    //等比设置swiper的高度。 即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度  ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
    var swiperH = winWid * imgh / imgw + "px"
    this.setData({
      Height: swiperH//设置高度
    })
  },
  thouch: function (event) {
    var type = event.currentTarget.dataset.type;
    if (type == 1) {
      wx.switchTab({
        url: '../loading/index',
      })
    } else {
      wx.navigateTo({
        url: '../Purchased/index',
      })
    }
  }
})