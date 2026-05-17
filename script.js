var msg = document.getElementById("msg")
var total = document.getElementById("total")
//var count = 200

msg.addEventListener("input",function() {

    var input = msg.value.length
    total.textContent= input +"/200"

    if(input>=180){
        total.style.backgroundColor="Red"
        msg.style.backgroundColor="#ff8164"
    }else if(input>=150){
        total.style.backgroundColor="#FF6700"
        msg.style.backgroundColor="#FEB265"
    }else{
        total.style.backgroundColor="Green"
        msg.style.backgroundColor="#abf7b1"
    }

    if(input == 200){
        error.textContent = "Character limit reached!"
    }

})

