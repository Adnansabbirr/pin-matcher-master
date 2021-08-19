function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }

}


function pinGenarate() {

    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}
document.getElementById('calc-div').addEventListener('click', function (event) {
    const calNumber = event.target.innerText;
    const calculatorScreen=document.getElementById('calculator-screen');
    if(isNaN(calNumber)){
        if(calNumber=='C'){
            calculatorScreen.value='';
        }
        

    }
    else{
        
    const previousCalc=calculatorScreen.value;
    const newCalcNumber=previousCalc+calNumber;
    calculatorScreen.value=newCalcNumber;
    
    }
    


    // console.log(newDisplay);
})
function verifyPin(){
    const displayPInValue=document.getElementById('display-pin').value;
    const succesMassage= document.getElementById('succes-massage')
    const calculatorScreenValue=document.getElementById('calculator-screen').value;
    const failureMassage=document.getElementById('failure-massage');
    if (displayPInValue==calculatorScreenValue){
      
       succesMassage.style.display='block';
       failureMassage.style.display='none';

    }
    else{
        
        failureMassage.style.display='block';
        succesMassage.style.display='none';
    }
}