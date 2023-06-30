
document.addEventListener("DOMContentLoaded", async () => {
  const postUrl = "/api/posts";

  async function getPosts() {
    try {
      const loginData = getLoginData();
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${loginData.token}`,
        },
      };

      const response = await fetch(apiBaseURL + postUrl, options);
      const jsonData = await response.json();
      console.log(jsonData);

      const cardContainer = document.getElementById('cardContainer');

      for (let i = 0; i < jsonData.length; i++) {
        const data = jsonData[i];

        const card = document.createElement('div');
        card.className = 'card';
        
        const cardTitle = document.createElement('h2');
        cardTitle.className = 'card-title';
        cardTitle.innerHTML = data._id;
        cardTitle.innerHTML += `<br><hr>${data.text}`;
        
        const cardContent = document.createElement('p');
        cardContent.className = 'card-content';
        cardContent.textContent = data.username;

        const cardButton = document.createElement('button');
        cardButton.className = 'card-button';
        cardButton.innerHTML = '<i class="fas fa-heart"></i>';
        cardButton.addEventListener('click', () => {
          addLike(data._id); // Add Like
        });

        const cardDislikeButton = document.createElement('button');
        cardDislikeButton.className = 'card-button';
        cardDislikeButton.innerHTML = '<i class="fas fa-thumbs-down"></i>';
        cardDislikeButton.addEventListener('click', () => {
          removeLike(data._id); // Remove Like
        });

      const likeCount = document.createElement('div');
likeCount.className = 'like-count';
likeCount.textContent = `Likes: ${data.likes.length}`; // Use data.likes.length to get the number of likes

card.appendChild(cardTitle);
card.appendChild(cardContent);
card.appendChild(cardButton);
card.appendChild(cardDislikeButton);
card.appendChild(likeCount);

cardContainer.appendChild(card);

      }
    } catch (error) {
      console.error("An error occurred while fetching posts:", error);
    }
  }

  getPosts();

  async function createPost(event) {
    event.preventDefault();

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
  
  document.getElementById("createButton").addEventListener("click", createPost);

  async function addLike(postId) {
    try {
      const loginData = getLoginData(); // Make sure you have the getLoginData function implemented
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${loginData.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: postId,
        }),
      };

      const response = await fetch(apiBaseURL + "/api/likes", options);
      const jsonData = await response.json();
      console.log(jsonData);

      // Handle the response and update UI if necessary
    } catch (error) {
      console.error("An error occurred while adding a like:", error);
    }
  }

  async function removeLike(likeId) {
    try {
      const loginData = getLoginData(); // Make sure you have the getLoginData function implemented
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${loginData.token}`,
        },
      };

      const response = await fetch(apiBaseURL + `/api/likes/${likeId}`, options);
      const jsonData = await response.json();
      console.log(jsonData);

      // Handle the response and update UI if necessary
    } catch (error) {
      console.error("An error occurred while removing a like:", error);
    }
  }
});




// $(document).ready(function() {

//     // $.ajax({
//     //     url: "https://microbloglite.herokuapp.com/api/posts?limit=100&offset=0",
//     //     method: "GET",
//     //     success: function(response) {
//     //       var posts = response;

//     //       // Loop through the posts and display them on the page
//     //       for (var i = 0; i < posts.length; i++) {
//     //         var post = posts[i];
//     //         var postElement = $("<div>").addClass("col-md-6");
//     //         var card = $("<div>").addClass("card");
//     //         var cardHeader = $("<div>").addClass("card-header").html("<h5 class='card-title'>" + post.username + "</h5>");
//     //         var cardBody = $("<div>").addClass("card-body");
//     //         var cardText = $("<p>").addClass("card-text").text(post.text);
//     //         var readMoreLink = $("<a>").addClass("btn btn-primary").attr("href", "#").text(`${post.likes.length} Likes`);
//     //         var cardFooter =$("<div>").addClass("card-header").html("<h5 class='card-title'>" + `posted at: ${post.createdAt}` + "</h5>");

//     //       // Create a container for the likes information
//     //       var likesContainer = $("<div>").addClass("likes-container").hide();

//     //       // Loop through the likes and display each like
//     //       for (var j = 0; j < post.likes.length; j++) {
//     //         var like = post.likes[j];
//     //         var likeElement = $("<p>").text("Liked by " + like.username + " at " + like.createdAt);
//     //         likesContainer.append(likeElement)
//     //         console.log(likesContainer)
//     //       }

//     //       // Toggle the visibility of the likes container when "Read More" button is clicked
//     //       readMoreLink.click(function() {
//     //         likesContainer.toggle();
//     //       });

//     //         cardBody.append(cardText, readMoreLink);
//     //         card.append(cardHeader, cardBody, cardFooter);
//     //         postElement.append(card);
//     //         $("#postsContainer").append(postElement,likesContainer);
//     //       }
//     //     },
//     //     error: function() {
//     //       $("#posts").text("Error loading posts.");
//     //     }
//     //   });


//     var apiResponse = {
//       "posts": [
//         {
//           "_id": "string",
//           "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam, arcu eu porttitor pulvinar, mauris felis consequat quam, sed sagittis est justo vitae neque. Donec ac erat non mauris placerat iaculis. Vivamus nec turpis nec leo interdum rutrum. Vestibulum ut urna sagittis, semper tortor ut, posuere massa. Proin malesuada nisi a ipsum congue, vel mattis dolor posuere. Maecenas eget dui sed purus convallis consectetur sed eu neque. Nullam euismod sapien ligula, ac posuere neque finibus eu. Nam lacinia purus sit amet leo volutpat, non pellentesque mi posuere. Donec vel massa ut erat elementum viverra et id neque. Pellentesque pharetra pharetra enim, vitae auctor tortor luctus nec. Sed convallis elit in semper egestas. Nulla iaculis nunc id gravida pellentesque. Etiam ut interdum risus. Nam fermentum urna ac orci ultricies, vitae dapibus odio rutrum.",
//           "username": "John Doe",
//           "createdAt": "2023-06-29T00:07:15.162Z",
//           "likes": [
//             {
//               "_id": "string",
//               "username": "Alice",
//               "postId": "string",
//               "createdAt": "2023-06-29T00:07:15.162Z"
//             },
//             {
//                 "_id": "string",
//                 "username": "Alice",
//                 "postId": "string",
//                 "createdAt": "2023-06-29T00:07:15.162Z"
//               },
//               {
//                 "_id": "string",
//                 "username": "Alice",
//                 "postId": "string",
//                 "createdAt": "2023-06-29T00:07:15.162Z"
//               }
//           ]
//         },
//       ],


//       "count": 0,
//       "statusCode": 399
//     };

//     var posts = apiResponse.posts;

//     for (var i = 0; i < posts.length; i++) {
//       var post = posts[i];
//       var postElement = $("<div>").addClass("col-md-6");
//       var card = $("<div>").addClass("card");
//       var cardHeader = $("<div>").addClass("card-header").html("<h5 class='card-title'>" + post.username + "</h5>");
//       var cardBody = $("<div>").addClass("card-body");
//       var cardText = $("<p>").addClass("card-text").text(post.text);
//       var readMoreLink = $("<a>").addClass("btn btn-primary").attr("href", "#").text(`${post.likes.length} Likes`);
//       var cardFooter =$("<div>").addClass("card-header").html("<h5 class='card-title'>" + `posted at: ${post.createdAt}` + "</h5>");

//     // Create a container for the likes information
//     var likesContainer = $("<div>").addClass("likes-container").hide();

//     // Loop through the likes and display each like
//     for (var j = 0; j < post.likes.length; j++) {
//       var like = post.likes[j];
//       var likeElement = $("<p>").text("Liked by " + like.username + " at " + like.createdAt);
//       likesContainer.append(likeElement)
//       console.log(likesContainer)
//     }

//     // Toggle the visibility of the likes container when "Read More" button is clicked
//     readMoreLink.click(function() {
//       likesContainer.toggle();
//     });

//       cardBody.append(cardText, readMoreLink);
//       card.append(cardHeader, cardBody, cardFooter);
//       postElement.append(card);
//       $("#postsContainer").append(postElement,likesContainer);
//     }
//   });
//   // Like and dislike button

//   var btn1 = document.querySelector('#green');
// var btn2 = document.querySelector('#red');

// btn1.addEventListener('click', function() {

//     if (btn2.classList.contains('red')) {
//       btn2.classList.remove('red');
//     }
//   this.classList.toggle('green');

// });

// btn2.addEventListener('click', function() {

//     if (btn1.classList.contains('green')) {
//       btn1.classList.remove('green');
//     }
//   this.classList.toggle('red');

// });



