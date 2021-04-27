const express = require('express');
const app =  express();

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server is started at http://localhost:${PORT}`));

app.get("/", (req,res) => {
    res.status(200).send("Everything is Working");
})