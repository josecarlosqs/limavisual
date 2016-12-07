$(document).ready(function(){
    var btnInscribete = $("button.btnInscribete"),
        selectBox = $("button#selectBox"),
        selectBoxText = $("button#selectBox").children("span"),
        menuBox = selectBox.next(),
        regForm = $("#form-container > form"),
        imgConfirmForm = $("#form-container > form").next(),
        linkDayCharla = $(".linkDayCharla"),
        topLink = $(".topLink");
    btnInscribete.click(function(){
        location.href = "https://josecarlosqs.github.io/limavisual/registro.html";
    });
    selectBox.click(function(e){
        e.preventDefault();
        menuBox.toggle("fast");
    });
    menuBox.find("label").click(function(e){
        e.preventDefault();
        selectBoxText.text($(this).children("span").text());
        menuBox.fadeOut("fast");
    });
    regForm.submit(function(e){
        e.preventDefault();
        regForm.slideUp("fast");
        imgConfirmForm.fadeIn("fast");
    });
    linkDayCharla.click(function(){
        linkDayCharla.removeClass("active");
        $(this).addClass("active")
    });
    topLink.click(function(){
        topLink.removeClass("active");
        $(this).addClass("active");
    });
});
