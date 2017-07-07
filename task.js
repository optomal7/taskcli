const fs = require('fs');
// stay consistant with your naming
const list = require('./commands/list.js');
const add = require('./commands/add.js');
const done = require('./commands/done.js');
const task_path = './task.json';

// remove these unused variables

// store process.argv[2] in a varaible instead of accessing that prop 3 times
const command = process.argv[2]
const argument = process.argv[3]

if(command === 'list'){
  list();
}

if (command === 'add') {
  add(argument)
}

if (command === 'done') {
  done(argument)
}
