const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Hello World from port ${port}`);
})

app.get('/:path', (req,res) => {
    res.send(`Hello World from port ${port} and path ${req.params.path}`);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;