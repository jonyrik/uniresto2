
$(document).ready(function() {
    $('[data-addmore-nested]').click(function() {
        var prefix = $(this).attr('data-addmore-nested');
        var form_idx = $('#id_' + prefix + '-TOTAL_FORMS').val();
        $('[data-formset-table="' + prefix + '"] tbody').append(
            $('[data-formset-empty="' + prefix + '"] tbody').html().replace(/__prefix__/g, form_idx));
        $('#id_' + prefix + '-TOTAL_FORMS').val(parseInt(form_idx) + 1);
    });
});
