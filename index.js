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



//----------------------------------------------------------------

function cardChange(){
     let manberCards = document.querySelectorAll('.manberCard')
     const cardCount = manberCards.length //名片的張數

     let rightBtn = document.querySelector('.rightbtn')
     let leftBtn = document.querySelector('.leftbtn')

     // let cardWindow = document.querySelector('.cardWindow')
     let manberList = document.querySelector('.manberCardsTotal')
     let cardCurrent = 1 //名片流動紀錄起始  
     
     //按鈕狀態
     function updateBtn(){
          //第一張時右按鈕失效
          if(cardCurrent === 1){
               rightBtn.classList.add('btnHide')
          }else{
               rightBtn.classList.remove('btnHide')
          }

          //第六張時左按鈕失效
          if(cardCurrent === cardCount){
               leftBtn.classList.add('btnHide')
          }else{
               leftBtn.classList.remove('btnHide')
          }
     }
     

     //名片更新
     function updateCards(){
          let width = document.querySelector('.manberCard').getBoundingClientRect().width
          let translateX = - (cardCurrent -1 ) * width
          manberList.style.transform = `translateX(${translateX}px)`
     }

     //初始化
     updateBtn()
     updateCards()
     

     //按鈕監聽
     leftBtn.addEventListener('click', function(){
     if(cardCurrent < cardCount){
          cardCurrent++
          updateCards()
          updateBtn()
     }    
     })

     rightBtn.addEventListener('click', function(){
          if(cardCurrent > 1 ){
          cardCurrent--
          updateCards()
          updateBtn()
          }
     }) 
     

}


function envirPhotoChange(){
     let eniLeftBtn = document.querySelector('.eniLeftBtn')
     let eniRightBtn = document.querySelector('.eniRightBtn')

     const eniPhotos = document.querySelectorAll('.environmentWindow ul li') //取li陣列 看有幾張圖
     
     let eniUl = document.querySelector('.environmentWindow ul')
     let gap = window.getComputedStyle(eniUl).gap  //取ul的gap值: 24px 有單位
     let gapValue = parseInt(gap)
     

     let photoCurrent = 1 
     //左右按鈕顯示控制
     function updateEnBtn (){
          //右按鈕控制
          if( photoCurrent === 1){
               eniRightBtn.classList.add('btnHide')
          }else{
               eniRightBtn.classList.remove('btnHide')
          }

          let windowWidth = window.innerWidth
          const maxIndex = (windowWidth>820)?eniPhotos.length - 3:eniPhotos.length - 1;  //判斷按鈕可以要扣多少次用三元運算子 不要用再if else
          //左按鈕控制
          if( photoCurrent === maxIndex ){
               eniLeftBtn.classList.add('btnHide')
          }else{
               eniLeftBtn.classList.remove('btnHide')
          }
     }

     //環境照片左右位置
     function updatePhoto(){
          let photoWidth = document.querySelector('.environmentWindow ul li').getBoundingClientRect().width  //取li的寬度
          let translateX = - (photoWidth + gapValue) * (photoCurrent-1)
          eniUl.style.transform = `translateX(${translateX}px)`
     }

     //初始化
     // updateEnBtn()
     // updatePhoto()

     //按鈕監聽
     eniLeftBtn.addEventListener('click', function(){
          if( photoCurrent < eniPhotos.length ){
               photoCurrent++
               updatePhoto()
               updateEnBtn()
          }
     })

     eniRightBtn.addEventListener('click', function(){
          if(photoCurrent > 1){
               photoCurrent--
               updatePhoto() 
               updateEnBtn()
          }
     })
}


// 縮放視窗時要重新抓取
window.addEventListener('resize', function(){
     cardChange()
     envirPhotoChange()
})




window.addEventListener('load',function(){
     burgerList()
     cardChange()
     envirPhotoChange()
})