const newGoal = document.querySelector("input-add");
const tableMain = document.querySelector("#tablemain");
const inputAdd = document.querySelector("#input-Add");
const buttonAdd = document.querySelector("#buttonAdd");
const deleteAdd = document.querySelector("#button-Delete");
const checkboxs = document.querySelector("#td2")

buttonAdd.addEventListener("click", function AddingGoal(){
   if(inputAdd.value == ""){
      alert("Lütfeb bir değer girin!");
   }else{
   let tdname = document.createElement("td");
   let tdcontrol = document.createElement("input");
   
   tdname.textContent =inputAdd.value;
   tdname.setAttribute("class", 'td1');
   tdcontrol.type = "checkbox";

   let tr = document.createElement("tr");
   tdcontrol.setAttribute("class", 'td2');
   
   tr.appendChild(tdname);
   tr.appendChild(tdcontrol);
   
   tableMain.appendChild(tr);

   };
});

deleteAdd.addEventListener("onclick", function(){
if (checkboxs.value) {
   
}

})
