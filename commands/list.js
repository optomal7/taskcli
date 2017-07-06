
const fs = require('fs');
const task_path = './task.json';

module.exports = function (){
  fs.readFile(task_path, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data).header);
    JSON.parse(data).tasks.forEach(function (todo){
      console.log(todo.id + ' ' + todo.description);
    });
    console.log('\n' + JSON.parse(data).tasks.length + ' tasks.');
  })
}
