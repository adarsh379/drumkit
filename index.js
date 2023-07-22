
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML.trim();
sounds(buttonInnerHtml);
animation(buttonInnerHtml);
  });
}
document.addEventListener("keypress",function(event){
    sounds(event.key);
    animation(event.key);
    
});
function sounds(keys){
// document.addEventListener("keypress",function(event){ **this one creates another consecutive effect
  switch (keys) {
    case 'w':
      var audio1 = new Audio("crash.mp3");
      audio1.play();
      break;
    case 'a':
      var audio2 = new Audio('kick-bass.mp3');
      audio2.play();
      break;
    case 's':
      var audio3 = new Audio('snare.mp3');
      audio3.play();
      break;
    case 'd':
      var audio4 = new Audio('tom-1.mp3');
      audio4.play();
      break;
    case 'j':
      var audio5 = new Audio('tom-2.mp3');
      audio5.play();
      break;
    case 'k':
      var audio6 = new Audio('tom-3.mp3');
      audio6.play();
      break;
    case 'l':
      var audio7 = new Audio('tom-4.mp3');
      audio7.play();
      break;
    default:
      console.log("Invalid key Selected");
      break;
  }
}
function animation(akey){
var elementkeyy=document.querySelector("."+ akey);
elementkeyy.classList.add("pressed");
// * for timeout;
setTimeout(function(){
  elementkeyy.classList.remove("pressed");
}, 200);
}

setTimeout(function(){
  akey.classList.remove("pressed");
}, 200);
// )
// }






// for(var i=0;i<document.querySelectorAll(".drum").length;i++){
// document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//   var audio=new Audio('tom-3.mp3');
//   audio.play();
// });
// }











//important form document.querySelectorAll("button").forEach(function(element) {
//     element.addEventListener("click", function() {
//         alert("clicked!!!!!!!");
//     });
// });
// or
// document.querySelectorAll(".set").forEach(function(element) {
//     element.addEventListener("click", function() {
//         alert("clicked!!!!!!!");
//     });
// });


// we can also perform the above work from simple from
// for(var i=0;i<document.querySelectorAll(".drum").length;i++){

// document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//   var audio=new Audio('tom-3.mp3'); audio wala hai yaha
//   audio.play();
// });
// }
// for(var i=0;i<document.querySelectorAll(".drum").length;i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         this.style.color = "white";
//     console.log(this.style.color);
      
//         // console.log(this.style.color="white")
//     });
//     }







