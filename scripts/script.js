function sendMail(){
   
    let params = {email_id : document.getElementById('email').value};
    emailjs.send("service_fdwk1oy","template_kxcd0ek",params).then((res) => {
        console.log(res.status)
    })
}