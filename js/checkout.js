// Get the input fields



// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorLName = document.getElementById('errorLName');  
var errorPhone = document.getElementById('errorPhone');
var errorEmail = document.getElementById('errorEmail');
var errorDireccion = document.getElementById('errorDireccion');

var nameclass = document.getElementById('name'); 
var Lnameclass = document.getElementById('lname');    
var emailclass = document.getElementById('email');
var direccionclass = document.getElementById('direccion');
var passwordclass = document.getElementById('password');
var phoneclass = document.getElementById('phone');

// Exercise 8
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    var name = document.querySelector('.name').value;
    var lname = document.querySelector(".lname").value;
    var phone = document.querySelector('.phone').value;
    var email = document.querySelector(".email").value;
    var password = document.querySelector(".password").value;
    var address = document.querySelector('.address').value;
    
    var letras="áéíóúabcdefghijklmnñopqrstuvwxyz";
    var numeros="0123456789"
    var numLetr="abcdefghijklmnñopqrstuvwxyz0123456789";
    var num=false;
    var letr=false;

    // Verifica direccion

    if(address.length<3){
        errorDireccion.style.display="inline";
        direccionclass.classList.add("invalid");
    }
    else{
        errorDireccion.style.display="none";
        direccionclass.classList.remove("invalid");
    }

    // Verificar nombre
    var rawname= name.toLowerCase();
    var contador=0;        
    for (i in rawname){
        for(e in letras){
            if(letras[e]==rawname[i]){
                contador+=1;
            }            
        }       
    }
    if (contador != rawname.length || rawname.length < 3){
        errorName.style.display="inline";
        nameclass.classList.add("invalid");
        console.log(nameclass);
    }
    else{
        errorName.style.display="none";
        nameclass.classList.remove("invalid");
    }
    
    // Verificar apellido
    var rawlname=lname.toLowerCase();
    contador=0;

    for (i in rawlname){
        for(e in letras){
            if(letras[e]==rawlname[i]){
                contador+=1;
            }            
        }       
    }

    if (contador != rawlname.length|| rawlname.length < 3){
        errorLName.style.display="inline";
        Lnameclass.classList.add("invalid");
    }
    else{
        errorLName.style.display="none";
        Lnameclass.classList.remove("invalid");
    }

    // Verifica telefon
    contador=0;
    for(i in phone){
        for(e in numeros){
            if(phone[i]==numeros[e]){
                contador+=1;
            }
        }
    }
    if(contador != phone.length || phone.length<3){
        errorPhone.style.display="inline";
        phoneclass.classList.add("invalid");
    }
    else{
        errorPhone.style.display="none";
        phoneclass.classList.remove("invalid");
    }

    // Verifica contraseña
    
    for (i in password){
        for(e in numeros){
            if(password[i]==numeros[e]){
                num=true;
            }
        }
        for(r in letras){
            if(password[i]==letras[r]){
                letr=true;
            }
        }  
    }    
    if(letr && num && password.length>=3){
        errorPassword.style.display="none";
        passwordclass.classList.remove("invalid");        
    }
    else{
        errorPassword.style.display="inline";
        passwordclass.classList.add("invalid");        
    }

    // Verifica email
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email) && email.length>3){
        errorEmail.style.display="none";
        emailclass.classList.remove("invalid");        
    }
    else{
        errorEmail.style.display="inline";
        emailclass.classList.add("invalid");        
    }
    
    

}