const cluster = require('cluster');
console.log('started');


if (cluster.isMaster) {
    //Enters here to open cluster manager
    //Each fork executes a child process. i.e 2 separate instance or 2 threads. i.e. 2 spearate requests run independently.
    //in index.js it would take 10 seconds for 2nd request but in cluster mode it will be independent.
    cluster.fork();
    cluster.fork();

} else {
    //Enters here to execute in child mode
    //Child Mode

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
}