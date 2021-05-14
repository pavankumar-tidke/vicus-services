window.onload = function(){
  if(!navigator.userAgent.match('Macintosh')){
      var element = document.querySelectorAll('.slimScroll');


      // Apply slim scroll plugin
      var one = new slimScroll(element[0], {
          'wrapperClass': 'scroll-wrapper unselectable mac',
          'scrollBarContainerClass': 'scrollBarContainer',
          'scrollBarContainerSpecialClass': 'animate',
          'scrollBarClass': 'scroll',
          'keepFocus': true
      });

      window.onresize = function(){
        one.resetValues();
        two.resetValues();
        three.resetValues();
    }
}
else{
    document.write("For Mac users, this custom slimscroll styles will not be applied");
}
}


