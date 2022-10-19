function showArticle1() {
$("article").fadeIn()
  }
  
  function hideArticle1() {
   
      $("article1").hide();
   
  }

$('.sect4_tabmenu li').click(function(){
    let idx=$(this).index()
    $('.sect4_tabmenu li').removeClass('on')
    $(this).addClass('on')

    $('.wrap >li').stop().fadeOut()
    $('.wrap >li').eq(idx).stop().fadeIn()
});







var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var lineOne = document.querySelector('nav .menu-btn .line--1');
var lineTwo = document.querySelector('nav .menu-btn .line--2');
var lineThree = document.querySelector('nav .menu-btn .line--3');
var link = document.querySelector('nav .nav-links');
    menuBtn.addEventListener("click", function(){
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
})

$('#sect4 li.on a').eq(0).click(function(e){
    $(this).addClass("on");
    mainHide();
    $(".article1").css({ "z-index": "99" });
    showArticle1();
})
$(".article1 .close").click(function (e) {
    e.preventDefault();
    $("#sect4 li.on a").removeClass("on");
    hideArticle1();
  
    $("article").css({ "z-index": "1" });
    mainShow();
  });



