document.addEventListener('DOMContentLoaded', function () {
        
        // Get Form and Inputs
        const form = document.getElementById('registrationForm');
        const NameInput = document.getElementById('Name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const passwordInput = document.getElementById('password');

        // Listen for Submit Event
        form.addEventListener('submit', function (e) {
            e.preventDefault(); 
            
            //  Validate all fields
            const isNameValid = checkName(NameInput);
            const isEmailValid = checkEmail(emailInput);
            const isPhoneValid = checkPhone(phoneInput);
            const isPasswordValid = checkPassword(passwordInput);

            //  if all is valid then submit the form
            if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
                alert('Form Submitted.');
                
            }
        });

        // --- Validation Functions ---

        //   Name Validation
        function checkName(input) {
            const value = input.value.trim();
            // Regex: Start to end contains only letters (a-z, A-Z)
            const re = /^[a-zA-Z]+$/;

            if (value === '') {
                setError(input, 'Name is required');
                return false;
            } else if (!re.test(value)) {
                setError(input, 'Name must contain only alphabets (no numbers)');
                return false;
            } else {
                setSuccess(input);
                return true;
            }
        }

        //  Email validaton
        function checkEmail(input) {
            const value = input.value.trim();
            const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            
            if (re.test(value)) {
                setSuccess(input);
                return true;
            } else {
                setError(input, 'Please enter a valid email address');
                return false;
            }
        }

        //  Number validation
        function checkPhone(input) {
            const value = input.value.trim();
            // Regex: Starts with 6,7,8,9 followed by exactly 9 digits
            const re = /^[6-9]\d{9}$/;

            if (re.test(value)) {
                setSuccess(input);
                return true;
            } else {
                setError(input, 'Phone must be 10 digits and start with 6, 7, 8, or 9');
                return false;
            }
        }
         
        // Password validation
        function checkPassword(input) {
            const value = input.value.trim();
            
            if (value === '') {
                setError(input, 'Password is required');
                return false;
            } else if (value.length < 6) {
                setError(input, 'Password must be at least 6 characters');
                return false;
            } else {
                setSuccess(input);
                return true;
            }
        }
        

        function setError(input, message) {
            input.classList.add('is-invalid'); 
            input.classList.remove('is-valid');
            
           
            const feedbackDiv = input.nextElementSibling;
            feedbackDiv.innerText = message;
        }

        
        function setSuccess(input) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid'); 
        }
    });