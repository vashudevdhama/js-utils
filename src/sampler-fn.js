const sampler = (callback, invokeAtCount = 1) => {
  let track = 0;
  return function (...args) {
    track++;
    if (track === invokeAtCount) {
      callback(...args);
      track = 0;
    }
  };
};

const greet = (i) => console.log("hello", i);
const invokeAtCount = 4;
const sample = sampler(greet, invokeAtCount);

sample(1);
sample(2);
sample(3);
sample(4); // hello 4
sample(5);
sample(6);
sample(7);
sample(8); // hello 8
