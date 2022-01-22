function geoCodeLocations() {
  var sheet = SpreadsheetApp.getActive().getActiveSheet()
  var locationsTable = createLocationsTable(sheet)
  var api = "Geocoding"
  
  var geoCodeData = []
  for (var i = 0; i < locationsTable.sourceLocations.length; i++) {
    var geoCodeResult = geoCode(locationsTable.sourceLocations[i])
    geoCodeData.push(geoCodeResult)
  }

  writeDataToTable(sheet, locationsTable, geoCodeData, api)
}

function directionsLocations() {
  var sheet = SpreadsheetApp.getActive().getActiveSheet()
  var locationsTable = createLocationsTable(sheet)
  var api = "Directions"
  
  var directionsData = []
  for (var i = 0; i < locationsTable.sourceLocations.length; i++) {
    var directionsResult = directions(locationsTable.sourceLocations[i])
    directionsData.push(directionsResult)
  }
  
  writeDataToTable(sheet, locationsTable, directionsData, api)
}

function geoCodeAndDirectionsLocations() {
  geoCodeLocations()
  directionsLocations()
}