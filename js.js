$(document).ready(function () {
    
    window.addEventListener('scroll', () => {
       var y = window.innerHeight;
       var slider = document.querySelector('.slider');
       var x = slider.getBoundingClientRect().top;
       z = x + y;
     var headerB = document.querySelector('.headerB');
     
      if(z < 650){
       $('.headerC').addClass('xuathientrenxuong');   
       $('.headerD').addClass('xuathientrenxuong2');
      }
      else{
        $('.headerC').removeClass('xuathientrenxuong');
        $('.headerD').removeClass('xuathientrenxuong2');   
      }
        
    });
   
    
    $('.menu li').hover(function () {
        $(this).toggleClass('backgroundHead');
        $(this).find('a').toggleClass('chutrang');
        $(this).find('.submenu').toggleClass('xuathien');
    });
    setTimeout(() => {
        $('.messenger').addClass('XuatHienDuoiLen');
    }, 3000);
   
    var slider = document.querySelector('.slider');
    var sliderMain = document.querySelector('.main-slider');
    var left = document.querySelector('#left')
    var right = document.querySelector('#right')
    var item = document.querySelectorAll('.sliderItem')
    var widthItem = item[0].offsetWidth;
    var sliderLength = item.length;
    var pos = 0;
    var dem = 0;
    
    
    var dot1 = document.querySelector('#dot1');
    var dot2 = document.querySelector('#dot2');
    var dot3 = document.querySelector('#dot3');
    dot1.addEventListener("click", function(){
        $('.dot').removeClass('bgtrang');
        $(this).addClass('bgtrang');
        dem=0;
        pos = widthItem * dem * -1;
        sliderMain.style = `transform: translateX(${pos}px)`;
        
    });
    dot2.addEventListener("click", function(){
        $('.dot').removeClass('bgtrang');
        $(this).addClass('bgtrang');
        dem=1;
        pos = widthItem * dem * -1;
        sliderMain.style = `transform: translateX(${pos}px)`;
        
    });
    
    dot3.addEventListener("click", function(){
        $('.dot').removeClass('bgtrang');
        $(this).addClass('bgtrang');
        dem=2;
        pos = widthItem * dem * -1;
        sliderMain.style = `transform: translateX(${pos}px)`;
        
    });
    
    left.addEventListener("click", function () {
        LeftorRight(1);


    });
    right.addEventListener("click", function () {
        LeftorRight(-1);


    });
    function LeftorRight(x) {
        if (x == 1) {
            if (dem <= 0) {
                return;
            }
            else {
                dem--;
                console.log(dem);
                pos = pos + widthItem;
                sliderMain.style = `transform: translateX(${pos}px)`
            }
        }
        if (x == -1) {
            if (dem >= sliderLength - 1) {
                return;
            }
            else {
                dem++;
                console.log(dem);
                pos = pos - widthItem;
                sliderMain.style = `transform: translateX(${pos}px)`
            }
        }
    }
    $('.logomenu').click(function(){
        $('.allleft').removeClass('bienmattraiqua');
        $('.allleft').addClass('xuathientraiqua');
        $('body').addClass('ovfl');
        $('.overlay').addClass('xuathien');
        $('.close').addClass('XuatHienDuoiLen2');
    });
    $('.overlay').click(function(){
        $('.allleft').addClass('bienmattraiqua');
       
       setTimeout(() => {
        $('.allleft').removeClass('xuathientraiqua');
       }, 500);
        $('body').removeClass('ovfl');
        $('.overlay').removeClass('xuathien');
        $('.close').removeClass('XuatHienDuoiLen2');
        
    });
    $('.close').click(function(){
        $('.allleft').addClass('bienmattraiqua');
       
        setTimeout(() => {
         $('.allleft').removeClass('xuathientraiqua');
        }, 500);
        $('body').removeClass('ovfl');
        $('.overlay').removeClass('xuathien');
        $('.close').removeClass('XuatHienDuoiLen2');
    });
    $('.menu-left >li').click(function(){
        $(this).find('.dayne').toggleClass('rotate');
        $(this).toggleClass('bg2');
        $(this).find('.submenu2').toggleClass('xuathienflex');
        $('.submenu2').find('a').addClass('chutraiqua');
    })
});
