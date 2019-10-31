// components/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      rate: {
        type:Number,
        value:0
      },
      starsize:{
        type:Number,
        value:20 //rpx
      },
      fontsize:{
        type:Number,
        value:20 //rpx
      },
      fontcolor:{
        type:String,
        value:"#ccc"
      }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  //组件的生命周期方法
  lifetimes: {
    attached: function () {
      var that = this;
      console.log(that.properties.rate);
      // console.log("ssssss")
      var rate = that.properties.rate;
      var intRate = parseInt(rate);
      var light = parseInt(intRate / 2);
      var half = intRate % 2;
      var gray = 5 - light - half;
      // console.log("===")
      // console.log(light)
      // console.log(half)
      // console.log(gray)
      var lights = [];
      var halfs = [];
      var grays = [];
      for (var i = 1; i <= light;i++ ){
          lights.push(i);
      }
      for (var j = 1; j <= half; j++) {
        halfs.push(j);
      }
      for (var k = 1; k <= gray; k++) {
        grays.push(k);
      }
      var ratetext = rate && rate > 0 ? rate.toFixed(1) : "未评分" //有值，并且大于零  toFixed(1)保留一位小数
      that.setData({
        lights: lights,
        halfs: halfs,
        grays: grays,
        ratetext: ratetext
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
