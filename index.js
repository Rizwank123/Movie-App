import navbar from './navbar.js'
let nav_div=document.getElementById("navbar");
nav_div.innerHTML=navbar();
let movies=[
    {
        imgUrl:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v',
        name:"Chhichhore",
        rating:5.8

    },
    {
        imgUrl:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v',
        name:'Baghi3',
        rating:7.5
    },
    {
        imgUrl:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4836/1374836-v-9e675d9bcb9e',
        name:'Prey',
        rating:7,
    },
    {
        imgUrl:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7383/1357383-v-6c8546f2e7bd',
        name:'Bubli Bouncer',
        rating:3,
    },
    {
        imgUrl:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v',
        name:'Housefull 4',
        rating:6,  
    },
    {
        imgUrl:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v',
        name:'Ms Dhoni',
        rating:6.7,  
    },
    {
        imgUrl:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v',
        name:'Ms Dhoni',
        rating:6.7,  
    },
    {
        imgUrl:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8285/388285-v',
        name:'Total Dhamal',
        rating:7.1,
    },
    {
        imgUrl:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7391/1367391-v-84d5e12d4c3d',
        name:'Rocky',
        rating:7.6,
    },
    {
        imgUrl:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6539/846539-v',
        name:'Rocky',
        rating:7.2,
    },
    {
        imgUrl:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v',
        name:'Super 30',
        rating:8,
    },
    {
        imgUrl:'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3270/1173270-v-b2cc135901b1',
        name:'Shane ',
        rating:5,
    },

]




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

let container=document.getElementById("container");
function display(movies){
    container.innerHTML=null;
movies.forEach(function(el){
   
   let box= document.createElement("div")
   let imgEl=document.createElement("img");
   imgEl.src=el.imgUrl;
   let name =document.createElement("p");
   name.textContent='Name:'+' ' +el.name;
   let rating=document.createElement("p");
   rating.textContent='Imb:'+' '+el.rating;
   box.append(imgEl,name,rating);
   container.append(box);


})
}
display(movies);
let data =movies;
function incSort(){
  data=data.sort((a, b) => a.rating - b.rating)
    display(data);

}


function dscSort(){
    data=data.sort((a, b) => b.rating - a.rating)
    display(data);
}

let getmeData = new Promise(function(resolve,reject){



setTimeout(function(){
        let data=movies;
        if(data!=null){
            resolve(data); 
        }
        else{
            reject("error server not responding");
        }
    },3000);

});
getmeData
    .then(function(getmeData){
        display(getmeData);
    })
    .catch(function(){

    });
    
//http://www.omdbapi.com/?i=tt3896198&apikey=5425aed3
// let searc_div=document.getElementById('movies_name');
// searc_div.style.display='none';
document.getElementById("low-r").addEventListener("click",dscSort);
document.getElementById("high-r").addEventListener("click",incSort);