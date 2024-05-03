import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;


// Gets all of the routes from the api folder
app.use('/api', routes);
 

app.listen(port, () => {
    console.log(`server started at localhost: ${port}`)
});


// INSTRUCTIONS ON HOW TO RUN: 
// - sit at root dir of project (not src)
// - compile the project. 'npm run build'
// - run the build files. 'node build/main' 
// - npm run start 