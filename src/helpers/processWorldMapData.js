import world from '../data/world.json';

const processWorldMapData = (data) => {
    var mapData = null;

    const max = Math.max.apply(Math, data.map(function (m) { return m.cases; }));
    var mapCountries = world.features;

    mapCountries.forEach(country => {
        const covidCountry = data.find(
            (covidCountry) => covidCountry.countryInfo.iso3 === country.properties.ISO_A3
        );
        country.properties.confirmed = 0;

        if (covidCountry !== undefined) {
            country.properties.confirmed = covidCountry.cases.toLocaleString();
            country.properties.active = covidCountry.active.toLocaleString();
            country.properties.recovered = covidCountry.recovered.toLocaleString();
            country.properties.deaths = covidCountry.deaths.toLocaleString();
            country.properties.flag = covidCountry.countryInfo.flag;
            country.properties.colorHue = Math.abs(100 - ((covidCountry.cases / max) * 60 + 10).toFixed(0));
        } else {
            country.properties.flag = "";
            country.properties.colorHue = 100;
            country.properties.confirmed = 0;
            country.properties.active = 0;
            country.properties.recovered = 0;
            country.properties.deaths = 0;
        }
        mapData = mapCountries;
    });
    return mapData;
};

export default processWorldMapData;
