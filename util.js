const readline = require('readline');
const Promise = require('bluebird');

//retrieve input
const getInput = () => {
  const rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
	});
	
  return new Promise(function (resolve) {
    rl.question('Input : ', (answer) => {
		rl.close();
		resolve(answer.toUpperCase().trim());
	});
  });
}

/*
*	Loop the input array
*	Call function based on instruction
*	Return output result
*/
const generateOutput = (data) =>{
	let robot = {x: 0, y:0, direction: 'NORTH'};
	
	data.map((obj) => {
		if(obj.includes('PLACE')){
			robot.x = parseInt(obj.substring(6, 7));
			robot.y = parseInt(obj.substring(8, 9));
			robot.direction = obj.substring(10);
		}
		else if(obj.includes('LEFT')){
			robot = rotateLeft(robot);
		}
		else if(obj.includes('RIGHT')){
			robot = rotateRight(robot);
		}
		else if(obj.includes('MOVE')){
			robot = move(robot);
		}
	});
	return robot;
}

//rotate direction 90 degrees to the left
const rotateLeft = (obj) =>{
	if(obj.direction == 'WEST'){
		obj.direction = 'SOUTH';
	}
	else if(obj.direction == 'SOUTH'){
		obj.direction = 'EAST';
	}
	else if(obj.direction == 'EAST'){
		obj.direction = 'NORTH';
	}
	else {
		obj.direction = 'WEST';
	}
	return obj;
}

//rotate direction 90 degrees to the right
const rotateRight = (obj) =>{
	if(obj.direction == 'WEST'){
		obj.direction = 'NORTH';
	}
	else if(obj.direction == 'NORTH'){
		obj.direction = 'EAST';
	}
	else if(obj.direction == 'EAST'){
		obj.direction = 'SOUTH';
	}
	else {
		obj.direction = 'WEST';
	}
	return obj;
}

/*
*	move robot one step to the direction it is facing
* 	ignore movement if fall of the maximum allowed area
*	x : 0-4, y: 0-4
*/
const move = (obj) =>{
	if(obj.direction == 'WEST'){
		obj.x = obj.x >= 1 ? obj.x -1 : 0;
	}
	else if(obj.direction == 'EAST'){
		obj.x = obj.x <= 3 ? obj.x + 1 : 4;
	}
	else if(obj.direction == 'SOUTH'){
		obj.y = obj.y >= 1 ? obj.y -1 : 0;
	}
	else {
		obj.y = obj.y <= 3 ? obj.y + 1 : 4;
	}
	
	return obj;
}

/*
*	Validate Input
*	Only Inputs Allowed : 
*	MOVE
*	LEFT
*	RIGHT
*	REPORT
*	PLACE <Number 0-4>,<Number 0-4>,EAST
*	PLACE <Number 0-4>,<Number 0-4>,WEST
*	PLACE <Number 0-4>,<Number 0-4>,NORTH
*	PLACE <Number 0-4>,<Number 0-4>,SOUTH
*/
const validate = (val) =>{
	//regex in format DD MM YYYY, 29 2 allowed for leap year, min year 1900, max year 2010
	var re = new RegExp('^(MOVE)$|^(LEFT)$|^(RIGHT)$|^(REPORT)$|^(PLACE [0-4],[0-4],(EAST|WEST|NORTH|SOUTH))$');
	return re.test(val);
}

module.exports.validate = validate;
module.exports.getInput = getInput;
module.exports.generateOutput = generateOutput;
module.exports.move = move;
module.exports.rotateLeft = rotateLeft;
module.exports.rotateRight = rotateRight;





