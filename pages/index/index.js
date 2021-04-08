const app = getApp()

Page({
  data: {
   item:0,
   tab:0,
   playlist:[
     {id:1,title:'红莲華',singer:'LISA',src:'/music/music.mp3',coverImgUrl:'../images/1.jpg'},
     {id:2,title:'山鬼',singer:'Winky诗',src:'/music/02.mp3',coverImgUrl:'../images/2.jpg'},
     {id:3,title:'My All',singer:'滨崎步',src:'/music/03.mp3',coverImgUrl:'../images/3.jpg'},
     {id:4,title:'锦鲤抄',singer:'银临',src:'/music/锦鲤抄-银临.mp3',coverImgUrl:'/image/cover.jpg'}
   ],
    i:0,
   state:'paused',
   playIndex:0,
   play:{
     currentTime:'00:00',
     duration:'00:00',
     percent:0,
     title:'',
     singer:'',
     coverImgUrl:'../images/1.jpg'
   }
  },
  changeItem:function(e){
    this.setData(
      {
        item:e.target.dataset.hi,
       
      }
    )
    console.log(e.target.dataset.item)
  },
  changeTab:function(e){
    this.setData(
      {
        tab:e.detail.current,
      }
    )

  },
  audioCtx:null,
  onReady:function(){
    //创建InnerAudioContext实例（对象）
    var audioCtx = wx.createInnerAudioContext();
    //设置音频资源地址
    // audioCtx.src='https://eu-sycdn.kuwo.cn/d8662f08b6f0e480ed316615dbb3a93f/606d4685/resource/n2/2/98/1469361669.mp3'
    // audioCtx.src='../../music/music.mp3'
    // audioCtx.src='../../music/03.mp3'

    //当开始播放时，输出调试信息。
    audioCtx.onPlay(function(){
      console.log('开始播放')
    })
    //当发生错误时，输出调试信息
    audioCtx.onError(function(res){
      console.log(res.errMsg)
      console.log(res.errCode)
    })
    //开始播放
    audioCtx.play()
    this.audioCtx = wx.createInnerAudioContext();
    //默认选择第1首曲子
    this.setMusic(0)
  },
  setMusic:function(index){
    var music = this.data.playlist[index]
    this.audioCtx.src = music.src
    this.setData({
      playIndex : index,
      'play.title': music.title,
      'play.singer':music.singer,
      'play.coverImgUrl':music.coverImgUrl,
      'play.currentTime':'00:00',
      'play.duration':'00:00',
      'play.percent':0
    })
 },
 play:function(){
    this.audioCtx.play()
    this.setData({
      state:'running'
    })
 },
 pause:function(){
  this.audioCtx.pause();
  this.setData({
    state:'paused'
  })
 },
 
  secondBinding:function(e){
    console.log(e.detail.value)
  }
})
