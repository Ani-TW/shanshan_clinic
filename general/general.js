//漢堡打開的JS



function burgerList(){
    let burger = document.querySelector('#burger')
    let nav = document.querySelector('nav')
    
    burger.addEventListener('click',function(e){
        nav.classList.toggle('show')
    }) 

    let wrapper = document.querySelector('.wrapper')

    wrapper.addEventListener('click',()=>{
        nav.classList.remove('show')
    })
}
    
window.addEventListener('load',burgerList)