function directions(destination) {
  switch(destination) {
    case '':
      return 'No Data'
      break

    default:
      try {
        // CHCRS Headquarters
        var origin = '35.02283357556606, -85.19711247376097'
        var directions = Maps.newDirectionFinder()
          .setOrigin(origin)
          .setDestination(destination)
          .getDirections()
        var drivingMeters = directions
          .routes[0]
          .legs[0]
          .distance
          .value
        var drivingMiles = drivingMeters / 1609.34
        
        return {drivingMiles: drivingMiles}
      }

      catch(err) {
        return 'No Data'
      }
      break
  }
}