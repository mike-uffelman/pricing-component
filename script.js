// const priceDisplay = document.querySelector('#price-display');
// const slider = document.querySelector('#slider');
// const form = document.querySelector('form');

// slider.addEventListener('change', () => {
//     console.log(slider.value)
    
    
//     priceDisplay.innerText = `$${slider.value}.00/month`;

// })

const priceThumb = document.querySelector('.input__range--thumb');

priceThumb.oninput = () => {
    console.log('inputting...')
}

console.log(priceThumb.ondragleave)