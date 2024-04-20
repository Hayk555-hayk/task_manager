

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
                alert('User data not found.');
                window.location.href = 'login.html'; // Redirect to login page
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

            if (matchingDocs.length > 0) {
                // Get a random document from the matching documents
                const randomIndex = Math.floor(Math.random() * matchingDocs.length);
                const moneyDoc = matchingDocs[randomIndex];
                const money = moneyDoc.data();
                console.log(money)
                showChart(money);
            } else {

            }
        })
        .catch((error) => {
            console.log("Error getting documents where name is 'hello':", error);
        });











    
} else {
    setTimeout(() => {
        location.reload();
    }, 2000);    
}


function showChart(handlingData) {
        // Sample data (replace with your actual data)
        const labels = ['Income', 'Spent', 'Debts', 'all_money'];
        const data = {
            labels: labels,
            datasets: [{
                label: 'General Info',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                data: [handlingData.income, handlingData.spent, handlingData.debts, handlingData.all_money],
            }]
        };
    
        // Configuration options
        const options = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };
    
        // Get the canvas element
        const ctx = document.getElementById('myChart').getContext('2d');
    
        // Create a new chart instance
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    
        // Function to update chart data (example)
        function updateChartData(newData) {
            myChart.data.datasets[0].data = newData;
            myChart.update(); // Redraw the chart with updated data
        }
    
}