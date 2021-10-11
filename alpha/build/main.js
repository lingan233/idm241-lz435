var btnShrink = anime.timeline({
    easing: 'easeInOutSine',
    autoplay: false
  });
  
  btnShrink
    .btn({

    })

    btnEnlarge
    .btn({

    })

  
  document.querySelector('.btn').onclick = function() {
    btnShrink.play();
  };
  