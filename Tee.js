var fs = require('fs');
// npm install through
var thru = require('through');
var filename = process.argv[2]

var ws = fs.createWriteStream(filename);

// setup through with writeAndLog function
// through as a splitter
function writeAndLog(buf){
  ws.write( buf.toString() );
  console.log( buf.toString() );
}

process.stdin.pipe(thru(writeAndLog));
