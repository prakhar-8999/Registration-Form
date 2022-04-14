function check(){
    event.preventDefault();

    var pass1 = document.getElementById("pass").value;
    var pass2 = document.getElementById("cpass").value;
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var email = document.getElementById("ema").value;
    var city = document.getElementById("incity").value;
    var gender = document.getElementById("gen").value;
    var phone = document.getElementById("pno").value;
    

    if (pass1 != pass2){
        alert("Password doesn't match")
    }
    
    else{
        let user = new Array();
        user = JSON.parse(localStorage.getItem("userdata"))?JSON.parse(localStorage.getItem("userdata")):[]
        var a = 0;
        for(var i=0;i<user.length;i++){
            if (user[i].email == email){
                a = a+1;
            }
        }
        if (a == 0){
            user.push({
                "name1":firstname,
                "name2":lastname,
                "email":email,
                "city":city,
                "gender":gender,
                "phone":phone
            })
            
            localStorage.setItem("userdata",JSON.stringify(user));
            var fom = document.getElementById("goodform");
            fom.submit();
            alert("Data Saved Successfully !!!!")
        }
        else{
            alert("Email already exists");
            // var fom = document.getElementById("goodform");
            // fom.reset();
        }
        }
}