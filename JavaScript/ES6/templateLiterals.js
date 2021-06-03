const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  
  const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
  
  console.log(greeting);

//Practice

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
   //or Use   const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);

  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);