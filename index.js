var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Funky server using Express!')
});

app.listen(3000, function() {
    console.log('Server listening on Port 3000...');
});
