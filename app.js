const button = document.getElementById("send")
const adsoyad = document.getElementById("adsoyad")
const email = document.getElementById("email")
const complaint = document.getElementById("complaint")
const main = document.querySelector(".mainInput");
button.addEventListener("click",e=>{
   text.style.display = "block";
})

const text = document.createElement("p");
text.className = "text";
text.textContent = "Yorumunuz Bize Ulaştı"
main.appendChild(text);
text.style.display = "none";


