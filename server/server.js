const express = require('express');
const path = require('path')

const app = express();

const port=process.env.PORT || 3000

const publicPath = path.join(__dirname, '..', 'public')

app.use(express.static(publicPath))

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
});

// This will make sure that refreshig will get us back to the correct page 

app.listen(port, () => {
    console.log(' I am on 3000')
});