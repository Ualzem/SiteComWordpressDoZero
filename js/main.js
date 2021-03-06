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


// INÍCIO DO CÓDIGO PARA ENVIAR EMAIL DA PÁGINA CONTATO
// Formulario

$('.formphp').on('submit', function() {
    var emailContato = "mezlau@yahoo.com.br"; // Escreva aqui o seu e-mail

    var that = $(this),
        url = that.attr('action'),
        type = that.attr('method'),
        data = {};

    that.find('[name]').each(function(index, value) {
        var that = $(this),
            name = that.attr('name'),
            value = that.val();

        data[name] = value;
    });

    $.ajax({
        url: url,
        type: type,
        data: data,
        success: function(response) {

            if ($('[name="leaveblank"]').val().length != 0) {
                $('.formphp').html("<div id='form-erro'></div>");
                $('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
                    .hide()
                    .fadeIn(1500, function() {
                        $('#form-erro');
                    });
            } else {

                $('.formphp').html("<div id='form-send'></div>");
                $('#form-send').html("<span>Mensagem enviada!</span><p>Em breve eu entro em contato com você. Abraços.</p>")
                    .hide()
                    .fadeIn(1500, function() {
                        $('#form-send');
                    });
            };
        },
        error: function(response) {
            $('.formphp').html("<div id='form-erro'></div>");
            $('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
                .hide()
                .fadeIn(1500, function() {
                    $('#form-erro');
                });
        }
    });

    return false;
});
// FINAL DO CÓDIGO PARA ENVIAR EMAIL DA PÁGINA CONTATO