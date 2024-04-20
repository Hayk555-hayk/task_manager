// Check if userData is set in local storage
const userDataString = localStorage.getItem('userData');
if (userDataString) {
    window.location.href = './user_dashboard/index.html';
}

// Function to toggle display style of an element by ID
function toggleForm(action) {
    const register_form = document.getElementById('register-container');
    const login_form = document.getElementById('login-container');

    if (action == 'register') {
        register_form.style.display = 'block';
        login_form.style.display = 'none';
    } else {
        register_form.style.display = 'none';
        login_form.style.display = 'block';
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Function to register and save user data
function register() {
    const name = document.getElementById('register-name').value.trim();
    const surname = document.getElementById('register-surname').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    const errors = document.getElementById('registr_errors');
    
    db.collection('users') 
    .where('email', '==', email)
    .get()
    .then((querySnapshot) => {
        if (!querySnapshot.empty) {
            // User with the given email exists
            errors.innerText = 'Sorry, email is busy';
        } else {
            if (!name || !surname || !email || !password) {
                errors.innerText = 'All fields are required!';
                return;
            }
        
            if (!validateEmail(email)) {
                errors.innerText = 'Invalid email format!';
                return;
            }
        
            if (password.length < 8) {
                errors.innerText = 'Password should be at least 8 characters long!';
                return;
            }
        
            // Create a new user data object
            const userData = { name, surname, email, password };
        
            // Add user data to Firestore
            addUserToFirestore(userData);
        
            // Save user data to local storage (expires in 24 hours)
            // localStorage.setItem('userData', JSON.stringify(userData));
            localStorage.setItem('userData', JSON.stringify({email: email, password: password})); // Save user data to localStorage
            window.location.href = './user_dashboard/index.html';
        }
    })
    .catch((error) => {
        errors.innerText = 'something went wrong...'
    });

}

function addUserToFirestore(userData) {
    db.collection('users').add(userData)
        .then((docRef) => {
            console.log("User data added with ID:", docRef.id);
        })
        .catch((error) => {
            console.error("Add user data error:", error.message);
        });
}


function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Function to login
function login() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const errors = document.getElementById('login_errors');

    if (!email || !password) {
        errors.innerText = 'All fields are required!';
        return;
    }
    
    db.collection('users') 
    .where('email', '==', email)
    .where('password', '==', password)
    .get()
    .then((querySnapshot) => {
        if (!querySnapshot.empty) {
            localStorage.setItem('userData', JSON.stringify({email: email, password: password})); // Save user data to localStorage
            window.location.href = './user_dashboard/index.html';
        } else {
            errors.innerText = 'Check Your email or password please';
        }
    })
    .catch((error) => {
        errors.innerText = 'something went wrong...'
    });

}