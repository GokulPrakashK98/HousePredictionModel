function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for(var i in uiBathrooms) {
      if(uiBathrooms[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
}
  
function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for(var i in uiBHK) {
      if(uiBHK[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
}
  
function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var sqft = document.getElementById("uiSqft");
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations");
    var estPrice = document.getElementById("uiEstimatedPrice");
    var sqftLimitMessage = document.getElementById("sqftLimitMessage");
  
    // Check if total_sqft is within the limit
    var total_sqft_value = parseFloat(sqft.value);
    var total_sqft_limit = 400;
    if (total_sqft_value < total_sqft_limit) {
        sqftLimitMessage.style.display = "block";
        sqftLimitMessage.textContent = "Total square feet should be at least " + total_sqft_limit + " sqft.";
        return;
    } else {
        sqftLimitMessage.style.display = "none";
    }

    var url = "http://127.0.0.1:5000/predict_home_price";
  
    $.post(url, {
        total_sqft: total_sqft_value,
        bhk: bhk,
        bath: bathrooms,
        location: location.value
    }, function(data, status) {
        console.log(data.estimated_price);
        if (data.estimated_price < 0) {
            estPrice.innerHTML = "<h3 style='color: red;'>Price estimation not available</h3>";
        } else {
            estPrice.innerHTML = "<h3>" + data.estimated_price.toString() + " lakhs</h3>";
        }
        console.log(status);
    });
}
  
function onPageLoad() {
    console.log( "document loaded" );
    var url = "http://127.0.0.1:5000/get_location_names";
    $.get(url,function(data, status) {
        console.log("got response for get_location_names request");
        if(data) {
            var locations = data.locations;
            var uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    });
}
  
window.onload = onPageLoad;