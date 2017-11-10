(function(param){
    //console.log(ausState);
    geoState = statesData;
    //console.log(xiaoxi)

      var map = L.map('map').setView([-37.8186804, 144.9479796], 12); 
      mapLink = 
                '<a href="http://openstreetmap.org">OpenStreetMap</a>';
      L.tileLayer(
                'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; ' + mapLink,
                maxZoom: 18,
        }).addTo(map);  

        var marker = L.marker([-37.8186804, 144.9479796],{
            title: 'Hover text: click',
            opacity: 0.9, 
        })
        .addTo(map)
        .bindPopup("<b>ANZ</b> <br>My location");
        //.openPopup();

        L.geoJson(geoState).addTo(map);
    

    
})(statesData);


//var myFn = function(param){
//    
//};

