const Loginform=document.querySelector('.Loginform')
const Mainbutton=document.querySelector('.Mainbutton')
const Registerform=document.querySelector('.Registerform')
const Registerbtn=document.querySelector('.Registerbtn')
Mainbutton.addEventListener('click',()=>{
    Loginform.classList.add('Loginform-box')
})
Registerbtn.addEventListener('click',()=>{
    Loginform.classList.remove('Loginform-box')
    Registerform.classList.add('Registerform-box')


})