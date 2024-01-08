const task2 = () => {
  let number1 = Math.floor(Math.random() * 100);
  if (!(number1 % 2)) {
    console.log(`${number1} :Это четное число`);
  } else {
    console.log(`${number1} :Это нечетное число`);
  }
};
task2();

const task3 = () => {
  let number = 1;
  console.log(number++);
  console.log(++number);
  console.log(number--);
  console.log(--number);
};
task3();
