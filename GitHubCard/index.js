
// Div Component Creator
function divCreator(divContent){
    // Get the Cards DIV
    let elementCARDSDIV = document.getElementsByClassName("cards")[0];
   
    let newDiv = document.createElement('div');
    newDiv.classList.add('card'); 

    let elementH2 = document.createElement("h2");
    elementH2.classList.add('name');

    let elementIMG = document.createElement("img");
    
    let elementP0 = document.createElement("p");
    elementP0.classList.add('username');

    let elementP1 = document.createElement("p");
    let elementP2 = document.createElement("p");

    elementH2.innerText = divContent.name;

    elementIMG.src = divContent.avatar_url;
    
    elementP0.innerText = divContent.login;

    newDiv.appendChild(elementIMG);

    newDiv.appendChild(elementH2);

    newDiv.appendChild(elementP0);
    
    elementCARDSDIV.appendChild(newDiv);

     
}



function getProfile(url) {
    axios.get(url)
    .then( response => {
           
       let followersobjArray = [];
       let divContent = [];

       objArray = response["data"];

       divContent.name = objArray["name"];         
       divContent.login = objArray["login"];
       divContent.location = objArray["location"];
       divContent.avatar_url = objArray["avatar_url"];
       divContent.followers_url = objArray["followers_url"];
       divContent.following_url = objArray["following_url"];
       divContent.followers = objArray["followers"];
       divContent.following = objArray["following"];
       divContent.bio = objArray["bio"];        
       
       divCreator(divContent);
       console.log(divContent);
       
          })
    .catch( error => {
        console.log("Error:", error);
    })
  };

  let url = 'https://api.github.com/users/Carl-Stanley';

  getProfile(url);

  url = 'https://api.github.com/users/Nebadon1';

  getProfile(url);
    
  url = 'https://api.github.com/users/bigknell';

  getProfile(url);

  url = 'https://api.github.com/users/justsml';

  getProfile(url);

  url = 'https://api.github.com/users/luishrd';

  getProfile(url);

  url = 'https://api.github.com/users/dustinmyers';

  getProfile(url);

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
