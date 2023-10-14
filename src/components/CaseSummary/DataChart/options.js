export const options = {
  layout: {
    padding: {
      left: 5,
      right: 5,
    },
  },

  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: false,
      displayColors: false,
      callbacks: {
        label: function (context) {
          var label = context.dataset.label || "";

          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += context.parsed.y.toLocaleString();
            label += context.parsed.y > 0 ? " New Cases" : " Cases";
          }
          return label;
        },
      },
    },
  },

  scales: {
    x: {
      display: false,
    },
    y: {
      min: 0,
      display: false,
    },
  },

  elements: {
    point: {
      radius: 0,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};
