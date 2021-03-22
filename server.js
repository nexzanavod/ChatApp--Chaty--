const path = require('path');
const express = require('express');

const app = express();


//set static Folder
app.use(express.static(path.join(__dirname, 'Public')));

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log('Server Listening on 5000'));
