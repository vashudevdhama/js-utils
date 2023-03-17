const currySum = () => {
  let total = 0;
  return (number = 0) => {
    total += number;
    console.log(total);
    return total;
  };
};

const sum = currySum();
sum(1); // 1
sum(2); // 3
sum(3); // 6
sum(); // 6
sum(4); // 10
