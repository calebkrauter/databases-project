const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Vue app build directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle any requests that don't match the ones above
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});