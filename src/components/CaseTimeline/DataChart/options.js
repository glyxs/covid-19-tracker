export const options = {
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            mode: 'index',
            intersect: false,
            displayColors: false,
            callbacks: {
                label: function (context) {
                    var label = context.dataset.label || '';

                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.y !== null) {
                        label += (context.parsed.y).toLocaleString();
                        label += ' Cases';
                    }
                    return label;
                }
            }
        },

    },
    elements: {
        bar: {
            borderRadius: 10
        }
    },
    responsive: true,
    maintainAspectRatio: false
}