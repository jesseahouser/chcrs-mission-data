function geoCode(location) {
  switch(location) {
    case '':
      return 'No Data'
      break

    default:
      try {
        var response = Maps.newGeocoder().geocode(location)
        var results = response.results[0]
        var addressFormatted = results.formatted_address
        var latitude = results.geometry.location.lat
        var longitude = results.geometry.location.lng
        var addressComponents = results.address_components
        
        for (var i = 0; i < addressComponents.length; i++) {
          if (addressComponents[i].types[0] == 'administrative_area_level_2') {
            var county = addressComponents[i].long_name.replace(' County', '')
          }
          if (addressComponents[i].types[0] == 'administrative_area_level_1') {
            var state = addressComponents[i].long_name
            var stateAbbreviated = addressComponents[i].short_name
          }
        }

        return {
          addressFormatted: addressFormatted,
          latitude: latitude,
          longitude: longitude,
          county: county,
          state: state,
          stateAbbreviated: stateAbbreviated
        }
      }

      catch(err) {
        return 'No Data'
      }
      break
  }
}