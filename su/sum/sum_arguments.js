function sum(...arg) {
  return arg.reduce((acc, cur) => {
    return acc + cur;
  });
}

console.log(sum(1, 2, 3, 4));

module.exports = sum;
