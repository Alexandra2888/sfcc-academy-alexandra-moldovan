$(".image1").click(function() {
    $(".image1").css("filter", "none");
    $(".image2").css("filter", "grayscale(100%)");
    $("#option2").hide();
    $("#option1").show();
});

$(".image2").click(function() {
    $(".image2").css("filter", "none");
    $(".image1").css("filter", "grayscale(100%)");
    $("#option1").hide();
    $("#option2").show();
});
