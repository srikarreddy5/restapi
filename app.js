const express = require('express');
const app = express();
const port = 3000;

app.get('/status', (req, res) => {
    res.json({ message: ':))) API is up and running! making first change to see if the pipeline is working!' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
