const isVisible=document.querySelector('.isVisible')
const input1=document.querySelector('#currencyValue')
const input2=document.querySelector('#currencyValue2')
const inputButton=document.querySelector('#inputButton')
let fieldNumber
input1.addEventListener('change', function(){
    fieldNumber=1
})
input2.addEventListener('change', function(){
    fieldNumber=2
})

export const choiceDolar=(Cvalue)=>{
    isVisible.style.display='inline';
    inputButton.addEventListener('click', function(e){
        e.preventDefault()
        let dolar=input1.value;
        let crypto=input2.value;
        if(fieldNumber==2){
            input1.value=Math.round((crypto*Cvalue) * 100) / 100
        }else if(fieldNumber==1){
            input2.value=Math.round((dolar/Cvalue )* 1000) / 1000
        }
        
    })
 }