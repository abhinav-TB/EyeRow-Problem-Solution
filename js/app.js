$(document).ready(function () {

    $("form").submit(function (e) {
        e.preventDefault()
        var values = {};
        $.each($('form').serializeArray(), function(i, field) {
            values[field.name] = field.value;
            localStorage.setItem(field.name,field.value);
        });
    
    location.replace("/map.html")
        
    });

})