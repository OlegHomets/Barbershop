$(document).ready(() => {

    $('#masters-category').slick({
        infinite: true,
        dots: true,
        centerMode: true,
        centerPadding: 60,
        slidesToShow: 3,
        focusOnSelect: true,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 930,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
        ]
    });


    new WOW({
        animateClass: 'animate__animated'
    }).init();

    let input = $('#service'),
        inpVal = input.val();

    $('#service-option').on('change', function () {
        input.val(inpVal + $(this).val());
    });


    $('.first-discount').click(() => {
        $('#get-discount').show();
        $('.first-discount').hide();
        $('#first-text').hide();
    });

    $('.online').click((e) => {
        $('#reservation-container').css('display', 'flex');
        let text = $(e.target).parent() .siblings('.category-name').text();
        $('#select-barber').val(text);
    });

    $('#reservation-cancel-close, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close') {
            $('#reservation-container').hide();
        }
    });

    $('#reserve-button').click(() => {

        $('.reserve-error').hide();

        let name = $('#name');
        let data = $('#data');
        let number = $('#number');
        let haircut = $('.haircut');
        let barber = $('.barber');
        let time = $('#time');

        name.css('border-color', 'rgb(185, 145, 80)');
        data.css('border-color', 'rgb(185, 145, 80)');
        number.css('border-color', 'rgb(185, 145, 80)');
        haircut.css('border-color', 'rgb(185, 145, 80)');
        barber.css('border-color', 'rgb(185, 145, 80)');
        time.css('border-color', 'rgb(185, 145, 80)');

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

        if (!haircut.val()) {
            haircut.siblings('.reserve-error').show();
            haircut.css('border-color', 'red');
            hasError = true;
        }

        if (!time.val()) {
            time.siblings('.reserve-error').show();
            time.css('border-color', 'red');
            hasError = true;
        }

        if (!barber.val()) {
            barber.siblings('.reserve-error').show();
            barber.css('border-color', 'red');
            hasError = true;
        }

        if (!hasError) {
            $.ajax({
                // type: 'post',
                // url: 'mail.php',
                // data: 'name=' + name.val() + '&data=' + data.val() + '&number=' + number.val() + '&haircut=' + haircut.val() + '&barber=' + barber.val() + '&time=' + time.val(),
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
    });

    $('#close').click(() => {
        $('#header').removeClass('menu-open');
    });

    $('#number').mask('+7(999) 999-99-99');



});