// script.js
function SendMail(){
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email_id").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_9s3aq0a","template_9yq5mhr", params).then(function (res){
        alert("Success!" + res.status);
    })
}