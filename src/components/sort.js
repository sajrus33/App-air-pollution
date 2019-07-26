const sortData = (results) => {
    // sort datas
    const citiesData = [];
    let locations = [];
    let lastCityName = results[0].city;

    // sort each result
    results.forEach((result, index) => {

        // get result measurements  into array "measures"
        const measures = [];

        result.measurements.forEach(measure => {
            const parameter = {};
            parameter[measure.parameter] = measure.value;
            measures.push(parameter);
        })

        // check if its still the same city, than push it into array "locations" 
        if (result.city === lastCityName) {
            locations.push(measures);


            // else if its another city, than clear array and 
        } else {
            // make it obj for readable keys
            const cityLocations = {};
            cityLocations["name"] = lastCityName;
            cityLocations["locations"] = locations;

            //push locations of last city into array "citiesData"
            citiesData.push(cityLocations);

            // push new into empty "locations" 
            locations = [];
            locations.push(measures)

            // change last city name
            lastCityName = result.city;
        }

        // if its the last one push it into array "citiesData"
        if (index === results.length - 1) {

            // make it obj for readable keys
            const cityLocations = {};
            cityLocations["name"] = result.city;
            cityLocations["locations"] = locations;

            citiesData.push(cityLocations);
        }
    });

    // Count the avarge of each measurement parameter
    let cityParamsAvarge = [];
    citiesData.forEach((city, cityI) => {
        let parSum;

        city.locations.forEach((location, locationI) => {
            parSum = {
                pm25: 0, pm25Amount: 0,
                pm10: 0, pm10Amount: 0,
                co: 0, coAmount: 0,
                o3: 0, o3Amount: 0,
                bc: 0, bcAmount: 0,
                so2: 0, so2Amount: 0,
                no2: 0, no2Amount: 0,
            };

            // Sum together all types od air pollution parameters

            if (location[locationI] && location[locationI].pm25) {
                parSum.pm25 += location[locationI].pm25;
                parSum.pm25Amount += 1;
            }
            if (location[locationI] && location[locationI].pm10) {
                parSum.pm10 += location[locationI].pm10;
                parSum.pm10Amount += 1;
            }
            if (location[locationI] && location[locationI].co) {
                parSum.co += location[locationI].co;
                parSum.coAmount += 1;
            }
            if (location[locationI] && location[locationI].o3) {
                parSum.o3 += location[locationI].o3;
                parSum.o3Amount += 1;
            }
            if (location[locationI] && location[locationI].bc) {
                parSum.bc += location[locationI].bc;
                parSum.bcAmount += 1;
            }
            if (location[locationI] && location[locationI].so2) {
                parSum.so2 += location[locationI].so2;
                parSum.so2Amount += 1;
            }
            if (location[locationI] && location[locationI].no2) {
                parSum.no2 += location[locationI].no2;
                parSum.no2Amount += 1;
            }

        });

        // checking function 
        const checkIfExist = arg => {
            if (!arg) {
                return arg = 1;
            } else
                return arg
        };

        // check all params
        parSum.pm25Amount = checkIfExist(parSum.pm25Amount);
        parSum.pm10Amount = checkIfExist(parSum.pm10Amount);
        parSum.coAmount = checkIfExist(parSum.coAmount);
        parSum.o3Amount = checkIfExist(parSum.o3Amount);
        parSum.bcAmount = checkIfExist(parSum.bcAmount);
        parSum.so2Amount = checkIfExist(parSum.so2Amount);
        parSum.no2Amount = checkIfExist(parSum.no2Amount);

        //set brand new array with counted params
        cityParamsAvarge[cityI] = [
            parSum.pm25 / parSum.pm25Amount,
            parSum.pm10 / parSum.pm10Amount,
            parSum.co / parSum.coAmount,
            parSum.o3 / parSum.o3Amount,
            parSum.bc / parSum.bcAmount,
            parSum.so2 / parSum.so2Amount,
            parSum.no2 / parSum.no2Amount,
            city.name
        ];
    });

    // create array of cities parameter sum with indexes !
    let cityParamsSum = [];
    cityParamsAvarge.forEach((param, index) => {
        cityParamsSum[index] = { value: 0 };
        cityParamsSum[index].index = index;
        for (let i = 0; i < 6; i++) {
            cityParamsSum[index].value += param[i];
        }
    });

    // sort all cities based on amount of their parameters !
    cityParamsSum.sort((a, b) => {
        return b.value - a.value;
    });

    // cut out only 10 top polluted cities
    cityParamsSum.splice(10);

    // take out 10 top polluted cities, based on index of 10 top sorted
    const top10Cities = [];
    cityParamsSum.forEach(param => {
        top10Cities.push(cityParamsAvarge[param.index]);
    });

    // return it
    return top10Cities;
}

export default sortData;