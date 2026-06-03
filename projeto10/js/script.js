function somar(){
    var x_obj = document.getElementById("iptX");

    var x = x_obj.value;

    x = parseInt(x);

    var y_obj = document.getElementById("iptY");

    var y = y_obj.value;

    y = parseInt(y);

    var res = x + y;

    // alert(res);

    var spnRes = document.querySelector("#spnRes");

    spnRes.innerHTML = "Resultado da Soma é "+res;

    var bd = document.querySelector("body");

    if (res % 2 == 0){
        bd.style.backgroundColor = 'lightgreen';
    }else{
        bd.style.backgroundColor = 'gray';
    }
    

}