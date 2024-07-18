function fun() {
    var x = new Date();
    console.log(x)
    document.getElementsByClassName("hours")[0].innerHTML = x.getHours() + " :";
    document.getElementsByClassName("min")[0].innerHTML = x.getMinutes() + " :";
    document.getElementsByClassName("sec")[0].innerHTML = x.getSeconds() + `${x.getHours() >= 12 ? ' PM' : ' AM'}`;
}
setInterval(fun, 1000);