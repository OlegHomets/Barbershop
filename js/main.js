$(document).ready(() => {

    $('#masters-category').slick({
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: 60,
        slidesToShow: 3,
        focusOnSelect: true,
        // variableWidth: true,
        // adaptiveHeight: true,
    });


    new WOW({
        animateClass: 'animate__animated'
    }).init();

    $(function () {
        let input = $('#service'),
            inpVal = input.val();

        $('#service-option').on('change', function () {
            input.val(inpVal + $(this).val());
        });
    });


    $('.first-discount').click(() => {
        $('#get-discount').show();
        $('.first-discount').hide();
        $('#first-text').hide();
    });

    $('.online').click(() => {
        $('#reservation-container').css('display', 'flex');
        $('#masters-category').hide();
    });

    $('#reservation-cancel').click(() => {
        $('#reservation-container').hide();
        $('#masters-category').show();
    });

    $('#reserve-button').click(() => {

        $('.reserve-error').hide();

        let name = $('#name');
        let data = $('#data');
        let number = $('#number');
        let choice = $('.choice');
        let choice1 = $('.choice-1');
        let choice2 = $('.choice-2');

        name.css('border-color', 'rgb(185, 145, 80)');
        data.css('border-color', 'rgb(185, 145, 80)');
        number.css('border-color', 'rgb(185, 145, 80)');
        choice.css('border-color', 'rgb(185, 145, 80)');
        choice1.css('border-color', 'rgb(185, 145, 80)');
        choice2.css('border-color', 'rgb(185, 145, 80)');

        let hasError = false;

        if (!name.val()) {
            name.siblings('.reserve-error').show();
            name.css('border-color', 'red');
            hasError = true;
        }
        if (!data.val()) {
            data.siblings('.reserve-error').show();
            data.css('border-color', 'red');
            hasError = true;
        }
        if (!number.val()) {
            number.siblings('.reserve-error').show();
            number.css('border-color', 'red');
            hasError = true;
        }

        if (!choice.val()) {
            choice.siblings('.reserve-error').show();
            choice.css('border-color', 'red');
            hasError = true;
        }

        if (!choice1.val()) {
            choice1.siblings('.reserve-error').show();
            choice1.css('border-color', 'red');
            hasError = true;
        }

        if (!choice2.val()) {
            choice2.siblings('.reserve-error').show();
            choice2.css('border-color', 'red');
            hasError = true;
        }

        if (!hasError) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data:'name=' + name.val() + '&data=' + data.val() + '&number=' + number.val() + '&choice=' + choice.val() + '&choice1=' + choice1.val() + '&choice2=' + choice2.val(),
                success: () => {
                    $('#reservation-sent').show();
                    $('#reservation-content').hide();
                },
                error: () => {
                    $('#reservation-container').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, с нами по номеру телефона.');
                }
            })
        }
    });

    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
    });

    $('#header #menu a').click(() => {
        $('#header').removeClass('menu-open');
    })

});