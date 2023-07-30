function check_user_existence() {
  console.log(localStorage.getItem('userData'))
  if (localStorage.getItem('userData') != null){
    document.getElementById('unloged').style.display = 'none'
    let user = JSON.parse(localStorage.getItem('userData'))
    document.getElementById('user_data').innerText = `${user.login}`
    document.getElementById('loged').style.display = 'block'

  } else {
    document.getElementById('loged').style.display = 'none'
    document.getElementById('unloged').style.display = 'block'
  }
  return localStorage.getItem('userData');
}
function generateUUID() {
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
    return uuid;
  }

  function get_from_firebase(firebase_collection_name, query_type, sent_data) {
    switch(query_type) {
        case "all": 
        db.collection(firebase_collection_name).get().then(data => {
            data.docs.forEach(element => {
                element.data()
            });
        })
        break;
        case "login":
            db.collection(firebase_collection_name).where('login', '==', sent_data.login).where('password', '==', sent_data.password).where('email', '==', sent_data.email).get().then(data => {
              if (data.docs.length) {
                data.docs.forEach(element => {
                  let user_data = element.data();
                  user_data.id = element.id;
                  console.log(user_data)
                  localStorage.setItem('userData', JSON.stringify(user_data));
                  check_user_existence()
                });
              } else {
                console.log('no such user')
              }
              
            })
        break;
    }
    
  }

  function insert_to_firebase(firebase_collection_name, uuid, sent_data, registration = false) {
    if (registration) {
      db.collection(firebase_collection_name).where('login', '==', sent_data.login).where('password', '==', sent_data.password).where('email', '==', sent_data.email).get().then(data => {
        if (data.docs.length) {
          data.docs.forEach(element => {
            console.log('user is existed')
          });
        } else {
          console.log('user_created')
          db.collection(firebase_collection_name).doc(uuid).set(sent_data).then(() => {
              localStorage.setItem('userData', JSON.stringify(element.data()));
              check_user_existence();
          })    
        }
        
      })
    } else {
      let created_data = []
      db.collection(firebase_collection_name).doc(uuid).set(sent_data).then(() => {
          created_data.push(sent_data)
      })
      return created_data;
  
    }
  }

  function remove_from_firebase(firebase_collection_name, uuid) {
    db.collection(firebase_collection_name).doc(uuid).delete.then(() => {
        return uuid;
    })
  }

  function update_in_firebase(firebase_collection_name, uuid, data) {
    db.connection(firebase_collection_name).doc(uuid).update(data).then(() => {
        return data;
    })
  }