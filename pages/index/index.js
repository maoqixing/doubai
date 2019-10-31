//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
 
  onLoad: function () {
     var that = this;
     //电影
     wx.request({
       url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?count=7',
      success:function(res){
        console.log(res);
        var movies = res.data.subject_collection_items;
        console.log(movies);
        that.setData({
          movies:movies
        });
        console.log("movies",movies)
      }
     })
     //电视剧
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items?count=7',
      success: function (res) {
        console.log(res);
        var tvs = res.data.subject_collection_items;
        console.log(tvs);
        that.setData({
          tvs: tvs
        });
        console.log("tvs", tvs)
      }
    })
     //综艺
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items?count=7',
      success: function (res) {
        console.log(res);
        var shows = res.data.subject_collection_items;
        console.log(shows);
        that.setData({
          shows: shows
        });
        console.log("shows", shows)
      }
    })
  },
 

})
