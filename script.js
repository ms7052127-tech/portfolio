let words = ["Developer","Designer","Freelancer"];
let i=0,j=0;
let deleting=false;

function type(){
 let current=words[i];

 if(!deleting){
   document.getElementById("type").textContent =
   current.slice(0,++j);
   if(j==current.length) deleting=true;
 }
 else{
   document.getElementById("type").textContent =
   current.slice(0,--j);
   if(j==0){
     deleting=false;
     i=(i+1)%words.length;
   }
 }

 setTimeout(type,150);
}
type();

function scrollToSection(id){
 document.getElementById(id).scrollIntoView({
 behavior:"smooth"
 });
}


  document.getElementById("year").textContent = new Date().getFullYear();