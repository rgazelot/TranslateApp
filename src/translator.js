$(function(){
    init();

    $('html').on('click', function(e) {
        if (window.getSelection() && (e.ctrlKey || e.metaKey)) {
            if (window.getSelection().toString() !== '') {
                translate(window.getSelection().toString(), e.pageX, e.pageY);
            }
        }
    });
});

function init() {
    var html = '<div id="translator-app-popup"><p></p><div></div><span>2</span></div>';
    $('body').append(html);
}

function translate(query, XAxisPosition, YAxisPosition) {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: 'https://www.googleapis.com/language/translate/v2?key=' + apiKey + '&target=' + lang + '&q=' + query
    }).done(function(response) {
        $('#translator-app-popup p').text(response.data.translations[0].translatedText);
        $('#translator-app-popup').toggle();
        window.setTimeout(function() {
            $('#translator-app-popup').fadeOut(200);
        }, 4000);
    });
}