

document.addEventListener('DOMContentLoaded', () => {
    const userInfoContainer = document.getElementById('userInfo');
    const logoutBtn = document.getElementById('logoutBtn');

    // Check if userData exists in local storage
    const userDataString = localStorage.getItem('userData');
    if (!userDataString) {
        window.location.href = '../index.html'; // Redirect to login page
    }

    const userData = JSON.parse(userDataString);

    // Fetch user data from Firestore
    db.collection('users')
        .where('email', '==', userData.email)
        .where('password', '==', userData.password)
        .get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    user_id = doc.id;
                    const user = doc.data();
                    const userInfoHTML = `
                        <p><strong>Name:</strong> ${user.name}</p>
                        <p><strong>Surname:</strong> ${user.surname}</p>
                    `;
                    userInfoContainer.innerHTML = userInfoHTML;
                    localStorage.setItem('user_id', JSON.stringify({id: doc.id}));
                });
            } else {
                window.location.href = '../index.html'; // Redirect to login page
            }
        })
        .catch((error) => {
            console.error('Fetch user data error:', error.message);
            alert('Error fetching user data.');
        });

    // Logout button click event
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('userData'); // Remove userData from local storage
        localStorage.removeItem('user_id');
        window.location.href = '../index.html'; // Redirect to login page
    });

});

let user_id = localStorage.getItem('user_id');

if (user_id) {
    user_id = JSON.parse(user_id);
    const query = db.collection('money').where('user_id', '==', user_id.id);

    query.get()
        .then((querySnapshot) => {
            const matchingDocs = [];
            querySnapshot.forEach((doc) => {
                matchingDocs.push(doc); // Store all documents with 'name' === 'hello'
            });

            const incomeInput = document.getElementById('incomeInput');
            const spentInput = document.getElementById('spentInput');
            const debtsInput = document.getElementById('debtsInput');
            const allMoneyInput = document.getElementById('allMoneyInput');

            if (matchingDocs.length > 0) {
                // Get a random document from the matching documents
                const randomIndex = Math.floor(Math.random() * matchingDocs.length);
                const moneyDoc = matchingDocs[randomIndex];
                const money = moneyDoc.data();
            
                // Set default values for the inputs
                incomeInput.value = money.income;
                spentInput.value = money.spent;
                debtsInput.value = money.debts;
                allMoneyInput.value = money.all_money;
            

                showChart(money);
            } else {
                incomeInput.value = 0;
                spentInput.value = 0;
                debtsInput.value = 0;
                allMoneyInput.value = 0;
                showChart({income: 0, spent: 0, debts: 0, all_money: 0});
            }
        })
        .catch((error) => {
            console.log("Error getting documents where name is 'hello':", error);
        });


        const updateChart = document.getElementById('chart1');

        updateChart.addEventListener('click', () => {
            const incomeInput = document.getElementById('incomeInput').value;
            const spentInput = document.getElementById('spentInput').value;
            const debtsInput = document.getElementById('debtsInput').value;
            const allMoneyInput = document.getElementById('allMoneyInput').value;

                // Check if a document with the specified name exists
                db.collection('money') // Replace 'yourCollectionName' with your actual collection name
                .where('user_id', '==', user_id)
                .get()
                .then((querySnapshot) => {
                    if (!querySnapshot.empty) {
                        // Document with the name exists, perform update
                        querySnapshot.forEach((doc) => {
                            doc.ref.update({income: incomeInput, spent: spentInput, debts: debtsInput, all_money: allMoneyInput})
                                .then(() => {
                                    console.log('Document updated successfully:', doc.id);
                                })
                                .catch((error) => {
                                    console.error('Error updating document:', error);
                                });
                        });
                    } else {
                        // Document with the name does not exist, perform create
                        db.collection('money').add({income: incomeInput, spent: spentInput, debts: debtsInput, all_money: allMoneyInput, user_id: user_id}) // Replace 'yourCollectionName' with your actual collection name
                            .then((docRef) => {
                                console.log('Document created successfully with ID:', docRef.id);
                            })
                            .catch((error) => {
                                console.error('Error creating document:', error);
                            });
                    }
                })
                .catch((error) => {
                    console.error('Error getting documents:', error);
                });

            
        })

    
} else {
    setTimeout(() => {
        location.reload();
    }, 2000);    
}

function showChart(handlingData) {
    const labels = ['Income was', 'Spent', 'Debts', 'all_money'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'General Info',
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1,
            data: [handlingData.income, handlingData.spent, handlingData.debts, handlingData.all_money],
        }]
    };

    // Configuration options
    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    // Get the canvas element
    const ctx = document.getElementById('myChart').getContext('2d');

    // Create a new pie chart instance
    const myChart = new Chart(ctx, {
        type: 'pie', // Change chart type to pie
        data: data,
        options: options
    });

    // Function to update chart data (example)
    function updateChartData(newData) {
        myChart.data.datasets[0].data = newData;
        myChart.update(); // Redraw the chart with updated data
    }
}
