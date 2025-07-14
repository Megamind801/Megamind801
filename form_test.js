document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    // Create error message elements
    function showError(input, message) {
        let error = input.parentNode.querySelector('.error-message');
        if (!error) {
            error = document.createElement('div');
            error.className = 'error-message';
            input.parentNode.insertBefore(error, input.nextSibling);
        }
        error.textContent = message;
        error.style.display = 'block';
    }
    function clearError(input) {
        let error = input.parentNode.querySelector('.error-message');
        if (error) error.style.display = 'none';
    }
    form.addEventListener('submit', function (e) {
        let valid = true;
        // Name validation
        const name = form.querySelector('#full-name');
        if (!name.value.trim()) {
            showError(name, 'Name is required.');
            valid = false;
        } else {
            clearError(name);
        }
        // Email validation
        const email = form.querySelector('#email');
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!email.value.trim()) {
            showError(email, 'Email is required.');
            valid = false;
        } else if (!emailPattern.test(email.value.trim())) {
            showError(email, 'Enter a valid email address.');
            valid = false;
        } else {
            clearError(email);
        }
        // Age validation (optional, but if present must be between 3 and 100)
        const age = form.querySelector('#age');
        if (age.value) {
            const ageVal = parseInt(age.value, 10);
            if (isNaN(ageVal) || ageVal < 3 || ageVal > 100) {
                showError(age, 'Age must be between 3 and 100.');
                valid = false;
            } else {
                clearError(age);
            }
        } else {
            clearError(age);
        }
        // Radio validation (hotel-stay)
        const radios = form.querySelectorAll('input[name="hotel-stay"]');
        let radioChecked = false;
        radios.forEach(radio => { if (radio.checked) radioChecked = true; });
        if (!radioChecked) {
            showError(radios[0], 'Please select Yes or No.');
            valid = false;
        } else {
            clearError(radios[0]);
        }
        if (!valid) e.preventDefault();
    });
});