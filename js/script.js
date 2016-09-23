$("#button").click(function () { 
    $("#frame").attr("src", "http://www.google.com/");
});


$("a").each(function(){
    var el = $(this);
    el.click(function() {
        $("#frame").attr("src", el.data('href'));
    })
})