const firebaseConfig = {
    apiKey: "AIzaSyBkfPUE4IcSt3doIzXApcWBsnwWjEGCKeQ",
    authDomain: "task-manager-b41d7.firebaseapp.com",
    projectId: "task-manager-b41d7",
    storageBucket: "task-manager-b41d7.appspot.com",
    messagingSenderId: "38540793283",
    appId: "1:38540793283:web:c4de1b84c8cf40b3d71976"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  let information = [];

  // How to get data 
  const renderInformation = function() {
    db.collection('information_base').get().then(data => {
        data.docs.forEach(element => {
            information.push(element.data())
        });
    })
  }

  renderInformation()

  function generateUUID() {
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
    return uuid;
  }

  // How to save data 
  const uuid = generateUUID();
  console.log(uuid);
  // db.collection('information_base').doc(uuid).set({some object}).then(() => {

  //})