const NewDataByDate = (data) => {
    const newDataByDate = {};
    const labels = [];

    for (const [key, obj] of Object.entries(data)) {
        for (const [date, val] of Object.entries(obj)) {
            if (!newDataByDate[date]) {
                newDataByDate[date] = { date };
            };
            newDataByDate[date][key] = val;
            if (!newDataByDate[date].active) {
                newDataByDate[date].active = newDataByDate[date][key];
                labels.push(new Date(date).toDateString().substr(4));
            }
            if (key !== 'cases') {
                newDataByDate[date].active = newDataByDate[date].active - newDataByDate[date][key];
            }
        }
    }
    labels.shift();
    const ans = Object.values(newDataByDate);
    return { ans, labels };
};

export default NewDataByDate;
