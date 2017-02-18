
// Scroll Effect //

$(window).scroll(function () {
if ($(window).scrollTop() >= $(window).height()){
$('.navbar').css('background','rgba(0, 0, 0,0.8)');
} else {
$('.navbar').css('background','transparent');
}
});

$(window).load(function () {
if ($(window).scrollTop() >= $(window).height()){
$('.navbar').css('background','rgba(0, 0, 0,0.8)');
} else {
$('.navbar').css('background','transparent');
}
});


// Scroll Effect Ends //
