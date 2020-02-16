const sortData = (results) => {
  // sort datas
  const citiesData = []
  let locations = []
  let lastCityName = results[0].city

  // sort each result
  results.forEach((result, index) => {
    // get result measurements  into array "measures"
    const measures = []

    result.measurements.forEach((measure) => {
      const parameter = {}
      parameter[measure.parameter] = measure.value
      measures.push(parameter)
    })

    // check if its still the same city, than push it into array "locations"
    if (result.city === lastCityName) {
      locations.push(measures)

      // else if its another city, than clear array and
    } else {
      // make it obj for readable keys
      const cityLocations = {}
      cityLocations.name = lastCityName
      cityLocations.locations = locations

      // push locations of last city into array "citiesData"
      citiesData.push(cityLocations)

      // push new into empty "locations"
      locations = []
      locations.push(measures)

      // change last city name
      lastCityName = result.city
    }

    // if its the last one push it into array "citiesData"
    if (index === results.length - 1) {
      // make it obj for readable keys
      const cityLocations = {}
      cityLocations.name = result.city
      cityLocations.locations = locations

      citiesData.push(cityLocations)
    }
  })

  // Count the avarge of each measurement parameter
  const cityParamsAvarges = []
  citiesData.forEach((city, cityIndex) => {
    const parSum = {
      pm25: 0,
      pm25Amount: 0,
      pm10: 0,
      pm10Amount: 0,
      co: 0,
      coAmount: 0,
      o3: 0,
      o3Amount: 0,
      bc: 0,
      bcAmount: 0,
      so2: 0,
      so2Amount: 0,
      no2: 0,
      no2Amount: 0
    }

    // Sum together all types od air pollution parameters
    city.locations.forEach((location) => {
      location.forEach((params) => {
        const paramName = Object.getOwnPropertyNames(params)
        switch (paramName[0]) {
          case 'pm25':
            parSum.pm25 += params.pm25
            parSum.pm25Amount += 1
            break
          case 'pm10':
            parSum.pm10 += params.pm10
            parSum.pm10Amount += 1
            break
          case 'co':
            parSum.co += params.co
            parSum.coAmount += 1
            break
          case 'o3':
            parSum.o3 += params.o3
            parSum.o3Amount += 1
            break
          case 'bc':
            parSum.bc += params.bc
            parSum.bcAmount += 1
            break
          case 'so2':
            parSum.so2 += params.so2
            parSum.so2Amount += 1
            break
          case 'no2':
            parSum.no2 += params.no2
            parSum.no2Amount += 1
            break
          default: // nothing to do here
            break
        }
      })
    })


    // checking function
    const checkIfExist = (arg) => {
      if (!arg) {
        return 1
      } return arg
    }

    // check all params
    Object.keys(parSum).forEach((e) => {
      if (e.includes('Amount')) {
        parSum[e] = checkIfExist(parSum[e])
      }
    })

    // set brand new array with counted params
    cityParamsAvarges[cityIndex] = {
      pm25: Math.floor(parSum.pm25 / parSum.pm25Amount),
      pm10: Math.floor(parSum.pm10 / parSum.pm10Amount),
      co: Math.floor(parSum.co / parSum.coAmount),
      o3: Math.floor(parSum.o3 / parSum.o3Amount),
      bc: Math.floor(parSum.bc / parSum.bcAmount),
      so2: Math.floor(parSum.so2 / parSum.so2Amount),
      no2: Math.floor(parSum.no2 / parSum.no2Amount),
      cityName: city.name
    }
  })

  // create array of cities parameter sum with same indexes !
  const cityParamsSum = []
  cityParamsAvarges.forEach((cityMeasurements, index) => {
    let sum = 0
    Object.entries(cityMeasurements).forEach((param) => {
      if (param[0] !== 'cityName') {
        sum += param[1]
      }
    })
    cityParamsSum.push({ value: sum, index })
  })

  // sort all cities based on amount of their parameters !
  cityParamsSum.sort((a, b) => b.value - a.value)

  // cut out only 10 top polluted citiesa
  cityParamsSum.splice(10)

  // take out 10 top polluted cities, based on index of 10 top sorted
  const top10Cities = []
  cityParamsSum.forEach((param) => {
    top10Cities.push(cityParamsAvarges[param.index])
  })

  // return it
  return top10Cities
}

export default sortData
