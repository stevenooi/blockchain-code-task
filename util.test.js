const util = require('./util.js');
const assert = require('chai').assert;

describe('validate', function() {
  
  it('should return true with PLACE 0,0,NORTH', function() {
	  assert.equal(true, util.validate('PLACE 0,0,NORTH'));
  });
  it('should return true with PLACE 0,0,SOUTH', function() {
	  assert.equal(true, util.validate('PLACE 0,0,SOUTH'));
  });
  
  it('should return true with PLACE 0,0,EAST', function() {
	  assert.equal(true, util.validate('PLACE 0,0,EAST'));
  });
  it('should return true with PLACE 0,0,WEST', function() {
	  assert.equal(true, util.validate('PLACE 0,0,WEST'));
  });
  it('should return true with PLACE 4,4,NORTH', function() {
	  assert.equal(true, util.validate('PLACE 4,4,NORTH'));
  });
  
  it('should return false with PLACE', function() {
	  assert.equal(false, util.validate('PLACE'));
  });
  
  it('should return false with PLACE 0,0,NORTHX', function() {
	  assert.equal(false, util.validate('PLACE 0,0,NORTHX'));
  });
  it('should return false with XPLACE 0,0,NORTH', function() {
	  assert.equal(false, util.validate('XPLACE 0,0,NORTH'));
  });
  
  it('should return false with PLACE 0,5,NORTH', function() {
	  assert.equal(false, util.validate('PLACE 0,5,NORTH'));
  });
  it('should return false with PLACE 5,0,NORTH', function() {
	  assert.equal(false, util.validate('PLACE 5,0,NORTH'));
  });
  
  it('should return false with PLACE 0,-1,NORTH', function() {
	  assert.equal(false, util.validate('PLACE 0,-1,NORTH'));
  });
  it('should return false with PLACE -1,0,NORTH', function() {
	  assert.equal(false, util.validate('PLACE -1,0,NORTH'));
  });
  
  it('should return true with MOVE', function() {
	  assert.equal(true, util.validate('MOVE'));
  });

  it('should return true with MOVEX', function() {
	  assert.equal(false, util.validate('MOVEX'));
  });
  
  it('should return true with XMOVE', function() {
	  assert.equal(false, util.validate('XMOVE'));
  });

  it('should return true with LEFT', function() {
	  assert.equal(true, util.validate('LEFT'));
  });
  
  it('should return true with LEFTX', function() {
	  assert.equal(false, util.validate('LEFTX'));
  });
  
  it('should return true with XLEFT', function() {
	  assert.equal(false, util.validate('XLEFT'));
  });

  it('should return true with RIGHT', function() {
	  assert.equal(true, util.validate('RIGHT'));
  });

  it('should return true with RIGHTX', function() {
	  assert.equal(false, util.validate('RIGHTX'));
  });
  
  it('should return true with RIGHTX', function() {
	  assert.equal(false, util.validate('RIGHTX'));
  });

  it('should return true with REPORT', function() {
	  assert.equal(true, util.validate('REPORT'));
  });

  it('should return true with REPORTX', function() {
	  assert.equal(false, util.validate('REPORTX'));
  });
  
  it('should return true with REPORTX', function() {
	  assert.equal(false, util.validate('REPORTX'));
  });
});


describe('move', function() {
  let obj = {};
  
  it('should return x:0, y:0 with PLACE x:0,y:0,direction:NORTH', function() {
	  obj = {x:0,y:0,direction:'NORTH'}
	  assert.deepEqual({x:0,y:1,direction:'NORTH'}, util.move(obj));
  });
  
  it('should return x:0, y:3 with x:0,y:4,direction:NORTH', function() {
	  obj = {x:0,y:4,direction:'NORTH'};
	  assert.deepEqual({x:0,y:4,direction:'NORTH'}, util.move(obj));
  });
  
  it('should return x:0, y:0 with x:0,y:0,direction:SOUTH', function() {
	  obj = {x:0,y:0,direction:'SOUTH'}
	  assert.deepEqual({x:0,y:0,direction:'SOUTH'}, util.move(obj));
  });
  
  it('should return x:0, y:3 with x:0,y:4,direction:SOUTH', function() {
	  obj = {x:0,y:4,direction:'SOUTH'};
	  assert.deepEqual({x:0,y:3,direction:'SOUTH'}, util.move(obj));
  });
  
  it('should return x:0, y:0 with x:0,y:0,direction:EAST', function() {
	  obj = {x:0,y:0,direction:'EAST'}
	  assert.deepEqual({x:1,y:0,direction:'EAST'}, util.move(obj));
  });
  
  it('should return x:0, y:3 with x:0,y:4,direction:EAST', function() {
	  obj = {x:4,y:0,direction:'EAST'};
	  assert.deepEqual({x:4,y:0,direction:'EAST'}, util.move(obj));
  });
  
  it('should return x:0, y:0 with x:0,y:0,direction:WEST', function() {
	  obj = {x:0,y:0,direction:'WEST'}
	  assert.deepEqual({x:0,y:0,direction:'WEST'}, util.move(obj));
  });
  
  it('should return x:0, y:3 with x:0,y:4,direction:WEST', function() {
	  obj = {x:4,y:0,direction:'WEST'};
	  assert.deepEqual({x:3,y:0,direction:'WEST'}, util.move(obj));
  });
});

describe('rotateRight', function() {
  let obj = {};
  
  it('should return x:0,y:0,direction:EAST with PLACE x:0,y:0,direction:NORTH', function() {
	  obj = {x:0,y:0,direction:'NORTH'}
	  assert.deepEqual({x:0,y:0,direction:'EAST'}, util.rotateRight(obj));
  });
  it('should return x:0,y:0,direction:SOUTH with PLACE x:0,y:0,direction:EAST', function() {
	  obj = {x:0,y:0,direction:'EAST'}
	  assert.deepEqual({x:0,y:0,direction:'SOUTH'}, util.rotateRight(obj));
  });
  it('should return x:0,y:0,direction:WEST with PLACE x:0,y:0,direction:SOUTH', function() {
	  obj = {x:0,y:0,direction:'SOUTH'}
	  assert.deepEqual({x:0,y:0,direction:'WEST'}, util.rotateRight(obj));
  });
  it('should return x:0,y:0,direction:NORTH with PLACE x:0,y:0,direction:WEST', function() {
	  obj = {x:0,y:0,direction:'WEST'}
	  assert.deepEqual({x:0,y:0,direction:'NORTH'}, util.rotateRight(obj));
  });
});

describe('rotateLeft', function() {
  let obj = {};
  
  it('should return x:0,y:0,direction:WEST with PLACE x:0,y:0,direction:NORTH', function() {
	  obj = {x:0,y:0,direction:'NORTH'}
	  assert.deepEqual({x:0,y:0,direction:'WEST'}, util.rotateLeft(obj));
  });
  it('should return x:0,y:0,direction:SOUTH with PLACE x:0,y:0,direction:WEST', function() {
	  obj = {x:0,y:0,direction:'WEST'}
	  assert.deepEqual({x:0,y:0,direction:'SOUTH'}, util.rotateLeft(obj));
  });
  it('should return x:0,y:0,direction:EAST with PLACE x:0,y:0,direction:SOUTH', function() {
	  obj = {x:0,y:0,direction:'SOUTH'}
	  assert.deepEqual({x:0,y:0,direction:'EAST'}, util.rotateLeft(obj));
  });
  it('should return x:0,y:0,direction:NORTH with PLACE x:0,y:0,direction:EAST', function() {
	  obj = {x:0,y:0,direction:'EAST'}
	  assert.deepEqual({x:0,y:0,direction:'NORTH'}, util.rotateLeft(obj));
  });
});

describe('generateOutput', function() {
  let data = [];
  
  it('should return x:0,y:1,direction:NORTH with command(PLACE 0,0,NORTH,MOVE,REPORT)', function() {
	  data = [];
	  data.push('PLACE 0,0,NORTH');
	  data.push('MOVE');
	  data.push('REPORT');
	  assert.deepEqual({x:0,y:1,direction:'NORTH'}, util.generateOutput(data));
  });
  
  it('should return x:0,y:1,direction:NORTH with command(PLACE 0,0,NORTH,LEFT,REPORT)', function() {
	  data = [];
	  data.push('PLACE 0,0,NORTH');
	  data.push('LEFT');
	  data.push('REPORT');
	  assert.deepEqual({x:0,y:0,direction:'WEST'}, util.generateOutput(data));
  });
  
  it('should return x:0,y:1,direction:NORTH with command(PLACE 1,2,EAST,MOVE,MOVE,LEFT,MOVE,REPORT)', function() {
	  data = [];
	  data.push('PLACE 1,2,EAST');
	  data.push('MOVE');
	  data.push('MOVE');
	  data.push('LEFT');
	  data.push('MOVE');
	  data.push('REPORT');
	  assert.deepEqual({x:3,y:3,direction:'NORTH'}, util.generateOutput(data));
  });
  
  
  it('should return ignore MOVE before any PLACE', function() {
	  data = [];
	  data.push('MOVE');
	  data.push('PLACE 1,2,EAST');
	  data.push('MOVE');
	  data.push('REPORT');
	  assert.deepEqual({x:2,y:2,direction:'EAST'}, util.generateOutput(data));
  });
  
  it('should return ignore LEFT before any PLACE', function() {
	  data = [];
	  data.push('LEFT');
	  data.push('PLACE 1,2,EAST');
	  data.push('MOVE');
	  data.push('REPORT');
	  assert.deepEqual({x:2,y:2,direction:'EAST'}, util.generateOutput(data));
  });
  
  it('should return ignore RIGHT before any PLACE', function() {
	  data = [];
	  data.push('RIGHT');
	  data.push('PLACE 1,2,EAST');
	  data.push('MOVE');
	  data.push('REPORT');
	  assert.deepEqual({x:2,y:2,direction:'EAST'}, util.generateOutput(data));
  });
  
  it('should return ignore PLACE before any PLACE', function() {
	  data = [];
	  data.push('PLACE 4,4,EAST');
	  data.push('PLACE 1,2,EAST');
	  data.push('REPORT');
	  assert.deepEqual({x:1,y:2,direction:'EAST'}, util.generateOutput(data));
  });
  
  it('should not move further NORTH than 4,4', function() {
	  data = [];
	  data.push('PLACE 4,4,NORTH');
	  data.push('MOVE');
	  data.push('REPORT');
	  assert.deepEqual({x:4,y:4,direction:'NORTH'}, util.generateOutput(data));
  });
  
  it('should not move further EAST than 4,4', function() {
	  data = [];
	  data.push('PLACE 4,4,EAST');
	  data.push('MOVE');
	  data.push('REPORT');
	  assert.deepEqual({x:4,y:4,direction:'EAST'}, util.generateOutput(data));
  });
    
  it('should not move further SOUTH than 0,0', function() {
	  data = [];
	  data.push('PLACE 0,0,SOUTH');
	  data.push('MOVE');
	  data.push('REPORT');
	  assert.deepEqual({x:0,y:0,direction:'SOUTH'}, util.generateOutput(data));
  });
  
  it('should not move further WEST than 0,0', function() {
	  data = [];
	  data.push('PLACE 0,0,WEST');
	  data.push('MOVE');
	  data.push('REPORT');
	  assert.deepEqual({x:0,y:0,direction:'WEST'}, util.generateOutput(data));
  });
  
});

describe('getInput', function() {
  var stdin;
  beforeEach(function () {
    stdin = require('mock-stdin').stdin();
  });
  it('should return value : PLACE with input : PLACE', function() {
	  process.nextTick(function mockResponse() {
		  stdin.send('PLACE\n');
	  });
	  return util.getInput()
      .then(function (response) {
		assert.equal('PLACE', response);
      });
  });

  it('should return value : PLACE 0,0,NORTH with input : place 0,0,NORTH', function() {
	  process.nextTick(function mockResponse() {
		  stdin.send('place 0,0,NORTH\n');
	  });
	  return util.getInput()
      .then(function (response) {
		assert.equal('PLACE 0,0,NORTH', response);
      });
  });
  

  it('should return value : PLACE 0,0,NORTH with input :         PLACE 0,0,NORTH', function() {
	  process.nextTick(function mockResponse() {
		  stdin.send('place 0,0,NORTH\n');
	  });
	  return util.getInput()
      .then(function (response) {
		assert.equal('PLACE 0,0,NORTH', response);
      });
  });
});