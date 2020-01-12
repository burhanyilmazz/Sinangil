function initMap() {
  var styledMapType = new google.maps.StyledMapType(
    [
      {
        featureType: "landscape",
        stylers: [
          {
            hue: "#FFBB00"
          },
          {
            saturation: 43.400000000000006
          },
          {
            lightness: 37.599999999999994
          },
          {
            gamma: 1
          }
        ]
      },
      {
        featureType: "road.highway",
        stylers: [
          {
            hue: "#FFC200"
          },
          {
            saturation: -61.8
          },
          {
            lightness: 45.599999999999994
          },
          {
            gamma: 1
          }
        ]
      },
      {
        featureType: "road.arterial",
        stylers: [
          {
            hue: "#FF0300"
          },
          {
            saturation: -100
          },
          {
            lightness: 51.19999999999999
          },
          {
            gamma: 1
          }
        ]
      },
      {
        featureType: "road.local",
        stylers: [
          {
            hue: "#FF0300"
          },
          {
            saturation: -100
          },
          {
            lightness: 52
          },
          {
            gamma: 1
          }
        ]
      },
      {
        featureType: "water",
        stylers: [
          {
            hue: "#0078FF"
          },
          {
            saturation: -13.200000000000003
          },
          {
            lightness: 2.4000000000000057
          },
          {
            gamma: 1
          }
        ]
      },
      {
        featureType: "poi",
        stylers: [
          {
            hue: "#94826a"
          },
          {
            saturation: -1.0989010989011234
          },
          {
            lightness: 11.200000000000017
          },
          {
            gamma: 1
          }
        ]
      }
    ],
    { name: "Styled Map" }
  );

  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(41.020121,29.0452943),
    disableDefaultUI: true,
    scrollwheel: true,
    draggable: true,
    zoomControl: true,
    scrollwheel: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.LEFT_TOP
    }
  };

  var mapElement = document.getElementById("maps");
  var map = new google.maps.Map(mapElement, mapOptions);
  var image = "assets/images/icons/mappin.png";
  var myLatLng = new google.maps.LatLng(41.020121,29.0452943);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });

  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");
}
