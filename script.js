const formWrap = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrap = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#search");
const clearButton = document.querySelector("#clear");
const imagesWrap = document.querySelector(".images-wrapper")
const send = document.querySelector("#send");

send.addEventListener("click",e=>{
    window.open("file:///C:/Users/ozans/OneDrive/Masa%C3%BCst%C3%BC/jsprojet/index.html")
})


runEventListener();

function runEventListener(){
    form.addEventListener("submit",search);
    clearButton.addEventListener("click", clear);
}



function clear(){
    searchInput.value = "";
    Array.from(imagesWrap.children).forEach((child)=>child.remove());
    //imagesWrap.innerHTML = ""; (diğer yol)

}

function search(e){

    const value = searchInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method : "GET" ,
        headers : {
            Authorization : "Client-ID 8VV7VbCw6yPfWaZClYwgLg_lYLIt5DbNPfS8MsiK528"
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
        Array.from(data.results).forEach((image)=>{
            //console.log(image.urls.small);
            addImageToUI(image.urls.small)
        })
    })
    .catch((err)=> console.log(err))

    e.preventDefault();
}

function addImageToUI(url){
    const div = document.createElement("div");
    div.className = "card";
    const img = document.createElement("img");
    img.setAttribute("src",url);
    img.height = '300';
    img.width = '300';
    div.append(img);
    imagesWrap.append(div);
}


