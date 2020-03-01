const fs = require('fs');

let content = document.getElementById('content');
content.ondragenter = content.ondragover = content.ondragleave = function () {
  return false; // 阻止默认行为
};
content.ondrop = function (e) {
  e.preventDefault();
  let path = e.dataTransfer.files[0].path;
  fs.readFile(path, 'utf-8', (err, data) =>{
    if(err) return err;
    content.innerText = data;
  })
};
