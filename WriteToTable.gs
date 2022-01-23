function writeDataToTable (sheet, table, data, api) {
  switch(api) {
    case 'Geocoding':
      for (i = 0; i < data.length; i++) {
        if (data[i] != 'No Data') {
          var latitudeCell = sheet.getRange(table.firstDataRow + i, table.latitudeColumn)
          var longitudeCell = sheet.getRange(table.firstDataRow + i, table.longitudeColumn)
          var geographicCoordinatesCell = sheet.getRange(table.firstDataRow + i, table.geographicCoordinatesColumn)
          var addressFormattedCell = sheet.getRange(table.firstDataRow + i, table.addressFormattedColumn)
          var countyCell = sheet.getRange(table.firstDataRow + i, table.countyColumn)
          var stateCell = sheet.getRange(table.firstDataRow + i, table.stateColumn)
          var countyStateAbbreviatedCell = sheet.getRange(table.firstDataRow + i, table.countyStateAbbreviatedColumn)

          latitudeCell.setValue(data[i].latitude)
          longitudeCell.setValue(data[i].longitude)
          geographicCoordinatesCell.setValue(data[i].latitude + ", " + data[i].longitude)
          addressFormattedCell.setValue(data[i].addressFormatted)
          countyCell.setValue(data[i].county)
          stateCell.setValue(data[i].state)
          countyStateAbbreviatedCell.setValue(data[i].county + ", " + data[i].stateAbbreviated)
        }
      }
      break

    case 'Directions':
      for (i = 0; i < data.length; i++) {
        if (data[i] != 'No Data') {
          var distanceDrivingMilesCell = sheet.getRange(
            table.firstDataRow + i,
            table.distanceDrivingMilesColumn)
          distanceDrivingMilesCell.setValue(data[i].drivingMiles)
        }
      }
      break
  }
}