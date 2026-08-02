// Explore Blogs Button

let exploreBtn = document.querySelector("#home button");

exploreBtn.addEventListener("click", function(){
    document.querySelector("#blogs").scrollIntoView({
        behavior:"smooth"
    });
});


// Contact Form

let form = document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});


// Page Load Message

window.addEventListener("load", function(){

    console.log("Student Guide Blog Website Loaded Successfully");

});
