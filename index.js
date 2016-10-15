
/*global $*/
/*global google*/


$(function () {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/ira_24@ukr.net", 
            method: "POST",
            data: {
            	name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val()
            },
            dataType: "json"
        }).done(function() {
            $('form').html('<h4><center>Thank you for reaching out! </br> Your message has been successfully sent. </br> I will contact you very soon!</center></h4>')
        }).fail(function(xhr, err) {
            $('form').html(xhr.statusText);
        });        
    })
});

 function initMap() {
        var uluru = {lat: 49.85, lng: 24.0166666667};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

$(document).ready(function(){
  $('.item').css('height', $(window).height());
});
$(window).resize(function() {
  $('.item').css('height', $(window).height());
});


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
