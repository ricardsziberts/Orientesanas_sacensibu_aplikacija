// Kartes inicializācija
function initMap() {
    // Izveido kartes objektu
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.5074, lng: -0.1278}, // Iestata sākotnējo kartes centru (Londona, piemēram)
      zoom: 10 // Iestata sākotnējo kartes mērogu
    });
  
    // Ielādē kontrolpunktu datus no API vai datu bāzes
    var controlPoints = [
      { lat: 51.5074, lng: -0.1278, name: 'Kontrole 1', task: 'Uzdevums 1' },
      { lat: 51.5124, lng: -0.1478, name: 'Kontrole 2', task: 'Uzdevums 2' },
      { lat: 51.5174, lng: -0.1678, name: 'Kontrole 3', task: 'Uzdevums 3' }
    ];
  
    // Parāda kontrolpunktu sarakstu un iezīmē tos kartē
    var controlList = document.getElementById('control-list');
    controlPoints.forEach(function(point) {
      var listItem = document.createElement('li');
      listItem.innerHTML = point.name;
      controlList.appendChild(listItem);
  
      var marker = new google.maps.Marker({
        position: { lat: point.lat, lng: point.lng },
        map: map,
        title: point.name
      });
  
      // Pievieno notikumu klausītāju uz marķieri, lai parādītu uzdevumu
      marker.addListener('click', function() {
        alert('Uzdevums: ' + point.task);
      });
    });
  }
  