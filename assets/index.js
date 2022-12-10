function random() {
    let strOnly = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let strSymbol = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^&*()_+@!";

    let len = document.getElementById("digits").value;

    let str;

    let radioStr = document.getElementById('str');
    let radioElem = radioStr.symbol;
    let radioChecked = radioElem.value;

    if (radioChecked == "strOnly") {
        str = strOnly;
    }else {
        str = strSymbol;
    }

    let password = "";



    for (let i = 0; i < len; i++) {
        password += str.charAt(Math.floor(Math.random() * str.length));
    }

    document.getElementById('result').textContent = password;
}
