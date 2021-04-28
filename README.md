![Covid Tracker Logo](https://raw.githubusercontent.com/glyxs/covid-19-tracker/master/public/logo.png)

# COVID 19 | Coronavirus Tracker

COVID 19 | Coronavirus Tracker is an app designed and developed to keep track of the latest trend development of SARS COVID-19, featuring various data and statistics such as confirmed, active, recovered, new and death cases, represented in form of charts and a choropleth map.

Cases data is being taken from trusted sources of [Worldometers](https://www.worldometers.info/coronavirus/) and [JHUCSSE](https://github.com/CSSEGISandData/COVID-19) with the help of [Open Disease Data API](https://disease.sh/) and design inspiration taken from [Johns Hopkins University COVID-19 Dashboard](https://coronavirus.jhu.edu/map.html).

## [Live View](https://covid-corona-tracker.netlify.app/)

![Screenshot of the app](https://i.ibb.co/rfWM5r9/screencapture-localhost-3000-2021-04-28-11-03-37.png)

## Key Features

### Interactive Charts

Users can hover on any of the charts to see details of date and number of cases

![Chart interaction](https://i.giphy.com/media/mwqeHA92G17EdXiS42/giphy.webp)

### Flexible data controls

Data displayed in charts and tables can be sorted by multiple parameters: by case type, weekly or daily, and by period of time.

![Datachart controls](https://i.giphy.com/media/Ppj1A9OkPacRoRwRvk/giphy.webp)
![Datatable controls](https://i.giphy.com/media/DF2tLWnYNG4xFdTgfy/giphy.webp)

### Dark Mode Enabled

App will automatically set color scheme to the user's system preferred mode, but they can always toggle it using the Dark Mode switch

![Dark Mode toggle](https://i.giphy.com/media/bv7sDk2WrQAVFOO5of/giphy.webp)

### Responsive Design

Pixel-perfected for all screen sizes and resolutions.

![Device mockup](https://i.ibb.co/FnWvqPW/Screenshot-2021-04-28-115957.png)

## How it works

The app is powered by [React](https://reactjs.org/) library with node.js at its core. it is initialized with create-react-app and it uses [Chakra UI](https://github.com/chakra-ui/chakra-ui) components throughout the whole UI.

For chart data representation, the app uses [Chart.js](https://www.chartjs.org/) library with [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2) wrapper for React.

Map component is build with the use of [React-Leaflet](https://react-leaflet.js.org/) library, with country polygons being drawn from Datahub.io [World GeoJSON](https://datahub.io/core/geo-countries).

As for the data, the app makes an async/await .GET request to the [Open Disease Data API](https://disease.sh/) using [Axios](https://github.com/axios/axios) processing the data to the needed format and distributing it to all the components as requested.
