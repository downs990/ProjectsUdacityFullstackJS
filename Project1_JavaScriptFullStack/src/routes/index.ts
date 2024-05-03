import express from 'express';
import process_image from './api/process_image'; 

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('main api route!');
});

routes.use('/process_image', process_image);  
// localhost:3000/api/process_image

// ... 
// ... 

// ? 

export default routes;