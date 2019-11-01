//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    movices:[],
    tvs:[],
    shows:[]
  },
 
  onLoad: function () {
     var that=this;
     wx.request({
       url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',
       success(res){
         console.log(res.data.subject_collection_items)
         var movices = res.data.subject_collection_items;
         console.log("movices",movices)
         console.log("movices2", movices[0].cover.url)
         that.setData({
           movices:movices
         })
       }
       
     })
     wx.request({
       url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items',
       success(res) {
         console.log(res.data.subject_collection_items)
         var tvs = res.data.subject_collection_items;
         console.log("tvs", tvs)
         console.log("tvs", tvs[0].cover.url)
         that.setData({
           tvs: tvs
         })
       }
     })
     wx.request({
       url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items',
       success(res) {
         console.log(res.data.subject_collection_items)
         var shows = res.data.subject_collection_items;
         console.log("shows", shows)
         console.log("shows", shows[0].cover.url)
         that.setData({
           shows: shows
         })
       }
     })
  },
 

})
