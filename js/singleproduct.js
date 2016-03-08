
var quoteAjax = null;
var timeoutQuote = null;

function quoteSingleProduct(frm) {
    if (timeoutQuote) {
        clearTimeout(timeoutQuote);
    }

    timeoutQuote = setTimeout(function() {
        if (quoteAjax != null) {
            quoteAjax.abort();
        }
        quoteAjax = $.ajax({
            type: 'POST',
            url: frm.attr('action'),
            data: frm.serialize(),
            global: false,
            error: function() {
                $('span.total').fadeOut();
            },
            success: function(data) {
                $('span.total .price').html('$ ' + data['price']).parent().fadeIn();
            }
        });
    }, 1000);
}

$(document).ready(function() {
    function fireQuotation() {
        var form = $('form.quote');
        quoteSingleProduct(form);
    }

    $('form.quote input, form.quote select').on('change', fireQuotation);
    $('form.quote input').on('keypress', fireQuotation);
    fireQuotation();
});
