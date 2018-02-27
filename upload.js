const request = require('request')
const fs = require('fs')
const path = require('path')

var formData = {
  file: fs.createReadStream(path.join(__dirname, 'LICENSE'))
}
request.post({url:'http://localhost:3000', formData: formData}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('Upload failed:', err);
  }
  console.log('Upload successful!');
})
