/*
* @Author: Administrator
* @Date:   2017-01-12 10:11:29
* @Last Modified by:   Administrator
* @Last Modified time: 2017-01-12 19:25:05
*/

// 'use strict';
$(function(){
   var index = 0;
   var lis = $(".item li");
   var timer = null;
   $(".item li").click(function(){
      index = $(this).index();
      hide_show(index);
      change(index);
   });


   $(window).mousewheel(function(e,d){
      clearTimeout(timer);
      timer = setTimeout(function(){
         index-=d;
         if(index > lis.length-1 || index < 0){
            index = 0;
         }
         hide_show(index);
         change(index);
      },100);
   });

      function hide_show(index){
         if(index == 0){
            $(".download").hide();
            $(".scroll").show();
         }else{
            $(".download").show();
            $(".scroll").hide();
         }
      };

      function change(index){
         lis.eq(index).addClass('cur').siblings().removeClass('cur');
         $("section").eq(index).show().siblings('section').hide();
         timer = setTimeout(function(){
            $("section").eq(index).removeClass('current').siblings('section').addClass('  current');
         },50);
      };
})
