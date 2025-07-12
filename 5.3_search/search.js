//漢堡打開的JS
function burgerList(){
           let burger = document.querySelector('#burger')
           let nav = document.querySelector('nav')
           let mask = document.querySelector('#mask')
           
           burger.addEventListener('click',function(){
                nav.classList.toggle('show')
                mask.classList.toggle('mask')

           })
           
           //nav左邊的遮罩 避免按到後面的連結
            mask.addEventListener('click',()=>{
                nav.classList.remove('show')
                mask.classList.remove('mask')
           })

        }



//各欄位監控
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


//檢查身分證格式 查正規表示法
function idCorrect(){
     document.querySelector('#childid').addEventListener('blur',function(){
          const childId = document.querySelector('#childid').value
          const remind = document.querySelector('#remind')
          
          const regex = /^[A-Z][12][0-9]{8}$/
          let remindText = ''
          if( !regex.test(childId) ){
          remind.innerText = `身分證格式不正確`
          remind.style.color = 'red'
          remind.style.fontSize = '18px'
          document.querySelector('#childid').classList.add('error')
          }else{
          remind.innerText = ''
          document.querySelector('#childid').classList.remove('error')
          }
     })            
}


//送出前檢查
function submitChecked(){
     const btn = document.querySelector('#btn')
     btn.addEventListener('click' , function(e){
          
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


          //提醒身分證不正確
          const childId = document.querySelector('#childid').value
          const regex = /^[A-Z][12][0-9]{8}$/
          if( !regex.test(childId) ){
          e.preventDefault(); //預防跳轉
          alert(`請確認身分證資訊格式`)
          }else{                       
               //確認input欄都有填入資料  
               const inputs = document.querySelectorAll('input')
               //預設都有填
               let innerChecked = true
               inputs.forEach( input => {
                    if( input.value ===''){
                         innerChecked = false
                    }
               }) 


               if(innerChecked === false){
                    alert(`請檢查所有欄位`) 
                    e.preventDefault(); //預防跳轉
               }else{
                    alert(`查詢成功`) 
               }
          }          
     })
}



window.addEventListener('load',function(){
     burgerList()
     inputCheck ()
     idCorrect()
     submitChecked()
})