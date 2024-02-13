const display = document.querySelector(".display")
const buttons = document.querySelector(".buttons")
const specialChars = ["%","+","=","-","x"]
let output = "";

const calculate=(btnValue)=>{
    display.focus();

    if (btnValue === "=" && output=="=" ){
        output =eval (output.replace("%","/100").replace("MOD","$"));
      
    } else if(btnValue === "AC"){
        output = "";
      } else {
          if (output=== "" && spesialChars.includes(btnValue)) return;
        output +=btnValue;
      }
      display.value=output
};
buttons.forEach((button)=>{
    button.addEventListener("click",(e)=> calculator(e.target.dataset.value));
});