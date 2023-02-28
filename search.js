
import navbar from "/navbar.js"

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();



let Sliderdiv=document.querySelector(".slider");
function Carousel(){
    let images=["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/6451/1376451-h-66d561b15e4e","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/927/1360927-h-375c5733d218","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/4633/1364633-h-f78a196931d6","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/1331/641331-h"];


    
 let imgElement=document.createElement("img");
 imgElement.src=images[0]
    Sliderdiv.append(imgElement)
   
 //img_src.src=images[0]
    
    let i=1;
    
   setInterval(function() {
  
    if(i===images.length)
    {
        i=0;
    }
   
    imgElement.src=images[i]
    Sliderdiv.append(imgElement)
   
    
        i++;
    },3000);
    
    
}
Carousel();
//http://www.omdbapi.com/?i=tt3896198&apikey=5425aed3
let loader=document.getElementById("loader")
async function searchMovies(){
    
    loader.style.display="block";
    let movie_name=document.getElementById("movies_name").value;
   try{
    let response= await fetch(`https://www.omdbapi.com/?apikey=5425aed3&s=${movie_name}`);
    let data=await response.json();
    let actual_data=data.Search;
    //console.log(actual_data);
    appendMovies(actual_data);
    
   }
   catch(error){
    loader.style.display="none";
    console.log('error:',error);
   }
//    response.then(function(success){
//         // console.log('success: ', success);

//         let data=success.json();
//         data.then(function(success){
//             console.log('success:' ,success);
//         })
//         .catch(function(error){
//             console.log(error);
//         });
       
//    })
//    response.catch(function(error){
//     console.log('error',error);
//    })

function appendMovies(data)
{
    console.log(data);
    
    
    let movies_div=document.getElementById("movies");
    movies_div.innerHTML=null;
    data.forEach(function(el){
        let div=document.createElement('div')
        let img=document.createElement('img');
        img.src=el.Poster;
        let p_name=document.createElement('p');
        p_name.textContent=`Name: ${el.Title}`;
        let type=document.createElement("p");
        type.textContent=`Type: ${el.Type}`;
        let year=document.createElement("p");
        year.textContent=`Year: ${el.Year}`;
        let imdbId=document.createElement("p");
        imdbId.textContent=`imdbId: ${el.imdbID}`;
        div.append(img,p_name,type,year,imdbId);
        movies_div.append(div);
    })
    loader.style.display="none";
}

}
let id;
function debounce(fun,delay){
    if(id){
        clearTimeout(id);
    }

  id= setTimeout(function(){
        fun()
    },delay)
}

let input_box=document.getElementById("movies_name");

input_box.addEventListener("input",function(){
    debounce(searchMovies,1000);
});
