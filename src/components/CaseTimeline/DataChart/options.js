export const options = {
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
                return tooltipItem.yLabel.toLocaleString() + " Total Cases";
            }
        },
        mode: 'x-axis'
    },
    responsive: true,
    maintainAspectRatio: false
}