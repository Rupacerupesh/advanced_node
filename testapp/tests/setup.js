jest.setTimeout(30000);

require('./../models/User');
const keys = require('./../config/keys');
const mongoose = require('mongoose');


mongoose.connect(`${keys.mongoURI}`, keys.options, function (err, done) {
    if (err) {
        console.log('db connection for test failed', keys.mongoURI, keys.options);
        console.log(err);

    } else {
        console.log('db connected successfully for test');
    }
});
