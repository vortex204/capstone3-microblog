document.addEventListener("DOMContentLoaded", async () => {
    async function getProfile() {
      try {
        const loginData = getLoginData();
        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${loginData.token}`,
          },
        };
      
        const username = loginData.username

        const userUrl = "/api/users/" + username;
        const response = await fetch(apiBaseURL + userUrl, options);
        const data = await response.json();
        console.log(data);
        
        const fullName = document.getElementsByClassName("username")[0];        
        const  handle = document.getElementsByClassName("handle")[0]
        const bio = document.getElementsByClassName("bio")[0];
        const created = document.getElementsByClassName("created")[0];
        const updated = document.getElementsByClassName("updated")[0];

        fullName.innerHTML = data.fullName;
        handle.innerHTML = data.username;
        bio.innerHTML = data.bio;
        created.innerHTML = data.createdAt;
        updated.innerHTML = data.updatedAt;







      } catch (error) {
        console.error("An error occurred while creating a post", error);
      }
    }

    getProfile();


    async function createPost(event) {
        event.preventDefault();
        const postUrl = "/api/posts"

        const postCreate = document.getElementById("postText").value;


        try {
          const loginData = getLoginData();
          const options = {
            method: "POST",
            headers: {
              Authorization: `Bearer ${loginData.token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              text: postCreate,
            }),
          };
      
          const response = await fetch(apiBaseURL + postUrl, options);
          const jsonData = await response.json();
          console.log(jsonData);
      
          // Handle the response and update UI if necessary
      
        } catch (error) {
          console.error("An error occurred while creating a post:", error);
        }
      }
      
      
      document.getElementById("create").addEventListener("click", createPost);
  
    // Rest of your code...
  
  });

  	
// Response body
// Download
// {
//   "fullName": "Yonesh Thapa",
//   "username": "yo@live.com",
//   "bio": "",
//   "createdAt": "2023-06-29T17:15:57.505Z",
//   "updatedAt": "2023-06-29T17:15:57.505Z"
// }
  