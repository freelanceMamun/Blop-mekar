let OutputCode = document.querySelector("#css_code");
let sliders =  document.querySelectorAll("input[type='range']");
const copy = document.querySelector(".copy");

 
sliders.forEach((slider)=>{
    slider.addEventListener("input",createBlob);
})

let inputs = document.querySelectorAll("input[type='number']");

inputs.forEach((input)=>{
    input.addEventListener("change",createBlob)
})

function createBlob(){
    let [RadiusOne,RadiusTow,RadiusThree,Radiusfour] = [...sliders];
    let [inputOne,inputTwo] = [...inputs];
    let borderRadius =`${RadiusOne.value}% ${100 - RadiusOne.value}% ${100 - RadiusThree.value}% ${RadiusThree.value}% / ${Radiusfour.value}% ${RadiusTow.value}% ${100 - RadiusTow.value}% ${100 - Radiusfour.value}%`;
    document.querySelector(".blop").style.cssText =  `border-radius: ${borderRadius}; height: ${inputOne.value}px; width: ${inputTwo.value}px`;  
 
    OutputCode.value = `border-radius: ${borderRadius}`


}   

window.onload = ()=>{
    createBlob();
}

copy.addEventListener("click",()=>{
    OutputCode.select();
    document.execCommand('copy');
    alert('Code Copyed...');
})