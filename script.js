const priceDisplay = document.querySelector('#price-display');
const pageViews = document.querySelector('.card__header--pageviews');
const slider = document.querySelector('#slider');
const form = document.querySelector('form');
const dataListLabel = document.querySelector('#pageviews');

pageViews.innerText = 'hi';
// priceDisplay = 



class App {

    constructor() {
    form.addEventListener('input', this.setSelection)

    }

    setSelection() {
        const yearlyBilling = document.querySelector('#billing').checked;
        const discount = .75;
        const sliderValue = slider.value;
        
        if(!sliderValue) return;
        
        const option = document.getElementsByTagName('option')[sliderValue]
    
        //set pageview text display based on option
        pageViews.innerText = `${option.label}`
    
        //if yearly billing checked apply discount otherwise disply full price
        if(yearlyBilling === true) {
            priceDisplay.innerText = `$ ${Number(option.value) * discount}.00/month`
        } else {
            priceDisplay.innerText = `$ ${Number(option.value)}.00/month`
        }  
    }
    
    
    
    
    

}

const app = new App();