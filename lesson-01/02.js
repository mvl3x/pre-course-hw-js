const task2 = () => {
  let number1 = Math.floor(Math.random() * 100);
  if (!(number1 % 2)) {
    console.log(`${number1} :Это четное число`);
  } else {
    console.log(`${number1} :Это нечетное число`);
  }
};
task2();

const task5 = () => {
  let rule =
    "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";

  switch (true) {
    case rule.length < 25:
      console.log("Все таки нет правил без исключения");
      break;
    case rule.length > 25:
      console.log("У меня 100 пудов все получится");
      break;
    default:
      console.log("50 на 50");
  }
};
task5();
