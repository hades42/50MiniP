const panels = document.querySelectorAll(".panel");

const removeActive = () => {
    panels.forEach(p => {
        p.classList.remove("active");
    })
};
const expandFunc = (e) =>{
    removeActive();
    if(e.target.classList.contains("panel")){
        e.target.classList.add("active");
    } else if(e.target.parentNode.classList.contains("panel")){
        e.target.parentNode.classList.add("active");
    }
} 

panels.forEach(p => p.addEventListener("click", expandFunc));

