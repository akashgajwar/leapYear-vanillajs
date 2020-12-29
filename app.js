var dobInput = document.querySelector("#inputDob");
var check = document.querySelector("#checkLeap");
var outputResult = document.querySelector("#output");

function leapYear(year){
    if(year%4===0){
        if(year%100===0){
          if(year%400===0){
            return ("You are born in a leap year")
          }else{
            return("You are not born in a leap year")
          }
        }else{
          return ("You are born in a leap year")
        }
      }else{
        return ("You are not born in a leap year")
      }

}

function clickHandler(){
    
    var dob = dobInput.value;
    var year = dob.substring(6,10);
    var checkValue = leapYear(year);
    outputResult.innerText = checkValue;

}

check.addEventListener("click", clickHandler);

