var fs = require('fs'); 
var chalk = require ('chalk');
 
fs.readFile('staedte.json', 'utf8', onFileRead);

function onFileRead(err, data) {  
  if (err) throw err;

for (var i = 0; i<data.length; ++i) {

  var currentPackage = JSON.parse(data);


	console.log(chalk.blue("name: "+currentPackage[i].name));
	console.log(chalk.red("country: "+currentPackage[i].country));
	console.log(chalk.green("population: "+currentPackage[i].population));
	console.log(chalk.yellow("-----------------------------"));

}}