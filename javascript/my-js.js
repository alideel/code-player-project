$(".tab").hover(
    function() {
        $(this).addClass("highlighted-button");
    }
    ,
    function() {
        $(this).removeClass("highlighted-button");
    }
)
$(".tab").click(function() {
    $(this).toggleClass("active");
    // $(this).removeClass("highlighted-button");
    let panalId = $(this).attr("id") + "-panal";
    $( "." + panalId).toggleClass("hidden");
    let numberOfActivePanal = 4 - $(".hidden").length;
    if(numberOfActivePanal != 0)
    $(".panal").width($(window).width() / numberOfActivePanal - 15 );
})
function updateContents () {
    $("iframe").contents().find("html").html(
        "<html> <head> <style type = 'text/css'>" + 
        $(".css-panal").val() +
        " </style> </head> <body>" +
        $(".html-panal").val() +
        "</body> </html>"
        );
    // document.getElementsById("result").contentWindow.eval($(".javascript-panal").val());
    document.getElementsByTagName('iframe')[0].contentWindow.eval($(".javascript-panal").val());
}
$(".panal").height($(window).height() - $("nav").height() - 15);
$(".panal").width($(window).width() / 2 - 15 );
updateContents();
$("textarea").on("change keyup paste" , function () {
    updateContents();
});