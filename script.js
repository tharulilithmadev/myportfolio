const text = [
"Grade 11 Student",
"ICT Enthusiast",
"Future Software Engineer",
"Web Developer"
];

let count = 0;
let index = 0;
let current = "";
let letter = "";

(function type(){

if(count===text.length){
count=0;
}

current=text[count];
letter=current.slice(0,++index);

document.getElementById("typing").textContent=letter;

if(letter.length===current.length){

count++;
index=0;

setTimeout(type,1200);

}else{

setTimeout(type,120);

}

})();

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(sec=>{

const top=window.scrollY;
const offset=sec.offsetTop-350;

if(top>offset){
sec.style.opacity=1;
sec.style.transform="translateY(0)";
}

});

});

sections.forEach(sec=>{
sec.style.opacity=0;
sec.style.transform="translateY(50px)";
sec.style.transition="1s";
});