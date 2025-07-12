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


//動態生成每個essay的data-item
function articleDataItem(){
    const essays = document.querySelectorAll('.essay') //包含所有essay的陣列
    
    essays.forEach( function(essay){     
        //取出個別essay的span
        let essayTag = ''
        //取得包含所有span的陣列 
        const spanAll = essay.querySelectorAll('span') 
        //把每個span的文字串接
        spanAll.forEach( span => {    
            essayTag =  essayTag + ' ' +span.innerText 
        })
        //串接好的文字塞到essay標籤的data-item
        essay.setAttribute('data-item', essayTag)  
    } )
}



//input勾勾監聽設置
function inputCheckBoxListener(){
    //取得包含所有input的陣列
    const checkBoxAll = document.querySelectorAll('input[type="checkbox"]')
    //逐一給每個input註冊事件聆聽功能
    checkBoxAll.forEach(checkBox =>{
        checkBox.addEventListener('change' , choiceArticle )  //checkbox有改變就呼叫文章篩選
    })

}



//篩選文章函式
function choiceArticle(){        //確認選擇的input 和文章dataitem有沒有配對
    //取得包含所有input的陣列 及 所有class='essay'的陣列
    const checkBoxAll = document.querySelectorAll('input[type="checkbox"]')
    const essays = document.querySelectorAll('.essay') 

    let choiceTag = []
    //逐一取個input(checkbox) 有被選取時, 將它的data-item寫入choiceTag陣列中
    checkBoxAll.forEach( checkBox => {
        if( checkBox.checked){
            const tag = checkBox.getAttribute('data-item')
            choiceTag.push(tag)
        }
    })

    //如果choiceTag陣列沒東西 就是使用者沒點 就要顯示全部的文章
    if(choiceTag.length === 0){
        essays.forEach(essay => {
            essay.style.display = 'block'
        })
        return   //這個return用途是: 既然沒點就直接結束 不用往下跑~
    }

    //當choiceTag長度>0時進入這個迴圈  
    essays.forEach(essay => {
        //提取每個文章連結的data-item
        let essayTag = essay.getAttribute('data-item')

        //和choiceTag的值配對 只要有一個索引有配對到就顯示並結束
        for( const cTag of choiceTag  ){
            if( essayTag.includes(cTag)){
                essay.style.display = 'block'
                break
            }else{
                essay.style.display = 'none'
            }
        }    

    })

}


window.addEventListener('load',function(){
    burgerList()
    backToTop()
    scrollSet()
    articleDataItem()
    inputCheckBoxListener()
})
    