function dofirst(){
           let burger = document.querySelector('#burger')
           let nav = document.querySelector('nav')
           let mask = document.querySelector('#mask')
           
           burger.addEventListener('click',function(e){
                nav.classList.toggle('show')
                mask.classList.toggle('mask')

           })
           
           //nav左邊的遮罩 避免按到後面的連結
            mask.addEventListener('click',()=>{
                nav.classList.remove('show')
                mask.classList.remove('mask')
           })

        }

        
window.addEventListener('load',dofirst)