<div align='center'>
<img src='https://i.imgur.com/NLAxbzE.png' alt='Covid Tracker Logo'>
</div>
<h1 align='center'>COVID 19 | Coronavirus Tracker</h1>

COVID 19 | Coronavirus Tracker is an app designed and developed to keep track of the latest trend development of SARS COVID-19, featuring various data and statistics such as confirmed, active, recovered, new and death cases, represented in form of charts and a choropleth map.

Cases data is being taken from trusted sources of [Worldometers](https://www.worldometers.info/coronavirus/) and [JHUCSSE](https://github.com/CSSEGISandData/COVID-19) with the help of [Open Disease Data API](https://disease.sh/) and design inspiration taken from [Johns Hopkins University COVID-19 Dashboard](https://coronavirus.jhu.edu/map.html).

<h2 align='center'><a href='https://covid-corona-tracker.netlify.app/' target='_blank'>Live View</a></h2>
<p  align="center">
<a  href="https://app.netlify.com/sites/stepanpavlov/deploys"  target="_blank">
<img  src="https://api.netlify.com/api/v1/badges/348d1cb1-ef02-4d2a-b9d7-60bf5c300661/deploy-status"  alt="Netlify Status"  />
</a>
</p>

![Demo](https://i.imgur.com/n6lfemF.png)
## Key Features

### Search-Enabled

Users can easily search for specific country using search bar and other components

![Search functionality](https://media2.giphy.com/media/1Fif5zk6TeQrVnTd4G/giphy.gif?cid=790b76116614d735e861a5b519387e5d99314354bc1fee3e&rid=giphy.gif&ct=g)

### Interactive World Map

Interactive choropleth map displays popup with details for each country.

![Map interaction](https://media3.giphy.com/media/BPFrOdPl3OOdollQtE/giphy.gif?cid=790b7611c1256baeb9378c20b4b35b5fe2356fcd1128afa8&rid=giphy.gif&ct=g)

### Interactive Charts

Users can hover on any of the charts to see details of date and number of cases

![Chart interaction](https://media.giphy.com/media/mwqeHA92G17EdXiS42/giphy.gif)

### Flexible data controls

Data displayed in charts and tables can be sorted by multiple parameters: by case type, weekly or daily, and by period of time.

![Datachart controls](https://media4.giphy.com/media/EODcwOHVLwXo1gnsN5/giphy.gif?cid=790b7611da2d37e9679af1e170662729ee320a9d959275a6&rid=giphy.gif&ct=g)
![Datatable controls](https://media1.giphy.com/media/JkhHxcorp3FAqY55xm/giphy.gif?cid=790b7611f330bebf9a84aca182f101eda309bc0087cdb59b&rid=giphy.gif&ct=g)

### Dark Mode Enabled

App will automatically set color scheme to the user's system preferred mode, but they can always toggle it using the Dark Mode switch

![Dark Mode toggle](https://media2.giphy.com/media/rLuOYBH8fuI5ynODZR/giphy.gif?cid=790b7611727c6402e9335103df7c508acb18da2d6700c405&rid=giphy.gif&ct=g)

### Responsive Design

Pixel-perfected for all screen sizes and resolutions.

![Device mockup](https://i.ibb.co/FnWvqPW/Screenshot-2021-04-28-115957.png)

### Bug Reporting

Users are able to submit a bug report form to the Netlify dashboard.

![Bug Reporting](https://media1.giphy.com/media/AZVYnAjlNG7pC4RE8m/giphy.gif?cid=790b7611e111240b1586ee3affae4329d7299a141732b700&rid=giphy.gif&ct=g)

## How it works

The app is powered by [React](https://reactjs.org/) library with node.js at its core. it is initialized with create-react-app and it uses [Chakra UI](https://github.com/chakra-ui/chakra-ui) components throughout the whole UI.

For chart data representation, the app uses [Chart.js](https://www.chartjs.org/) library with [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2) wrapper for React.

Map component is build with the use of [React-Leaflet](https://react-leaflet.js.org/) library, with country polygons being drawn from Datahub.io [World GeoJSON](https://datahub.io/core/geo-countries).

As for the data, the app makes an async/await .GET request to the [Open Disease Data API](https://disease.sh/) using [Axios](https://github.com/axios/axios) processing the data to the needed format and distributing it to all the components as requested.

## 🛠 Installation & Set Up

1. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

2. Install dependencies

```sh

npm install

```
3. Start the development server
```sh

npm start

```

## 🚀 Building and Running for Production

1. Generate a full static production build  

```sh

npm run build

```

1. Preview the site as it will appear once deployed

```sh

npm run serve

```
