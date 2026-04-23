const list = document.getElementById("list");
const li = document.querySelectorAll("li");
const addBtn = document.getElementById("addBtn");
let count = 4;


//event delegation
list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("active");
        console.log("ITEM CLICKED :",e.target.textContent);
    }
});
list.addEventListener("dblclick", (e) => {
    if (e.target.tagName === "LI") {
         e.target.remove();
         
        console.log("ITEM REMOVED :",);
    }
});

addBtn.addEventListener("click",function(){
    const li = document.createElement("li");
    li.innerHTML = "item " + count++;
    list.appendChild(li);
})