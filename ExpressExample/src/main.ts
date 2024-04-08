import express from 'express';
import { runInNewContext } from 'vm';
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    res.send('hello, world');
});

app.listen(port, ()=>{
    console.log(`server started at localhost:${port}`);
});




// INSTRUCTIONS ON HOW TO RUN: 
// - sit at root dir of project (not src)
// - npm run start 