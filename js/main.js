// Inicio código configuração plugin slider depoimentos

$(".rslides").responsiveSlides({
    auto: true, // Boolean: Animate automatically, true or false
    speed: 500, // Integer: Speed of the transition, in milliseconds
    timeout: 5000, // Integer: Time between slide transitions, in milliseconds
});
// Fim código configuração plugin slider depoimentos



// Início código configuração plugin slider fotos portfolio

$(".rslides_portfolio").responsiveSlides({
    auto: true, // Boolean: Animate automatically, true or false
    speed: 500, // Integer: Speed of the transition, in milliseconds
    timeout: 4000, // Integer: Time between slide transitions, in milliseconds
    pager: true, // Boolean: Show pager, true or false
    nav: false, // Boolean: Show navigation, true or false
});
// Fim código configuração plugin slider fotos portfolio


// Início código configuração plugin visibility

Visibility.onVisible(function() {
    setTimeout(function() {
        $(".introducao h1").addClass("animated fadeInDown");
    }, 400);
    setTimeout(function() {
        $(".introducao blockquote").addClass("animated fadeInDown");
    }, 800);
    setTimeout(function() {
        $(".introducao .btn").addClass("animated fadeInDown");
    }, 1200);
    setTimeout(function() {
        $(".animar").addClass("animated fadeInDown");
    }, 1600);

    setTimeout(function() {
        $(".introducao-interna h1").addClass("animated fadeInDown");
    }, 400);
    setTimeout(function() {
        $(".introducao-interna p").addClass("animated fadeInDown");
    }, 800);
    setTimeout(function() {
        $(".animar-interno").addClass("animated fadeInDown");
    }, 1200);
});
// Final código configuração plugin visibility