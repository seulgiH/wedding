$(function(){
    // 2단계 메뉴 안보임(초기화)
    $('.depth2').hide();

    // hover
    $('.depth1 li').hover(
      function(){
        // 마우스 오버
        $(this)
          .find('.depth2').show();
      },
      function(){
        // 마우스 아웃
        $(this)
          .find('.depth2').hide();
      }
    );


  }); 