//  /.................
let survyes = [
    {
        id:1,
one:[
    {
        id:1,
        que:"ما اكثر مواقع السوشيال ميديا التي تحبها",
        ans:["تويتر","فيسبوك","انستغرام","سناب شات"]
        
    },
    {
        id:2,
        que:"كم من الوقت تصفح هذه المواقع",
        ans:["ثلاث ساعات","اربع ساعات","سته ساعات","ساعه واحده"]
        
    },

    {
        id:3,
        que:"ماذا تتصفح على هذه المواقع",
        ans:["الاخبار","الفيديو","صور","التحدث مع الاخرين"]
        
    },

    {
        id:4,
        que:"اي نوع موبايلات تفضل ان تستخدم",
        ans:["هواوي","انفينكس","اوبو","سامسونج"]
        
    },
    {
        id:5,
        que:" ما نوع شاشه العرض الذي تفضل ان تستخدمها",
        ans:[" سامسونج"," توشيبا"," ال جي","لينوفو "]
        
    },

    {
        id:6,
        que:"في البلد الذي انت في ما اكثر موبايل يستخدم حاليا ",
        ans:["هواوي","انفينكس","اوبو","سامسونج  "]
        
    },
    
],
info:"هذا الاستطلاع عباره عن اهتماماتك عن شاشات العرض و مواقع السوشيال ميديا و موبايلات الحديثه",
img:"./img/Customer Survey-bro.png",

    },
    

]
//  /.................
let rewards = [
    {
     id:1,
     points:"200",
     price:"20",
     info:"قسيمه شراء من جوميا",
     inCart:false,
     img : "./img/jumia1.jpg",
     card:"gift",
      qun:1,
    
    },
    {
        id:2,
        points:"5000",
        price:"35",
        info:"قسيمه شراء من جوميا",
        inCart:false,
        img : "./img/jumia1.jpg",
        card:"gift",
        qun:1,
     },
     {
        id:3,
        points:"600",
        price:"35",
        info:"قسيمه شراء من جوميا",
        inCart:false,
        img : "./img/jumia1.jpg",
        card:"gift",
        qun:1,
       
     },
  {
           id:4,
           points:"1000",
           price:"50",
           info:"قسيمه شراء من جوميا",
           inCart:false,
           img : "./img/jumia1.jpg",
           card:"gift",
           qun:1,
},

{
    id:5,
    points:"400",
    price:"60",
    info:"قسيمه شراء من  كنز",
    inCart:false,
    img : "./img/canz.png",
    card:"gift",
    qun:1,
   
   },
   {
       id:6,
       points:"2000",
       price:"200",
       info:"قسيمه شراء من كنز",
       inCart:false,
       img : "./img/canz.png",
       card:"gift",
       qun:1,
    },
    {
       id:7,
       points:"3300",
       price:"400",
       info:"شاشه عرض من سوق ",
       inCart:false,
       img : "./img/jumiprize.jfif",
       card:"prize",
       qun:1,
      
    },
 {
          id:8,
          points:"350",
          price:"20",
          info:"التبرع لجمعيه خيريه",
          inCart:false,
          img : "./img/Christmas charity-cuate.png",
          card:"chirty",
          qun:1,
},  
];
$(function(){

    let itemInCart = localStorage.getItem("itemInCart") ? JSON.parse(localStorage.getItem("itemInCart")) : []
    //  /.................
let hWin = $(window).height();
let hNav = $(".navbar").innerHeight();
$(".slider").height(hWin - hNav);
//  /.................
$(".slider .more").click(function(){
    $("body,html").animate({scrollTop:$(".title-home").offset().top},700)
})
//  /.................
$(".home .rewards .img-rewards").click(function(){
    window.location="prize.html"
})
//  /.................
$(".sign-in").click(function(){
    $(".form-content").fadeIn()


 
})

//  /.................
$(".sign-up").click(function(){
    $(".form-content").fadeIn()
    $(".yes-account").addClass("d-none")
$(".no-account").addClass("d-block")
$(".no-account").removeClass("d-none")
$(".yes-account").removeClass("d-block")
  
})

//  /.................
$(".form-content .close").click(function(){
    $(".form-content").fadeOut() 
    window.location="index.html"
})
//  /.................

$("#signup").click(function(){
    if($("#a-name").val() == "" || $("#a-email").val() == "#a-email" || $("#a-pass").val() == "" ){
        $(".alert-2").fadeIn().delay(5000).fadeOut()
    }else{
localStorage.setItem("name",$("#a-name").val())
localStorage.setItem("emai",$("#a-email").val())
localStorage.setItem("pass",$("#a-pass").val())



$(".alert-1").fadeIn().delay(5000).fadeOut()


    }
})

//  /.................
let namelocal = localStorage.getItem("name")
let passlocal = localStorage.getItem("pass")
let emaillocal = localStorage.getItem("emai")
//  /.................

$("#signin").click(function(){
    if($("#b-name").val() == "" ||  $("#b-pass").val() == "" ){

    }else{
if( namelocal && namelocal == $("#b-name").val()  && passlocal && passlocal == $("#b-pass").val() ){
    
    $(".form-content").fadeOut() 
    window.location="index.html"
}else{
    
}

    }
})

if(namelocal || emaillocal){
    $(".my-account").text(namelocal)
    $(".sign-inn").fadeOut()
    $(".log-out").fadeIn()
}else{
    $(".my-account").text("")
    $(".sign-inn").fadeIn()
    $(".log-out").fadeOut()
}
$(".log-out").click(function(){
localStorage.clear()
    window.location="index.html"
})
//  /.................
let pointsLocal = localStorage.getItem("point") || "0"
let poitToNum = parseInt(pointsLocal);

function Uicard(rewards){

    let cards = rewards.map(function(i){
        const {id,points,price,info,inCart,img,card} = i
        return `
        <div  class="cart col-6 col-md-3 shadow-lg mb-3 position-relative text-center" >
         <div class="no-points p-1 text-center bg-danger text-white">  ليس لديك نقاط كافيه لهذا العرض</div> 
        <div class="info ">
          <div class="price h-50  d-flex mb-2">
             <img src="${img}" class="w-100 h-100">
          </div>
          <span class="m-auto">${price} دولار</span>
          <p class="mb-2">${info}</p>
          <h5 class="text-muted mb-2 .point">${points} <i class="fa fa-star text-warning" aria-hidden="true"></i></h5>
          <button  class="cart-btn btn btn-primary mb-2" id=${poitToNum < parseInt(points) ? "noclicking" :"clickabl"} data-id="${id}">شراء</button>
        </div>
      </div>
        
        `
    }).join("")

    $(".gift-card").html(cards)

}
Uicard(rewards)
// ,............................

$(".decreas").addClass("noclick")
function modal(id){

console.log(id)
let findIt = rewards.filter(function(i){
    return i.id == id
})
$(".need-point").text(findIt[0].points)
let itemdetail = `
    <div class="no-points p-1 text-center bg-danger text-white">  ليس لديك نقاط كافيه لهذا العرض</div> 
    <div class="info ">
      <span class="m-auto p-2">${findIt[0].price} دولار</span>
      <p class="m-3 p-2">${findIt[0].info}</p>
      <h5 class="text-muted mb-2 p-2 .point-modal">${findIt[0].points} <i class="fa fa-star text-warning"></i></h5>
    
     </div>
    
    
    `

    if(poitToNum < parseInt(findIt[0].points)  ){
        $(".addtocart").addClass("noclick")
    }else{
        $(".addtocart").removeClass("noclick")
    }
 
    $(".title-point-modal .point").text(pointsLocal)
 let qunnum = 1
 $(".num-qantatiy").text(qunnum)
 $(".modal-details").html(itemdetail)
 $(".increas").click(function(){
   
    $(".decreas").removeClass("noclick")
    qunnum += 1
    let item = findIt.map(function(i){
        if(i.id == id){
            return {...i,qun:qunnum}
        }else{
            return i
        }
    })
    let z = item[0].qun * parseInt(item[0].points);
 
    $(".num-qantatiy").text(qunnum)
    $(".need-point").text(z)
})

$(".decreas").click(function(){
   
    qunnum -= 1
    let item = findIt.map(function(i){
        if(i.id == id){
            return {...i,qun:qunnum}
        }else{
            return i
        }
    })
    let z = item[0].qun * parseInt(item[0].points);
   
    $(".num-qantatiy").text(qunnum)
    if (qunnum == 1){
        qunnum = 1
        $(".need-point").text(findIt[0].points)
     $(".decreas").addClass("noclick")
    }else{
        $(".need-point").text(z)
    }
    
})

 $(".addtocart").click(function(){
    let pointsLocal = localStorage.getItem("point") || "0"
let poitToNum = parseInt(pointsLocal);
    let item = findIt.map(function(i){
        if(i.id == id){
            return {...i,qun:qunnum}
        }else{
            return i
        }
    })
    console.log(  $(".point-modal").text())
let z = item[0].qun * parseInt(item[0].points);
// let x = poitToNum
    if (poitToNum < z){
           $(".masge-modal span").fadeIn().text("ليس لديك نقاط كافيه").delay(4000).fadeOut()
           
    $(".title-point-modal .point").text(pointsLocal)
    }else{

        itemInCart = [...itemInCart,item[0]]
        localStorage.setItem("itemInCart",JSON.stringify(itemInCart))
        $(".number-cart").text(itemInCart.length)
        localStorage.setItem("point", poitToNum - z)
        
    $(".title-point-modal .point").text(poitToNum)
    $(".modal-card").fadeOut()
    }

 })


}
// ..............................................................................................

$(".modal-card").on("click",".btn-close-modal",function(){
    $(".modal-card").fadeOut()
})
$(".gift-card").on("click","button",function(e){
    // $(this).find("button").attr("id") == "noclicking"
    if(e.target.id == "noclicking"){
          
        $(this).parents(".cart").find(".no-points").fadeIn().delay(600).fadeOut()
        // modal($(this).data("id"))
        // $(".modal-card").fadeIn()
    }else{
        
         modal($(this).data("id"))
           $(".modal-card").fadeIn()

    }
 
})
//  /..................................................................................................
$(".catogry-rewards li").click(function(){
  let r= $(this).data("card")
let cards = rewards.filter(function(i){
    return i.card == r
})

Uicard(cards)

if(r == "all"){
    Uicard(rewards)
}

$(".catogry-rewards li").removeClass("active")
$(this).addClass("active")
})
//  /.................
function survyOpinion(survyes){
 let survy = survyes.map(function(i){
     const {info , id , img } = i
     return `
     <div class="col-md-8 p-2 mb-3 border border-primary mx-auto">
     <div class="row">
            <div class="col ml-2"><img src="${img}" class="w-100 h-100"></div>
            <div class="col ml-2 d-flex justify-content-around   flex-column">
              <p class="text-monospace"> ${info}  </p>
                <btn class="btn btn-outline-primary mb-2 start-survy" >بدء الاستطلاع</btn>
             </div>
     </div>
</div>
     `
 }).join("")

 $(".survy-opinion").html(survy)
}

survyOpinion(survyes)




// //  /.................

$(".number-survy").text(survyes.length)
$(".start-survy").on("click",function(){
    window.location="startsurvy.html"
})
// / //  /.................
let count = 0;

function opinionContent(count){
    $(".title-opinion").text(``)
$(".opinion-content").html("")
    const {que,ans} = survyes[0].one[count]

      

$(".title-opinion").text(`${que}`)
 let xx = ans.map((el,i) => {
   return `<li  class="border border-primary col-7 m-2 p-2"><input type="radio" name="w"> ${el}</li>  `
}).join("")
$(".opinion-content").html(xx)
}
opinionContent(count)
//  /.................

let points =125
let cc = parseInt(pointsLocal)
$(".num-point").text(pointsLocal)
$(".next-survy").addClass("noclick")
$(".next-survy").click(function(){
 
    count += 1

    if(count >= survyes[0].one.length ){
        points +=cc

        localStorage.setItem("point",points)
        $(".result-opinion p").text(`  لقد انهيت الاستطلاع ولديك  ${"125"} نقطة`)
        $(".result-opinion p").fadeIn(200).delay(6000).fadeOut(300)
$(".form input").fadeOut()
$(".num-point").text(pointsLocal)



    }else{
        opinionContent(count)

    }
    $(this).addClass("noclick")

   })
   //  /.................


    $(".form").on("change",function(e){
              $(".opinion-content li").removeClass("choose")
       e.target.parentElement.classList.add("choose")
 
    
        $(".next-survy").removeClass("noclick")
    
    })
   //  /.................



$(".list-home").click(function(){
    $(".next-survy").removeClass("noclick")
    window.location ="index.html"
})
//  /.................


function carts(items){
let item = items.map(function(i){
    const {qun , img , price , points }= i
    return `
    <div class="col-md-5 m-2 shadow-lg p-2 bg-dark">
          <div class="row">
                <div class="col">
                  <img src="${img}" class="w-100 h-100">
                </div>
                  
                <div class="col p-2">
                  <span class="d-inline p-1 m-1  bg-success text-white  ">الكميه</span><span class="d-inline p-1 m-1  bg-primary text-white  " >${qun}</span>
                </div>


                <div class="col  p-2">
                  <span class="d-inline p-1 m-1  bg-success text-white  ">القيمه</span> <span class="text-white d-inline bg-success">$</span><span class="d-inline p-1 m-1  bg-primary text-white  ">${parseInt(price)* qun}</span>
                </div>

          </div>
        </div> 
    `
}).join("")

$(".carts-detail").html(item)
}
carts(itemInCart)

$(".number-cart").text(itemInCart.length)
})
