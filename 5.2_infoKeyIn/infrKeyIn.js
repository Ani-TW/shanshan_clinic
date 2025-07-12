//漢堡打開的JS
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

        


//各欄位填寫監控
function inputCheck (){
     const inputs = document.querySelectorAll('input')          
     inputs.forEach( input => {
          input.classList.remove('error')
          input.addEventListener('blur', function(){
               // input.classList.remove('error')
               if( input.value === ''){
               input.classList.add('error')
               }else{
               input.classList.remove('error')
               }                   
          })
     })  
}

//兩欄身分證監控
function idChecked(){
     const idNums = document.querySelectorAll('.idNum')

     idNums.forEach( idNum => {
          idNum.addEventListener( 'blur', function(){
               const childId = document.querySelector('#childid').value
               const remind1 = document.querySelector('#remind1')
               const childidcheck =document.querySelector('#childidcheck').value
               if( childId != childidcheck){
                    remind1.innerText = `兩次身分證輸入不相同`
                    remind1.style.color = 'red'
                    remind1.style.fontSize = '18px'
                    document.querySelector('#childid').classList.add('error')
                    document.querySelector('#childidcheck').classList.add('error')
               }else{
                    remind1.innerText=""
                    document.querySelector('#childid').classList.remove('error')
                    document.querySelector('#childidcheck').classList.remove('error')
               }

               idCorrect()         

               })
          })
}


//檢查身分證格式 查正規表示法
function idCorrect(){
     const childId = document.querySelector('#childid').value
     const childidcheck =document.querySelector('#childidcheck').value
     const remind = document.querySelector('#remind')
     
     const regex = /^[A-Z][12][0-9]{8}$/
     let remindText = ''
     if( !regex.test(childId) ){
          remind.innerText = `身分證格式不正確`
          remind.style.color = 'red'
          remind.style.fontSize = '18px'
          // document.querySelector('#childid').style.border = `1px solid red`
          // document.querySelector('#childidcheck').style.border = `1px solid red`
     }else{
          remind.innerText = ''
     }
}


//複選欄位監控
function checkBoxChecked(){
     const checkBoxes = document.querySelectorAll('input[type="checkbox"]')
     const remind3 = document.querySelector('#remind3')
     
     checkBoxes.forEach( checkBox => {
          //給每個勾選註冊事件聆聽
          checkBox.addEventListener('change', function(){
               //預設一個空字串  等等逐一填入truefalse
               let checkList = ''
               //每一次change 就重頭搜索每一個checkbox的勾選狀態 並把回傳直串成字串 
               checkBoxes.forEach(checkBox => {
               checkList += checkBox.checked
               // console.log(checkList)
               })
               //預設都沒有選
               let checked = false
               if( checkList.includes('true')){
               checked = true
               remind3.innerText = ``
               }

               if(checked === false){
               remind3.innerText = `請至少勾選一項`
               remind3.style.color = 'red'
               }

          })
     })
}




//送出資料前監控
function submitChecked(){
     const btn = document.querySelector('#btn')
     btn.addEventListener('click' , function(e){
          
          //提醒身分證要一樣
          const childId = document.querySelector('#childid').value
          const childidcheck =document.querySelector('#childidcheck').value
          if( childId != childidcheck ){
               e.preventDefault(); //預防跳轉
               alert(`請確認孩童身分證資訊`)
          }else if( childId === childidcheck){   //身分證訊息正確才往下走
               
               //確認text欄都有填入資料  
               const textes = document.querySelectorAll('input[type="text"]')
               //預設都有填
               let innerChecked = true
               textes.forEach( text => {
               if( text.value ===''){
                    innerChecked = false
               }
               }) 


               //確認checkbox有沒有勾
               const checkBoxes = document.querySelectorAll('input[type="checkbox"]')
               //預設都沒勾
               let checked = false
               checkBoxes.forEach( checkBox =>{
               if( checkBox.checked){
                    checked = true
               }
               })

               if(checked == false || innerChecked == false){
               alert(`請檢查所有欄位`) 
               e.preventDefault(); //預防跳轉
               }else{
               alert(`預約成功`) 
               }

               //將沒輸入的欄位框紅
               const inputs = document.querySelectorAll('input')          
               inputs.forEach( input => {
               // input.classList.remove('error')
               if( input.value === ''){
                    input.classList.add('error')
               }else{
                    input.classList.remove('error')
               }                   
               
               })
          }
          
     })
}        



window.addEventListener('load', function(){
     burgerList()   
     inputCheck()
     idChecked()
     checkBoxChecked()
     submitChecked()
    });