function initComboStep3(catId, prodId, comId, prodSizeId) {
    var emptyOption = '<option value="">---------</option>';
    $('.delete-product').on('click', function() {
        var prodName = $(this).attr('data-name');
        var href = $(this).attr('href');
        openConfirmModal('Está seguro que desea eliminar ' + prodName + '?',
                function() {
                    location = href;
                }
        );
        return false;
    });

    $('#' + catId).on('change', function(event) {
        var val = $(this).val();
        var el = $('#' + prodId).empty();
        el.append($(emptyOption));
        findProductsByCategory(val, comId, function(data){
            if (data) {
                for (var i in data) {
                    el.append($('<option value="' + data[i].id + '">' + data[i].name + '</option>'));
                }
            }
        });
        el.trigger('change');
    });

    $('#' + prodId).on('change', function(event) {
        var val = $(this).val();
        var el = $('#' + prodSizeId).empty();
        el.append($(emptyOption));
        if (val) {
            findProductSizes(val, function(data){
                for (var i in data) {
                    el.append($('<option value="' + data[i].id + '">' + data[i].unit_value + '</option>'));
                }
            });
        }
    });
    $('#' + catId).trigger('change');
}

