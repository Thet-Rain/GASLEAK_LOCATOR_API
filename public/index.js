
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

    //gas leak icon marker 
    const gasLeak = "http://maps.google.com/mapfiles/kml/shapes/firedept.png"; 

    const features = [
        {
          position: new google.maps.LatLng(40.7166057, -74.01129)
        },
        {
          position: new google.maps.LatLng(40.7438819, -73.8915876)
        }
    ] 

    //Gas leaker Marker info window
    

    for (let i = 0; i < features.length; i++) {
         //Info Window when gasleak marker is clicked
     const contentString =
     '<div id="content">' +
     '<div id="siteNotice">' +
     "</div>" +
     '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
     '<div id="bodyContent">' +
     "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
     "sandstone rock formation in the southern part of the " +
     "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
     "south west of the nearest large town, Alice Springs; 450&#160;km " +
     "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
     "features of the Uluru - Kata Tjuta National Park. Uluru is " +
     "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
     "Aboriginal people of the area. It has many springs, waterholes, " +
     "rock caves and ancient paintings. Uluru is listed as a World " +
     "Heritage Site.</p>" +
     '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
     "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
     "(last visited June 22, 2009).</p>" +
     "</div>" +
     "</div>";
   const infowindow = new google.maps.InfoWindow({
     content: contentString,
   });   

    const marker = new google.maps.Marker({
          position: features[i].position,
          icon: gasLeak,
          map: map,
        });
    marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              map,
              shouldFocus: false,
            });
          });

      }
        
   
    }

    
     


    
    