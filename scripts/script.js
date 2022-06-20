const emailContent = document.querySelector('.email-content');

function sendMail(){
      
    if(emailValid(document.getElementById('email').value)){
      let params = {email_id : document.getElementById('email').value};
      emailjs.send("service_fdwk1oy","template_kxcd0ek",params).then((res) => {
      console.log(res.status);
      emailContent.innerHTML = `<h3 class="title">Thanks For Subscribing</h3>`;
    })
    }
    else{
      alert('Please type a valid email address!')
    }
    
}  

function emailValid(email){
  let pattern=/^\w+@[a-z]+\.([a-z]{2,3})$/
   // return email.match(pattern) ? true:false
   return pattern.test(email)
}

let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.unit');

for(let i=0; i<list.length; i++){
list[i].addEventListener('click', function(){
  for(let j = 0; j < list.length; j++){
    list[j].classList.remove('active');
  }
  this.classList.add('active');

  let dataFilter = this.getAttribute('data-filter');

  for( let k = 0; k<itemBox.length; k++){
    itemBox[k].classList.remove('active');
    itemBox[k].classList.add('hide')

    if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
      itemBox[k].classList.remove('hide');
      itemBox[k].classList.add('active');
    }
  }
})
}