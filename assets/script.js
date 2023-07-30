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

// Manage articles 
let article_popup = false;
function manage_articles(event, firebase_collection, action, target_id) {
  const clicked_element = event.target;
  const article_container = clicked_element.closest('.article');
  if (action == 'remove') {
    const clicked_element = event.target;
    const article_container = clicked_element.closest('.article');
    article_container.remove(); 
    remove_from_firebase(firebase_collection, target_id)
  } else {
    if (firebase_collection == "articles" && article_popup) {
      let data = {
        title: document.getElementById('data_title').value,
        description: document.getElementById('data_description').value,
        type: document.getElementById('data_type').value
      }
      update_in_firebase(firebase_collection, target_id, data)
      article_popup = false
      clicked_element.innerText = 'edit'
      document.getElementById('crate_article_data').style.display = 'none'
      article_container.querySelector('h3').innerText = data.title;
      article_container.querySelector('h4').innerText = data.type;
      article_container.querySelector('p').innerText = data.description;
    } else {
      article_popup = true
      clicked_element.innerText = 'save'
      document.getElementById('crate_article_data').style.display = 'block'
      document.getElementById('data_title').value = article_container.querySelector('h3').innerText;
      document.getElementById('data_type').value = article_container.querySelector('h4').innerText;
      document.getElementById('data_description').value = article_container.querySelector('p').innerText;
      console.log(article_container.querySelector('p').innerText)
    }
  }
}