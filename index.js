//document.querySelector("button").addEventListener("click",handleClick);
//document.querySelector("div .a").addEventListener("click",handleClick);
//document.querySelector("div .s").addEventListener("click",handleClick);
//document.querySelector("div .d").addEventListener("click",handleClick);
//document.querySelector("div .j").addEventListener("click",handleClick);
//document.querySelector("div .k").addEventListener("click",handleClick);
//document.querySelector("div .l").addEventListener("click",handleClick);

//let nodeList = document.querySelectorAll(".drum");
//for (let i = 0; i < nodeList.length; i++) {
  ////nodeList[i].addEventListener("click w",handleClick);
 // nodeList[i].addEventListener("click s",handleClick);
 //var allbutton = document.querySelectorAll(".drum");
 
/* var allbutton = document.querySelectorAll(".drum");
 for (let i = 0; i < allbutton.length; i++) {
    if (i===0) {
        allbutton[i].addEventListener("click",tom1);
    }
    else if (i===1) {
        allbutton[i].addEventListener("click",tom2);

      }  else if (i===2) {
        allbutton[i].addEventListener("click",tom3);

      }  else if (i===3) {
        allbutton[i].addEventListener("click",tom4);

      }  else if (i===4) {
        allbutton[i].addEventListener("click",snare);

      }  else if (i===5) {
        allbutton[i].addEventListener("click",crash);

      }  else if (i===6) {
        allbutton[i].addEventListener("click",kick);

      } 
      else {
        //  block of code to be executed if the condition1 is false and condition2 is false
      }
      
 }
//}
function tom1() {
   var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
   }
   function tom2() {
    var audio = new Audio('./sounds/tom-2.mp3');
     audio.play();
    }
    function tom3() {
        var audio = new Audio('./sounds/tom-3.mp3');
         audio.play();
        }
        function tom4() {
            var audio = new Audio('./sounds/tom-4.mp3');
             audio.play();
            }
            function snare() {
                var audio = new Audio('./sounds/snare.mp3');
                 audio.play();
                }
                function kick() {
                    var audio = new Audio('./sounds/kick-bass.mp3');
                     audio.play();
                    }
                    function crash() {
                        var audio = new Audio('./sounds/crash.mp3');
                         audio.play();
                        }
//function handleClick(){
   // alert("i got clicked !");
//}

//for(var i=0; i < elem.length; i++){

//}*/
var NumberofDrumButton=document.querySelectorAll(".drum").length;
for(var i=0;i<NumberofDrumButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttoninnerHTML= this.innerHTML;
        switch (buttoninnerHTML) {
            case "w":
                var tom1 =new Audio("/tom-1.mp3");
                tom1.play();
                break;
                case "a":
                    var tom2 =new Audio("/tom-2.mp3");
                    tom2.play();
                    break;
                    case "s":
                        var tom3 =new Audio("/tom-3.mp3");
                        tom3.play();
                        break;
                        case "d":
                            var tom4 =new Audio("/tom-4.mp3");
                            tom4.play();
                            break;
                            case "j":
                                var snare =new Audio("/snare.mp3");
                                snare.play();
                                break;
                                case "k":
                                    var crash =new Audio("/crash.mp3");
                                    crash.play();
                                    break;
                                    case "l":
                                        var kick =new Audio("/kick-bass.mp3");
                                        kick.play();
                                        break;
            default:console.log(buttoninnerHTML);
               
        }
       
    });
}


//var audio =new Audio("sound/tom-1.mp3");
//audio.play();
//console.log(this.style.color="white");