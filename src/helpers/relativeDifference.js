const relativeDifference = (oldNumber, newNumber) => {
  var decreaseValue = oldNumber - newNumber;

  return Math.abs((decreaseValue / oldNumber) * 100);
};
export default relativeDifference;
