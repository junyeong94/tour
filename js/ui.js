$(function(){
   fnKakao();
   fnmainNav();
   gridSystem()
   // 스킵메뉴
    $('.skip>a').focus(function(){
       $('.skip').addClass('active'); 
    });
    $('.skip>a').blur(function(){
        $('.skip').removeClass('active'); 
     });      
   // 1066px 이상에서의 pos_fix 카카오톡 변경
   $(window).resize(function(){
      fnKakao();
      fnmainNav();
   });

   function fnKakao(){
      var winWidth=$(this).width();
      if(winWidth>=1066){
         $('#kakao').text('카카오톡');
      }else{
         $('#kakao').text('카카오톡 상담');
      }
   }
   // 헤더 토글 네비게이션
   $('.tgl_btn').click(function(){
      $('.nav_box').slideToggle();
      $('#header').css('background-color','#3a3e46');
   });

   // 메인 네비 리사이즈
   function fnmainNav(){
      var winWidth=$(window).width();
      if(winWidth>=801){
         $('.nav_box').show();
      }else{
         $('.nav_box').hide();
      }
   }

   // 메인슬라이더
   var mySwiper = new Swiper('.mo_banner,.tab_banner', {
      speed: 400,
      loop:true,
      autoplay:{
         delay:3000,
      },
      pagination: {
         el: '.swiper-pagination',
       },
  });

//   슬라이더 멈춤/재생
  var stopPlay=$('.tab_banner .swiper-pagination::after');
     

//   스크롤이벤트
  $(window).scroll(function(){
     var winTop=$(window).scrollTop();
     var winWidth=$(window).width();
   //   모바일조건
     if(winTop>=200 && winWidth<=1065){
        $('.pos_fix>p').css('display','block');
     }else if(winTop<200 && winWidth<=1065){
         $('.pos_fix>p').hide();
     }else if(winTop>=200 && winWidth>=1066){
         $('.pos_fix>ul').show();
         $('.pos_fix>p').css('display','block');
     }else if(winTop<200 && winWidth>=1066){
         $('.pos_fix>ul').hide();
         $('.pos_fix>p').hide();
     }
  });

//   윈도우 리사이즈 이벤트
   $(window).resize(function(){
      gridSystem();
      var winWidth=$(window).width();
      if(winWidth<=800){
         $('.pos_fix>ul').show();
      }else if(winWidth<=1066){
         $('.pos_fix>ul').hide();
      }
   });


//   스무스 스크롤
   var scroll = new SmoothScroll('a[data-scroll]', {
	   speed:500
   });
   
   // 화면폭에 다른 그리드 적용
   function gridSystem(){
   var winWidth=$(window).width();
   if(winWidth<=800){
      // 모바일영역
      $('.top3>li').removeClass('pc_g4');
   }else{
      // 태블릿영역
      $('.top3>li').addClass('pc_g4');
   }
}
});