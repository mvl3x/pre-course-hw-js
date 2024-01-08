let str = "zzzzyzz";

const task6 = (str, letter) => {
  const text = str.includes(letter) ? "нашел" : "заблудился";
  console.log(text);
};
task6(str, "y");
