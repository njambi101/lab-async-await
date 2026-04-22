const newdiv =document.createElement('title1');
const newdiv2 = document.createElement('bodypost')


const inputelm = document.getElementById('title1')
const infotext = document.getElementById('bodypost')


const NewDeve = document.getElementById("post-list");
container.append(NewDeve);


async function fetchApi(word){
    try{
        const url ='https://jsonplaceholder.typicode.com/posts'
        const result = await fetch(url).then((res)=> res.json())
       newdiv.innerText = result[0].title;
       newdiv2.innerText = result[0].body;
       
    }
    catch(error){
        console.log(error)
    }
    console.log(url)
}