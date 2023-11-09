let result=document.getElementById("input");
function  pressed(a){
    // let audio=document.getElementById("audio")
    // audio.currentTime=0;
    // audio.play();
    result.value+= a
}

let clear= document.getElementById("clear")
clear.addEventListener('click',()=>{
    // let audio= document.getElementById("audio");
    // audio.currentTime=0
    // audio.play();
    result.value = ""
})

let equal= document.getElementById("equal");
equal.addEventListener('click', () => {
// let audio= getElementById("audio")
// audio.currentTime = 0
// audio.play();
let answer=eval(result.value);
result.value =answer

})