window.onload = function() {
    sessionStorage.setItem("balance", 0.00);
    document.getElementById("loader").style.display = "none";
};

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

function Calculate(value)
{
    value = value * 2;
    document.getElementById("loader").style.display = "block";
    sleep(200).then(() => {
        if(Math.random() < 0.5)
        {
            var newValue = parseFloat(sessionStorage.getItem("balance")) + parseFloat(value);
            sessionStorage.setItem("balance", newValue);
            var newBalanceString = `Balance: ${newValue}`;
            document.getElementById('balance').innerHTML = newBalanceString;
            document.getElementById('status').innerHTML = "Win";
        }
        else{
            var newValue = parseFloat(sessionStorage.getItem("balance")) + 0.01;
            sessionStorage.setItem("balance", newValue);
            var newBalanceString = `Balance: ${newValue}`;
            document.getElementById('balance').innerHTML = newBalanceString;
            document.getElementById('status').innerHTML = "Lose";
        }
    document.getElementById("loader").style.display = "none";
});
}

function ResetBalance()
{
    sessionStorage.setItem("balance", 0.00);
    var newBalanceString = `Balance: ${0}`;
    document.getElementById('balance').innerHTML = newBalanceString;
    document.getElementById('status').innerHTML = "";
}