const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 7003

//parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});