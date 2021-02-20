'use strict';
{
  
  function hamburger() {
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('ham-nav').classList.toggle('in');
  }
  document.getElementById('ham-line').addEventListener('click', function() {
    hamburger();
  });
  //マウスストーカー用のdivを取得
  const stalker = document.getElementById('stalker'); 

  //上記のdivタグをマウスに追従させる処理
  document.addEventListener('mousemove', function (e) {
      stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  });
}