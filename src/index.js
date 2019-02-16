import './scss/style.scss';
import { choiceZloty } from './js/choiceZloty';
import { choiceDolar } from './js/choiceDolar';


var array = [];

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('contents').style.visibility = "hidden";
    } else if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('interactive');
            document.getElementById('load').style.visibility = "hidden";
            document.getElementById('contents').style.visibility = "visible";
        }, 1000);
    }
}


fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
    .then(resp => resp.json())
    .then(resp => {
        const BTC = JSON.stringify(resp.BTC.USD)
        const ETH = JSON.stringify(resp.ETH.USD)
        const LTC = JSON.stringify(resp.LTC.USD)


        array.push(BTC)
        document.querySelector('#btcPrice').innerHTML = `<b>BTC<b>: ${BTC}$`;

        array.push(ETH)
        document.querySelector('#ethPrice').innerHTML = `<b>ETH<b>: ${ETH}$`;

        array.push(LTC)
        document.querySelector('#ltcPrice').innerHTML = `<b>LTC<b>: ${LTC}$`;

        console.log(BTC, LTC, ETH)
    }).catch(err => console.log(err))
setInterval(function () {
    fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
        .then(resp => resp.json())
        .then(resp => {

            const BTC = JSON.stringify(resp.BTC.USD)
            const ETH = JSON.stringify(resp.ETH.USD)
            const LTC = JSON.stringify(resp.LTC.USD)

            array[1] = ETH
            document.querySelector('#ethPrice').innerHTML = `<b>ETH<b>: ${ETH}$`;

            array[0] = BTC
            document.querySelector('#btcPrice').innerHTML = `<b>BTC<b>: ${BTC}$`;

            array[2] = LTC
            document.querySelector('#ltcPrice').innerHTML = `<b>LTC<b>: ${LTC}$`;

            console.log(BTC, LTC, ETH)
        }).catch(err => console.log(err))
}, 30000) 

const ethImage = document.querySelector('#etherum');
const btcImage = document.querySelector('#bitcoin');
const ltcImage = document.querySelector('#litecoin');

const chooseInfoText = document.querySelector('#chooseInfoText')

const firstChoice = document.querySelector('.mainImageCurrency')
const secondChoice = document.querySelector('.nextCryptocurrency')

const zloty = document.querySelector('#zloty');
const dolar = document.querySelector('#dolar');

const removeHover = document.querySelector('.Hover')
const removeHover2 = document.querySelector('.Hover2')

const buttonRefresh = document.querySelector('#buttonRefresh')

buttonRefresh.addEventListener('click', function () {
    buttonRefresh.setAttribute('style', 'animation: rotation 0.4s linear 1;');
    setTimeout(function () {
        buttonRefresh.setAttribute('style', 'animation: ')
    }, 1000)
    document.querySelector('.isVisible').style.display = 'none';
    secondChoice.style.display = 'none';
    chooseInfoText.innerHTML = 'Chcę wymienić:';
    firstChoice.style.display = 'flex';
    removeHover.classList.add('Hover');
    removeHover2.classList.add('Hover2');
    zloty.style.display = 'flex';
    dolar.style.display = 'flex';
    document.querySelector('#currencyValue').value = '';
    document.querySelector('#currencyValue2').value = '';

})

ethImage.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#infoCoin').innerHTML = '(ETH)&nbsp;&nbsp;'
    firstChoice.style.display = 'none';
    secondChoice.style.display = 'flex';
    chooseInfoText.innerHTML = 'Chcę wymienić na:';
    document.querySelector('#currencyValue2').setAttribute('placeholder', 'Wprowadź ilość ETH')
    zloty.addEventListener('click', function () {
        document.querySelector('#infoCurrency').innerHTML = '(ZL)&nbsp;&nbsp;&nbsp;'
        choiceZloty(array[1]);
        dolar.style.display = 'none';
        removeHover.classList.remove('Hover');
        document.querySelector('#currencyValue').setAttribute('placeholder', 'Wprowadź ilość PLN')
    })
    dolar.addEventListener('click', function () {
        document.querySelector('#infoCurrency').innerHTML = '(USD)'
        choiceDolar(array[1])
        zloty.style.display = 'none';
        removeHover2.classList.remove('Hover2');
        document.querySelector('#currencyValue').setAttribute("placeholder", "Wprowadź ilość $")
    })

})

btcImage.addEventListener('click', function (e) {
    document.querySelector('#infoCoin').innerHTML = '(BTC)&nbsp; &nbsp;'
    e.preventDefault();
    firstChoice.style.display = 'none';
    secondChoice.style.display = 'flex';
    chooseInfoText.innerHTML = 'Chcę wymienić na:';
    document.querySelector('#currencyValue2').setAttribute('placeholder', 'Wprowadź ilość BTC');
    zloty.addEventListener('click', function () {
        document.querySelector('#infoCurrency').innerHTML = '(ZL)&nbsp;&nbsp;&nbsp;&nbsp;'
        choiceZloty(array[0]);
        dolar.style.display = 'none';
        removeHover.classList.remove('Hover');
        document.querySelector('#currencyValue').setAttribute('placeholder', 'Wprowadź ilość PLN')
    })
    dolar.addEventListener('click', function () {
        document.querySelector('#infoCurrency').innerHTML = '(USD)&nbsp;'
        choiceDolar(array[0])
        zloty.style.display = 'none';
        removeHover2.classList.remove('Hover2');
        document.querySelector('#currencyValue').setAttribute("placeholder", "Wprowadź ilość $")
    })
})

ltcImage.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#infoCoin').innerHTML = '(LTC)&nbsp; &nbsp;'
    firstChoice.style.display = 'none';
    secondChoice.style.display = 'flex';
    chooseInfoText.innerHTML = 'Chcę wymienić na:';
    document.querySelector('#currencyValue2').setAttribute('placeholder', 'Wprowadź ilość LTC');
    zloty.addEventListener('click', function () {
        document.querySelector('#infoCurrency').innerHTML = '(ZL)&nbsp;&nbsp;&nbsp;'
        choiceZloty(array[2]);
        dolar.style.display = 'none';
        removeHover.classList.remove('Hover');
        document.querySelector('#currencyValue').setAttribute('placeholder', 'Wprowadź ilość PLN')
    })
    dolar.addEventListener('click', function () {
        document.querySelector('#infoCurrency').innerHTML = '(USD)'
        choiceDolar(array[2])
        zloty.style.display = 'none';
        removeHover2.classList.remove('Hover2');
        document.querySelector('#currencyValue').setAttribute("placeholder", "Wprowadź ilość $")
    })
})
