var fs = require('fs');
// Sync way
// console.log(fs.readdirSync('.'));

// Async way
fs.readdir(process.cwd(),function(err, files){
  if(err) {
    console.error('Counter error,' + err);
  }
  if(files.length===0) {
    return console.log('   \033[31m No files to show!\033[39m\n');
  }
  console.log(' Select which file of directory you wanna see\n');
  var stats = [];
  function file(i) {
    var filename = files[i];
    fs.stat(__dirname + '/' + filename, function(err, stat) {
      stats[i] = stat;
      if(stat.isDirectory()) {
        console.log(' ' + i +' \033[36m' + filename + '/\033[39m');
      } else {
        console.log(' ' + i + ' \033[90m' + filename + '\033[39m');
      }
      i++;
      if(i === files.length) {
        read();
      } else {
        file(i);
      }
    });
  }
  function read() {
    console.log('');
    process.stdout.write('  \033[33mEnter your choice: \033[39m');
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data',option);
  }
  function option(data) {
    if(!files[Number(data)]) {
      process.stdout.write('  \033[31mEnter your choice: \033[39m');
    } else {
      const filename = files[Number(data)];
      process.stdin.pause();
      if(stats[Number(data)].isDirectory()) {
        console.log('');
        console.log(`  (${files.length}files) `);
        files.forEach(function(file) {
          console.log(`   -  ${file}`);
        });
        console.log('');
      } else {
        fs.readFile(__dirname + '/' + filename,'utf8', function(err, data){
          console.log('');
          console.log('\033[90m' + data.replace(/(.*)/g,'   $1') + '\033[39');
        });
      }
    }
  }
  file(0);
});