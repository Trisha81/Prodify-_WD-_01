function validateContact(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    
    
    let nameStatus = emailStatus = false;
    const alphaExp = /^[A-Za-z]+$/;
    const mailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    

    //Name validation
    if(name === ""){
        document.getElementById("nameNote").innerHTML = "Please enter your Name";
    }
    else{
        if(name.match(alphaExp)){
            document.getElementById("nameNote").innerHTML = "";
            nameStatus = true;
        }
        else{
            document.getElementById("nameNote").innerHTML = "Invalid name. Please use A-Z or a-z";
        }
    }

    //Email validation
    if(email === ""){
        document.getElementById("emailNote").innerHTML = "Please enter your Email";
    }
    else{
        if(email.match(mailExp)){
            document.getElementById("emailNote").innerHTML = "";
            emailStatus = true;
        }
        else{
            document.getElementById("emailNote").innerHTML = "Invalid email. Eg: example@gmail.com";
        }
    }

   
    //return
    if(nameStatus===true && emailStatus===true){
        return true;
    } else{
        return false;
    }
}