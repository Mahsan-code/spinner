process.stdout.write('hello from spinner1.js... \rheyyy\n');


  let char = ['|', '/', '-', '\\', '|', '/', '-', '|', '\n']
let time = 100;
  setTimeout(()=>{
      for (let item of char){
        process.stdout.write(`${item}`);
      }
  }, time +=200);