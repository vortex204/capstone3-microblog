
    // Function to handle form submission
    function handleFormSubmit(event) {
      event.preventDefault(); // Prevent form submission

      // Get form input values
      const email = document.getElementById("email").value;
      const username = document.getElementById("username").value;
      const password = document.getElementById("psw").value;
      
      // Clear form inputs
      document.getElementById("email").value = "";
      document.getElementById("username").value = "";
      document.getElementById("psw").value = "";

      let user = {
        email: email,
        username: username,
        password: password
      };

      let json = JSON.stringify(user);
      localStorage.setItem(email, json);
      console.log("user added");
    }
