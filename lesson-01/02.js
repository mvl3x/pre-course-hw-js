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

const task4 = () => {
  let x = 5;
  x += 3;
  x *= 2;
  x -= 4;
  x /= 3;

  console.log(x);
};
task4();
