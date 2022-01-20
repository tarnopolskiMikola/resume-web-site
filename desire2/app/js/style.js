 // var htmlstyle = document.getElementById("html90").style;
// var CSstyle = document.getElementById("css70").style;
// var fstyle = document.getElementById("figma").style;
// var JSstyle = document.getElementById("javascript50").style;
// var GITstyle = document.getElementById("git50").style;




// function scrol2(){
//   htmlstyle.backgroundColor = "#04aa6d"
// let hh = 0;
// function f90(){
//     hh++
//     htmlstyle.width = hh++ + "%"
     
//     if (hh === 90) return;
//     setTimeout(f90, 50);
// }
// setTimeout(f90, 50);


// let cs = 0;
// function f70(){
//     cs++
//     CSstyle.width = cs  + "%"
//     fstyle.width = cs + "%"
//     if (cs === 70) return;
//     setTimeout(f70, 40);
// }
// setTimeout(f70, 40);
 
// let jg = 0;
// function f50(){
//     jg++
//     JSstyle.width = jg   + "%"
//     GITstyle.width = jg + "%"
//     if (jg === 50) return;
//     setTimeout(f50, 30);
// }
// setTimeout(f50, 30);
 
// }
 
// //  scrol2()

 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var imgStyle = document.getElementById("header__block__photo").style;
// let t = 0;


// function f2(){
//    t++;
   
//    setTimeout(f2, 1000);
//    imgStyle.boxShadow = "0 0 30px 20px rgb(0, 0, 0)"
// }
// setTimeout(f2, 500);

// function f1(){
//     t++;
//     setTimeout(f1, 1000);
//     imgStyle.boxShadow = "0 0 20px 10px rgb(0, 0, 0)"
// }
// setTimeout(f1, 1000);
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// window.onscroll = function() {scrollFunction2()};
// function scrollFunction2()  {
//     if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000 ) {
//        scrol2() 
//     } else {
//         scrol2() 
//     }
//   }

 

window.onscroll = function() {scrollFunction()};
var BStyle = document.getElementById("header__menu1").style;
// var BStyle2 = document.getElementById("header__menu__item2").style;
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    BStyle.backgroundColor = "rgb(22, 129, 31, 0.5)"
  } else {
    BStyle.backgroundColor = "rgb(22, 129, 31, 0.0)"
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function scrollTo(element) {
    window.scroll({
      left: 0, 
      top: element.offsetTop, 
      behavior: 'smooth'
    })
  }
  
  var button = document.querySelector('#header__menu__item1');
  var footer = document.querySelector('.wrapp');
  var map2 = document.querySelector('.map');
  var button2 = document.querySelector('#header__menu__item6');
  var button5 = document.querySelector('#header__menu__item5');
  var sl2 = document.querySelector('.wrapp_por');

  button5.addEventListener('click', () => {
    scrollTo(sl2);
  })


  button2.addEventListener('click', () => {
    scrollTo(map2);
  })

  button.addEventListener('click', () => {
    scrollTo(footer);
  })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////// 
var s2 = document.getElementById("t");
s2.style.transform = "translate(0px, 0%)";
s2.style.opacity = "1"
///////////////////////////////////////////////////////////////
var s3 = document.getElementById("t1");
s3.style.transform = "translate(0px, 0%)";
s3.style.opacity = "1"


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  window.addEventListener('scroll', reveal);

  function reveal(){
      var reveals = document.querySelectorAll('.reveal');
 
      for(var i = 0; i < reveals.length; i++){
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 150;
 
          if(revealtop < windowheight - revealpoint){
              reveals[i].classList.add('activeBlock');
            
          }else{
              reveals[i].classList.remove('activeBlock');
          }
      }
  }
 
  ////////////////////////////////////////////////////////////////////////////////////

  window.addEventListener('scroll', reveal2);
  function reveal2(){
      var reveals = document.querySelectorAll('.skills2');
 
      for(var i = 0; i < reveals.length; i++){
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 10;
 
          if(revealtop < windowheight - revealpoint){
              reveals[i].classList.add('activePROC');
            
          }else{
              reveals[i].classList.remove('activePROC');
          }
      }
  }