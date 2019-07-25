const mongoose = require('mongoose');

const URI = 'mongodb://localhost/myNotaSalva';

mongoose.connect(URI)
    .then(db => console.log('DB connectado'))
    .catch(err => console.log(err))

module.exports = mongoose;
