// pages/wx2weima/wx2weima.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityId: ""
      
  },
  clickScan() {
    //城市id
    let cityId = this.data.cityId;

    console.log("扫描之前我们已经拿到了城市的id:" + cityId);

    //条形码
    let lineNumber = "";

    //1.获取条形码的码值
    wx.scanCode({
      success: function (res) {
        console.log(res.result);

        lineNumber = res.result;

        //1.获取条码
        console.log("条码信息为:" + lineNumber);


        //3.请求这个商品的具体信息
        wx.request({
          url: "http://api.juheapi.com/jhbar/bar?appkey=你的key&pkg=com.lixin.model&barcode=" + lineNumber + "&cityid=" + cityId,
          success: (resp) => {
            console.log(resp.data);
          }
        })




      }

    })
    //console.log("条码信息为:" + lineNumber);



  },

  click() {

    //如果页面上有tabBar,不能使用navigateTo
    /**wx.navigateTo({
      url: '../logs/logs',
    })**/

    wx.switchTab({
      url: '../logs/logs',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //0.应该位置定位获取城市名称
    let cname = "上海市";
    //2.获取城市id，获取条码所在城市的商品信息
    //2.请求城市的id
    wx.request({
      url: 'http://api.juheapi.com/jhbar/city?appkey=476a30a97e5d8231846ba6b574bef8d2&pkg=com.lixin.model',
      success: (res) => {
        console.log(res.data.result);

        //获取到城市列表的数组[]
        let cityArrays = res.data.result;

        //城市列表进行循环，length长度属性
        for (let i = 0; i < cityArrays.length; i++) {
          if (cityArrays[i].cityName == cname) {
            //获取到你所在的城市的省份id
            console.log(cityArrays[i]._id);

            this.setData({ cityId: cityArrays[i]._id });
          }

        }


      }
    })},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})