
let btn=document.querySelector("button");
let ol=document.querySelector("ol");

let inp=document.querySelector("input");

btn.addEventListener("click",function(){

  //printing on console...->  console.log(inp.value);

  //adding on actual list...

 let item=document.createElement("li"); //creating an list item and storing
  let delbtn=document.createElement("button");
  let doneBtn = document.createElement("button");


  
  doneBtn.classList.add("done");

  doneBtn.innerText="Done";


  delbtn.innerText="Delete";

  delbtn.classList.add("delete");  //giving class to the newly created delete button

item.innerText=inp.value;

ol.appendChild(item);
item.appendChild(doneBtn);
item.appendChild(delbtn);





delbtn.addEventListener("click", function () {
    let par = this.parentElement;
    par.remove();
  });


  doneBtn.addEventListener("click", function () {
    
        item.style.textDecoration = "line-through";
    
});



})



