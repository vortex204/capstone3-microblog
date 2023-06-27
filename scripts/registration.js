
    // Function to handle form submission
    function handleFormSubmit(event) {
      event.preventDefault(); // Prevent form submission

      // Get form input values
      const email = document.getElementById("email").value;
      const password = document.getElementById("psw").value;
      const confirmPassword = document.getElementById("psw-repeat").value;

      // Validate form inputs
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      // Clear form inputs
      document.getElementById("email").value = "";
      document.getElementById("psw").value = "";
      document.getElementById("psw-repeat").value = "";
    }
