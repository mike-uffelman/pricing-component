const priceDisplay = document.querySelector('#price__display--amount');
const pageViews = document.querySelector('.card--pageviews');
const slider = document.querySelector('#slider');
const form = document.querySelector('form');
const billingSwitch = document.querySelector('input[type=checkbox]');


class Pricing {
    #discount = .75;

    constructor() {
        this._defaultSelection();
        this._rangeProgress();
        form.addEventListener('input', this._setSelection.bind(this));
        slider.addEventListener('input', this._rangeProgress);
        billingSwitch.addEventListener('click', this._toggleBilling);
    }

    //displays the pageviews and cost amount at the default on page load
    _defaultSelection() {
        const sliderValue = slider.value;
        const option = document.getElementsByTagName('option')[sliderValue]
        
        priceDisplay.innerText = `$${Number(option.value)}.00`
        pageViews.innerText = `${option.label}`;
    }

    //sets the pageview and monthly cost based on the input range position, also applies the discount if the switch is toggled
    _setSelection() {
        const yearlyBilling = document.querySelector('#billing').checked;
        const sliderValue = slider.value;

        if(!sliderValue) return;

        const option = document.getElementsByTagName('option')[sliderValue]

        //set pageview text display based on option
        pageViews.innerText = `${option.label}`
    
        //if yearly billing checked apply discount otherwise disply full price
        if(yearlyBilling === true) {
            priceDisplay.innerText = `$${Number(option.value) * this.#discount}.00`
        } else {
            priceDisplay.innerText = `$${Number(option.value)}.00`
        }  
    }

    //adds progress background color to the range track
    _rangeProgress() {
        const progressColor = getComputedStyle(document.body).getPropertyValue('--soft-cyan');

        slider.style.background = `linear-gradient(to right, ${progressColor} ${slider.value * 25}%, ${progressColor} ${slider.value * 25}%, var(--light-grayish-blue-slider) ${slider.value *25 }%)`
    }

    //add text color to the billing timing based on the switch toggle
    _toggleBilling() {
            document.querySelector('.yearly').classList.toggle('selected');
            document.querySelector('.monthly').classList.toggle('selected');
    }
    


}

//executes the Pricing class
const pricing = new Pricing();

