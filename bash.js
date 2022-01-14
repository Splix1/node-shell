let pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) =>{
  const cmd = data.toString().trim();
  let args = cmd.split(' ');
  console.log(args[1]);

  process.stdout.write('You typed: ' + cmd);
  if (cmd === 'pwd') {
    process.stdout.write('\n')
    pwd();
  }
  if(cmd === 'ls') {
    ls();
    process.stdout.write('\n');
  }
})

