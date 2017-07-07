const fs = require('fs');
// the path to your task.json file is duplicated across multiple files
// try to "dry this up" but consolidating it into one place
const taskPath = __dirname+'./task.json';

module.exports = function(taskId){
  let taskId = Number.parseInt(taskId);
  fs.readFile(taskPath, 'utf8', (erroe, json) => {
    const data = JSON.parse(json)
    const task = data.tasks.find(task => task.id === taskId)
    data.tasks = data.tasks.filter(task => task.id !== taskId)
    json = JSON.stringify(data)
    fs.writeFile('task.json', json, (error) => {
      if (error) throw error;
      console.log('Completed the task ' + JSON.stringify(task.description));
    })
  })
}
