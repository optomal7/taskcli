const fs = require('fs');
const task_path = './task.json';

module.exports = function(){
  let working_number = parseInt(process.argv[3]);
  fs.readFile(task_path, 'utf8', (err, data) => {
    working_file = JSON.parse(data)
    let doing_item = working_file.tasks.filter(function(doing){
      if(doing.id === working_number){
        return true
      }
    })
    working_file.tasks = working_file.tasks.filter(function(doing){
      if(doing.id !== working_number){
        return true
      }
    })
    working_file = JSON.stringify(working_file)
    fs.writeFile('task.json', working_file, (err) => {
      if (err) throw err;
      console.log('Completed the task ' + JSON.stringify(doing_item[0].description));
    })
  })
}
