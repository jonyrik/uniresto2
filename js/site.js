function findProductsByCategory(catId, coId, f) {
    $.getJSON('/api/products/?cid=' + coId + '&cat=' + catId, f);
}

function findProductSizes(prodId, f) {
    $.getJSON('/api/products/' + prodId + '/sizes/', f);
}


function prepareProductModal(mdl, url) {
    $.get(url, function fnOnPrepareModal(data) {
        $(mdl + ' .content').html(data);
    });
    $(mdl).foundation('reveal', 'open');
}

function saveIngredientType(url) {
    $.post(url, $('#mdl-ing-type form').serialize()).done(
        function fnSaveIngType(data) {
            $('#mdl-ing-type .content').html(data);
        }
    );
}

function saveProductSize(url) {
    $.post(url, $('#mdl-prod-size form').serialize()).done(
        function fnSaveProdSize(data) {
            $('#mdl-prod-size .content').html(data);
        }
    );
}

function saveIngredient(url) {
    $.post(url, $('#mdl-ing-opt form').serialize()).done(
        function fnSaveIngOpt(data) {
            $('#mdl-ing-opt .content').html(data);
        }
    );
}

function findChildCategories(url, catId, f) {
    $.ajax({
        method: 'GET',
        url: url,
        data: "category=" + catId
    }).done(function fnOnChild(response) {
        $('#category-list').html(response);
        if (f) {
            f();
        }
    });
}

function indicatorStart(text)
{
    if(jQuery('body').find('#resultLoading').attr('id') != 'resultLoading'){
    jQuery('body').append('<div id="resultLoading" style="display:none"><div><i class="fa fa-spinner fa-pulse fa-4x"></i><div>'+text+'</div></div><div class="bg"></div></div>');
    }

    jQuery('#resultLoading').css({
        'width':'100%',
        'height':'100%',
        'position':'fixed',
        'z-index':'10000000',
        'top':'0',
        'left':'0',
        'right':'0',
        'bottom':'0',
        'margin':'auto'
    });

    jQuery('#resultLoading .bg').css({
        'background':'#000000',
        'opacity':'0.7',
        'width':'100%',
        'height':'100%',
        'position':'absolute',
        'top':'0'
    });

    jQuery('#resultLoading>div:first').css({
        'width': '250px',
        'height':'75px',
        'text-align': 'center',
        'position': 'fixed',
        'top':'0',
        'left':'0',
        'right':'0',
        'bottom':'0',
        'margin':'auto',
        'font-size':'16px',
        'z-index':'10',
        'color':'#ffffff'

    });

    jQuery('#resultLoading .bg').height('100%');
       jQuery('#resultLoading').fadeIn(300);
    jQuery('body').css('cursor', 'wait');
}

function ajaxIndicatorStop() {
    jQuery('#resultLoading .bg').height('100%');
    jQuery('#resultLoading').fadeOut(300);
    jQuery('body').css('cursor', 'default');
}

jQuery(document).ajaxStart(function () {
    indicatorStart('Cargando, espere por favor..');
}).ajaxStop(function () {
    ajaxIndicatorStop();
});


function openConfirmModal(msg, callBack) {
    $('#mdl-confirm').foundation('reveal', 'open', {});
    $('#mdl-confirm p').html(msg);
    $(document).on('opened.fndtn.reveal', '#mdl-confirm', function () {
        $('#alert-ok').off('click').on('click', function (event) {
            callBack.call();
            $('#mdl-confirm').foundation('reveal', 'close');
            return false;
        });
        $('#alert-cancel').off('click').on('click', function(event) {
            $('#mdl-confirm').foundation('reveal', 'close');
            return false;
        });
    });
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
function sameOrigin(url) {
    // test that a given url is a same-origin URL
    // url could be relative or scheme relative or absolute
    var host = document.location.host; // host + port
    var protocol = document.location.protocol;
    var sr_origin = '//' + host;
    var origin = protocol + sr_origin;
    // Allow absolute or scheme relative URLs to same origin
    return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
        (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
        // or any other URL that isn't scheme relative or absolute i.e relative.
        !(/^(\/\/|http:|https:).*/.test(url));
}
var csrftoken = getCookie('csrftoken');

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
            // Send the token to same-origin, relative URLs only.
            // Send the token only if the method warrants CSRF protection
            // Using the CSRFToken value acquired earlier
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});
