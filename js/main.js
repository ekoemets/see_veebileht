$( document ).ready(function() {
    //Image carousel
    const images = $(".carousel-img");
    let currentId = 0
    function selectImage(id, next){
        images.eq(id).css("display", "none")
        let newId;
        if(next){
            newId = (id == images.length - 1) ? 0 : id + 1;
        }
        else{
            newId = (id == 0 ) ? images.length - 1 : id - 1;
        }
        images.eq(newId).css("display", "block")
        currentId = newId
    }
    $(".carousel-left").click(() => {
        selectImage(currentId, false);
    });
    $(".carousel-right").click(() => {
        selectImage(currentId, true)
    });

    let currentPage = $("#main");
    $(".nav-a").click(function(event) {
        event.preventDefault();
        currentPage.css("display", "none")
        let text = $(this).text();
        switch(text){
            case "Home":
                currentPage = $("#main");
                break
            case "About":
                currentPage = $("#about");
                break
            case "Contact Us":
                currentPage = $("#contact");
                break
            case "Feed":
                currentPage = $("#feed");
        }
        if(text == "Feed"){
            currentPage.css("display", "flex")
        }
        else{
            currentPage.css("display", "block")
        }
        $(".active-nav").removeClass("active-nav");
        $(this).addClass("active-nav")
    })

    $(".nav-button").click(function(){
        let navLinks = $(".nav-div");
        console.log(navLinks.css("display"))
        if(navLinks.css("display") === "none"){
            navLinks.css("display", "flex");
        }
        else{
            navLinks.css("display", "none");
        }
    })
});
