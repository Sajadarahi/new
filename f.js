$(document).ready(function(){
    $.validator.addMethod("passwordRule",function(value,element){
        return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(value)
    
    },
   
    $('#signup_form').validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
        
        
            lname:{
                required:true,
                minlength:2
                
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:8,
                
                passwordRule:true

            },
            reenter:{
                required:true,
                minlength:8,
                equalTo:"#password"
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            Gender:{
                required:true
            }

        },
        messages:{
            password:{
                passwordRule:"password must contains one lowercase letter,one uppercase letter,one digit,one special character",
               
            },
            fname:{
                required:"Enter first name" 
            }
                
            }
        })
      
    )
    })


