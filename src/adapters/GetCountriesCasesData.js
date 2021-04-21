import { useState, useEffect } from 'react';
import MakeAPIrequest from './MakeAPIrequest';
import world from '../data/world.json';

const GetCountriesCasesData = (ErrorHandler) => {

    const [CountryData, setCountryData] = useState(null);
    const [CountryDataIsLoading, setCountryDataIsLoading] = useState(true);

    const APIstring = 'https://corona.lmao.ninja/v3/covid-19/countries';

    const { response, requestError } = MakeAPIrequest(APIstring);

    useEffect(() => {
        if (response) {
            processAPIdata(response);
        }
    }, [response]);

    useEffect(() => {
        if (requestError) {
            if (requestError.response) {
                ErrorHandler(requestError.response);
            } else if (requestError.request) {
                ErrorHandler(requestError.request);
            } else {
                ErrorHandler(requestError);
            }
        }
    }, [requestError, ErrorHandler]);

    const processAPIdata = (covidCountries) => {

        const max = Math.max.apply(Math, covidCountries.map(function (m) { return m.cases; }));

        var mapCountries = world.features;
        for (var i = 0; i < mapCountries.length; i++) {
            const MapCountry = mapCountries[i];
            const covidCountry = covidCountries.find(
                (covidCountry) => covidCountry.countryInfo.iso3 === MapCountry.properties.ISO_A3
            );

            mapCountries[i].properties.confirmed = 0;
            if (covidCountry !== undefined) {
                const confirmed = covidCountry.cases;
                mapCountries[i].properties.confirmed = confirmed.toLocaleString();
                mapCountries[i].properties.active = covidCountry.active.toLocaleString();
                mapCountries[i].properties.recovered = covidCountry.recovered.toLocaleString();
                mapCountries[i].properties.deaths = covidCountry.deaths.toLocaleString();
                mapCountries[i].properties.flag = covidCountry.countryInfo.flag;
                mapCountries[i].properties.colorHue = Math.abs(100 - ((covidCountry.cases / max) * 60 + 10).toFixed(0));
            } else {
                mapCountries[i].properties.flag = "";
                mapCountries[i].properties.colorHue = 100;
                mapCountries[i].properties.confirmed = 0;
                mapCountries[i].properties.active = 0;
                mapCountries[i].properties.recovered = 0;
                mapCountries[i].properties.deaths = 0;
            }
        }
        setCountryData(mapCountries);
        setCountryDataIsLoading(false);
    };

    return { CountryData, CountryDataIsLoading };
};

export default GetCountriesCasesData;
