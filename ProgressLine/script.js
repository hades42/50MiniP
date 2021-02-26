const progress = document.getElementById("progress"); 
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles= document.querySelectorAll(".circle");

let currActive = 1;

const updated = () =>{
    circles.forEach((cir, index) =>{
        if(index < currActive){
            cir.classList.add("active");
        } else {
            cir.classList.remove("active");
        }
    })

    const actives = document.querySelectorAll(".circle.active");

    progress.style.width = (actives.length - 1)/ (circles.length - 1) * 100 + "%";

    if(currActive === 1){
        prev.disabled = true;
    } else if (currActive === circles.length){
        next.disabled = true;  
    } else{
        prev.disabled = false;
        next.disabled = false;
    }
}
next.addEventListener("click", ()=>{
    currActive++;

    if(currActive > circles.length){
        currActive = circles.length;
    }
   updated();

})

prev.addEventListener("click", ()=>{
    currActive--;
    if(currActive < 1){
        currActive = 1; 
    }

    updated();
})