$('.tab').on("click", function(){

    if ($(this).hasClass("tab1"))  {
        $(".tab1").addClass("active");
        $(".tab2").removeClass("active");
    }
});
