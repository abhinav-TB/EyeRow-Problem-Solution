$(document).ready(function () {

    $("form").submit(function (e) {
        e.preventDefault();
        // alert("hi")
        var values = {};
        $.each($('form').serializeArray(), function(i, field) {
            values[field.name] = field.value;
            localStorage.setItem(field.name,field.value);
        });
        // Initialize and add the map
     
    // The location of Uluru
    var uluru = {lat: values.latitude, lng: values.longitude};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
    
    location.replace("/map.html")
        
    });

})