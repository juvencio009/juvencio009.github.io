//alert('Seja bem vindo ao meu site')


let button = document.getElementById('button')
  let body =  document.querySelector('body')
button.addEventListener('click', ()=>{
   button.classList.toggle('dark')
   body.classList.toggle('dark')
})