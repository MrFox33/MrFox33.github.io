  function initMap() {
        var uluru = {lat: 52.739219, lng: 15.228668999999968};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }