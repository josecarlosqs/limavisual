$(document).ready(function(){
    var btnInscribete = $("button.btnInscribete"),
        selectBox = $("button#selectBox"),
        selectBoxText = $("button#selectBox").children("span"),
        menuBox = selectBox.next(),
        regForm = $("#form-container > form"),
        imgConfirmForm = $("#form-container > form").next();
    btnInscribete.click(function(){
        location.href = "registro.html";
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
});
