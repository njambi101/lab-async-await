/*const newdiv =document.createElement('h1');
const newdiv2 = document.createElement('p')


//const inputelm = document.getElementById('title1')
//const infotext = document.getElementById('bodypost')


const NewDeve = document.getElementById("post-list");
container.append(NewDeve);


async function fetchApi(word){
    try{
        const url ='https://jsonplaceholder.typicode.com/posts'
        const result = await fetch(url).then((res)=> res.json())
       newdiv.innerText = result[0].title;
       newdiv2.innerText = result[0].body;

        //container.append(newdiv);
        //container.append(newdiv2);
          newdiv.innerText = result[0].title;
        newdiv2.innerText = result[0].body;

        // Change 'container' to 'NewDeve' to match your variable name
        if (NewDeve) {
            NewDeve.append(newdiv);
            NewDeve.append(newdiv2);
        }
       
    } catch (error) {
        console.log(error);
    }
}
  
fetchApi();

// Get reference to the ul where posts will be displayed
const postList = document.getElementById("post-list");

// Function to display posts on the page
function displayPosts(posts) {
  postList.innerHTML = "";

  posts.forEach(post => {
    // Create elements
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    // Add content
    h1.textContent = post.title;
    p.textContent = post.body;

    // Append elements
    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

// Async function to fetch posts
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // Call display function
    displayPosts(data);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Call the async fetch function
fetchPosts();*/
fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts =>
        displayPosts(posts)
    )
    .catch(error => 
        {console.error('Error fetching user data:', error);})

const displayPosts = (posts) => {
    posts.forEach(post => {

        const list = document.createElement('li');
        const title = document.createElement('h1');
        title.textContent = post.title;
        const body = document.createElement('p');
        body.textContent = post.body;

        list.append(title, body);

        const postList = document.querySelector('#post-list');
        postList.append(list);
    }
    )
}