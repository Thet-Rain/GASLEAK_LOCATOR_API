
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7454486, lng: -73.8951494},
          zoom: 12,
          mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID]
    }, // here´s the array of controls
    disableDefaultUI: true, // a way to quickly hide all controls
    mapTypeControl: false,
    scaleControl: true,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE 
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
        });

    //gas leak icon
    const gasLeak = "http://maps.google.com/mapfiles/kml/shapes/firedept.png"; 

    const features = [
        {
          position: new google.maps.LatLng(40.7166057, -74.01129)
        },
        {
          position: new google.maps.LatLng(40.7438819, -73.8915876)
        }
    ] 

    for (let i = 0; i < features.length; i++) {
        const marker = new google.maps.Marker({
          position: features[i].position,
          icon: gasLeak,
          map: map,
        });
      }
        
      }

     


    
    