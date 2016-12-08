/**
 * Created by InterEng on 8/12/2016.
 */

var locationID;
var location = $('#location');

var JSONLocation;

$.each(JSONLocation,function(key, value)
{
    location.append('<option value=' + key + '>' + value + '</option>');
});