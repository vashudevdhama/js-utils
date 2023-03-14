const toggle = (...args) => {
  let index = 0;
  return function(){
    if(args.length > 0) {
      console.log(args[index++]);
      if(index >= args.length) index = 0;
    }
  }
}

const toggleSwitch = toggle("ON", "OFF");

toggleSwitch(); // ON
toggleSwitch(); // OFF
toggleSwitch(); // ON
