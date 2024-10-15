const menu_bar_icon = document.querySelector("i");
const menu_bar = document.querySelector(".dropdown-menu-clicked");

console.log(menu_bar, menu_bar_icon);
menu_bar_icon.addEventListener("click", function () {
    menu_bar.classList.toggle("active");
});

const planBtn = document.querySelectorAll(".planBtn");
const planPage = document.querySelector(".pricing-box");
console.log(planBtn, planPage);

planBtn.forEach((btn) => {
    btn.onclick = () => {
        planPage.classList.remove("not-active-plan");
    };
});

const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", () => {
    planPage.classList.add("not-active-plan");
});

const gender = document.querySelector(".gender");
const genderBox = document.querySelector(".gender-box");
const genderBtn = document.querySelectorAll(".genderBtn");
const nextBtn = document.querySelector(".next");
const inputs = document.querySelectorAll(".inputs input");
const bottomInputs = document.querySelectorAll(".bottom-inputs");
console.log(inputs);
gender.addEventListener("click", () => {
    genderBox.classList.toggle("active-genderBox");
});
genderBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        const genderChoice = btn.getAttribute("value");

        gender.removeAttribute("value");
        gender.setAttribute("value", genderChoice);
        genderBox.classList.remove("active-genderBox");
    });
});
let validation;
function checkUpperInputs(input) {
    input.forEach((input) => {
        if (input.value == "") {
            return (validation = false);
        } else {
            return (validation = true);
        }
    });
}
var validation2;
function checkBottomInputs(input) {
    input.forEach((input) => {
        if (input.value == "") {
            return (validation2 = false);
        } else {
            return (validation2 = true);
        }
    });
}
let GenderValidation;
function Gendervalidation() {
    let genderChosen = gender.getAttribute("value");
    if (genderChosen == "Male") {
        return (GenderValidation = true);
    } else if (genderChosen == "Female") {
        return (GenderValidation = true);
    } else {
        return (GenderValidation = false);
    }
}
const plan2 = document.querySelector(".pricing-box-container2");
const alert = document.querySelector(".row-button-alert h3");
nextBtn.addEventListener("click", () => {
    checkUpperInputs(inputs);
    checkBottomInputs(bottomInputs);
    Gendervalidation();

    if (validation == true && validation2 == true && GenderValidation == true) {
        planPage.classList.add("not-active");
        plan2.classList.remove("not-active");
    } else if (validation == false) {
        alert.classList.remove("not-active-alert");
    } else if (validation2 == false) {
        alert.classList.remove("not-active-alert");
    } else if (GenderValidation == false) {
        alert.classList.remove("not-active-alert");
    }
});

const SelectPlanBtn = document.querySelector(".btn");
const planRow = document.querySelector(".row2");
const plansBtns = document.querySelectorAll(".planChoice");
console.log(SelectPlanBtn, planRow, plansBtns);

SelectPlanBtn.addEventListener("click", () => {
    planRow.classList.toggle("not-active");
});

plansBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let planChoice = btn.getAttribute("value");
        SelectPlanBtn.removeAttribute("value");
        SelectPlanBtn.setAttribute("value", planChoice);
        planRow.classList.add("not-active");
    });
});
const goalAlert = document.querySelector(".row-alert h3");

const chosenGoals = [];
const goalBtn = document.querySelectorAll(".goalBtn");
goalBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active-goals");
        goalAlert.classList.remove("not-active-alert");
    });
});

let validation3;
function checkInputs(inputs) {
    inputs.forEach((inputs) => {
        if (inputs.value == "") {
            return (validation3 = false);
        } else {
            return (validation3 = true);
        }
    });
    console.log(validation3);
}
let validation4;
function checkMonthInput(input) {
    if (input.value == "") {
        return (validation4 = false);
    } else {
        return (validation4 = true);
    }
}

let PlanValidation;
function CheckPlan() {
    let chosenPlan = SelectPlanBtn.getAttribute("value");
    if (chosenPlan == "Begginer Plan") {
        return (PlanValidation = true);
    } else {
        if (chosenPlan == "Expert Plan") {
            return (PlanValidation = true);
        } else {
            if (chosenPlan == "Premuim Plan") {
                return (PlanValidation = true);
            } else {
                return (PlanValidation = false);
            }
        }
    }
}

const plan3 = document.querySelector(".pricing-box-container3");
const nextBtn2 = document.querySelector(".next2");
const Plan2inputs = document.querySelectorAll(".inputs");
const monthInput = document.querySelector(".month");
const validationAlert = document.querySelector(".row-button-alert2 h3");
nextBtn2.addEventListener("click", () => {
    checkInputs(Plan2inputs);
    checkMonthInput(monthInput);
    CheckPlan();
    if (validation3 == true && validation4 == true && PlanValidation == true) {
        plan2.classList.add("not-active");
        plan3.classList.remove("not-active");
    } else if (validation3 == false) {
        validationAlert.classList.remove("not-active-alert");
    } else if (validation4 == false) {
        validationAlert.classList.remove("not-active-alert");
    } else if (PlanValidation == false) {
        validationAlert.classList.remove("not-active-alert");
    }
});

const closeBtn2 = document.querySelector(".closeBtn2");
closeBtn2.addEventListener("click", () => {
    plan2.classList.add("not-active");
    planPage.classList.remove("not-active");
});

const joinNowBtn = document.querySelectorAll(".join-button-fun");
const closeBtn3 = document.querySelector(".closeBtn3");
const closeBtn4 = document.querySelector(".closeBtn4");

function ClosePlan3(btn) {
    plan3.classList.add("not-active");
    // ("value" , "Subscribed")
    joinNowBtn.forEach((btn) => {
        btn.setAttribute("value", "Subscribed");
    });
}
closeBtn3.addEventListener("click", ClosePlan3);
closeBtn4.addEventListener("click", ClosePlan3);
planBtn.forEach((btn) => {
    btn.onclick = () => {
        planPage.classList.remove("not-active-plan");
    };
});

const monthBtn = document.querySelector(".monthly");
const yearBtn = document.querySelector(".yearly");
const price = document.querySelector(".price");
const price2 = document.querySelector(".price2");
const price3 = document.querySelector(".price3");
const yearPriceArr = ["60$", "180$", "240$"];
console.log(price);

function yearPrice() {
    monthBtn.classList.add("not-active-planBtn");
    yearBtn.classList.remove("not-active-planBtn");
    price.innerHTML = `
                    <span>60$</span> / yearly               
                `;
    price2.innerHTML = `
                    <span>180$</span> / yearly               
                `;
    price3.innerHTML = `
                    <span>240$</span> / yearly               
                `;
}
function monthPrice() {
    monthBtn.classList.remove("not-active-planBtn");
    yearBtn.classList.add("not-active-planBtn");
    price.innerHTML = `
                    <span>05$</span> / monthly               
                `;
    price2.innerHTML = `
                    <span>15$</span> / monthly               
                `;
    price3.innerHTML = `
                    <span>20$</span> / monthly               
                `;
}

yearBtn.addEventListener("click", yearPrice);
monthBtn.addEventListener("click", monthPrice);

const reviewBtn = document.querySelector(".review-header-button");
const reviewCloseBtn = document.querySelector(".reviewCloseBtn");
const reviewBox = document.querySelector(".AddReviewBoxContainer");
const ReviewName = document.querySelector(".Review-name");
const ReviewPara = document.querySelector("#textarea");
const sendReview = document.querySelector(".footer-review button");

const star1 = document.querySelector(".star1");
const star2 = document.querySelector(".star2");
const star3 = document.querySelector(".star3");
const star4 = document.querySelector(".star4");
const star5 = document.querySelector(".star5");

reviewBtn.addEventListener("click", () => {
    reviewBox.classList.remove("not-active-review");
});
reviewCloseBtn.addEventListener("click", () => {
    reviewBox.classList.add("not-active-review");
});

let starsArr = [];
function pushStars(star1, star2, star3, star4, star5) {
    starsArr.push(star1, star2, star3, star4, star5);
}
pushStars(star1, star2, star3, star4, star5);
console.log(starsArr);
let starCounter = 0;
starsArr.forEach((star) => {
    star.addEventListener("click", () => {
        starCounter = starsArr.indexOf(star) + 1;
        console.log(starCounter);
    });
});
let nameValidation;
function nameValid() {
    if (ReviewName.value != "") {
        nameValidation = true;
    } else {
        nameValidation = false;
    }
}

let paraValidation;
function reviewValid() {
    if (ReviewPara.value != "") {
        paraValidation = true;
    } else {
        paraValidation = false;
    }
}
const reviewsContainer = document.querySelector(".review-box-container");
function pushReview() {
    nameValid();
    reviewValid();
    if (nameValidation == true && paraValidation == true && starCounter != 0) {
        starCounter = 0;
        ReviewName.nodeValue == "";
        ReviewPara.nodeValue == "";
        reviewBox.classList.add("not-active-review");
        let temp = `<div class="swiper-slide">
            <div class="review-box ">
                <div class="box-header">
                    <h2>${ReviewName.value}</h2>
                    <img src="./resources/assets/images/logo.png" alt="">
                </div>
                <div class="box-stars">
                    <img src="./resources/assets/images/Frame 239.png">
                </div>
                <div class="box-para">
                    <p>${ReviewPara.value}</p>
                </div>
            </div>
          </div>`;
        reviewsContainer.innerHTML += temp;
    } else if (nameValidation == false || paraValidation == false || starCounter == 0) {
        console.log("no");
    }
}

sendReview.addEventListener("click", pushReview);

async function fetchRevApi() {
    const revRequest = await fetch("http://localhost:3000/reviews", {
        method: "GET",
    });
    const revFinalRequest = await revRequest.json();
    console.log(revFinalRequest);
    revRequestHTML(revFinalRequest);
}

fetchRevApi();



function revRequestHTML(data) {
   
    let revTemp = ``;
    data.forEach((api) => {
        revTemp += `
    <div class="swiper-slide">
        <div class="review-box ">
            <div class="box-header">
                <h2>${api.name}</h2>
                
            </div>
            <div class="box-stars">
               ${new Array(api.stars).fill(`<i class="fa-solid fa-star star1"></i>`).join("")}
            </div>
            <div class="box-para">
            <p>${api.rev}</p>
            </div>
            </div>
            </div>
            `;
    });
    document.querySelector(".swiper-wrapper").innerHTML = revTemp;
}
const swiper = new Swiper(".swiper", {
    speed: 400,
    slidePerView: 1,
    loop:true,
    navigation: {
        nextEl: ".nextbtn",
        prevEl: ".prev",
    },
});
