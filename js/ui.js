$(function(){
   fnKakao();
   fnmainNav();
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
   var mySwiper = new Swiper('.swiper-container', {
      speed: 400,
  });
});