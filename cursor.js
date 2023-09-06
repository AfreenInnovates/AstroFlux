let cursor = document.querySelector('.cursor');
window.addEventListener("mousemove", cursorAnimate);

function cursorAnimate(e) {
    cursor.animate({
        top:e.pageY + 'px',
        left:e.pageX + 'px', 
      }, duration=1000, fill='forwards')
  }