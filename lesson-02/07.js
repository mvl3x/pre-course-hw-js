let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk",
  },
};

const passportMarriedCopy = {
  ...passportMarried,
  address: { ...passportMarried.address },
};
passportMarriedCopy.married = true;

console.log(passportMarried);
console.log(passportMarriedCopy);
