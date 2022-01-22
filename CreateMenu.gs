function onOpen() {
  const app = SpreadsheetApp.getUi()

  app.createMenu('Data Automation')
    .addItem('Get Location Data', 'geoCodeLocations')
    .addItem('Get Driving Distance Data', 'directionsLocations')
    .addItem('Get Location and Driving Distance Data', 'geoCodeAndDirectionsLocations')
    .addToUi()
}