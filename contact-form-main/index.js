
const form=document.getElementById("form");
const submitBtn=document.getElementById("submit");
 form.addEventListener("submit",(e)=>{
   e.preventDefault()
   let isValid=true;
   const respond=document.getElementById("respond");
   const firstName=document.getElementById("first-name").value.trim();
   const lastName=document.getElementById("last-name").value.trim();
   const emailInput=document.getElementById("email").value.trim();
   const checkRadio = document.querySelector('input[name="radio-click"]:checked');
   const textMessage=document.getElementById("text-message").value.trim();
   const checkBox=document.getElementById("checkbox").checked;
   //for firstname
   if (firstName === "") {
    isValid = false;
    document.querySelectorAll(".span-message")[0].style.display = "block";
} else {
    document.querySelectorAll(".span-message")[0].style.display = "none";
}

//for lastname
   if(lastName===""){
    isValid=false;
  document.querySelectorAll(".span-message")[1].style.display="block"
   } else {
    document.querySelectorAll(".span-message")[1].style.display="none"
   }
   
//for email
   if(!validEmail(emailInput)){
    isValid=false
    document.querySelectorAll(".span-message")[2].style.display="block";
   
   }
   else{ document.querySelectorAll(".span-message")[2].style.display="none";
   }
  
   //for inputRadio
   if (!checkRadio) {
    isValid = false;
    document.querySelectorAll(".span-message")[3].style.display = "block";
} else {document.querySelectorAll(".span-message")[3].style.display = "none";}

//for textarea
if(textMessage===""){
  document.querySelectorAll(".span-message")[4].style.display = "block";
} else{
  document.querySelectorAll(".span-message")[4].style.display = "none";
}

if(!checkBox){
  document.querySelectorAll(".span-message")[5].style.display = "block";
} else{ document.querySelectorAll(".span-message")[5].style.display = "none";}

if(isValid){
  respond.style.display="block"
}
form.reset()
})
const validEmail=(email)=>{
  const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email)
}

