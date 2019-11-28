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


    $(".nav-a").click(function(event) {
        event.preventDefault();
        let text = $(this).text();
        let currentPage;
        if(text == "Home"){
            currentPage = $("#main");
        }
        else if(text == "About"){
            currentPage = $("#about");
        }
        else if(text == "Contact Us"){
            currentPage = $("#contact");
        }
        $(".active-page").removeClass("active-page")
        $(".active-nav").removeClass("active-nav");
        $(this).addClass("active-nav")
        currentPage.addClass("active-page");
    })
});
