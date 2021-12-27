document.querySelectorAll('.video-container2 video').forEach(vid => {
    vid.onclik = () => {
        document.querySelector('.popup-video').style.display = 'block';
        document.querySelector('.popup-video video').src = vid.getAttribute('src');
    }
});

document.querySelector('.popup-video span').onclick = () => {
    document.querySelector('.popup-video').style.display = 'none';
}
hljs.initHighlightingOnLoad();
        
  $('.hero__scroll').on('click', function(e) {
  $('html, body').animate({
        scrollTop: $(window).height()
       }, 1200);
 });      
       AOS.init({
       easing: 'ease-out-back',
       duration: 1000
 });
                   