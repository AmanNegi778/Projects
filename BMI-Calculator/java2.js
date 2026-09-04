const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const weight = parseInt(document.querySelector('#weight').value)
    const height = parseInt(document.querySelector('#height').value)

    const result = document.querySelector('#result')

    if (isNaN(height) || height <= 0) {
        result.innerHTML = 'Please give a valid height'
    }
    else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = 'Please give a valid weight'
    }
    else {
        const BMI = ((weight / (height * height)) * 10000).toFixed(2)
        result.innerHTML = `Your BMI: ${BMI}`
    }
})