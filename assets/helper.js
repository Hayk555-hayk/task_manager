function generateUUID() {
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
    return uuid;
  }

  function get_from_firebase(firebase_collection_name, query_type, sent_data) {
    let recived_date = []
    switch(query_type) {
        case "all": 
        db.collection(firebase_collection_name).get().then(data => {
            data.docs.forEach(element => {
                recived_date.push(element.data())
            });
        })
        break;
        case "login":
            db.collection(firebase_collection_name).where('login', '==', sent_data.login).where('password', '==', sent_data.password).where('email', '==', sent_data.email).get().then(data => {
                data.docs.forEach(element => {
                    recived_date.push(element.data())
                });
            })
        break;
    }
    
    return recived_date;
  }

  function insert_to_firebase(firebase_collection_name, uuid, data) {
    let created_data = []
    db.collection(firebase_collection_name).doc(uuid).set(data).then(() => {
        created_data.push(data)
    })
    return created_data;
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