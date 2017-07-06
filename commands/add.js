const fs = require('fs');
const task_path = './task.json';

module.exports = function(){
  fs.readFile(task_path, 'utf8', (err, data) => {
    if (err) throw err;
    working_file = JSON.parse(data);
    working_id = parseInt(working_file.idCount)+1;
    working_file.idCount = working_id
    working_file.tasks.push({"id": working_file.idCount, "description": process.argv[3]});
    working_file = JSON.stringify(working_file)
    fs.writeFile('task.json', working_file, (err) => {
      if (err) throw err;
      console.log('Created task ' + working_id + '.');
    })
  })
}
