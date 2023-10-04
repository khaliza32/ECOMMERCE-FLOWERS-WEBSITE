let menu =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navlist');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
// ----------------------------------------------------------
let scrollbuttonTop=document.getElementById('btntop');


window.onscroll=function(){
    if(scrollY> 400)
    {
        scrollbuttonTop.style.display='block';
    }
    else{
        scrollbuttonTop.style.display='none';
    }
}