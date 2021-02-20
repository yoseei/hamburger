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

  //準備
  let cursorR = 4;  //カーソルの半径
  const cursor = document.getElementById('cursor');  //カーソル用のdivを取得

  //上記のdivタグをマウスに追従させる処理
  document.addEventListener('mousemove', function (e) {
      cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  });

  //リンクにホバー時はクラスをつける
  const linkElem2 = document.querySelectorAll('a');
  for (let i = 0; i < linkElem2.length; i++) {
      linkElem2[i].addEventListener('mouseover', function (e) {
          cursor.classList.add('hov_');
      });
      linkElem2[i].addEventListener('mouseout', function (e) {
          cursor.classList.remove('hov_');      
      });
  }
  //マウスストーカー用のdivを取得
  const stalker = document.getElementById('stalker');

  //aタグにホバー中かどうかの判別フラグ
  let hovFlag = false;

  //マウスに追従させる処理 （リンクに吸い付いてる時は除外する）
  document.addEventListener('mousemove', function (e) {
      if (!hovFlag) {
      stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
      }
  });

  //リンクへ吸い付く処理
  const linkElem = document.querySelectorAll('a:not(.no_stick_)');
  for (let i = 0; i < linkElem.length; i++) {
      //マウスホバー時
      linkElem[i].addEventListener('mouseover', function (e) {
          hovFlag = true;

          //マウスストーカーにクラスをつける
          stalker.classList.add('hov_');

          //マウスストーカーの位置をリンクの中心に固定
          let rect = e.target.getBoundingClientRect();
          let posX = rect.left + (rect.width / 2);
          let posY = rect.top + (rect.height / 2);

          stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';

      });
      //マウスホバー解除時
      linkElem[i].addEventListener('mouseout', function (e) {
          hovFlag = false;
          stalker.classList.remove('hov_');
      });
  }
}