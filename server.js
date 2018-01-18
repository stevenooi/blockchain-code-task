const util = require('./util');

/*
	This is the main class which calls the util class libraries. 
	This class is the entry point of the program
*/
let cont = true;
let data = [];

const runProcess = () => {
	util.getInput()
	  .then(function (answer) {
		  //generate output and clear data
		  if(answer == 'REPORT'){
			  console.log('Output: ' + util.generateOutput(data));
			  data = [];
		  }
		  //push into array and keep going
		  else{
			  if(util.validate(answer)){
				  data.push(answer);
			  }
			  else{
				  console.log('Invalid format. Input not accepted.')
			  }
			  runProcess();
		  }

	  })
}


runProcess();