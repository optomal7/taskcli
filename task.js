const fs = require('fs');
const listing = require('./commands/list.js');
const adding = require('./commands/add.js');
const doing = require('./commands/done.js');
const task_path = './task.json';

let working_file = null;
let working_id = null;


if(process.argv[2] === 'list'){
  listing();
}

if (process.argv[2] === 'add') {
  adding();
}

if (process.argv[2] === 'done') {
  doing();
}
