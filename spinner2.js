const arrayPattern = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  '];

const arrayAnimation = function(array, time) {
  array.forEach((element, index) => {
    setTimeout(() => {
      process.stdout.write(element);
      if (index === array.length - 1) {
        console.log("");
      }
    }, 100 + time * index);
  });
};

arrayAnimation(arrayPattern, 200);

//define Array patterns
//for loop
//settime
//process.stdout.write pattern
// et time for each pattern
// console log new line
