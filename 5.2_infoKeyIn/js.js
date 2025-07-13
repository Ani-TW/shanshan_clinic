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
               function inputLight(){
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
               
          }