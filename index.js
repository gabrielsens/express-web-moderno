const express = require('express');

const app = express();

app.use((req, res) => {
    res.send('estou bem');
});

app.listen(3005, () => console.log('🔥 Server running on port 3005'));