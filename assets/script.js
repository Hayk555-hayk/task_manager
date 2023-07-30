// Check user 
check_user_existence();
// Login 
let login = document.getElementById('login')

function login_to_task_manager() {
  let sent_data = {
    login: document.getElementById('user_login').value,
    password: document.getElementById('user_password').value,
    email: document.getElementById('user_email').value
  }
  get_from_firebase('users', 'login', sent_data)
}

login.addEventListener('click', login_to_task_manager)

// Log out
let logout = document.getElementById('logout')

function logout_from_task_manager() {
  localStorage.removeItem('userData');
  check_user_existence();
}

logout.addEventListener('click', logout_from_task_manager)

// Register
let register = document.getElementById('register')

function register_to_task_manager() {
  let sent_data = {
    login: document.getElementById('user_login').value,
    password: document.getElementById('user_password').value,
    email: document.getElementById('user_email').value
  }
  let uuid = generateUUID()
  insert_to_firebase('users', uuid, sent_data, true)

}

register.addEventListener('click', register_to_task_manager)

// Get articles
function get_mai_page_data(data_from_firebase_collection) {
  get_from_firebase(data_from_firebase_collection, 'all')
}

get_mai_page_data('articles')