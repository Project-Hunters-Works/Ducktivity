const aboutContact = document.getElementById('about-contact');
const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(emailValid(document.getElementById('email').value)){
    let params = {
      email_id : document.getElementById('email').value,
      message : document.getElementById('comment').value,
      from_name : document.getElementById('name').value
  };
    emailjs.send("service_fdwk1oy","template_7pl07er",params).then((res) => {
    console.log(res.status);
    aboutContact.innerHTML = `<h3 class="about-feedback ff" style="text-align:center;">Thank you for your feedback<h3>`
  })
  }
  else{
    alert('Please type a valid email address!')
  }  

})

function emailValid(email){
  let pattern=/^\w+@[a-z]+\.([a-z]{2,3})$/
   // return email.match(pattern) ? true:false
   return pattern.test(email)
}

const yearDate=document.querySelector(".yearDate");
yearDate.innerHTML=" " + new Date().getFullYear()