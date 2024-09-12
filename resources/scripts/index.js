const menu_bar_icon = document.querySelector("i")
const menu_bar = document.querySelector(".dropdown-menu-clicked")

console.log(menu_bar,menu_bar_icon)
menu_bar_icon.addEventListener('click' , function (){
    menu_bar.classList.toggle("active")
    
})

const planBtn = document.querySelectorAll(".planBtn")
const planPage = document.querySelector(".pricing-box")
console.log(planBtn,planPage);



planBtn.forEach((btn) => {
    btn.onclick = () => {
        planPage.classList.remove("not-active-plan")
        
    };
});

const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click" , ()=>{
    planPage.classList.add("not-active-plan")
})

const gender = document.querySelector(".gender")
const genderBox = document.querySelector(".gender-box")
const genderBtn = document.querySelectorAll(".genderBtn")
const nextBtn = document.querySelector(".next")
const inputs = document.querySelectorAll(".inputs input")
const bottomInputs = document.querySelectorAll(".bottom-inputs")
console.log(inputs);
gender.addEventListener("click" , () => {
    genderBox.classList.toggle("active-genderBox")
})
genderBtn.forEach((btn) => {
    btn.addEventListener("click" , ()=>{
    
    const genderChoice = btn.getAttribute("value")
      
     gender.removeAttribute("value")
     gender.setAttribute("value" , genderChoice) 
     genderBox.classList.remove("active-genderBox")
})
})
let validation;
function checkUpperInputs (input){
    input.forEach((input)=>{
       
        if(input.value == ""){
           return validation = false
        } else {
          return  validation = true
        }
    })
   
}
var validation2;
function checkBottomInputs (input){
    input.forEach((input)=>{

        if(input.value == ""){
            return validation2 = false
         } else {
           return  validation2 = true
         }

        }
        )
        
    }
    let GenderValidation;
  function Gendervalidation (){
    let genderChosen  = gender.getAttribute("value")
    if(genderChosen == "Male"){
        return GenderValidation = true
    }else if(genderChosen == "Female"){
      return  GenderValidation = true
    } else{
        return GenderValidation = false
    }
  }  
    const plan2 = document.querySelector(".pricing-box-container2")
    const alert = document.querySelector(".row-button-alert h3")
nextBtn.addEventListener("click" , ()=>{
    checkUpperInputs(inputs);
    checkBottomInputs(bottomInputs)
    Gendervalidation()

    
    if(validation == true && validation2 == true && GenderValidation == true){
        planPage.classList.add("not-active")
        plan2.classList.remove("not-active")
    }else if(validation ==  false){
            alert.classList.remove("not-active-alert")
    } else if(validation2 == false){
       alert.classList.remove("not-active-alert")
    } else if(GenderValidation == false){
       alert.classList.remove("not-active-alert")
    }
        
 }
)

const SelectPlanBtn = document.querySelector(".btn")
const planRow = document.querySelector(".row2")
const plansBtns = document.querySelectorAll(".planChoice")
console.log(SelectPlanBtn,planRow,plansBtns)


SelectPlanBtn.addEventListener("click" , ()=>{
    planRow.classList.toggle("not-active")
})

plansBtns.forEach((btn)=>{
    btn.addEventListener("click" ,  () =>{
    let planChoice = btn.getAttribute("value")
    SelectPlanBtn.removeAttribute("value")
    SelectPlanBtn.setAttribute("value" , planChoice)
    planRow.classList.add("not-active")
}) 
})
const goalAlert = document.querySelector(".row-alert h3")
console.log(goalAlert);
const chosenGoals = []
const goalBtn = document.querySelectorAll(".goalBtn")
    goalBtn.forEach((btn) => {
        btn.addEventListener("click" ,  () => {
            btn.classList.toggle("active-goals")
            goalAlert.classList.remove("not-active-alert")
        }
        )})





let validation3;
function checkInputs (inputs){
        inputs.forEach((inputs) => {

            if (inputs.value == "") {
                return validation3 = false
            } else {
                return validation3 = true
            }
        }
    )
    console.log(validation3)
}
let validation4;
function checkMonthInput(input) {
    if(input.value == ""){
        return validation4 = false
    } else{
        return validation4 = true
    }
}

let PlanValidation;
function CheckPlan (){
    let chosenPlan = SelectPlanBtn.getAttribute("value")
    if(chosenPlan == "Begginer Plan"){
        return PlanValidation = true
    }else{
        if(chosenPlan == "Expert Plan"){
            return PlanValidation = true
        } else{
            if(chosenPlan == "Premuim Plan"){
                return PlanValidation = true
            } else{
                return PlanValidation = false
            }
        }
    }

}

const nextBtn2 = document.querySelector(".next2")
const Plan2inputs = document.querySelectorAll(".inputs")
const monthInput = document.querySelector(".month")
const validationAlert = document.querySelector(".row-button-alert2 h3")
nextBtn2.addEventListener("click" , ()=>{
    checkInputs(Plan2inputs)
    checkMonthInput(monthInput); 
    CheckPlan();
   if(validation3 == true && validation4 == true && PlanValidation == true){
       
}else if (validation3 == false){
       validationAlert.classList.remove("not-active-alert")
   } else if (validation4 == false){
    validationAlert.classList.remove("not-active-alert")
   } else if(PlanValidation == false){
    validationAlert.classList.remove("not-active-alert")
   }
})

 const closeBtn2 = document.querySelector(".closeBtn2")
 closeBtn2.addEventListener("click" , ()=>{
     plan2.classList.add("not-active")
     planPage.classList.remove("not-active")
    }
 )