const express = require('express');
const app = express();



// this functions takes a long time to execute blocking other requests.i.e not executing other requests until this process is finished
//i.e. if duration is 5 secs for 1 request. the 2nd requests response will be in 10 seconds if they are sent at the same time
function workThatTakesTime(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) { }
}


app.get('/fast', (req, res) => {
    res.send('fast page')

});


app.get('/', (req, res) => {
    workThatTakesTime(5000);
    res.send('welcome')

});


app.listen(3000);