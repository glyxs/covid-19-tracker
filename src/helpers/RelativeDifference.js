const RelativeDifference = (a, b) => {
    return 100 * Math.abs((a - b) / ((a + b) / 2));
};
export default RelativeDifference;
