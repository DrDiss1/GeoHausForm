/**
 * Created by InterEng on 8/12/2016.
 */
var templateUrl = templateDir;
var locationID;
var location = $("#suburbLocation");
var distance = $("#distance");

$(document).ready(function(){
    $.get(templateUrl + "/data/suburbs.json", function( data ) {
        if(location != null){
            $.each(data,function(value, suburb)
            {
                console.log(suburb.LOCATION);
                location.append($('<option>', {
                    value: suburb.VALUE,
                    text : suburb.LOCATION
                }));
            });
        }
    });
});


function selectChange(){
    locationID = this.value;
    distance.val = locationID;
}