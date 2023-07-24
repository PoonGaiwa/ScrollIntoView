/*
 * @Author: gaiwa gaiwa@163.com
 * @Date: 2023-07-23 13:59:50
 * @LastEditors: gaiwa gaiwa@163.com
 * @LastEditTime: 2023-07-24 10:03:17
 * @FilePath: \html\work\js\day22\js\scrolIntoView.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var aBox = document.querySelectorAll('.box');
var oNav = document.querySelector('.slide-nav');

oNav.addEventListener('click',function(e){
  if(e.target.tagName.toLowerCase() === 'li'){
    var target = e.target;
    var index = getElementIdx(target);
    moveScroll(aBox[index].offsetTop,true);
  }
},false);

function moveScroll(ele, targetTop, isTop){
  var isTop = isTop ?? true;

  // (typeof isTop === 'underfined') && (isTop = true);
  var timer;
  var scrollTop;
  var speed;
  clearInterval(timer);
  timer = setInterval(function(){
    scrollTop = document.documentElement.scrollTop;
    speed = (targetTop - scrollTop) / 10;
    if (Math.abs(scrollTop - targetTop ) <= 1 ){
      clearInterval(timer);
      document.documentElement.scrollTop = targetTop;
      return false;
    }
    if (scrollTop < targetTop && scrollTop >= (document.body.clientHeight - window.innerHeight)){
      clearInterval(timer);
      document.documentElement.scrollTop = document.body.clientHeight - window.innerHeight;
      return false;
    }
    document.documentElement.scrollTop = speed + scrollTop;
  },1000/60);
}