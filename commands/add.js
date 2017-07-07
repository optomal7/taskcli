const fs = require('fs');
// CamelCase is the convention in Node and JavaScript
// use __dirname to create an absolute path
const taskPath = __dirname+'/../task.json';

module.exports = function(description){
  // I strongly suggest you use full, verbose, variable names.
  // error is preferrable over err IMHO
  fs.readFile(task_path, 'utf8', (error, json) => {
    if (error) throw error;
    // OOOPS You forgot `const` or `let`
    const data = JSON.parse(json);
    // use Number.parseInt instead of parseInt
    data.idCount = Number.parseInt(data.idCount)+1;
    // I would rename `idCount` to `latestID` or something, its not really a counter
    data.tasks.push({
      id: data.idCount, 
      description: description,
    });
    json = JSON.stringify(data)
    fs.writeFile('task.json', json, (error) => {
      if (error) throw error;
      console.log('Created task ' + id + '.');
    })
  })
}
