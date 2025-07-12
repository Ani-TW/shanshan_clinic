//漢堡
function burgerList(){
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



//取消返回上面按鈕的網頁歷史紀錄 + 平滑滾動
    
    function scrollSet(){
        document.querySelector('#topBtn').addEventListener('click' , function(e){
            e.preventDefault()  //阻止a連結跳轉
            document.querySelector('#backtotop').scrollIntoView({behavior: 'smooth'}) //平滑滾動過去
    })
    }
    



    function backToTop(){
        //返回上面的按鈕位置和顯示
        window.addEventListener('scroll',function(){
            let winHeight = window.innerHeight
            let scrollTop = document.documentElement.scrollTop  //滾動出去的高度
            // console.log(winHeight)
            // console.log(scrollTop)

            // 設定按鈕的位置
            let wrapperRight = document.querySelector('.wrapper').getBoundingClientRect().right
            let topBtn = document.querySelector('#topBtn')
            let topBtnWidth = topBtn.getBoundingClientRect().width
            // console.log(wrapperRight)
            // console.log(topBtnWidth)

            topBtn.style.left = (wrapperRight - topBtnWidth) +'px'  //設定css屬性有單位的要記得加ˋˊ
            topBtn.style.bottom = (winHeight * 0.1 ) + 'px'


            //控制按鈕顯示
            if( scrollTop > winHeight /3){
                document.querySelector('#topBtn').classList.add('btnShow')
            }else if( scrollTop < winHeight /3 ){ 
                document.querySelector('#topBtn').classList.remove('btnShow')
            }
        })
    }
    


    window.addEventListener('load', function(){
        burgerList()
        backToTop()
        scrollSet()
    })