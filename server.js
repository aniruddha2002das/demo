const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const APP_ID = process.env.APP_ID || 1111;

app.get('/', (req, res) => {
    res.send(`Hello World from port ${port} and app ID is ${APP_ID}`);
})

app.get('/:path', (req,res) => {
    res.send(`Hello World from port ${port} and path ${req.params.path} and app ID is ${APP_ID}`);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;