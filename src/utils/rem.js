  //字体自适应
(function (doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        var _num = 16 * (clientWidth / 375);
        docEl.style.fontSize = _num + 'px';
        var _fontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
        if(_fontSize/_num !== 1){
            docEl.style.fontSize = _num / (_fontSize/_num) + 'px';
        }
      };
  
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);