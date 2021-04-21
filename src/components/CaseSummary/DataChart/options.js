export const options = {
    layout: {
        padding: {
            left: 5,
            right: 5,
        }
    },
    legend: {
        display: false
    },
    tooltips: {
        custom: function (tooltip) {
            if (!tooltip) return;
            tooltip.displayColors = false;
        },
        callbacks: {
            label: function (tooltipItem) {
                return tooltipItem.yLabel.toLocaleString() + " cases";
            }
        },
        mode: 'x-axis'
    },
    scales: {
        xAxes: [{
            display: false
        }],
        yAxes: [{
            display: false,
            ticks: {
                beginAtZero: true,
            }
        }]
    },
    elements: {
        point: {
            radius: 0
        }
    },
    responsive: true
}