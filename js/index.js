console.log("poop");

function buttonPress() {
    console.log("poop");
    document.getElementById('btnInstructor').style.display = "block";

}


$(document).ready(function () {
    $('.submit').click(function(event){

        var email = $('.email').val()
        var name = $('.name').val()
        var topic = $('.topic').val()
        var message = $('.message').val()
        var status = $('.status')
        status.empty()

        console.log('form button clicked', email, name, message, topic);

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            status.append('<div>email is valid</div>')       
        }else{
            status.append('<div>email is not valid</div>')
            event.preventDefault();        
        }

        if(message.length < 20){
            status.append('<div>message must be longer than 20 characters</div>') 
            event.preventDefault();         }else{      
        }
    })
})