//漢堡打開的JS



function burgerList(){
    let burger = document.querySelector('#burger')
    let nav = document.querySelector('nav')
    
    //漢堡開關
    burger.addEventListener('click',function(e){
        nav.classList.toggle('show')
    }) 

    //nav左邊的遮罩 避免按到後面的連結
    mask.addEventListener('click',()=>{
        nav.classList.remove('show')
        mask.classList.remove('mask')
    })
}
    
window.addEventListener('load',burgerList)