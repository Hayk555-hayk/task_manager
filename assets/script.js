// Login 
let login = document.getElementById('login')

function login_to_task_manager() {
  let user_login = document.getElementById('user_login').value;
  let user_email = document.getElementById('user_email').value;
  let user_password = document.getElementById('user_password').value;
  let sent_data = {
    login: user_login,
    password: user_password,
    email: user_email
  }
  console.log(user_login, user_email, user_password)
  let check_user = get_from_firebase('users', 'login', sent_data)

}

login.addEventListener('click', login_to_task_manager)

// Register
let register = document.getElementById('register')

function register_to_task_manager() {
  let user_login = document.getElementById('user_login').value;
  let user_email = document.getElementById('user_email').value;
  let user_password = document.getElementById('user_password').value;
  let sent_data = {
    login: user_login,
    password: user_password,
    email: user_email
  }
  let uuid = generateUUID()
  let check_user = get_from_firebase('users', 'login', sent_data)

}

register.addEventListener('click', register_to_task_manager)
