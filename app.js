let toggle = document.querySelector('.ham');
toggle.addEventListener('click',function(){
   document.querySelector('.nav-menu').style.display='block';
   document.querySelector('.cancel').style.display='block';
   this.style.display='none';
})
let closebtn = document.querySelector('.cancel');
    closebtn.addEventListener('click',function(){
   document.querySelector('.nav-menu').style.display='none';
   document.querySelector('.ham').style.display='block';
   this.style.display='none';
}) 