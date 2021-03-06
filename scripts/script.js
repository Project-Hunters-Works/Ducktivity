(function(){
  emailjs.init("Z844fqXrk150a8kgu");
})();

const emailContent = document.querySelector('.email-content');
const form = document.querySelector('.form');
function sendMail(){
    if(emailValid(document.getElementById('email').value)){
      let params = {email_id : document.getElementById('email').value};
      emailjs.send("service_fdwk1oy","template_kxcd0ek",params).then((res) => {
      console.log(res.status);
      emailContent.innerHTML = `<h3 class="title ff" >Thanks For Subscribing</h3>`;
    })
    }
    else{
      alert('Please type a valid email address!')
    }  
}  

form.addEventListener('submit', (e)=>{
  e.preventDefault();
})

function emailValid(email){
  let pattern=/^[\w]+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
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

const grid = document.querySelector('.grid');

window.addEventListener('resize', ()=>{
  if(window.innerWidth < 1300) {
    grid.setAttribute('id','scroll')
  }
})

if(window.innerWidth < 1300) {
  grid.setAttribute('id','scroll')
}

const yearDate=document.querySelector(".yearDate");

yearDate.innerHTML=" " + new Date().getFullYear()