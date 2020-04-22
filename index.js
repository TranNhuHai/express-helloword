const express = require('express');
const app = express();
const port = 3245;

app.get('/', (req, res) => res.send("Hello  Word"));
app.listen(port, () => console.log(`server listenning on Port: ${port}`));