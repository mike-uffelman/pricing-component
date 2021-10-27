

class Pricing {

    form = document.querySelector('form');
    slider = document.querySelector('#slider');
    priceDisplay = document.querySelector('#price__display--amount');
    pageViews = document.querySelector('.card--pageviews');
    billingSwitch = document.querySelector('input[type=checkbox]');
    option = document.getElementsByTagName('option')[this.slider.value]
    #discount = .75;

    constructor() {
        console.dir(Pricing)
        this._defaultSelection();
        this._rangeProgress();
        this.form.addEventListener('input', this._setSelection.bind(this));
        this.slider.addEventListener('input', this._rangeProgress);
        this.billingSwitch.addEventListener('click', this._toggleBilling);
       
    }

    //displays the pageviews and cost amount at the default on page load
    _defaultSelection() {
        this.priceDisplay.innerText = `$${Number(this.option.value)}.00`
        this.pageViews.innerText = `${this.option.label}`;
    }

    //sets the pageview and monthly cost based on the input range position, also applies the discount if the switch is toggled
    _setSelection() {
        const yearlyBilling = document.querySelector('#billing').checked;
        const sliderValue = this.slider.value;

        if(!sliderValue) return;

        const option = document.getElementsByTagName('option')[sliderValue]

        //set pageview text display based on option
        this.pageViews.innerText = `${option.label}`
    
        //if yearly billing checked apply discount otherwise disply full price
        //setting decimal toFixed(2) should discount result non-round values
        if(yearlyBilling) {
            this.priceDisplay.innerText = `$${(Number(option.value) * this.#discount).toFixed(2)}`
        } else {
            this.priceDisplay.innerText = `$${Number(option.value)}.00`
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

//calling a new instance of the Pricing component
const pricing = new Pricing();