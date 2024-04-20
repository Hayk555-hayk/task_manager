// Create a new item in Firestore
function addItem(itemData) {
    db.collection("items").add(itemData)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

// Read all items from Firestore
function getAllItems() {
    db.collection("items").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            // Display data in the UI or process it as needed
        });
    });
}

// Update an existing item in Firestore
function updateItem(itemId, newData) {
    db.collection("items").doc(itemId).update(newData)
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
}

// Delete an item from Firestore
function deleteItem(itemId) {
    db.collection("items").doc(itemId).delete()
        .then(() => {
            console.log("Document successfully deleted!");
        })
        .catch((error) => {
            console.error("Error deleting document: ", error);
        });
}

// Get a single item from Firestore by ID
function getItemById(itemId) {
    db.collection("items").doc(itemId).get()
        .then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                // Display data in the UI or process it as needed
            } else {
                console.log("No such document!");
            }
        })
        .catch((error) => {
            console.error("Error getting document:", error);
        });
}
