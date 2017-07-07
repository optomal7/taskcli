
const fs = require('fs');
// consolidate this duplication
const taskPath = './task.json';

module.exports = function (){
  fs.readFile(taskPath, 'utf8', (error, json) => {
    if (error) throw error;
    // dont parse twice
    const data = JSON.parse(json)
    // you shouldn't store this header information in the tasks.json
    // it is not state
    console.log("ID Description")
    console.log("-- -----------")
    data.tasks.forEach(function(todo){
      console.log(todo.id + ' ' + todo.description);
    });
    console.log('\n' + data.tasks.length + ' tasks.');
  })
}
