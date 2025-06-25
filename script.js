var rates = {
    USD: 1,
    INR: 83.2,
    EUR: 0.93,
};
function currencyConvert() {
    var amtInput = document.getElementById("amount");
    var fromSelect = document.getElementById("from");
    var toselect = document.getElementById("to");
    var txtError = document.getElementById("error");
    var txtResult = document.getElementById("value");
    var amt = parseFloat(amtInput.value);
    var from = fromSelect.value;
    var to = toselect.value;
    if (isNaN(amt)) {
        txtError.textContent = "Enter a Valid Amount.!";
        txtResult.textContent = "";
    }
    else if (from == "null" || to == "null") {
        txtError.textContent = "Select a Valid Curreny.!";
        txtResult.textContent = "";
    }
    else if (from == to) {
        txtError.textContent = "Conversion is NOT Done with Same Currencies.!";
        txtResult.textContent = "";
    }
    else {
        var fromRate = rates[from];
        var toRate = rates[to];
        var result = (amt / fromRate) * toRate;
        txtError.textContent = "";
        txtResult.innerHTML = "The value of <strong>".concat(amt, " ").concat(from, "</strong> is equal to <strong>").concat(result.toFixed(2), " ").concat(to, "</strong>.");
    }
}
