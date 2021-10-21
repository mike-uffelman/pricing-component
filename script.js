const priceDisplay = document.querySelector('#price__display--amount');
const pageViews = document.querySelector('.card__header--pageviews');
const slider = document.querySelector('#slider');
const form = document.querySelector('form');

class Pricing {

    constructor() {
        this._defaultSelection();
        form.addEventListener('input', this._setSelection)
    }

    _defaultSelection() {
        const sliderValue = slider.value;

        // test attempt to create proximity snapping on the input
        // let sliderValue;

        // if(slider.value <= 100) {
        //     sliderValue = 0;
        // } else if(slider.value > 100 && slider.value <= 200) {
        //     sliderValue = 1;
        // } else if(slider.value > 200 && slider.value <= 300) {
        //     sliderValue = 2;
        // } else if(slider.value > 300 && slider.value <= 400) {
        //     sliderValue = 3;
        // } else if(slider.value > 400) {
        //     sliderValue = 4;
        // }


        const option = document.getElementsByTagName('option')[sliderValue]
        
        priceDisplay.innerText = `$${Number(option.value)}.00`
        pageViews.innerText = `${option.label}`;





    }

    _setSelection() {
        const yearlyBilling = document.querySelector('#billing').checked;
        const discount = .75;
        const sliderValue = slider.value;
        // let sliderValue;

        console.log(slider.value);

        if(!sliderValue) return;

        // if(slider.value <= 100) {
        //     sliderValue = 0;
        //     // document.getElementsByTagName('input[type=range]').value = 0;

        // } else if(slider.value > 100 && slider.value <= 200) {
        //     sliderValue = 1;
        // } else if(slider.value > 200 && slider.value <= 300) {
        //     sliderValue = 2;
        // } else if(slider.value > 300 && slider.value <= 400) {
        //     sliderValue = 3;
        // } else if(slider.value > 400) {
        //     sliderValue = 4;
        // }

        const option = document.getElementsByTagName('option')[sliderValue]

        //set pageview text display based on option
        pageViews.innerText = `${option.label}`
    
        //if yearly billing checked apply discount otherwise disply full price
        if(yearlyBilling === true) {
            priceDisplay.innerText = `$${Number(option.value) * discount}.00`
        } else {
            priceDisplay.innerText = `$${Number(option.value)}.00`
        }  
    }
}

const pricing = new Pricing();