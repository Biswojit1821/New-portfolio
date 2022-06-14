const projects = document.querySelectorAll(".project")
const nextbtn = document.getElementById("Next");
const prevbtn = document.getElementById("Prev");
var i=0;

nextbtn.addEventListener(("click"),()=>{
    clearInterval(interv)
    if(i<projects.length){ 
        i++;  
}else{
    i=0;
    i++;
}
next(i);
interv = setInterval(helper,5000)
})
prevbtn.addEventListener(("click"),()=>{

if(i!==0){
    i--;
    prev(i);
    clearInterval(interv)
    interv = setInterval(helper,5000)
}

})
const helper = ()=>{
    if(i<projects.length){ 
        i++;  
}else{
    i=0;
    i++;
}
next(i);   
}
var interv =setInterval(helper,5000)

const next = (i) =>{
if(i==projects.length){
    projects[i-1].classList.remove("active");
    projects[0].classList.add("active") 
}else{
    projects[i-1].classList.remove("active");
    projects[i].classList.add("active");
}

}
const prev = (i) =>{
    if(!(i<0)){
        projects[i+1].classList.remove("active");
        projects[i].classList.add("active")
    }
}