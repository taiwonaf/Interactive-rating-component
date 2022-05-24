let btn = document.getElementById("btn");
let ratingState = document.querySelector(".rating-state");
let thankYou = document.querySelector(".thank-you");
let ratingEl = document.getElementById("rating-el");
let rates =document.querySelectorAll(".rate");


btn.addEventListener("click", submitAction)
function submitAction() {
    thankYou.style.display = "flex"
    ratingState.style.display = "none"
}


window.onclick = (event) => {
    
    if (event.target.className === "rate") {
        rates.forEach((item) => {
            item.classList.remove("this")
        })
        let targeted = document.getElementById(event.target.id);
        targeted.classList.add("this");
        ratingEl.textContent = `You selected ${targeted.innerHTML} out of 5`
    }
}
