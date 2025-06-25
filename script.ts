const rates:{[key:string]:number}={
    USD:1,
    INR:83.2,
    EUR:0.93,
};

function currencyConvert(){
    const amtInput = document.getElementById("amount") as HTMLInputElement;
    const fromSelect = document.getElementById("from") as HTMLSelectElement;
    const toselect = document.getElementById("to") as HTMLSelectElement;
    const txtError = document.getElementById("error") as HTMLElement;
    const txtResult = document.getElementById("value") as HTMLElement;

    const amt = parseFloat(amtInput.value);
    const from = fromSelect.value;
    const to = toselect.value;

    if(isNaN(amt)){
        txtError.textContent = "Enter a Valid Amount.!";
        txtResult.textContent = "";
    }
    else if(from == "null" || to == "null"){
        txtError.textContent = "Select a Valid Curreny.!";
        txtResult.textContent = "";

    }
    else if(from == to){
        txtError.textContent = "Conversion is NOT Done with Same Currencies.!";
        txtResult.textContent = "";
    }
    else{
    const fromRate = rates[from];
    const toRate = rates[to];

    const result = (amt / fromRate) * toRate;
    
    txtError.textContent ="";
    txtResult.innerHTML = `The value of <strong>${amt} ${from}</strong> is equal to <strong>${result.toFixed(2)} ${to}</strong>.`;
    }
}

