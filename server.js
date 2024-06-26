const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});