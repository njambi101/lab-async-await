const newdiv =document.createElement('h1');
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