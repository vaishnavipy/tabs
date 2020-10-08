
window.onload = function(){
let content; let active_btns;
let my_btns = document.getElementsByTagName("BUTTON");
[...my_btns].forEach(elm => elm.addEventListener("click",myFunc));

function myFunc(){
active_btns = document.getElementsByTagName("BUTTON");

   
   if(this.id == "history"){
    console.log(this.id)
    this.classList.remove("not_active");
    this.classList.add("active");

    [...active_btns].forEach(elm => {
        console.log("loop")
        if(elm.id != "history"){
            console.log("not history")
            elm.classList.remove("active");
            elm.classList.add("not_active")   
        }
        })

   

   content = document.querySelectorAll(".content");
   content.forEach(elm => {

    if(elm.id == "history_content"){

        return elm.style.display = "block";
    }else{

         elm.style.display = "none";  
    }

   })



   }
   if(this.id == "vision"){
    console.log(this.id)
    this.classList.remove("not_active");
    this.classList.add("active");

    [...active_btns].forEach(elm => {

        if(elm.id != "vision"){
            console.log("hello")
            elm.classList.remove("active");
            elm.classList.add("not_active")   
        }
        })




   content = document.querySelectorAll(".content");
   content.forEach(elm => {

    if(elm.id == "vision_content"){

        return elm.style.display = "block";
    }else{

         elm.style.display = "none";  
    }

   })



   }
   if(this.id == "goals"){
    console.log(this.id)
    this.classList.remove("not_active");
    this.classList.add("active");

        [...active_btns].forEach(elm => {

        if(elm.id != "goals"){
            elm.classList.remove("active");
            elm.classList.add("not_active")   
        }
        })



   content = document.querySelectorAll(".content");
   content.forEach(elm => {

    if(elm.id == "goals_content"){

        return elm.style.display = "block";
    }else{

         elm.style.display = "none";  
    }

   })



   }









}

}
