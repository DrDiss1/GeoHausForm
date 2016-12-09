/**
 * Created by InterEng on 8/12/2016.
 */
var templateUrl = templateDir;
var placeID;
var place = $("#suburbLocation");
var distance = $("#distance");

$(document).ready(function(){
    if(place != null){
        $.getJSON(templateUrl + "/data/suburbs.json", function( data ) {
            $.each(data,function(value, suburb)
            {
                place.append($('<option></option>', {
                    value: suburb.VALUE,
                    text : suburb.LOCATION + ' ' + suburb.POSTCODE
                }));
            });
        });
    }
});


place.on('change',function(){
    placeID = this.value;
    distance.val = placeID;
});