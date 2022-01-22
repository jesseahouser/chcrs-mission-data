function createLocationsTable(sheet) {
  // Assumes there is one header row
  var firstDataRow = 2
  var numberRows = sheet.getLastRow() - firstDataRow + 1

  var columnHeaders = [
    'location_for_geocode',
    'latitude',
    'longitude',
    'geographic_coordinates',
    'address_formatted',
    'county',
    'state',
    'county_state',
    'distance_driving_miles'
  ]

  var columnNumbers = []
  for (i = 0; i < columnHeaders.length; i++) {
    var colNum = sheet.createTextFinder(columnHeaders[i])
      .matchEntireCell(true)
      .findNext()
      .getColumn()
    columnNumbers.push(colNum)
  }

  // Two dimensional array with empty strings as second index values
  var sourceLocationsValues = sheet
    .getRange(
      firstDataRow, columnNumbers[0],
      numberRows, columnNumbers[0]
    )
    .getValues()

  // Remove empty strings from two dimensional array
  var sourceLocations = []
  for (i = 0; i < sourceLocationsValues.length; i++) {
      sourceLocations.push(sourceLocationsValues[i][0])
  }

  return {
    sheet: sheet,
    firstDataRow: firstDataRow,
    numberRows: numberRows,
    sourceLocations: sourceLocations,
    sourceLocationColumn: columnNumbers[0],
    latitudeColumn: columnNumbers[1],
    longitudeColumn: columnNumbers[2],
    geographicCoordinatesColumn: columnNumbers[3],
    addressFormattedColumn: columnNumbers[4],
    countyColumn: columnNumbers[5],
    stateColumn: columnNumbers[6],
    countyStateAbbreviatedColumn: columnNumbers[7],
    distanceDrivingMilesColumn: columnNumbers[8]
  }
}