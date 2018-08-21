import './scss/style.scss';
import { choiceZloty } from './js/choiceZloty';
import { choiceDolar } from './js/choiceDolar';


var array=[];

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('contents').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementById('load').style.visibility="hidden";
           document.getElementById('contents').style.visibility="visible";
        },1000);
    }
  }
  

fetch('https://api.coinmarketcap.com/v1/ticker/?convert=PLN&limit=10')
.then(resp=>resp.json())
.then(resp=>{
    resp.forEach(element => {
        if(element.id==='ethereum'){
            array.push(element.price_usd)
      document.querySelector('#ethPrice').innerHTML=`<b>ETH<b>: ${element.price_usd}$`;
        }else if(element.id==='bitcoin'){
            array.push(element.price_usd)
            document.querySelector('#btcPrice').innerHTML=`<b>BTC<b>: ${element.price_usd}$`;
        }else if(element.id==='litecoin'){
            array.push(element.price_usd)
            document.querySelector('#ltcPrice').innerHTML=`<b>LTC<b>: ${element.price_usd}$`;
        }
    });
})
setInterval(function(){
    fetch('https://api.coinmarketcap.com/v1/ticker/?convert=PLN&limit=10')
.then(resp=>resp.json())
.then(resp=>{
    resp.forEach(element => {
        if(element.id==='ethereum'){
            array[1]=element.price_usd
      document.querySelector('#ethPrice').innerHTML=`<b>ETH<b>: ${element.price_usd}$`;
        }else if(element.id==='bitcoin'){
            array[0]=element.price_usd
            document.querySelector('#btcPrice').innerHTML=`<b>BTC<b>: ${element.price_usd}$`;
        }else if(element.id==='litecoin'){
            array[2]=element.price_usd
            document.querySelector('#ltcPrice').innerHTML=`<b>LTC<b>: ${element.price_usd}$`;
        }
    });
})
}, 10000)

const ethImage=document.querySelector('#etherum');
const btcImage=document.querySelector('#bitcoin');
const ltcImage=document.querySelector('#litecoin');

const chooseInfoText=document.querySelector('#chooseInfoText')

const firstChoice=document.querySelector('.mainImageCurrency')
const secondChoice=document.querySelector('.nextCryptocurrency')

const zloty=document.querySelector('#zloty');
const dolar=document.querySelector('#dolar');

const removeHover=document.querySelector('.Hover')
const removeHover2=document.querySelector('.Hover2')

const buttonRefresh=document.querySelector('#buttonRefresh')

buttonRefresh.addEventListener('click', function(){
    buttonRefresh.setAttribute('style', 'animation: rotation 0.4s linear 1;');
    setTimeout(function(){
        buttonRefresh.setAttribute('style', 'animation: ')
    },1000)
    document.querySelector('.isVisible').style.display='none';
    secondChoice.style.display='none';
    chooseInfoText.innerHTML='Chcę wymienić:';
    firstChoice.style.display='flex';
    removeHover.classList.add('Hover');
    removeHover2.classList.add('Hover2');
    zloty.style.display='flex';
    dolar.style.display='flex';
    document.querySelector('#currencyValue').value='';
    document.querySelector('#currencyValue2').value='';
    
})

ethImage.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#infoCoin').innerHTML='(ETH)'
    firstChoice.style.display='none';
    secondChoice.style.display='flex';
    chooseInfoText.innerHTML='Chcę wymienić na:';
    document.querySelector('#currencyValue2').setAttribute('placeholder', 'wprowadź ilość ETH')
    zloty.addEventListener('click', function(){
        document.querySelector('#infoCurrency').innerHTML='(ZL)'
        choiceZloty(array[1]);
        dolar.style.display='none';
        removeHover.classList.remove('Hover');
        document.querySelector('#currencyValue').setAttribute('placeholder', 'wprowadź ilość PLN')
    })
    dolar.addEventListener('click', function(){
        document.querySelector('#infoCurrency').innerHTML='(USD)'
        choiceDolar(array[1])
        zloty.style.display='none';
        removeHover2.classList.remove('Hover2');
        document.querySelector('#currencyValue').setAttribute("placeholder", "wprowadź ilość $")
    })

})

btcImage.addEventListener('click', function(e){
    
    e.preventDefault();
    firstChoice.style.display='none';
    secondChoice.style.display='flex';
    chooseInfoText.innerHTML='Chcę wymienić na:';
    document.querySelector('#currencyValue2').setAttribute('placeholder', 'wprowadź ilość BTC');
    zloty.addEventListener('click', function(){
        document.querySelector('#infoCurrency').innerHTML='(ZL)'
        choiceZloty(array[0]);
        dolar.style.display='none';
        removeHover.classList.remove('Hover');
        document.querySelector('#currencyValue').setAttribute('placeholder', 'wprowadź ilość PLN')
    })
    dolar.addEventListener('click', function(){
        document.querySelector('#infoCurrency').innerHTML='(USD)'
        choiceDolar(array[0])
        zloty.style.display='none';
        removeHover2.classList.remove('Hover2');
        document.querySelector('#currencyValue').setAttribute("placeholder", "wprowadź ilość $")
    })
})

ltcImage.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#infoCoin').innerHTML='(LTC)'
    firstChoice.style.display='none';
    secondChoice.style.display='flex';
    chooseInfoText.innerHTML='Chcę wymienić na:';
    document.querySelector('#currencyValue2').setAttribute('placeholder', 'wprowadź ilość LTC');
    zloty.addEventListener('click', function(){
        document.querySelector('#infoCurrency').innerHTML='(ZL)'
        choiceZloty(array[2]);
        dolar.style.display='none';
        removeHover.classList.remove('Hover');
        document.querySelector('#currencyValue').setAttribute('placeholder', 'wprowadź ilość PLN')
    })
    dolar.addEventListener('click', function(){
        document.querySelector('#infoCurrency').innerHTML='(USD)'
        choiceDolar(array[2])
        zloty.style.display='none';
        removeHover2.classList.remove('Hover2');
        document.querySelector('#currencyValue').setAttribute("placeholder", "wprowadź ilość $")
    })
})
