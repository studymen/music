page({

  onRead:function (){
    var audioCtx=wx.createInnerAudioContext();
    audioCtx.src='';
    audioCtx.onPlay(function(){
      console.log('play begin...')
    })
    audioCtx.onError(function(res){
      console.log(res.errMsg);
      console.log(res.errCode);
    })
    audioCtx.play();
  }

})
