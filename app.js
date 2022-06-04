const newGoal = document.querySelector("input-add");
const tableMain = document.querySelector("#tablemain");
const inputAdd = document.querySelector("#input-Add");
const buttonAdd = document.querySelector("#buttonAdd");
const deleteAdd = document.querySelector("#button-Delete");
const checkboxs = document.querySelector("#td2")

buttonAdd.addEventListener("click", function AddingGoal(){
   if(inputAdd.value == ""){
      alert("Lütfen bir değer girin!");
   }else{
   let tdname = document.createElement("td");
   let tdcontrol = document.createElement("input");
   
   tdname.textContent =inputAdd.value;
   tdname.setAttribute("class", 'tdx');
   tdcontrol.type = "checkbox";

   let tr = document.createElement("tr");
   tdcontrol.setAttribute("class", 'tdy');
   
   tr.appendChild(tdname);
   tr.appendChild(tdcontrol);
   
   tableMain.appendChild(tr);
   document.getElementById("input-Add").value = "";
   
   };
   
});

deleteAdd.addEventListener("click", function(){

   var checkedbox = document.getElementsByClassName("tdy");
   for (i=0; i<checkedbox.length; i++){
      if(checkedbox[i].checked == true){
         checkedbox[i].parentNode.remove();
      }
      else{
         alert("Please Select A Goal!"); 
      }
   }

})
