$(document).ready(function(){
    $(".catalog__item").click(function(e) {
        e.preventDefault();
        $(".catalog__item").removeClass('active');
        $(this).addClass('active');
        var text = $(".catalog__item.active").text();
        $('.path__actual').text(text);
    })
    $(".filter-results__category").click(function(e) {
        e.preventDefault();
        $(".filter-results__category").removeClass('active');
        $(this).addClass('active');
    })
    $(".filter-results__item").click(function(e) {
        e.preventDefault();
        $(".filter-results__item").removeClass('active');
        $(this).addClass('active');
    })
    $(".filter-form__reset").click(function(e) {
        e.preventDefault();
        $('.filter-form')[0].reset();
        $('select').trigger('refresh');
    })
    $(function() {
        $('select').styler({
            selectSmartPositioning: '-1'
        });
    });
    $(function(){
        $(".filter-form__range").slider({
            range: true,
            min: 0,
            max: 10000,
            values: [ 50, 7500 ],
            slide: function( event, ui ) {
                $("#price").val(ui.values[ 0 ] + " ₽                        " + ui.values[ 1 ] + " ₽");
            }
        });
        $("#price" ).val( $( ".filter-form__range" ).slider( "values", 0 ) + " ₽                        " + $( ".filter-form__range" ).slider( "values", 1 ) + " ₽");
    });
});

