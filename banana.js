var btnTranslate = document.querySelector('#btn-translate')
var textAreInput=document.querySelector("[id='text-area-input']")
var bringText=document.querySelector("bring-text");
// console.log(btnTranslate)
function btnClick(){
    var click="clicked";
  console.log("clicked");
  console.log(textAreInput.value)
  // bringText.=textAreInput.value;
  // bringText.innerHTML=textAreInput.value
}
btnTranslate.addEventListener('click',btnClick)

// header.addEventListener()
