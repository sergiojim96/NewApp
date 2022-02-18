window.onload = function() {
    sessionStorage.setItem("balance", 0);
};

function Calculate(value)
{
    if(Math.random() < 0.5)
    {
        var newValue = parseInt(sessionStorage.getItem("balance")) + parseInt(value);
        sessionStorage.setItem("balance", newValue);
        var newBalanceString = `Balance: ${newValue}`;
        document.getElementById('balance').innerHTML = newBalanceString;

    }
}

function ResetBalance()
{
    sessionStorage.setItem("balance", 0);
    document.getElementById('balance').innerHTML = newBalanceString;
}