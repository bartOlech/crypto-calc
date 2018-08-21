import { choiceZloty } from 'choiceZloty';
import { choiceDolar } from 'choiceDolar';

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


let currentValue=0;

export const choiceBtc=()=>{
    btcImage.addEventListener('click', function(e){
        e.preventDefault();
        firstChoice.style.display='none';
        secondChoice.style.display='flex';
        chooseInfoText.innerHTML='Chcę wymienić na:';
        zloty.addEventListener('click', function(){
            choiceZloty();
            dolar.style.display='none';
            removeHover.classList.remove('Hover');
            document.querySelector('#currencyValue').setAttribute('placeholder', 'wprowadź ilość PLN')
        })
        dolar.addEventListener('click', function(){
            choiceDolar()
            zloty.style.display='none';
            removeHover2.classList.remove('Hover2');
            document.querySelector('#currencyValue').setAttribute("placeholder", "wprowadź ilość $")
        })
    })
}