
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    const username = document.getElementById("username").value;
    const fullName = document.getElementById("fullName").value;
    const password = document.getElementById("password").value;

    //   validate email format
    if (!validateEmail(username)) {
        alert("Inavild email format");
        return;
    }

    // Clear form inputs
    document.getElementById("username").value = "";
    document.getElementById("fullName").value = "";
    document.getElementById("password").value = "";

    let user = {
        username: username,
        fullName: fullName,
        password: password
    };

    // Send user data to server
    fetch("https://microbloglite.onrender.com/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors',

        body: JSON.stringify(user)
    })
        .then(response => {
            console.log(response);
            if (response.ok) {
                // Server registration successful

                return response.json();
            } else {
                throw new Error("Server registration failed");
            }
        })
        .then(data => {
            // Local registration after successful server registration
            let json = JSON.stringify(data);
            //   let json = JSON.stringify(user);
            localStorage.setItem(email, json);

            console.log("user added");
        })
        .catch(error => {
            console.log("catch error:");
            console.log(error);
            alert(error.message);
            redirectToSignIn(); // Redirect to sign-in form
        });
}

// Redirect user to sign-in form
function redirectToSignIn() {
    window.location.replace("index.html");
}

function validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}