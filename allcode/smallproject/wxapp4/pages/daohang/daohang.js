// pages/daohang/daohang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        phone:false,
        phonedata:{},
        snum:false,
        numdata:{}
        

  },
  searchnumber(event){
        console.log(event);
        var currentthis=this;
           currentthis.setData({phone:false,snum:false});

        var numbervalue=event.detail.value;
           console.log ("输入的值:"+numbervalue);
           wx.showToast({
             title: '正在查询',
             icon:"none",
             duration:3000
           });

           //https://www.zhaotool.com/v1/wx/info/
           wx.request({
             url: "https://www.zhaotool.com/v1/wx/info/",
             data:{"q":numbervalue},
             method:"post",
             success:function(res)
             {

               console.log(res.data);
               console.log(res.data.sid);
               var sidnum=res.data.sid;
               if (sidnum=="S102")
               {
                currentthis.setData({snum:true ,numdata:res.data.data});

               }else if (sidnum=="S101")
               { currentthis.setData({ phone: true, phonedata: res.data.data });}


               }
             },

           )
   

  },

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

  }
})