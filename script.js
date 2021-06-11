$(document).ready(function(){
    $("#contact-form").validate({
        
        rules:{
            name:{
                required:true,
                minlength:4
            },
            place:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            mobilenum:{
                required:true,
                minlength:10
            },
            message:{
                required:true,
                minlength:10
            }
    
        },
        messages:{
            mobilenum:{
                minlength:"enter a valid number"
                
            }
        },

    })
    

    

    $("#contact-form").submit((e)=>{
        e.preventDefault()
       
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwpc2tfmDRo5QHce3JB6EME09CKjzz6m-nH_yHUotEV4R4B-Cq7aJzmxFWcEWvuuiK5Ug/exec",
            data:$("#contact-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")
  
            }
        })
    
    })


})