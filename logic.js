window.onload = function() {
    sessionStorage.setItem("balance", 0);
    document.getElementById("loader").style.display = "none";
};

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

function Calculate(value)
{
    document.getElementById("loader").style.display = "block";
    sleep(200).then(() => {
        if(Math.random() < 0.5)
        {
            var newValue = parseInt(sessionStorage.getItem("balance")) + parseInt(value);
            sessionStorage.setItem("balance", newValue);
            var newBalanceString = `Balance: ${newValue}`;
            document.getElementById('balance').innerHTML = newBalanceString;
        }
    document.getElementById("loader").style.display = "none";
});
}

function ResetBalance()
{
    sessionStorage.setItem("balance", 0);
    var newBalanceString = `Balance: ${0}`;
    document.getElementById('balance').innerHTML = newBalanceString;
}