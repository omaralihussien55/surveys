let header_height = document.querySelector("header").offsetHeight;
let nav_height = document.querySelector(".navbar").offsetHeight;
let slider_height = document.querySelector(".slider");
slider_height.style.height = header_height - nav_height;

document.querySelector("header").style.paddingTop = nav_height;

let socialBtn = document.querySelector(".social-btn");
let socialContent = document.querySelector(".social-content");
let socialUL = document.querySelector(".social-content-ul");
let sociaBtnContent = document.querySelector(".social-btn-content")

socialBtn.addEventListener("click",function(){

  
if(socialContent.classList.contains("show")&& socialUL.classList.contains("show")){
    sociaBtnContent.classList.remove("show");
    sociaBtnContent.classList.add("unshow");
    socialUL.classList.toggle("show") ;
    setTimeout(function(){
   
        socialContent.classList.toggle("show")
    },200)
 
}else{
    sociaBtnContent.classList.remove("unshow");
    sociaBtnContent.classList.add("show");
    socialContent.classList.toggle("show");
setTimeout(function(){
    socialUL.classList.toggle("show");
},200)
};

})

// add class select to a in navbar 

let linkScroll = document.querySelectorAll(".link-scroll");
let sectionBlock = document.querySelectorAll(".block");

linkScroll.forEach(el => {
    el.addEventListener("click",function(e){
linkScroll.forEach(i=> i.classList.remove("select"))
 e.target.classList.add("select")
//  let data =e.currentTarget.dataset.scroll
//  document.getElementById(data).scrollIntoView({behavior:"smooth",block:"end"})
 })

})
$(function(){
    $(".link-scroll").click(function(){

        let data= $(this).data("scroll")
        

        $("body,html").animate({
            scrollTop:$(`#${data}`).offset().top - nav_height
        })
    })
})
document.onscroll = function(){
 sectionBlock.forEach(i =>{
     if(window.scrollY + 5 > i.offsetTop - nav_height  ){
      
         let id = i.id
         linkScroll.forEach(i=> {
             i.classList.remove("select");
            document.querySelector(`[data-scroll=${id}]`).classList.add("select")
            });
         
     }
 })
   
}


let arrProject = [
    {
        id:1,
        photo:"https://storyset.com/illustration/calculator/amico",
        title:"calculator",
        desc:"Adjust your calculations with ease",
        site:"https://omaralihussien55.github.io/calculator/"
    
    },
    {
        id:2,
        photo:"https://storyset.com/illustration/customer-survey/bro",
        title:"Survey",
        desc:"Say your opinion and win prizes",
        site:"https://omaralihussien55.github.io/surveys/"
    
    },
];

let projectContent = document.querySelector(".project-content");
let item = arrProject.map((i)=>{
    const {id , photo , title , desc ,site} = i
    return`
    <div class="col-10 col-md-4 mx-auto mx-md-0 mb-3">
    <div class="div-col border shadow ">

     <div class="h-50">
       <img src="${photo}" class="w-100 h-100">
     </div>
     <h5 class="p-1 mb-2 text-muted">${title}</h5>
     <p class="mb-2 p-1 text-info">${desc}</p>
     <a href="${site}" target="_blank" class="btn btn-outline-success mb-2 text-primary">view site</a>
    </div>
</div>
    `
});

projectContent.innerHTML = item.join("") 
