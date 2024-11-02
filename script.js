let  active = 3;
let mncircles = document.querySelectorAll(".mncircle");
gsap.to(mncircles[active - 1],{
    opacity: 0.7
})

mncircles.forEach(function(val , index){
    val.addEventListener("click" , function(){
        gsap.to(".circle" ,{
            rotate:(3-(index+1))*10,
            ease: Expo.easeInOut,
            duration:0.7,  
        })
        // initially every mncircles are gray on click
        grayout();

        //only the clicked element are not visible
        gsap.to(this , {
            opacity: 0.5
        })
    })
})

//Function to every mncircles gray
function grayout(){
    gsap.to(mncircles ,{
        opacity: .08 
    })
}
gsap.to(".circle" , {
rotate: 0 ,
ease: Expo.easeInOut,
duration: 2,
})