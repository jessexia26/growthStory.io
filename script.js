// SMOOTH SCROLLING SECTIONS
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

const backgroundMusic = document.getElementById('backgroundMusic');
const pauseButton = document.getElementById('pauseButton');
let isPlaying = false;

// 当用户点击页面的任何位置时，播放背景音乐
document.body.addEventListener('click', () => {
    if (!isPlaying) {
        backgroundMusic.play();
        isPlaying = true;
    }
});

// 当用户点击暂停按钮时，暂停或播放背景音乐
pauseButton.addEventListener('click', (event) => {
    event.stopPropagation(); // 防止点击按钮时触发页面点击事件
    if (isPlaying) {
        backgroundMusic.pause();
        pauseButton.textContent = '播放';
    } else {
        backgroundMusic.play();
        pauseButton.textContent = '暂停';
    }
    isPlaying = !isPlaying;
});


$(document).ready(function() {
    // Hide nav and content initially
    $('.nav__wrapper, #content').hide();

    // Add fade-in animation to anime div
    $('#anime').addClass('fade-in');

    // On click event for anime div
    $('#anime').on('click', function() {
      // Fade out the anime div
      $(this).addClass('fade-out');

      // After fade-out animation ends, hide anime and show nav and content
      $(this).on('animationend', function() {
        $(this).hide();
        $('.nav__wrapper, #section1, #content').fadeIn(3000); // Fade in nav and content
      });
    });
  });